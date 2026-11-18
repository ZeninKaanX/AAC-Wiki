// This endpoint intentionally accepts public submissions. All management operations
// independently authorize a 256-bit capability against its server-held SHA-256 hash.
const categories=['eksik-bilgi','hatali-bilgi','arac-hatasi','video-gorsel','gorunum','oneri','diger'];
const statuses=['yeni','inceleniyor','planlandi','cozuldu','uygulanmadi'];
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const base=Deno.env.get('SUPABASE_URL')!;
const key=Deno.env.get('WIKI_SERVICE_KEY')!;
const allowed=new Set(['https://astralissaga.xyz','https://www.astralissaga.xyz','http://127.0.0.1:8766','http://localhost:8766','null']); // null supports the exported local HTML file.
async function db(path:string,options:RequestInit={}){const headers=new Headers(options.headers);headers.set('apikey',key);headers.set('Content-Type','application/json');if(!key.startsWith('sb_'))headers.set('Authorization','Bearer '+key);return fetch(base+'/rest/v1/'+path,{...options,headers});}
async function hash(text:string){return [...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text)))].map(b=>b.toString(16).padStart(2,'0')).join('');}
function equal(a:string,b:string){let mismatch=a.length^b.length;for(let i=0;i<64;i++)mismatch|=(a.charCodeAt(i)||0)^(b.charCodeAt(i)||0);return mismatch===0;}
function text(value:unknown,min:number,max:number){return typeof value==='string'&&value.trim().length>=min&&value.trim().length<=max&&!/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value);}
Deno.serve(async req=>{
 const origin=req.headers.get('Origin')||'';
 const headers:Record<string,string>={'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','Vary':'Origin','X-Content-Type-Options':'nosniff'};
 if(allowed.has(origin))Object.assign(headers,{'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'GET,POST,PATCH,OPTIONS','Access-Control-Allow-Headers':'Content-Type,Authorization','Access-Control-Max-Age':'600'});
 const reply=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers});
 if(origin&&!allowed.has(origin))return reply({error:'Bu adresten gönderim yapılamaz.'},403);
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers});
 const action=new URL(req.url).searchParams.get('action')||'submit';
 if(!['submit','list','update'].includes(action))return reply({error:'İşlem bulunamadı.'},404);
 try{
  // The private config is never returned to the browser or logged.
  const settingsResponse=await db('wiki_feedback_settings?select=admin_token_hash,rate_salt&id=eq.true');
  if(!settingsResponse.ok)return reply({error:'Site Destek şu anda kullanılamıyor.'},503);
  const [settings]=await settingsResponse.json();if(!settings)return reply({error:'Site Destek henüz hazır değil.'},503);
  if(action!=='submit'){
   const token=(req.headers.get('Authorization')||'').replace(/^Bearer /,'');
   if(!/^[A-Za-z0-9_-]{43}$/.test(token)||!equal(await hash(token),settings.admin_token_hash))return reply({error:'Yönetim bağlantısı geçersiz.'},401);
  }
  if(action==='list'){
   if(req.method!=='GET')return reply({error:'Yöntem desteklenmiyor.'},405);
   const input=new URL(req.url).searchParams;
   const params=new URLSearchParams({select:'id,wiki,category,nickname,section,title,description,status,admin_note,created_at,updated_at',order:'created_at.desc,id.desc',limit:'50'});
   for(const [field,valid] of [['wiki',['aac','rehber']],['category',categories],['status',statuses]] as [string,string[]][]){const value=input.get(field);if(value&&value!=='all'){if(!valid.includes(value))return reply({error:'Filtre geçersiz.'},400);params.set(field,'eq.'+value);}}
   const offset=Number(input.get('offset')||0);if(!Number.isInteger(offset)||offset<0||offset>100000)return reply({error:'Sayfa geçersiz.'},400);params.set('offset',String(offset));
   const result=await db('wiki_feedback?'+params,{headers:{Prefer:'count=exact'}});if(!result.ok)throw new Error('database');
   return reply({items:await result.json(),total:Number((result.headers.get('Content-Range')||'*/0').split('/')[1])});
  }
  if(req.method!==(action==='submit'?'POST':'PATCH'))return reply({error:'Yöntem desteklenmiyor.'},405);
  if(!req.headers.get('Content-Type')?.includes('application/json'))return reply({error:'İstek biçimi geçersiz.'},415);
  if(Number(req.headers.get('Content-Length')||0)>12000)return reply({error:'Bildirim çok uzun.'},413);
  const reader=req.body?.getReader();if(!reader)return reply({error:'İstek boş.'},400);
  const chunks:Uint8Array[]=[];let size=0;
  while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>12000){await reader.cancel();return reply({error:'Bildirim çok uzun.'},413);}chunks.push(value);}
  const bytes=new Uint8Array(size);let position=0;for(const chunk of chunks){bytes.set(chunk,position);position+=chunk.length;}
  let data;try{data=JSON.parse(new TextDecoder().decode(bytes));}catch{return reply({error:'İstek biçimi geçersiz.'},400);}
  if(!data||typeof data!=='object'||Array.isArray(data))return reply({error:'İstek biçimi geçersiz.'},400);
  if(action==='update'){
   if(!uuid.test(data.id)||!statuses.includes(data.status)||!text(data.admin_note,0,1000)||!text(data.updated_at,10,40)||!Number.isFinite(Date.parse(data.updated_at)))return reply({error:'Durum veya not geçersiz.'},400);
   const params=new URLSearchParams({id:'eq.'+data.id,updated_at:'eq.'+data.updated_at,select:'id,status,admin_note,updated_at'});
   const result=await db('wiki_feedback?'+params,{method:'PATCH',headers:{Prefer:'return=representation'},body:JSON.stringify({status:data.status,admin_note:data.admin_note.trim(),updated_at:new Date().toISOString()})});if(!result.ok)throw new Error('database');
   const items=await result.json();if(!items.length)return reply({error:'Bu bildirim başka bir yönetici tarafından güncellendi. Listeyi yenile.'},409);return reply({item:items[0]});
  }
  if(data.website)return reply({error:'Bildirim doğrulanamadı.'},400);
  if(!uuid.test(data.request_id)||!['aac','rehber'].includes(data.wiki)||!categories.includes(data.category)||!text(data.nickname,2,40)||!text(data.section,0,80)||!text(data.title,5,80)||!text(data.description,10,700))return reply({error:'Ad, kategori, başlık ve açıklamayı kontrol et.'},400);
  const ip=req.headers.get('cf-connecting-ip')||req.headers.get('x-forwarded-for')?.split(',').at(-1)?.trim()||'unknown';
  const client=await hash(settings.rate_salt+':'+ip);
  const result=await db('rpc/wiki_feedback_submit',{method:'POST',body:JSON.stringify({p_request:data.request_id,p_wiki:data.wiki,p_category:data.category,p_nickname:data.nickname.trim(),p_section:data.section.trim(),p_title:data.title.trim(),p_description:data.description.trim(),p_client:client})});
  if(!result.ok){const error=await result.json();if(error.message==='rate_limit')return reply({error:'Kısa sürede çok sayıda bildirim gönderildi. Biraz bekleyip tekrar dene.'},429);throw new Error('database');}
  const id=await result.json();return reply({reference:'W-'+id.slice(0,8).toUpperCase()},201);
 }catch{return reply({error:'Bildirim kaydedilemedi. Biraz sonra tekrar dene.'},503);}
});

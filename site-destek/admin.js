'use strict';
(()=>{
 const endpoint='https://xnhuoxgmnbzfjshcrpdv.supabase.co/functions/v1/wiki-support';
 let token=location.hash.slice(1);
 const message=document.getElementById('admin-message'),content=document.getElementById('admin-content'),list=document.getElementById('feedback-list');
 const categories={'eksik-bilgi':'Eksik bilgi','hatali-bilgi':'Hatalı bilgi','arac-hatasi':'Araç / form hatası','video-gorsel':'Video / görsel','gorunum':'Görünüm / mobil','oneri':'Öneri','diger':'Diğer'};
 const statuses={'yeni':'Yeni','inceleniyor':'İnceleniyor','planlandi':'Planlandı','cozuldu':'Çözüldü','uygulanmadi':'Uygulanmadı'};
 let offset=0,total=0,busy=false,controller;
 const retry=node('button','Yeniden dene');retry.hidden=true;retry.onclick=()=>load();message.after(retry);
 function node(tag,text,className){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(className)el.className=className;return el;}
 function options(select,values){for(const [value,label] of Object.entries(values)){const option=node('option',label);option.value=value;select.append(option);}}
 options(document.getElementById('filter-category'),categories);options(document.getElementById('filter-status'),statuses);
 async function request(url,options={}){const response=await fetch(url,{...options,headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},signal:options.signal||AbortSignal.timeout(20000)});const data=await response.json();if(response.status===401){content.hidden=true;retry.hidden=true;throw new Error('Bu yönetim bağlantısı geçersiz veya yenilenmiş.');}if(!response.ok)throw new Error(data.error||'İşlem tamamlanamadı.');return data;}
 function card(item){
  const article=node('article',undefined,'feedback-card');article.dataset.id=item.id;
  const meta=node('div',undefined,'card-meta');meta.append(node('span',item.wiki==='aac'?'AAC Wiki':'Rehber Wiki','wiki-tag'),node('span',categories[item.category]),node('time',new Date(item.created_at).toLocaleString('tr-TR')));article.append(meta,node('h2',item.title));
  article.append(node('p',`${item.nickname} · W-${item.id.slice(0,8).toUpperCase()}${item.section?' · '+item.section:''}`,'reporter'),node('p',item.description,'description'));
  const controls=node('div',undefined,'card-controls');const statusLabel=node('label','Durum'),select=node('select');options(select,statuses);select.value=item.status;statusLabel.append(select);controls.append(statusLabel);
  const noteLabel=node('label','Yönetim notu'),note=node('textarea');note.value=item.admin_note;note.maxLength=1000;note.rows=2;note.placeholder='Yapılan işlem veya sonraki adım';noteLabel.append(note);controls.append(noteLabel);
  const save=node('button','Kaydet'),result=node('p','','save-result');result.setAttribute('role','status');controls.append(save);article.append(controls,result);
  save.onclick=async()=>{save.disabled=true;result.textContent='Kaydediliyor…';try{const data=await request(endpoint+'?action=update',{method:'PATCH',body:JSON.stringify({id:item.id,status:select.value,admin_note:note.value,updated_at:item.updated_at})});Object.assign(item,data.item);result.textContent='Kaydedildi.';}catch(error){result.textContent=error.name==='TimeoutError'||error.name==='TypeError'?'Bağlantı kurulamadı. Yeniden deneyebilirsin.':error.message;}finally{save.disabled=false;}};
  return article;
 }
 async function load(){
  controller?.abort();controller=new AbortController();const current=controller;busy=true;document.getElementById('refresh').disabled=true;message.textContent='Bildirimler yükleniyor…';retry.hidden=true;
  const query=new URLSearchParams({action:'list',offset:String(offset)});for(const field of ['wiki','category','status'])query.set(field,document.getElementById('filter-'+field).value);
  const timer=setTimeout(()=>current.abort(),20000);
  try{const data=await request(endpoint+'?'+query,{signal:current.signal});if(current!==controller)return;total=data.total;list.replaceChildren(...data.items.map(card));if(!data.items.length)list.append(node('p','Bu filtrelerde bildirim yok.','empty'));content.hidden=false;message.textContent='';document.getElementById('list-count').textContent=`${total} bildirim${total?' · '+(offset+1)+'–'+Math.min(offset+50,total):''}`;document.getElementById('page-number').textContent=`${Math.floor(offset/50)+1} / ${Math.max(1,Math.ceil(total/50))}`;document.getElementById('previous').disabled=offset===0;document.getElementById('next').disabled=offset+50>=total;
  }catch(error){if(current!==controller)return;retry.hidden=/geçersiz veya yenilenmiş/.test(error.message);message.textContent=error.name==='AbortError'||error.name==='TypeError'?'Bağlantı kurulamadı. Listeyi yeniden yükle.':error.message;}finally{clearTimeout(timer);if(current===controller){busy=false;document.getElementById('refresh').disabled=false;}}
 }
 for(const field of ['wiki','category','status'])document.getElementById('filter-'+field).onchange=()=>{offset=0;load();};
 document.getElementById('refresh').onclick=()=>load();document.getElementById('previous').onclick=()=>{if(!busy){offset=Math.max(0,offset-50);load();}};document.getElementById('next').onclick=()=>{if(!busy){offset+=50;load();}};
 function connect(){controller?.abort();controller=undefined;busy=false;token=location.hash.slice(1);content.hidden=true;list.replaceChildren();retry.hidden=true;offset=0;if(!/^[A-Za-z0-9_-]{43}$/.test(token)){message.textContent='Yönetim bağlantısı eksik. Sana iletilen özel bağlantıyı kullan.';return;}if(!endpoint){message.textContent='Yönetim bağlantısı henüz hazırlanıyor.';return;}load();}
 addEventListener('hashchange',connect);connect();
})();

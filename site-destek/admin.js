'use strict';
(()=>{
 const endpoint='https://xnhuoxgmnbzfjshcrpdv.supabase.co/functions/v1/wiki-support';
 let token=location.hash.slice(1);
 const message=document.getElementById('admin-message'),content=document.getElementById('admin-content'),list=document.getElementById('feedback-list');
 const categories={'eksik-bilgi':'Eksik bilgi','hatali-bilgi':'Hatalı bilgi','arac-hatasi':'Araç / form hatası','video-gorsel':'Video / görsel','gorunum':'Görünüm / mobil','oneri':'Öneri','diger':'Diğer'};
 const statuses={'yeni':'Yeni','inceleniyor':'İnceleniyor','planlandi':'Planlandı','cozuldu':'Çözüldü','uygulanmadi':'Uygulanmadı'};
 let offset=0,total=0,busy=false,controller,authorized=false;
 const cards=new Map();
 const live=node('p','','live-update');live.setAttribute('role','status');list.before(live);
 function connection(state,label){const el=document.getElementById('connection-status');el.dataset.state=state;el.querySelector('span').textContent=label;}
 const reduce=matchMedia('(prefers-reduced-motion: reduce)'),motion=document.getElementById('admin-motion');
 let moving=true;try{moving=localStorage.getItem('wiki-admin-motion')!=='off';}catch{}
 function applyMotion(){const active=moving&&!reduce.matches;document.documentElement.dataset.motion=active?'on':'off';motion.setAttribute('aria-pressed',String(active));motion.lastElementChild.textContent=active?'Hareketi durdur':'Hareketi aç';motion.disabled=reduce.matches;}
 motion.onclick=()=>{moving=!moving;try{localStorage.setItem('wiki-admin-motion',moving?'on':'off');}catch{}applyMotion();};reduce.addEventListener('change',applyMotion);applyMotion();
 const dark=matchMedia('(prefers-color-scheme: dark)');function theme(){document.querySelector('meta[name="theme-color"]').content=dark.matches?'#081726':'#eaf6fc';}dark.addEventListener('change',theme);theme();
 function edited(c){return c.select.value!==c.item.status||c.note.value!==(c.item.admin_note||'');}
 function reconcile(c,item){
  if(Date.parse(item.updated_at)<Date.parse(c.item.updated_at))return;
  if(c.saving||edited(c)||c.el.contains(document.activeElement)){
   if(item.updated_at!==c.item.updated_at){c.pending=item;c.conflict.hidden=false;}
   return;
  }
  c.item={...item};c.select.value=item.status;c.note.value=item.admin_note||'';c.badge.textContent=statuses[item.status];c.badge.dataset.status=item.status;
 }
 setInterval(()=>{if(authorized&&!document.hidden&&navigator.onLine&&!busy)load({quiet:true});},10000);
 addEventListener('offline',()=>connection('error','Bağlantı bekleniyor'));
 addEventListener('online',()=>{if(authorized)load({quiet:true});});
 document.addEventListener('visibilitychange',()=>{document.body.classList.toggle('tab-hidden',document.hidden);if(!document.hidden&&authorized)load({quiet:true});});
 const retry=node('button','Yeniden dene');retry.hidden=true;retry.onclick=()=>load();message.after(retry);
 function node(tag,text,className){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(className)el.className=className;return el;}
 function options(select,values){for(const [value,label] of Object.entries(values)){const option=node('option',label);option.value=value;select.append(option);}}
 options(document.getElementById('filter-category'),categories);options(document.getElementById('filter-status'),statuses);
 async function request(url,options={}){const response=await fetch(url,{...options,headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},signal:options.signal||AbortSignal.timeout(20000)});const data=await response.json();if(response.status===401){authorized=false;content.hidden=true;retry.hidden=true;connection('error','Bağlantı geçersiz');throw new Error('Bu yönetim bağlantısı geçersiz veya yenilenmiş.');}if(!response.ok)throw new Error(data.error||'İşlem tamamlanamadı.');return data;}
 function card(item){
  const article=node('article',undefined,'feedback-card');article.dataset.id=item.id;
  const meta=node('div',undefined,'card-meta'),wiki=node('span',item.wiki==='aac'?'AAC Wiki':'Rehber Wiki','wiki-tag'),badge=node('span',statuses[item.status],'status-tag');wiki.dataset.wiki=item.wiki;badge.dataset.status=item.status;
  meta.append(wiki,node('span',categories[item.category]),badge,node('time',new Date(item.created_at).toLocaleString('tr-TR')));article.append(meta,node('h2',item.title));
  article.append(node('p',`${item.nickname} · W-${item.id.slice(0,8).toUpperCase()}${item.section?' · '+item.section:''}`,'reporter'),node('p',item.description,'description'));
  const controls=node('div',undefined,'card-controls');const statusLabel=node('label','Durum'),select=node('select');options(select,statuses);select.value=item.status;statusLabel.append(select);controls.append(statusLabel);
  const noteLabel=node('label','Yönetim notu'),note=node('textarea');note.value=item.admin_note||'';note.maxLength=1000;note.rows=2;note.placeholder='Yapılan işlem veya sonraki adım';noteLabel.append(note);controls.append(noteLabel);
  const save=node('button','Kaydet'),result=node('p','','save-result');result.setAttribute('role','status');controls.append(save);article.append(controls,result);
  const conflict=node('div',undefined,'draft-notice');conflict.hidden=true;
  const detail=node('p'),accept=node('button','Güncel sürümü incele');conflict.append(detail,accept);article.append(conflict);
  const c={el:article,item:{...item},select,note,result,badge,conflict,pending:null,saving:false};
  accept.onclick=()=>{const remote=c.pending;if(!remote)return;detail.textContent=`Güncel durum: ${statuses[remote.status]}. Not: ${remote.admin_note||'Yok'}. Kendi taslağın korunuyor.`;accept.textContent='Bu sürüm üzerinden kaydet';accept.onclick=()=>{c.item={...remote};c.pending=null;conflict.hidden=true;accept.textContent='Güncel sürümü incele';accept.onclick=review;};};
  const review=accept.onclick;
  select.onchange=note.oninput=()=>{if(c.pending&&!edited(c))reconcile(c,c.pending);};
  save.onclick=async()=>{
   const sessionToken=token;save.disabled=select.disabled=note.disabled=true;c.saving=true;article.classList.add('is-saving');result.dataset.state='';result.textContent='Kaydediliyor…';
   try{const data=await request(endpoint+'?action=update',{method:'PATCH',body:JSON.stringify({id:c.item.id,status:select.value,admin_note:note.value,updated_at:c.item.updated_at})});if(sessionToken!==token)return;c.item={...data.item};c.pending=null;conflict.hidden=true;select.value=c.item.status;note.value=c.item.admin_note||'';badge.textContent=statuses[c.item.status];badge.dataset.status=c.item.status;result.textContent='Kaydedildi.';article.classList.add('was-saved');setTimeout(()=>article.classList.remove('was-saved'),1600);}
   catch(error){result.dataset.state='error';result.textContent=error.name==='TimeoutError'||error.name==='TypeError'?'Bağlantı kurulamadı. Yeniden deneyebilirsin.':error.message;}
   finally{save.disabled=select.disabled=note.disabled=false;c.saving=false;article.classList.remove('is-saving');if(sessionToken===token&&authorized)load({quiet:true});}
  };
  return c;
 }
 async function load({quiet=false}={}){
  if(quiet&&busy)return;
  controller?.abort();controller=new AbortController();const current=controller;busy=true;
  if(!quiet){document.getElementById('refresh').disabled=true;document.body.classList.add('is-loading');list.setAttribute('aria-busy','true');message.textContent='Bildirimler yükleniyor…';}retry.hidden=true;
  const query=new URLSearchParams({action:'list',offset:String(offset)});for(const field of ['wiki','category','status'])query.set(field,document.getElementById('filter-'+field).value);
  const timer=setTimeout(()=>current.abort(),20000);
  try{
   const data=await request(endpoint+'?'+query,{signal:current.signal});if(current!==controller)return;
   const wasLoaded=authorized;authorized=true;total=data.total;
   list.querySelector('.empty')?.remove();const incoming=new Set(data.items.map(i=>i.id));let added=0,retained=0;
   for(const [id,c] of cards){if(!incoming.has(id)){if(edited(c)||c.saving||c.el.contains(document.activeElement)){retained++;c.el.dataset.retained='true';}else{c.el.remove();cards.delete(id);}}}
   let previous=null;
   for(const item of data.items){let c=cards.get(item.id);if(c){reconcile(c,item);}else{c=card(item);cards.set(item.id,c);added++;}delete c.el.dataset.retained;
    const expected=previous?previous.nextElementSibling:list.firstElementChild;if(expected!==c.el)list.insertBefore(c.el,expected);previous=c.el;
   }
   if(!cards.size){const empty=node('div',undefined,'empty'),img=node('img');img.src='../site-destek/ocean-inbox.svg';img.alt='';empty.append(img,node('h3','Bildirim kutusu sakin.'),node('p','Yeni destek ve öneriler burada otomatik görünecek.'));list.append(empty);}
   content.hidden=false;message.textContent='';live.textContent=retained?`${retained} düzenleme filtre dışında kaldı; taslağın korunuyor.`:quiet&&wasLoaded&&added?`${added} yeni bildirim geldi.`:live.textContent;
   if(!quiet&&!retained)live.textContent='Liste açıkken 10 saniyede bir güncellenir.';
   connection('online','Canlı · 10 sn');document.getElementById('last-updated').textContent='Son kontrol '+new Date().toLocaleTimeString('tr-TR');
   document.getElementById('list-count').textContent=`${total} bildirim${total?' · '+(offset+1)+'–'+Math.min(offset+50,total):''}`;document.getElementById('page-number').textContent=`${Math.floor(offset/50)+1} / ${Math.max(1,Math.ceil(total/50))}`;document.getElementById('previous').disabled=offset===0;document.getElementById('next').disabled=offset+50>=total;
  }catch(error){if(current!==controller)return;connection('error','Bağlantı bekleniyor');retry.hidden=/geçersiz veya yenilenmiş/.test(error.message);message.textContent=error.name==='AbortError'||error.name==='TypeError'?'Bağlantı kurulamadı. Yeniden denenecek; düzenlemelerin korunuyor.':error.message;}
  finally{clearTimeout(timer);if(current===controller){busy=false;document.getElementById('refresh').disabled=false;document.body.classList.remove('is-loading');list.setAttribute('aria-busy','false');}}
 }
 for(const field of ['wiki','category','status'])document.getElementById('filter-'+field).onchange=()=>{offset=0;load();};
 document.getElementById('refresh').onclick=()=>load();document.getElementById('previous').onclick=()=>{if(!busy){offset=Math.max(0,offset-50);load();}};document.getElementById('next').onclick=()=>{if(!busy){offset+=50;load();}};
 function connect(){controller?.abort();controller=undefined;busy=false;authorized=false;cards.clear();live.textContent='';connection('loading','Bağlanıyor');token=location.hash.slice(1);content.hidden=true;list.replaceChildren();retry.hidden=true;offset=0;if(!/^[A-Za-z0-9_-]{43}$/.test(token)){message.textContent='Yönetim bağlantısı eksik. Sana iletilen özel bağlantıyı kullan.';return;}if(!endpoint){message.textContent='Yönetim bağlantısı henüz hazırlanıyor.';return;}load();}
 addEventListener('hashchange',connect);connect();
})();

'use strict';
const LabEngine=(()=>{
 const C=typeof AtlasCases!=='undefined'?AtlasCases:require('./cases.js');
 const verdicts={active:'Aktif profil · dosya mevcut',archive:'Arşiv / pasif dizin · dosya mevcut',deleted:'Silinmiş · yalnız geçmiş kaydı',clean:'Temiz / tek başına ihlal değil'};
 const tools={explorer:'Dosya Gezgini',everything:'Everything',journal:'Journal-Tool',journaltrace:'JournalTrace',downloads:'BrowserDownloadsView',history:'BrowsingHistoryView',activity:'LastActivityView',prefetch:'WinPrefetchView',usb:'USBDeview',atlas:'AtlasAC'};
 const canonical=tool=>tool==='journaltrace'?'journal':tool;
 function random(seed){let a=seed>>>0;return()=>{a+=0x6D2B79F5;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
 function create(seed,now=Date.now(),caseIds=null,exclude=[]){
  const rng=random(seed),pick=a=>a[Math.floor(rng()*a.length)],shuffle=a=>a.map(x=>[rng(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
  const id='AAC-'+seed.toString(36).toUpperCase(),user=pick(['Deniz','Arda','Eren','Bora','Mert','Oyuncu']),nick=pick(['Kuzey','Raven','Mavi','Frost','Kaya','Buz'])+Math.floor(10+rng()*980);
  const home='C:\\Users\\'+user,launcher=pick(['PrismLauncher','ModrinthApp','AtlasClient']),profile=pick(['Fabric-1.21.11','Atlas-1.21.11','Profil-'+Math.floor(10+rng()*90)]),game=home+'\\AppData\\Local\\Programs\\'+launcher+'\\instances\\'+profile+'\\.minecraft';
  const stamp=minutes=>new Date(now-minutes*60000).toISOString(),hex=()=>Array.from({length:64},()=>Math.floor(rng()*16).toString(16)).join('');
  const artifacts=[],events=[];
  const addEvent=(a,tool,time,action,detail)=>events.push({id:'e'+events.length,artifact:a?.id||null,tool,time:stamp(time),action,detail});
  const make=(name,folder,status,kind,modId,story,extra={})=>{const a={id:'f'+(artifacts.length+1),name,path:folder+'\\'+name,folder,status,kind,modId,hash:hex(),size:Math.floor(80+rng()*5400)+' KB',modified:stamp(50),story,...extra};artifacts.push(a);return a;};
  let chosen;
  if(caseIds)chosen=caseIds.map(cid=>C.catalogue.find(c=>c.id===cid)).filter(Boolean);
  else{const families=shuffle(C.families).slice(0,4+Math.floor(rng()*2));chosen=families.map(f=>pick(C.catalogue.filter(c=>c.family===f.id&&!exclude.includes(c.id))));}
  for(const c of chosen){
   const f=C.families.find(f=>f.id===c.family),p=C.patterns.find(p=>p.id===c.pattern),age=50+Math.floor(rng()*120),old=home+'\\Downloads\\'+f.id+'.jar';
   const locations={mods:game+'\\mods',cache:home+'\\AppData\\Roaming\\Cache',resources:home+'\\Documents\\ResourcePacks',downloads:home+'\\Downloads',addons:home+'\\Downloads\\addons',oldprofile:home+'\\AppData\\Roaming\\.minecraft\\versions\\Archive-'+f.version.replace(/[^\w.-]/g,'')+'\\mods',libraries:home+'\\AppData\\Roaming\\.minecraft\\libraries\\org\\graphics\\cache',documents:home+'\\Documents\\Backups'};
   let status=p.status,folder=locations[p.location];
   if(f.legacy&&status==='active'){status='archive';folder=locations.oldprofile;}
   const prefix=pick(['map-helper','render-cache','world-core','terrain-data','profile-helper','chunk-tools']),name=prefix+'-'+Math.floor(100+rng()*900)+p.suffix;
   const story=f.name+' kimliği içerikten doğrulanır. '+p.focus+(f.addon?' Bu bir Meteor eklentisidir; bağımsız istemci değildir.':'')+(f.legacy?' Bu örnek eski / farklı bir oyun profiline aittir.':'')+' Dosya / kayıt varlığı tek başına oyunda kullanım kanıtı değildir.';
   const a=make(name,folder,status,'ZIP / JAR',f.id,story,{caseId:c.id,caseTitle:c.title,pattern:p.id,focus:p.focus,hidden:!!p.hidden,nested:p.nested||0,mixed:!!p.mixed,minecraft:f.version,familyName:f.name,supportGroups:p.support,modified:stamp(age),addon:!!f.addon});
   if(status!=='deleted')addEvent(a,'metadata',age,'İçerik','PK 03 04 · '+(p.nested?'extras.zip > '+f.id+'.jar > ':'')+'fabric.mod.json · id='+f.id);
   addEvent(a,'downloads',age+40,'İndirme tamamlandı','https://downloads.example.invalid/lab/'+f.id+'.jar → '+old);
   addEvent(a,'history',age+45,'Sayfa ziyareti','https://catalogue.example.invalid/'+f.id+' · Ziyaret kaydı indirme veya kullanım kanıtı değildir');
   if(['rename','chain'].includes(p.journal)){
    addEvent(a,'journal',age+25,'RENAME_OLD_NAME',old);
    const intermediate=home+'\\Downloads\\temp-'+name;
    addEvent(a,'journal',age+24,'RENAME_NEW_NAME',p.journal==='chain'?intermediate:a.path);
    if(p.journal==='chain'){addEvent(a,'journal',age+15,'RENAME_OLD_NAME',intermediate);addEvent(a,'journal',age+14,'RENAME_NEW_NAME',a.path);}
   }else if(p.journal==='delete'){addEvent(a,'journal',age+20,'FILE_CREATE',a.path);addEvent(a,'journal',age,'FILE_DELETE',a.path);}
   else if(p.journal==='copy-delete'){addEvent(a,'journal',age+20,'FILE_CREATE',a.path+' · SHA-256: '+a.hash);addEvent(a,'journal',age+10,'FILE_DELETE',old+' · Eski kopya; hedef yol farklı');}
   else{addEvent(a,'journal',age+20,'FILE_CREATE',a.path);if(p.journal==='rewrite')addEvent(a,'journal',age,'DATA_OVERWRITE',a.path);}
   if(status!=='deleted')addEvent(a,'activity',age+5,p.nested?'Arşiv açıldı':'Dosya taşındı',a.path);
   if(p.usb)addEvent(a,'usb',age+21,'USB kaynak / hedef','Eğitim USB · Seri LAB-'+seed.toString(16).toUpperCase()+' · Kaynak: E:\\mods\\'+f.id+'.jar · Hedef: '+a.path+' · Kaynak ve hedef SHA-256: '+a.hash);
  }
  for(const [name,mid] of shuffle([['fabric-api.jar','fabric-api'],['sodium.jar','sodium'],['lithium.jar','lithium'],['iris.jar','iris'],['modmenu.jar','modmenu']]).slice(0,3)){
   const a=make(name,game+'\\mods','clean','ZIP / JAR',mid,'Temiz mod / bağımlılık. Mods klasöründe bulunması veya ZIP imzası tek başına hile demek değildir. Mod kimliğini doğrula.');addEvent(a,'metadata',55,'İçerik','PK 03 04 · fabric.mod.json · id='+mid);
  }
  const dll=make('opengl32.dll',home+'\\Desktop\\AAC Uygulamalar','clean','PE / DLL','Mesa OpenGL','Kontrol aracının yazılım çizimi için sağlanan Mesa bileşeni. DLL uzantısı veya aynı klasörde bulunması hile kanıtı değildir.');addEvent(dll,'metadata',70,'İçerik','MZ / PE · Product: Mesa OpenGL');
  const reader=make('archive-reader.jar',home+'\\Documents\\Kontrol','clean','ZIP / JAR','atlas-lab-reader','Java işlemi / Prefetch kaydı arşiv okuyucuya aittir. Belirli bir Minecraft hilesinin oyunda kullanıldığını göstermez.');addEvent(reader,'metadata',15,'İçerik','PK 03 04 · id=atlas-lab-reader · Eğitim arşiv okuyucu');addEvent(reader,'prefetch',12,'JAVAW.EXE-'+seed.toString(16).toUpperCase()+'.pf','Process EXE: javaw.exe · Run Counter: 2 · İlgili dosya: '+reader.path);addEvent(reader,'activity',12,'Uygulama açıldı','javaw.exe -jar "'+reader.path+'" --metadata-only');
  addEvent(null,'usb',200,'USB bağlandı','LAB-'+seed.toString(16).toUpperCase()+' · Mass Storage · Bağlantı zamanı tek başına dosya aktarımı kanıtı değildir');
  return{version:2,id,seed,user,nick,launcher,profile,game,home,startedAt:now,limit:25*60,artifacts:shuffle(artifacts),events:shuffle(events),scenarioCount:chosen.length,caseIds:chosen.map(c=>c.id),catalogueSize:C.catalogue.length};
 }
 function rows(session,tool,query=''){
  tool=canonical(tool);const q=query.toLocaleLowerCase('tr-TR').trim();let list;
  if(['explorer','everything'].includes(tool))list=session.artifacts.filter(a=>a.status!=='deleted').map(a=>({id:a.id,artifact:a.id,time:a.modified,action:a.hidden?'Gizli dosya':'Dosya',detail:a.path,name:a.name}));
  else if(tool==='atlas')list=session.artifacts.filter(a=>a.status!=='deleted'&&a.status!=='clean').map(a=>({id:'scan-'+a.id,artifact:a.id,time:a.modified,action:'İçerik eşleşmesi',detail:a.path+' · eşleşme: '+a.modId}));
  else list=session.events.filter(e=>e.tool===tool);
  if(tool==='everything')return list.filter(e=>{const a=session.artifacts.find(a=>a.id===e.artifact),text=(e.name+' '+e.detail).toLocaleLowerCase('tr-TR');return q.split(/\s+or\s+/i).some(part=>(part.match(/(?:[a-z]+:)?"[^"]*"|\S+/g)||[]).every(raw=>{const token=raw.replaceAll('"','');if(token.startsWith('ext:'))return token.slice(4).split(';').some(ext=>a.name.toLowerCase().endsWith('.'+ext));if(token.startsWith('path:'))return a.path.toLocaleLowerCase('tr-TR').includes(token.slice(5));if(token==='dm:today')return new Date(a.modified).toDateString()===new Date(session.startedAt).toDateString();if(token.includes('*')||token.includes('?')){const escaped=[...token].map(c=>c==='*'?'.*':c==='?'?'.':c.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('');return new RegExp(escaped,'i').test(text);}return text.includes(token);}));});
  return list.filter(e=>([e.name,e.detail,e.action,e.time].join(' ')).toLocaleLowerCase('tr-TR').includes(q));
 }
 function evaluate(session,notes){
  const items=session.artifacts.map(a=>{const n=notes[a.id]||{},sources=new Set((n.evidence||[]).map(e=>canonical(e.source))),classification=n.verdict===a.status,content=a.status==='deleted'?sources.has('journal'):sources.has('metadata'),location=a.status==='deleted'?sources.has('journal'):sources.has('explorer')||sources.has('everything'),support=a.status==='clean'?content:a.supportGroups?a.supportGroups.every(group=>group.some(src=>sources.has(src))):sources.has('journal')||sources.has('downloads')||sources.has('activity'),cautious=n.usage==='unproven';const points=(classification?35:0)+(content?25:0)+(location?15:0)+(support?15:0)+(cautious?10:0);return{id:a.id,name:a.name,path:a.path,caseId:a.caseId||null,caseTitle:a.caseTitle||'Temiz örnek',expected:a.status,chosen:n.verdict||'',classification,content,location,support,cautious,points,explanation:a.story,evidenceCount:(n.evidence||[]).length};});
  return{score:Math.round(items.reduce((s,x)=>s+x.points,0)/items.length),total:items.length,identified:items.filter(x=>x.classification&&x.content).length,suspicious:session.artifacts.filter(a=>a.status!=='clean').length,falsePositives:items.filter(x=>x.expected==='clean'&&x.chosen&&x.chosen!=='clean').length,items};
 }
 return{create,rows,evaluate,verdicts,tools,canonical,catalogue:C.catalogue,families:C.families,patterns:C.patterns};
})();
if(typeof module!=='undefined')module.exports=LabEngine;

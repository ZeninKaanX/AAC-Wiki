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
   const locations={mods:game+'\\mods',cache:home+'\\AppData\\Roaming\\Cache',resources:home+'\\Documents\\ResourcePacks',downloads:home+'\\Downloads',addons:home+'\\Downloads\\addons',oldprofile:home+'\\AppData\\Roaming\\.minecraft\\versions\\Archive-'+(/^\d/.test(f.version)?f.version.replace(/[^\w.-]/g,''):f.id)+'\\mods',libraries:home+'\\AppData\\Roaming\\.minecraft\\libraries\\org\\graphics\\cache',documents:home+'\\Documents\\Backups'};
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
   if(status!=='deleted')addEvent(a,'activity',age+5,'File/Folder Opened',a.path);
   if(p.usb)addEvent(a,'usb',age+21,'USB aygıtı','USB Mass Storage · Seri LAB-'+seed.toString(16).toUpperCase()+' · Drive: E: · Connected: Yes · Dosya aktarımı / kullanım kaydı değildir');
  }
  for(const [name,mid] of shuffle([['fabric-api.jar','fabric-api'],['sodium.jar','sodium'],['lithium.jar','lithium'],['iris.jar','iris'],['modmenu.jar','modmenu']]).slice(0,3)){
   const a=make(name,game+'\\mods','clean','ZIP / JAR',mid,'Temiz mod / bağımlılık. Mods klasöründe bulunması veya ZIP imzası tek başına hile demek değildir. Mod kimliğini doğrula.');addEvent(a,'metadata',55,'İçerik','PK 03 04 · fabric.mod.json · id='+mid);
  }
  const dll=make('opengl32.dll',home+'\\Desktop\\AAC Uygulamalar','clean','PE / DLL','Mesa OpenGL','Kontrol aracının yazılım çizimi için sağlanan Mesa bileşeni. DLL uzantısı veya aynı klasörde bulunması hile kanıtı değildir.');addEvent(dll,'metadata',70,'İçerik','MZ / PE · Product: Mesa OpenGL');
  const reader=make('archive-reader.jar',home+'\\Documents\\Kontrol','clean','ZIP / JAR','atlas-lab-reader','Java işlemi / Prefetch kaydı arşiv okuyucuya aittir. Belirli bir Minecraft hilesinin oyunda kullanıldığını göstermez.');addEvent(reader,'metadata',15,'İçerik','PK 03 04 · id=atlas-lab-reader · Eğitim arşiv okuyucu');addEvent(reader,'prefetch',12,'JAVAW.EXE-'+seed.toString(16).toUpperCase()+'.pf','Process EXE: javaw.exe · Run Counter: 2 · İlgili dosya: '+reader.path);addEvent(reader,'activity',12,'Run .EXE file','C:\\Program Files\\Java\\bin\\javaw.exe');
  // Ordinary player files make search and navigation meaningful without turning
  // every system file into a mandatory scored finding.
  const background=[
   ['options.txt',game,'Text','music:0.5\nsound:1.0\nrenderDistance:12'],['servers.dat',game,'NBT','Minecraft server list'],['latest.log',game+'\\logs','Text','[Client thread/INFO]: Minecraft started\n[Render thread/INFO]: Loading resources'],
   ['launcher_profiles.json',home+'\\AppData\\Roaming\\.minecraft','JSON',JSON.stringify({profiles:{[profile]:{name:profile,lastVersionId:'fabric-loader'}}},null,2)],
   ['settings.json',home+'\\AppData\\Local\\Programs\\'+launcher,'JSON',JSON.stringify({launcher,language:'tr-TR'},null,2)],
   ['iris.properties',game+'\\config','Text','enableShaders=false'],['sodium-options.json',game+'\\config','JSON','{"quality":{"clouds_quality":"FAST"}}'],
   ['sunucu-notlari.txt',home+'\\Documents','Text','AtlasOyuncu sunucu notları.'],['kontrol-listesi.txt',home+'\\Desktop','Text','Oyun profili, indirilenler ve sistem kayıtları.'],
   ['DiscordSetup.exe',home+'\\Downloads','PE / EXE','Discord installer — eğitim örneği'],['MinecraftInstaller.exe',home+'\\Downloads','PE / EXE','Minecraft installer — eğitim örneği'],
   ['screenshot.png',game+'\\screenshots','PNG','Minecraft ekran görüntüsü'],['pack.png',home+'\\Documents\\ResourcePacks','PNG','Kaynak paketi simgesi'],
   ['level.dat',game+'\\saves\\Yeni Dunya','NBT','Minecraft dünya verisi'],['session.lock',game+'\\saves\\Yeni Dunya','Binary','World session lock']
  ];
  for(let n=0;n<45;n++)background.push(['library-'+String(n+1).padStart(3,'0')+'.jar',home+'\\AppData\\Roaming\\.minecraft\\libraries\\'+pick(['org\\lwjgl','com\\google','net\\fabricmc']),'ZIP / JAR','Minecraft oyun bağımlılığı']);
  for(let n=0;n<18;n++)background.push(['2026-11-'+String(1+n).padStart(2,'0')+'-'+(n%3+1)+'.log.gz',game+'\\logs','GZIP','Sıkıştırılmış eski oyun günlüğü']);
  for(let n=0;n<12;n++)background.push(['region-'+n+'.mca',game+'\\saves\\Yeni Dunya\\region','Region','Minecraft dünya bölgesi']);
  for(const [name,dir,kind,content]of background){const a=make(name,dir,'clean',kind,kind==='ZIP / JAR'?'game-library':'', 'Olağan oyuncu / oyun dosyası; bu örnekte hile bulgusu yok.',{context:true,content,size:(kind==='ZIP / JAR'?1536:kind.startsWith('PE')?74000:kind==='PNG'?800:kind==='Region'?4096:2)+' KB',modified:stamp(60+Math.floor(rng()*5000))});if(kind==='ZIP / JAR')addEvent(a,'metadata',90,'İçerik','PK 03 04 · Minecraft oyun bağımlılığı');if(rng()<.5){addEvent(a,'journal',100+Math.floor(rng()*300),'FILE_CREATE',a.path);addEvent(a,'journal',80+Math.floor(rng()*50),'CLOSE',a.path);}if(kind==='PE / EXE')addEvent(a,'activity',300,'Run .EXE file',a.path);}
  addEvent(null,'usb',200,'USB bağlandı','LAB-'+seed.toString(16).toUpperCase()+' · Mass Storage · Bağlantı zamanı tek başına dosya aktarımı kanıtı değildir');
  events.filter(e=>e.tool==='journal').sort((a,b)=>a.time.localeCompare(b.time)).forEach((e,i)=>{e.usn=160000000+(seed%100000)+i*80;const path=e.detail.split(' · ')[0];e.name=path.split('\\').pop();e.directory=path.slice(0,path.lastIndexOf('\\'));e.reason=({FILE_CREATE:'File create',FILE_DELETE:'File delete',RENAME_OLD_NAME:'Rename: old name',RENAME_NEW_NAME:'Rename: new name',CLOSE:'Close',DATA_OVERWRITE:'Data overwrite'})[e.action]||e.action;});
  return{version:2,id,seed,user,nick,launcher,profile,game,home,startedAt:now,limit:25*60,artifacts:shuffle(artifacts),events:shuffle(events),scenarioCount:chosen.length,caseIds:chosen.map(c=>c.id),catalogueSize:C.catalogue.length};
 }
 function matchEverything(row,artifact,query,now){
  const q=query.trim().toLowerCase(),name=(row.name||artifact?.name||'').toLowerCase(),path=(row.path||artifact?.path||row.detail).toLowerCase();if(!q)return true;
  const groups=q.split(/\s+or\s+|\|/);
  const numberSize=value=>{const m=String(value||'0').match(/([\d.]+)\s*(b|kb|mb|gb)?/i);return m?Number(m[1])*({b:1,kb:1024,mb:1024**2,gb:1024**3}[(m[2]||'b').toLowerCase()]||1):0;};
  const matches=raw=>{const neg=raw.startsWith('!');let token=(neg?raw.slice(1):raw).replaceAll('"',''),result;
   if(token==='file:')result=!row.sourcefolder;
   else if(token==='folder:')result=!!row.sourcefolder;
   else if(token.startsWith('ext:'))result=!row.sourcefolder&&token.slice(4).split(';').some(ext=>name.endsWith('.'+ext));
   else if(token.startsWith('path:'))result=path.includes(token.slice(5));
   else if(token.startsWith('name:'))result=name.includes(token.slice(5));
   else if(token.startsWith('size:')){const m=token.slice(5).match(/^(>=|<=|>|<|=)?(.+)$/),size=numberSize(artifact?.size),target=numberSize(m?.[2]);result=!row.sourcefolder&&({'>' :size>target,'<':size<target,'>=':size>=target,'<=':size<=target,'=':size===target}[m?.[1]||'=']);}
   else if(token.startsWith('dm:')){const arg=token.slice(3),modified=new Date(row.time).getTime();if(arg==='today')result=new Date(modified).toDateString()===new Date(now).toDateString();else if(arg.match(/^past\d+days$/))result=modified>=now-Number(arg.match(/\d+/)[0])*86400000;else result=new Date(modified).toISOString().startsWith(arg);}
   else if(token.includes('*')||token.includes('?')){const full=token.includes('\\'),escaped=[...token].map(c=>c==='*'?'.*':c==='?'?'.':c.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('');result=new RegExp('^'+escaped+'$','i').test(full?path:name);}
   else result=(token.includes('\\')||/^[a-z]:/.test(token)?path:name).includes(token);
   return neg?!result:result;
  };
  return groups.some(group=>(group.match(/(?:[!a-z]+:)?"[^"]*"|\S+/g)||[]).every(matches));
 }
 function rows(session,tool,query=''){
  tool=canonical(tool);const q=query.toLocaleLowerCase('tr-TR').trim();let list;
  if(['explorer','everything'].includes(tool))list=session.artifacts.filter(a=>a.status!=='deleted').map(a=>({id:a.id,artifact:a.id,time:a.modified,action:a.hidden?'Gizli dosya':'Dosya',detail:a.path,name:a.name}));
  else if(tool==='atlas')list=session.artifacts.filter(a=>a.status!=='deleted'&&a.kind==='ZIP / JAR'&&C.families.some(f=>f.id===a.modId)).map(a=>({id:'scan-'+a.id,artifact:a.id,time:a.modified,action:'İçerik eşleşmesi',detail:a.path+' · eşleşme: '+a.modId}));
  else list=session.events.filter(e=>e.tool===tool);
  if(tool==='everything'){
   const dirs=new Set();for(const a of session.artifacts.filter(a=>a.status!=='deleted')){let dir=a.folder;while(dir.length>3){dirs.add(dir);dir=dir.slice(0,dir.lastIndexOf('\\'));}}
   list.push(...[...dirs].map((path,i)=>({id:'directory-'+i,artifact:null,time:new Date(session.startedAt).toISOString(),name:path.split('\\').pop(),detail:path,path,folder:path.slice(0,path.lastIndexOf('\\')),sourcefolder:true,action:'File folder'})));
   const map=new Map(session.artifacts.map(a=>[a.id,a]));return list.filter(r=>matchEverything(r,map.get(r.artifact),query,session.startedAt));
  }
  return list.filter(e=>([e.name,e.detail,e.action,e.time].join(' ')).toLocaleLowerCase('tr-TR').includes(q));
 }
 function evaluate(session,notes){
  const items=session.artifacts.filter(a=>!a.context).map(a=>{const n=notes[a.id]||{},sources=new Set((n.evidence||[]).map(e=>canonical(e.source))),classification=n.verdict===a.status,content=a.status==='deleted'?sources.has('journal'):sources.has('metadata'),location=a.status==='deleted'?sources.has('journal'):sources.has('explorer')||sources.has('everything'),support=a.status==='clean'?content:a.supportGroups?a.supportGroups.every(group=>group.some(src=>sources.has(src))):sources.has('journal')||sources.has('downloads')||sources.has('activity'),cautious=n.usage==='unproven';const points=(classification?35:0)+(content?25:0)+(location?15:0)+(support?15:0)+(cautious?10:0);return{id:a.id,name:a.name,path:a.path,caseId:a.caseId||null,caseTitle:a.caseTitle||'Temiz örnek',expected:a.status,chosen:n.verdict||'',classification,content,location,support,cautious,points,explanation:a.story,evidenceCount:(n.evidence||[]).length};});
  const contextFalse=session.artifacts.filter(a=>a.context&&notes[a.id]?.verdict&&notes[a.id].verdict!=='clean').length;
  return{score:Math.max(0,Math.round(items.reduce((s,x)=>s+x.points,0)/items.length)-contextFalse*5),total:items.length,identified:items.filter(x=>x.classification&&x.content).length,suspicious:session.artifacts.filter(a=>a.status!=='clean').length,falsePositives:contextFalse+items.filter(x=>x.expected==='clean'&&x.chosen&&x.chosen!=='clean').length,items};
 }
 function evaluateFound(session,notes){
  const targets=session.artifacts.filter(a=>a.status!=='clean'),marked=session.artifacts.filter(a=>notes[a.id]?.found===true),correct=marked.filter(a=>a.status!=='clean'),wrong=marked.filter(a=>a.status==='clean');
  const items=session.artifacts.filter(a=>a.status!=='clean'||notes[a.id]?.found===true).map(a=>({id:a.id,name:a.name,path:a.path,caseId:a.caseId||null,caseTitle:a.caseTitle||'Temiz dosya',found:notes[a.id]?.found===true,correct:a.status!=='clean'&&notes[a.id]?.found===true,falsePositive:a.status==='clean',expected:a.status,explanation:a.story,sources:notes[a.id]?.foundSources||[]}));
  return{score:Math.max(0,Math.round(correct.length/Math.max(1,targets.length)*100)-wrong.length*10),total:targets.length,identified:correct.length,missed:targets.length-correct.length,falsePositives:wrong.length,marked:marked.length,items};
 }
 return{create,rows,matchEverything,evaluate,evaluateFound,verdicts,tools,canonical,catalogue:C.catalogue,families:C.families,patterns:C.patterns};
})();
if(typeof module!=='undefined')module.exports=LabEngine;

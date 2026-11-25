'use strict';
const LabEngine = (() => {
  const verdicts = {active:'Aktif profil · dosya mevcut',archive:'Arşiv / pasif dizin · dosya mevcut',deleted:'Silinmiş · yalnız geçmiş kaydı',clean:'Temiz / tek başına ihlal değil'};
  const tools = {explorer:'Dosya Gezgini',everything:'Everything',metadata:'Mod Inspector',journal:'Journal-Tool',journaltrace:'JournalTrace',downloads:'BrowserDownloadsView',history:'BrowsingHistoryView',activity:'LastActivityView',prefetch:'WinPrefetchView',usb:'USBDeview',process:'Process Explorer',system:'System Informer',monitor:'Process Monitor',autoruns:'Autoruns',die:'Detect It Easy',luyten:'Luyten',redlotus:'RedLotus Mod Analyzer',atlas:'AtlasAC'};
  const canonical=tool=>({journaltrace:'journal',system:'process',die:'metadata',luyten:'metadata',redlotus:'metadata'}[tool]||tool);
  function random(seed){let a=seed>>>0;return ()=>{a+=0x6D2B79F5;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return ((t^t>>>14)>>>0)/4294967296;};}
  function create(seed, now=Date.now()) {
    const rng=random(seed),pick=a=>a[Math.floor(rng()*a.length)],shuffle=a=>a.map(x=>[rng(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
    const id='AAC-'+seed.toString(36).toUpperCase(),user=pick(['Deniz','Arda','Eren','Bora','Mert','AtlasUser','Oyuncu']);
    const nick=pick(['Kuzey','Raven','Mavi','Frost','Kaya','Buz'])+Math.floor(10+rng()*980);
    const home='C:\\Users\\'+user,launcher=pick(['PrismLauncher','ModrinthApp','AtlasClient']);
    const profile=pick(['Fabric-1.21','HayattaKalma','Atlas-1.21.11','Profil-'+Math.floor(10+rng()*90)]);
    const game=home+'\\AppData\\Local\\'+launcher+'\\instances\\'+profile+'\\.minecraft';
    const stamp=minutes=>new Date(now-minutes*60000).toISOString();
    const hex=()=>Array.from({length:64},()=>Math.floor(rng()*16).toString(16)).join('');
    const artifacts=[],events=[];
    const make=(name,folder,status,kind,modId,story,source,extra={})=>{
      const n=artifacts.length+1,key='f'+n,path=folder+'\\'+name;
      const a={id:key,name,path,folder,status,kind,modId,hash:hex(),size:Math.floor(80+rng()*5400)+' KB',modified:stamp(Math.floor(45+rng()*150)),story,source,...extra};artifacts.push(a);return a;
    };
    const labels=['chunk-helper','render-data','map-cache','terrain-sync','profile-core','world-tools'];
    const scenarios=shuffle([
      {type:'active',client:'meteor-client',name:pick(labels)+'.jar',reason:'İsim yanıltıcı olsa da fabric.mod.json içindeki mod kimliği meteor-client. Dosya, bu oturumun aktif profilinin mods dizininde mevcut. Bu durum oyuna girildiğini veya modun kullanıldığını tek başına kanıtlamaz.'},
      {type:'archive',client:'wurst',name:pick(['resource-index.bin','resolver.dat','texture-cache.bin']),reason:'Uzantı değiştirilmiş; içerikte PK/ZIP imzası ve fabric.mod.json içinde wurst kimliği var. Dosya aktif mods dizininde değil. Mevcut dosya ile aktif profile yüklenme veya oyun içinde kullanım birbirinden ayrılmalı.'},
      {type:'archive',client:'baritone-meteor',name:pick(['world-backup.zip','terrain-resources.zip','profile-old.zip']),reason:'Dış arşivin içindeki extras.zip katmanında bir JAR ve baritone mod kimliği var. Arşivde bulunması oyunda kullanım kanıtı değildir.'},
      {type:'deleted',client:'meteor-client',name:pick(['old-render-helper.jar','removed-client.jar','cache-old.jar']),reason:'Journal kaydı dosyanın silindiğini gösteriyor. Dosya Gezgini’nde mevcut değil. Geçmişte varlık ile bugün mevcut / yüklü / kullanılmış olmayı karıştırma.'},
      {type:'archive',client:'bleachhack',name:pick(['visual-helper.jar','entity-cache.jar','camera-utils.jar']),reason:'fabric.mod.json içindeki bleachhack kimliği, dosya adından daha güçlü bir bulgu. Bu örnek eski 1.20.4 profilinde saklanan BleachHack dosyasıdır; mevcut oyun profiline yüklenmiş olduğunu veya oyun içinde kullanıldığını varsayma.'},
      {type:'archive',client:'meteor-rejects',name:pick(['path-assist.jar','route-data.jar','addon-cache.bin']),reason:'Meteor Rejects bir Meteor eklentisidir; bağımsız istemci olarak değerlendirilmez. Dosya aktif mods dizininde değil; dosya varlığı ile oyunda kullanım ayrı değerlendirilir.'},
      {type:'archive',client:'thunderhack',name:pick(['legacy-pack.jar','backup-tools.bin','graphics-data.dat']),reason:'Dosyanın içindeki thunderhack kimliğiyle gerçek içerik doğrulanır. Dosya bir yedek dizininde, aktif profilin mod dizininde değil.'}
    ]);
    const selected=scenarios.slice(0,3+Math.floor(rng()*3));
    // Every session includes both suspicious and harmless findings; target order is shuffled.
    for(const s of selected){
      const folder=s.type==='active'?game+'\\mods':s.type==='deleted'?home+'\\Downloads':s.client==='bleachhack'?home+'\\AppData\\Roaming\\.minecraft\\versions\\Archive-1.20.4\\mods':pick([home+'\\Downloads',home+'\\Documents\\ResourcePacks',home+'\\AppData\\Roaming\\Cache']);
      const a=make(s.name,folder,s.type,'ZIP / JAR',s.client,s.reason,['metadata',s.type==='deleted'?'journal':'explorer'],{hidden:s.type==='archive'&&rng()>.4,nested:s.client==='baritone-meteor'});
      if(s.type!=='deleted')events.push({id:'e'+events.length,artifact:a.id,tool:'metadata',time:a.modified,action:'İçerik',detail:'PK 03 04 · '+(a.nested?'extras.zip > '+s.client+'.jar > ':'')+'fabric.mod.json · id='+s.client});
      const downloaded=stamp(210+Math.floor(rng()*50));
      events.push({id:'e'+events.length,artifact:a.id,tool:'downloads',time:downloaded,action:'İndirme tamamlandı',detail:'https://downloads.example.invalid/packages/'+s.client+'.jar → '+home+'\\Downloads\\'+s.client+'.jar'});
      events.push({id:'e'+events.length,artifact:a.id,tool:'journal',time:stamp(180),action:'RENAME_OLD_NAME',detail:home+'\\Downloads\\'+s.client+'.jar'});
      events.push({id:'e'+events.length,artifact:a.id,tool:'journal',time:stamp(179),action:'RENAME_NEW_NAME',detail:a.path});
      if(s.type==='deleted')events.push({id:'e'+events.length,artifact:a.id,tool:'journal',time:stamp(35),action:'FILE_DELETE',detail:a.path});
      else events.push({id:'e'+events.length,artifact:a.id,tool:'activity',time:stamp(178),action:a.nested?'Arşiv açıldı':'Dosya taşındı',detail:a.path});
      if(rng()>.5)events.push({id:'e'+events.length,artifact:a.id,tool:'usb',time:stamp(181),action:'USB bağlandı',detail:'Eğitim USB · seri LAB-'+seed.toString(16).toUpperCase()+' · bağlantı zamanı dosya hareketine yakın; tek başına aktarım kanıtı değil'});
    }
    const cleanMods=shuffle([['fabric-api.jar','fabric-api'],['sodium.jar','sodium'],['lithium.jar','lithium'],['iris.jar','iris'],['modmenu.jar','modmenu']]).slice(0,3);
    for(const [name,mid] of cleanMods)make(name,game+'\\mods','clean','ZIP / JAR',mid,'Bu örnek temiz bir mod / bağımlılık. Dosya adı, mods dizini veya ZIP imzası tek başına hile demek değildir. İçerikteki mod kimliğini doğrula.',['metadata']);
    make('opengl32.dll',home+'\\Desktop\\Kontrol Araçları','clean','PE / DLL','Mesa OpenGL','Bu DLL kontrol aracının yazılım çizimi için sağlanan Mesa bileşeni. Minecraft hilesi değildir. Sırf DLL olduğu için ihlal işaretleme.',['metadata']);
    const inspector=make('mod-inspector.jar',home+'\\Desktop\\Kontrol Araçları','clean','ZIP / JAR','atlas-lab-inspector','Bu Java aracı eğitim dosyalarının metaverisini okur. Java işlemi görmek, Minecraft’ın veya hilenin çalıştığını kanıtlamaz.',['metadata','process']);
    events.push({id:'e'+events.length,artifact:inspector.id,tool:'process',time:stamp(10),action:'javaw.exe',detail:'javaw.exe -jar "'+inspector.path+'" --metadata-only · PID '+(2000+Math.floor(rng()*6000))});
    events.push({id:'e'+events.length,artifact:inspector.id,tool:'prefetch',time:stamp(10),action:'JAVAW.EXE-'+seed.toString(16).toUpperCase()+'.pf',detail:'Çalıştırılan program: javaw.exe · İlgili dosya: '+inspector.path+' · Prefetch tek başına hangi modun oyunda kullanıldığını kanıtlamaz'});
    for(const a of artifacts.filter(a=>a.status==='clean'))events.push({id:'e'+events.length,artifact:a.id,tool:'metadata',time:a.modified,action:'İçerik',detail:(a.kind==='PE / DLL'?'MZ / PE · Product: Mesa OpenGL':'PK 03 04 · fabric.mod.json · id='+a.modId)});
    events.push({id:'e'+events.length,artifact:null,tool:'history',time:stamp(300),action:'Sayfa ziyareti',detail:'https://docs.example.invalid/fabric/kurulum · Sayfa ziyareti, indirme veya çalıştırma anlamına gelmez'});
    events.push({id:'e'+events.length,artifact:null,tool:'activity',time:stamp(8),action:'Uygulama açıldı',detail:'Everything.exe · Kontrol aracı'});
    events.push({id:'e'+events.length,artifact:inspector.id,tool:'autoruns',time:stamp(9),action:'HKCU Run',detail:'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run · AtlasLabInspector → javaw.exe -jar "'+inspector.path+'" --metadata-only'});
    for(const a of artifacts.filter(a=>a.status!=='deleted'))events.push({id:'e'+events.length,artifact:a.id,tool:'monitor',time:stamp(9),action:'ReadFile',detail:'javaw.exe (Mod Inspector) · '+a.path+' · SUCCESS · Metaveri okunması, Minecraft içinde kullanım kanıtı değildir'});
    const order=shuffle(artifacts);
    return {version:1,id,seed,user,nick,launcher,profile,game,home,startedAt:now,limit:25*60,artifacts:order,events:shuffle(events),scenarioCount:selected.length};
  }
  function rows(session,tool,query=''){
    tool=canonical(tool);
    const q=query.toLocaleLowerCase('tr-TR').trim();
    let list;
    if(['explorer','everything'].includes(tool))list=session.artifacts.filter(a=>a.status!=='deleted').map(a=>({id:a.id,artifact:a.id,time:a.modified,action:a.hidden?'Gizli dosya':'Dosya',detail:a.path,name:a.name}));
    else if(tool==='atlas')list=session.artifacts.filter(a=>a.status!=='deleted'&&a.status!=='clean').map(a=>({id:'scan-'+a.id,artifact:a.id,time:a.modified,action:'İçerik eşleşmesi',detail:a.path+' · eşleşme: '+a.modId}));
    else list=session.events.filter(e=>e.tool===tool);
    if(tool==='everything')return list.filter(e=>{
      const a=session.artifacts.find(a=>a.id===e.artifact),text=(e.name+' '+e.detail).toLocaleLowerCase('tr-TR');
      return q.split(/\s+or\s+/i).some(part=>(part.match(/(?:[a-z]+:)?"[^"]*"|\S+/g)||[]).every(raw=>{
        const token=raw.replaceAll('"','');
        if(token.startsWith('ext:'))return token.slice(4).split(';').some(ext=>a.name.toLowerCase().endsWith('.'+ext));
        if(token.startsWith('path:'))return a.path.toLocaleLowerCase('tr-TR').includes(token.slice(5));
        if(token==='dm:today')return new Date(a.modified).toDateString()===new Date(session.startedAt).toDateString();
        if(token.includes('*')||token.includes('?')){const escaped=[...token].map(c=>c==='*'?'.*':c==='?'?'.':c.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('');return new RegExp(escaped,'i').test(text);}
        return text.includes(token);
      }));
    });
    return list.filter(e=>([e.name,e.detail,e.action,e.time].join(' ')).toLocaleLowerCase('tr-TR').includes(q));
  }
  function evaluate(session,notes){
    const total=session.artifacts.length;
    const items=session.artifacts.map(a=>{
      const n=notes[a.id]||{},sources=new Set((n.evidence||[]).map(e=>canonical(e.source)));
      const classification=n.verdict===a.status;
      const content=a.status==='deleted'?sources.has('journal'):sources.has('metadata');
      const location=a.status==='deleted'?sources.has('journal'):sources.has('explorer')||sources.has('everything');
      const support=a.status==='clean'?content:a.status==='deleted'?sources.has('downloads')||sources.has('activity'):sources.has('journal')||sources.has('downloads')||sources.has('activity');
      const cautious=n.usage==='unproven';
      // Score requires captured evidence rather than keywords in a free-text answer.
      const points=(classification?35:0)+(content?25:0)+(location?15:0)+(support?15:0)+(cautious?10:0);
      return {id:a.id,name:a.name,path:a.path,expected:a.status,chosen:n.verdict||'',classification,content,location,support,cautious,points,explanation:a.story,evidenceCount:(n.evidence||[]).length};
    });
    const score=Math.round(items.reduce((s,x)=>s+x.points,0)/total);
    return {score,total,identified:items.filter(x=>x.classification&&x.content).length,suspicious:session.artifacts.filter(a=>a.status!=='clean').length,falsePositives:items.filter(x=>x.expected==='clean'&&x.chosen&&x.chosen!=='clean').length,items};
  }
  return {create,rows,evaluate,verdicts,tools,canonical};
})();
if(typeof module!=='undefined')module.exports=LabEngine;

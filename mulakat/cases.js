'use strict';
const AtlasCases=(()=>{
 const families=[
  {id:'meteor-client',name:'Meteor',version:'1.21.11',source:'Yerel Atlas Lab JAR metaverisi'},
  {id:'wurst',name:'Wurst',version:'1.21.11',source:'Yerel Atlas Lab JAR metaverisi'},
  {id:'baritone-meteor',name:'Baritone',version:'1.21.11',source:'Yerel Atlas Lab JAR metaverisi'},
  {id:'bleachhack',name:'BleachHack',version:'1.20.4',legacy:true,source:'Yerel Atlas Lab JAR metaverisi'},
  {id:'thunderhack',name:'ThunderHack',version:'1.21',source:'Yerel Atlas Lab JAR metaverisi'},
  {id:'meteor-rejects',name:'Meteor Rejects',version:'1.21.11',addon:true,source:'Yerel Atlas Lab JAR metaverisi'},
  {id:'liquidbounce',name:'LiquidBounce',version:'Profil sürümünü ayrıca doğrula',source:'https://raw.githubusercontent.com/CCBlueX/LiquidBounce/nextgen/src/main/resources/fabric.mod.json'},
  {id:'coffee',name:'Coffee',version:'1.20+',legacy:true,source:'https://raw.githubusercontent.com/Coffee-Client/Coffee/master/src/main/resources/fabric.mod.json'},
  {id:'jex',name:'Jex',version:'1.19.x',legacy:true,source:'https://raw.githubusercontent.com/DustinRepo/JexClient/main/src/main/resources/fabric.mod.json'},
  {id:'ares',name:'Ares',version:'1.18.1',legacy:true,source:'https://raw.githubusercontent.com/AresClient/ares/master/ares-fabric/src/main/resources/fabric.mod.json'}
 ];
 const patterns=[
  {id:'renamed-mod',title:'Yeniden adlandırılmış mod',status:'active',location:'mods',suffix:'.jar',journal:'rename',support:[['journal']],focus:'Dosya adını içerikteki kimlikle karşılaştır; eski ve yeni adı Journal üzerinden bağla.'},
  {id:'hidden-binary',title:'Uzantısı değiştirilmiş gizli arşiv',status:'archive',location:'cache',suffix:'.bin',hidden:true,journal:'rename',support:[['journal']],focus:'Uzantı yerine gerçek PK/ZIP imzasını ve mod kimliğini doğrula. Gizli dosyanın konumunu ayır.'},
  {id:'nested-backup',title:'İki katmanlı yedek arşivi',status:'archive',location:'resources',suffix:'.zip',nested:2,journal:'create',support:[['activity']],focus:'Dış ZIP içinde ikinci ZIP ve JAR zincirini aç. Sadece dış arşiv adını işaretlemek içerik doğrulaması değildir.'},
  {id:'deleted-download',title:'İndirilmiş ve silinmiş kopya',status:'deleted',location:'downloads',suffix:'.jar',journal:'delete',support:[['downloads']],focus:'Başarılı indirme ile silme zamanını ilişkilendir. Geçmiş kaydını mevcut dosya gibi değerlendirme.'},
  {id:'usb-copy',title:'USB kopyası ve hedef dosya',status:'archive',location:'addons',suffix:'.jar',journal:'create',usb:true,support:[['usb'],['journal']],focus:'USB kaynak yolu, hedef yol, aynı hash ve kopya zamanını birlikte doğrula. Yalnız aygıt bağlantısı aktarım kanıtı değildir.'},
  {id:'old-profile',title:'Arşiv oyun profili',status:'archive',location:'oldprofile',suffix:'.jar',journal:'rename',support:[['journal']],focus:'Eski profilin mod diziniyle şu an seçilen profili ayır; sürüm uyumluluğunu otomatik varsayma.'},
  {id:'rename-chain',title:'İki aşamalı yeniden adlandırma',status:'active',location:'mods',suffix:'.jar',journal:'chain',support:[['journal']],focus:'Orijinal ad → ara ad → son ad zincirini zamanlarıyla kur.'},
  {id:'download-only-file',title:'İndirme klasöründe kalan dosya',status:'archive',location:'downloads',suffix:'.jar',journal:'create',support:[['downloads']],focus:'İndirme tamamlandı; dosya mod dizinine taşınmamış. İndirilen dosyayı oyunda yüklü diye sunma.'},
  {id:'passive-cache',title:'Pasif kütüphane önbelleği',status:'archive',location:'libraries',suffix:'.dat',journal:'rename',support:[['journal']],focus:'Başka bir kütüphane dizinindeki dosya varlığını aktif mods klasöründen ayır.'},
  {id:'mixed-backup',title:'Temiz dosyalarla karışık arşiv',status:'archive',location:'resources',suffix:'.zip',nested:1,mixed:true,journal:'create',support:[['activity']],focus:'Arşivdeki temiz Fabric API girdisiyle şüpheli JAR kimliğini ayır; tüm arşivi tek mod sanma.'},
  {id:'copy-survives',title:'Silinen eski ad, mevcut yedek',status:'archive',location:'documents',suffix:'.jar',journal:'copy-delete',support:[['journal']],focus:'Eski yolun silinmesi mevcut yedek kopyanın da silindiği anlamına gelmez. Tam yolları karşılaştır.'},
  {id:'recent-rewrite',title:'İçeriği güncellenmiş dosya',status:'active',location:'mods',suffix:'.jar',journal:'rewrite',support:[['journal'],['activity']],focus:'Oluşturma, yeniden yazma ve son değişiklik zamanlarını ayır; değişiklik kaydından oyun içi kullanım sonucu çıkarma.'}
 ];
 const catalogue=families.flatMap((family,fi)=>patterns.map((pattern,pi)=>({id:'VAKA-'+String(fi*patterns.length+pi+1).padStart(3,'0'),family:family.id,pattern:pattern.id,title:family.name+' · '+pattern.title})));
 return {families,patterns,catalogue};
})();
if(typeof module!=='undefined')module.exports=AtlasCases;

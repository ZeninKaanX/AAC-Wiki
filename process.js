'use strict';
const minecraftSearchQuery="hack OR hile OR cheat OR injector OR trigger OR lua OR Wurst OR Aristois OR Meteor OR Ares OR Combat OR MatHax OR vape OR Jex OR LiquidBounce OR trainer OR Bleachhack OR hacked OR aura OR impactclient OR sigma OR exec OR doomsday OR Nursultan OR Grim OR Argon OR Catlean OR Celestial OR Thunderhack OR RusherHack OR SalHack OR futureclient OR Nuclear OR krypton OR arvionclient OR soulclient OR prestigeclient OR vanadium OR wexside OR damaclient OR Raven OR Drip OR Entropy OR Slinky OR Rise OR Novoline OR Augustus OR Tenacity OR Moon OR FDP OR Koid OR Itami OR Skilled OR Dream OR Bape OR Flux OR Boze OR Phobos OR Lambda OR Kami OR Coffee OR Inertia OR Abyss OR Expensive OR Akrien OR Wild OR Zamorozka OR Flugel OR Excellent OR Delta OR Minced OR Huzuni OR Wolfram OR autototem OR smarttotem OR autocrystal OR crystalaura OR autoanchor OR surround OR autocity OR cevbreaker OR reach OR hitbox OR velocity OR aimbot OR triggerbot OR backtrack OR spoofer OR cleaner OR selfdestruct OR destruct";
const processCommands={
 system:'systeminfo | findstr /i /c:"Original Install Date" /c:"System Boot Time" /c:"Yükleme Tarihi" /c:"Sistem Önyükleme Zamanı"',
 journal:'fsutil usn queryjournal C:',
 services:'sc query dps & sc query pcasvc',
 roaming:'%appdata%',
 search:minecraftSearchQuery,
 mods:'%appdata%\\.minecraft\\mods',
 versions:'%appdata%\\.minecraft\\versions',
 resources:'%appdata%\\.minecraft\\resourcepacks',
 jars:'*.jar',
 today:'dm:today'
};
function processSnippet(key,label){return `<div class="process-snippet"><div class="snippet-heading"><span>${label}</span><button type="button" data-process-copy="${key}" aria-label="${label} metnini kopyala">${icon('copy')} Kopyala</button></div><pre><code id="process-code-${key}">${escapeHTML(processCommands[key])}</code></pre></div>`;}
const processSections=[
 {id:'preparation',title:'Bağlantı ve sistem kontrolleri',summary:'Önce AtlasAC taraması, ardından araçlar ve sistem kayıtları',text:'AtlasAC arka plan tarama Sonuçlar JSON AnyDesk Everything Journal-Tool JournalTrace LastActivityView BrowsingHistoryView BrowserDownloadsView USBDeview systeminfo fsutil usn dps pcasvc',body:()=>`
  <p>Kontrolü AnyDesk üzerinden bizzat yürüt. Kontrol sırasında adımları sırayla izle; ilk bulguları kaydetmeden dosya silme, bilgisayarı yeniden başlatma veya günlükleri değiştirme.</p>
  <h3>1. Önce AtlasAC taramasını başlat</h3>
  <p>AnyDesk bağlantısı kurulur kurulmaz, diğer kontrol adımlarına geçmeden önce oyuncunun işletim sistemine uygun <strong>AtlasAC</strong> uygulamasını aç. Tarama öncesi bilgilendirmeyi incele ve <strong>“Taramayı başlat”</strong> düğmesine bas.</p>
  <div class="process-rule"><strong>AtlasAC çalışırken kontrolüne devam et.</strong><p>Taramanın bitmesini bekleyerek kontrolü durdurma. AtlasAC arka planda taramaya devam ederken aşağıdaki araçları hazırla; sistem kayıtları, Minecraft dizinleri ve diğer kontrol adımlarını sırayla incele. Uygulamayı kontrol bitmeden kapatma.</p></div>
  <p><a href="#pc">AtlasAC PC indirme ve kullanım rehberi →</a></p>
  <h3>2. Diğer araçları hazırla</h3>
  <p>AnyDesk bağlantısı kurulduktan sonra resmi kontrol paketini kullan. Bu süreçte aşağıdaki yedi araçla inceleme yapıyoruz:</p>
  <ul class="process-tools"><li>Everything</li><li>Journal-Tool</li><li>JournalTrace</li><li>LastActivityView</li><li>BrowsingHistoryView</li><li>BrowserDownloadsView</li><li>USBDeview</li></ul>
  <p><a href="#tools">Uygulamaların işlevlerini incele →</a></p><p><a href="#pc">AtlasAC PC sürümü ve kullanım rehberi →</a></p>
  <div class="process-rule"><strong>Kontrol reddi</strong><p>Oyuncu gerekli araçları indirmeyi veya çalıştırmayı reddederse ya da AnyDesk erişimini kısıtlarsa kontrol reddi kapsamında işlem uygulanır. Verilen talebi ve oyuncunun yanıtını raporda açıkça belirt.</p></div>
  <h3>3. Kurulum ve önyükleme zamanını kaydet</h3>
  <p>Dosya aramasından önce Yönetici Komut İstemi'nde sistem tarihlerini görüntüle:</p>
  ${processSnippet('system','Kurulum ve önyükleme zamanı')}
  <p>Kurulum ve son önyükleme zamanını kontrol çağrısının saatiyle karşılaştır. Kontrol öncesindeki yeniden başlatmayı not et; yeniden başlatma tek başına hile kullanıldığını veya kasıtlı temizlik yapıldığını göstermez.</p>
  <h3>4. USN günlüğünün durumuna bak</h3>
  ${processSnippet('journal','USN günlüğünü sorgula')}
  <p>Günlüğün mevcut olup olmadığını, kimliğini ve USN alanlarını kaydet. Günlüğün bulunmaması ya da eski kayıtların eksik olması tek başına silinme zamanı veya hile kullanımı kanıtı değildir; Journal-Tool ve JournalTrace bulgularıyla karşılaştır.</p>
  <h3>5. Servis durumlarını kaydet</h3>
  ${processSnippet('services','DPS ve PCA servisleri')}
  <p>DPS ve PcaSvc için dönen <code>STATE</code> değerlerini incele. <code>RUNNING</code> çalıştığını, <code>STOPPED</code> durduğunu gösterir. Durmuş bir servisten tek başına kasıt veya hile sonucu çıkarma.</p>
  <h3>6. Windows Güvenliği</h3>
  <p>Windows Güvenliği'ni açık tut. Bir kontrol aracı engellenirse dosyanın resmi paketten geldiğini ve güvenlik uyarısını kontrol et; sorunu çözmeden aracı zorla çalıştırma. Gerektiğinde üst yetkiliyle görüş.</p>
 `},
 {id:'files',title:'Minecraft dizinleri ve dosya araması',summary:'Roaming, mods, versions, resourcepacks ve Everything',text:'appdata roaming Minecraft mods versions resourcepacks jar dll Everything boyut dm today arama',body:()=>`
  <h3>1. Roaming klasörünü aç</h3>
  <p><kbd>Windows</kbd> + <kbd>R</kbd> ile Çalıştır'ı açıp aşağıdaki yolu yaz:</p>
  ${processSnippet('roaming','Roaming dizini')}
  <p>Açılan klasörün arama kutusunda şu arama dizesini kullan. Bu dize Windows klasör araması içindir; Everything arama sözdizimiyle karıştırma.</p>
  ${processSnippet('search','Roaming arama dizesi')}
  <h3>2. Minecraft klasörlerini incele</h3>
  <p>Oyuncunun kullandığı kurulumun gerçek oyun dizinini doğrula. Ayrı bir başlatıcı veya instance kullanıyorsa yalnız varsayılan <code>.minecraft</code> klasörüyle yetinme.</p>
  ${processSnippet('mods','Mod klasörü')}
  <h4>Mods · Yüklü modları kontrol et</h4>
  <ol><li>Oyuncunun kullandığı Minecraft sürümünü ve başlatıcı profilini belirle. Açtığın <code>mods</code> klasörünün bu profile ait olduğunu doğrula; ayrı instance varsa onun oyun dizinini de incele.</li><li>Dosyaları ayrıntılar görünümünde aç. <strong>Tam dosya adı, uzantı, boyut ve değiştirilme tarihini</strong> birlikte kaydet. Kontrol çağrısına yakın değişen dosyaları öncelikli incele.</li><li>Şüpheli <code>.jar</code> dosyalarını çalıştırmadan arşiv içeriğine bak. Mod tanımında görünen ad ve sürümle dosya adını karşılaştır. Adı değiştirilmiş bir dosyayı yalnızca dışarıdaki adına göre değerlendirme.</li><li><code>OptiFine-fix</code>, <code>Sodium-patch</code>, <code>temp.jar</code> veya anlamsız harflerden oluşan isimleri inceleme notuna al. Bu isimler ve yakın tarih tek başına hile kanıtı değildir.</li><li>Dosyanın tam yolunu, içerikte doğruladığın mod adını ve tarihini Journal / indirme kayıtlarıyla karşılaştır. İçerik doğrulanamıyorsa raporda bunu açıkça belirt.</li></ol>
  ${processSnippet('versions','Sürüm klasörü')}
  <h4>Versions · Sürüm klasörlerini kontrol et</h4>
  <ol><li>Önce başlatıcıda seçili sürümün klasörünü incele; ardından diğer sürüm klasörlerine bak.</li><li>Klasör adıyla içindeki <code>.jar</code> ve <code>.json</code> dosya adlarının ilişkisini kontrol et. Eksik dosyaları, isim uyuşmazlıklarını ve yakın tarihli değişiklikleri not et.</li><li><code>.json</code> dosyasını metin olarak aç. Sürüm tanımını, başvurduğu diğer sürüm ve dosya yollarını incele; kullanılan profil ile ilişkisini doğrula. Farklı başlatıcıların oluşturduğu yapıları tek bir isim kuralıyla değerlendirme.</li><li>Şüpheli <code>.jar</code> dosyasını çalıştırmadan içeriğini incele. Klasörün veya dosyanın adını değiştirmiş olmaları, içeriğin de değiştiğini göstermez.</li><li>Uyuşmazlık varsa klasörün tam yolunu ve ilgili dosyaları birlikte kaydet. İçeriğini doğrulamadan dosyaya hile adı verme.</li></ol>
  ${processSnippet('resources','Kaynak paketi klasörü')}
  <h4>Resourcepacks · Paketlerin içini incele</h4>
  <ol><li>Yalnızca paket adına bakıp geçme. Hem klasör hâlindeki paketleri hem de <code>.zip</code> arşivlerini incele; oyunda seçili olan paketleri ayrıca not et.</li><li>Paketin ana dizinine ve alt klasörlerine bak. Doku dosyalarının arasına konmuş <code>.jar</code> veya <code>.dll</code> dosyaları varsa tam adını, paket içindeki yolunu, boyutunu ve tarihini kaydet.</li><li>Dosya uzantılarını görünür tut. Görsel gibi adlandırılmış bir dosyanın gerçek uzantısıyla görünen adını karşılaştır; şüpheli dosyayı açıp çalıştırma.</li><li>Bulduğun dosyanın ne olduğunu içeriği ve diğer kayıtlarla doğrula. Bir dosyanın kaynak paketi içinde bulunması, Minecraft tarafından çalıştırıldığını göstermez.</li><li>Paketin indirme kaydını ve varsa silme / yeniden adlandırma hareketlerini diğer araçlarda kontrol et. Raporu <strong>paket adı → dosyanın tam yolu → doğrulanan içerik → zaman</strong> sırasıyla yaz.</li></ol>
  <h3>3. Everything ile aramayı genişlet</h3>
  <ol><li>Bilinen hile clientlerinin isimlerini tek tek ara.</li><li>Ardından aşağıdaki uzantı aramasıyla JAR dosyalarına bak. <code>OptiFine-fix</code>, <code>Sodium-patch</code>, <code>temp.jar</code> gibi isimler inceleme başlangıcıdır; dosya adı tek başına teşhis değildir.</li></ol>
  ${processSnippet('jars','JAR araması')}
  <p><strong>Boyut → Küçükten büyüğe</strong> sıralamasıyla küçük JAR dosyalarını da gözden geçir. Her sonuçta tam dosya yolunu açıp hangi profile veya klasöre ait olduğunu kontrol et. Küçük dosya boyutu tek başına hile ölçütü değildir; isim, içerik, konum ve tarih birlikte değerlendirilir.</p>
  ${processSnippet('today','Bugün değiştirilen dosyalar')}
  <p><code>dm:today</code>, bugün değiştirilmiş dosyaları filtreler; tüm oluşturma, silme ve yeniden adlandırma hareketlerinin günlüğü değildir. Bu hareketleri sonraki bölümde USN kayıtlarıyla incele.</p>
 `},
 {id:'records',title:'Dosya hareketleri ve indirme geçmişi',summary:'Journal-Tool, JournalTrace ve BrowserDownloadsView',text:'Journal-Tool JournalTrace Deleted Rename Drive Select Scan Layout Data Grid BrowserDownloadsView Filename Download URL End Time',body:()=>`
  <h3>1. Journal-Tool</h3>
  <ol><li>Bilinen hile clientlerinin isimlerini tek tek ara.</li><li>Sonuç yoksa <code>.jar</code> aramasıyla incelemeyi genişlet.</li><li>Kontrol saatinden hemen önce silinen <code>Deleted</code> veya adı değişen <code>Rename</code> kayıtlarını incele.</li><li>Minecraft dosyalarındaki işlemleri dosya yolu ve zamanıyla birlikte not et.</li></ol>
  <h3>2. JournalTrace</h3>
  <ol><li>Sol üstteki <strong>Drive</strong> sekmesine gir.</li><li><strong>Select</strong> ile <code>C:</code> sürücüsünü seç.</li><li>Yeniden <strong>Drive</strong> sekmesine girip <strong>Scan</strong> işlemini başlat.</li><li>Tarama bitince <strong>Layout → Data Grid</strong> görünümünü aç.</li><li>Önce client isimlerini, ardından <code>.jar</code> uzantısını ara. Dosya adı, işlem nedeni ve zamanı birlikte değerlendir.</li></ol>
  <p>İlgili oyun dizini başka bir sürücüdeyse o sürücünün kayıtlarını da kontrol et. İki journal aracındaki bulguları aynı dosya ve zaman üzerinden karşılaştır.</p>
  <h3>3. BrowserDownloadsView</h3>
  <p>İndirme geçmişinde aşağıdaki alanları birlikte incele:</p>
  <dl class="process-fields"><div><dt>Filename</dt><dd>Dosya adı ve uzantısı. Şüpheli görünen dosyanın ne olduğunu ayrıca doğrula.</dd></div><div><dt>Download URL</dt><dd>Dosyanın indirildiği adres. Client veya indirme sayfasını diğer bulgularla ilişkilendir.</dd></div><div><dt>End Time</dt><dd>İndirmenin tamamlanma tarihi ve saati. Journal ve etkinlik kayıtlarıyla aynı zaman çizgisinde karşılaştır.</dd></div></dl>
  <p>İndirme kaydı dosyanın çalıştırıldığını göstermez. İndirme, dosya hareketi ve çalıştırma bulgularını birbirinden ayır.</p>
 `},
 {id:'history',title:'Tarayıcı, etkinlik, USB ve kapanış',summary:'BrowsingHistoryView, LastActivityView, USBDeview ve rapor',text:'BrowsingHistoryView Filter Visit Date Time Local Time From LastActivityView Action Time Filename Description USBDeview Disconnect Time Mass Storage AnyDesk rapor sonlandırma',body:()=>`
  <h3>1. BrowsingHistoryView</h3>
  <ol><li>Ziyaret tarihi / saat filtresini aç.</li><li><strong>Load history items from the following time range (Local Time)</strong> seçeneğini kullan.</li><li>İlk bölümde kaydettiğin kurulum tarihini inceleme aralığının <strong>From</strong> alanına girip kayıtları yükle.</li><li><kbd>Ctrl</kbd> + <kbd>F</kbd> ile client isimlerini ara.</li></ol>
  <p>Hile siteleri ve forumlarına yapılan ziyaretleri, sayfa adresi ve tarih / saat bilgisiyle kaydet. Ziyaret geçmişi, indirme geçmişi veya çalıştırma kaydı yerine geçmez.</p>
  <h3>2. LastActivityView</h3>
  <ol><li>Kayıtları en yeniden eskiye sırala.</li><li><kbd>Ctrl</kbd> + <kbd>F</kbd> ile client isimlerini ara.</li><li><strong>Filename</strong> ve <strong>Description</strong> alanlarını incele; özellikle <code>.jar</code>, <code>.exe</code>, <code>.bat</code> ve <code>.cmd</code> dosyalarına bak.</li><li>Minecraft dizini, Java çalıştırmaları ve temizleme uygulamalarıyla ilgili olayları ayır.</li><li><strong>Action Time</strong> değerlerini indirme ve dosya hareketlerinin zamanlarıyla karşılaştır.</li></ol>
  <h3>3. USBDeview</h3>
  <ol><li><strong>Options → Display Disconnected Devices</strong> seçeneğinin açık olduğundan emin ol.</li><li><strong>Device Type: Mass Storage</strong> olan USB bellek ve harici diskleri incele.</li><li><strong>Last Plug / Unplug Date</strong> veya sürümde bulunan <strong>Connect Time / Disconnect Time</strong> alanlarından takılma ve çıkarılma zamanlarını kontrol et.</li></ol>
  <p>Kontrol çağrısına yakın bir USB çıkarılması varsa saati not et ve dosya / çalıştırma kayıtlarıyla karşılaştır. USB'nin çıkarılması, hilenin o aygıttan çalıştırıldığını tek başına kanıtlamaz.</p>
  <h3>4. Kontrolü bitir ve raporla</h3>
  <ol><li>AtlasAC taramasının durumunu kontrol et. Tarama tamamlandığında <strong>“Sonuçlar”</strong> bölümündeki eşleşmeleri, dosya detaylarını ve taranamayan kaynakların uyarılarını incele; bulguları yaptığın diğer kontrollerle karşılaştır. Gerekiyorsa <strong>“JSON kaydet”</strong> ile raporu dışa aktar. Bir eşleşme tek başına hile kullanımı kanıtı değildir.</li><li>Bulduğun kayıtların dosya adını, yolunu ve zamanını kaydet; kanıtları koru.</li><li>Kontrol sırasında değiştirilmiş bir ayar varsa önceki durumuna döndür ve Windows Güvenliği'nin açık olduğunu doğrula.</li><li>Yalnızca bu kontrol için indirilen AAC araçlarını, oyuncuyla birlikte belirleyip kaldır. Oyuncunun diğer dosyalarına dokunma.</li><li>AnyDesk bağlantısını kapat.</li><li>Kanıtı ve sonucu hile kanıt kanalına raporla. Süreyi <a href="#guide/penalties">mod ve ceza tablosuna</a> göre belirle.</li></ol>
  <div class="process-rule"><strong>Görüntü / bilgi modları</strong><p>Freecam, ESP, X-Ray ve benzeri modların yalnızca kontrolde görülmesi ban sebebi değildir. Oyunda kullanım tespitinde ilgili modun tablodaki süresi uygulanır.</p></div>
  <div class="process-end-actions"><a href="#report" class="primary-btn">Hile kanıtı oluştur ${icon('arrow')}</a><a href="#checklist" class="outline-btn">Rapor kontrol listesi ${icon('check')}</a></div>
 `}
];
function controlProcessPage(){return heading('PC hile kontrol süreci','Önce AtlasAC taramasını başlat; tarama sürerken diğer kontrollerle devam et.')+`<nav class="process-index" aria-label="Kontrol süreci bölümleri">${processSections.map((section,i)=>`<a href="#process/${section.id}"><span>0${i+1}</span><strong>${section.title}</strong></a>`).join('')}</nav><div class="article-layout process-layout"><div class="process-chapters">${processSections.map((section,i)=>`<details class="process-chapter" id="${section.id}" ${i===0?'open':''}><summary><span class="guide-number">0${i+1}</span><span><strong>Bölüm ${i+1} · ${section.title}</strong><small>${section.summary}</small></span></summary><div class="process-content">${section.body()}</div></details>`).join('')}</div><aside class="panel aside-panel"><h3>Kontrol sırası</h3>${processSections.map((section,i)=>`<a href="#process/${section.id}">0${i+1} &nbsp; ${section.title}</a>`).join('')}<div class="aside-separator"><a href="#tools">Uygulama bilgileri →</a><a href="#guide/penalties">Yasaklı modlar ve cezaları →</a><a href="#report">Hile kanıtı oluştur →</a></div></aside></div>`;}
document.addEventListener('click',async e=>{const button=e.target.closest('[data-process-copy]');if(!button)return;const key=button.dataset.processCopy;if(!Object.hasOwn(processCommands,key))return;const ok=await copyText(processCommands[key]);if(!ok){const node=document.getElementById('process-code-'+key);const range=document.createRange();range.selectNodeContents(node);const selection=getSelection();selection.removeAllRanges();selection.addRange(range);}});

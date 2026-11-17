'use strict';
const icons={triangle:'<path d="m9 5 11 7-11 7z"/>',home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',book:'<path d="M12 5C8 2 3 3 3 3v16s5-1 9 2c4-3 9-2 9-2V3s-5-1-9 2Zm0 0v16"/>',play:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="m10 8 6 4-6 4z"/>',check:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="m7 12 3 3 7-7"/>',layers:'<path d="m12 3 10 5-10 5L2 8zM2 12l10 5 10-5M2 16l10 5 10-5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',external:'<path d="M7 17 17 7M7 7h10v10"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',copy:'<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'};
const icon=name=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||icons.book}</svg>`;
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clips=[
  {
    "id": 1,
    "file": "Örnek-Hile-Klipleri/8d49bb07-d3a2-4464-9506-9bb1f47ad67d-ses-v1.mp4",
    "duration": 31,
    "poster": "assets/posters/clip-1.jpg",
    "title": "Hile örneği 01",
    "summary": "Zaman işaretlerinden ilgili bölümlere geçerek kaydı inceleyebilirsin.",
    "observations": [
      {
        "time": 0,
        "label": "Arazi görünümü",
        "text": "Obsidyenler görünürken aralarındaki geniş alanlar boş görünüyor."
      },
      {
        "time": 11.1,
        "label": "Dövüş bölümü",
        "text": "Kamera yön değiştirirken oyuncuların hareketini ve saldırı dizisini birlikte izle."
      },
      {
        "time": 30,
        "label": "Sahne değişimi",
        "text": "Kayıt sonunda alan değişiyor. Önceki dövüş dizisini bu noktaya kadar takip edebilirsin."
      }
    ],
    "discord": {
      "kind": "Dosya kimliği eşleşti",
      "date": "14 Kasım 2026 · 17:40",
      "recordTitle": "Atlas Oyuncu · 14.11 17:36:11",
      "report": "Önceki raporda LEjYONER25 için kont red yazıyor. Ek dosyanın kimliği birebir eşleşti; raporla ilişki aynı gönderim dizisine dayanıyor.",
      "url": "https://discord.com/channels/1225920047625797814/1279352655625457754"
    },
    "focus": "Zaman işaretlerinden ilgili bölümlere geçebilir, oynatma hızını düşürerek ayrıntılara bakabilirsin.",
    "status": "Hile örneği",
    "verificationSource": "Uzman AAC tarafından hile örneği olarak sağlandı.",
    "music": {
      "title": "Mozart · Eine kleine Nachtmusik",
      "file": "assets/music/nachtmusik.mp3",
      "composer": "Wolfgang Amadeus Mozart",
      "performer": "",
      "source": "https://commons.wikimedia.org/wiki/File:Mozart_K525_Serenade_in_G_Major_1_-_Allegro.ogg",
      "license": "Public domain",
      "licenseURL": "",
      "changes": ""
    }
  },
  {
    "id": 2,
    "file": "Örnek-Hile-Klipleri/93dcbad8-268b-4ddf-8688-5fd32ce9f59b-ses-v1.mp4",
    "duration": 22,
    "poster": "assets/posters/clip-2.jpg",
    "title": "Hile örneği 02",
    "summary": "Zaman işaretlerinden ilgili bölümlere geçerek kaydı inceleyebilirsin.",
    "observations": [
      {
        "time": 5.9,
        "label": "Yakınlaşma",
        "text": "Rakibin yaklaşmasını, zıplamasını ve yön değiştirmesini takip et."
      },
      {
        "time": 7.8,
        "label": "Vuruş dizisi",
        "text": "Saldırı ve hasar anlarını 0,25× hızda karşılaştır; hedef takibini aynı anda izle."
      },
      {
        "time": 15.8,
        "label": "Son dövüş anları",
        "text": "Son vuruş dizisinde bakış yönü, hareket ve saldırı zamanlamasına odaklan."
      }
    ],
    "discord": {
      "kind": "Dosya kimliği eşleşti",
      "date": "12 Kasım 2026 · 20:37",
      "recordTitle": "PvP bitirişi · Atlas Oyuncu · 12.11 20:20:24",
      "report": "Önceki raporda nbrknk için kont kaçış yazıyor. Dosya kimliği birebir eşleşti.",
      "url": "https://discord.com/channels/1225920047625797814/1279352655625457754"
    },
    "focus": "Zaman işaretlerinden ilgili bölümlere geçebilir, oynatma hızını düşürerek ayrıntılara bakabilirsin.",
    "status": "Hile örneği",
    "verificationSource": "Uzman AAC tarafından hile örneği olarak sağlandı.",
    "music": {
      "title": "Beethoven · Für Elise",
      "file": "assets/music/fur-elise.mp3",
      "composer": "Ludwig van Beethoven",
      "performer": "",
      "source": "https://commons.wikimedia.org/wiki/File:FurElise.ogg",
      "license": "Public domain",
      "licenseURL": "",
      "changes": "50-second MP3 excerpt; normalized loudness; 0.5-second fade-in"
    }
  },
  {
    "id": 3,
    "file": "Örnek-Hile-Klipleri/Atlas Client _ Minecraft 1.21.11 2026-11-12 19-17-04 - Trim-ses-v1.mp4",
    "duration": 5,
    "poster": "assets/posters/clip-3.jpg",
    "title": "Hile örneği 03",
    "summary": "Zaman işaretlerinden ilgili bölümlere geçerek kaydı inceleyebilirsin.",
    "observations": [
      {
        "time": 1.7,
        "label": "İksir seçimi",
        "text": "Hotbar seçimi kılıçtan iyileştirme iksirine geçiyor; can düşük."
      },
      {
        "time": 2.1,
        "label": "İksir atışı",
        "text": "İksir yere doğru gidiyor. Ardından seçili slot boşalıyor ve can yükseliyor."
      },
      {
        "time": 2.6,
        "label": "Envanter",
        "text": "Envanterin kısa açılışını ve bu sırada devam eden mücadeleyi birlikte incele."
      }
    ],
    "discord": {
      "kind": "Kesin dosya eşleşmesi yok",
      "date": "",
      "recordTitle": "",
      "report": "İncelenen mesajlarda bu dosyayla birebir eşleştirilebilen ek bulunmadı. Benzer oyuncu adı veya yakın saat tek başına eşleştirme sayılmadı.",
      "url": "https://discord.com/channels/1225920047625797814/1279352655625457754"
    },
    "focus": "Zaman işaretlerinden ilgili bölümlere geçebilir, oynatma hızını düşürerek ayrıntılara bakabilirsin.",
    "status": "Hile örneği",
    "verificationSource": "Uzman AAC tarafından hile örneği olarak sağlandı.",
    "music": {
      "title": "Vivaldi · İlkbahar",
      "file": "assets/music/spring.mp3",
      "composer": "Antonio Vivaldi",
      "performer": "John Harrison, keman · Wichita State University Chamber Players",
      "source": "https://commons.wikimedia.org/wiki/File:Vivaldi_-_Four_Seasons_1_Spring_mvt_1_Allegro_-_John_Harrison_violin.oga",
      "license": "CC BY-SA 4.0",
      "licenseURL": "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
      "changes": "50-second MP3 excerpt; normalized loudness; 0.5-second fade-in"
    }
  },
  {
    "id": 4,
    "file": "Örnek-Hile-Klipleri/AutoPot-ses-v1.mp4",
    "duration": 21,
    "poster": "assets/posters/clip-4.jpg",
    "title": "Hile örneği 04",
    "summary": "Zaman işaretlerinden ilgili bölümlere geçerek kaydı inceleyebilirsin.",
    "observations": [
      {
        "time": 6.5,
        "label": "İyileştirme öncesi",
        "text": "Hotbar ve can durumunu izle; boş slot seçimi de görülüyor."
      },
      {
        "time": 7.0,
        "label": "Peş peşe iksir",
        "text": "İyileştirme iksirleri kullanılıyor, hotbar slotları boşalırken can yükseliyor."
      },
      {
        "time": 18.9,
        "label": "İkinci kontrol noktası",
        "text": "Düşük can ve yeniden iksir seçimi görülüyor. İlk diziyle karşılaştırmak için duraklat."
      }
    ],
    "discord": {
      "kind": "Kesin dosya eşleşmesi yok",
      "date": "",
      "recordTitle": "",
      "report": "İncelenen mesajlarda bu dosyayla birebir eşleştirilebilen ek bulunmadı. Benzer oyuncu adı veya yakın saat tek başına eşleştirme sayılmadı.",
      "url": "https://discord.com/channels/1225920047625797814/1279352655625457754"
    },
    "focus": "Zaman işaretlerinden ilgili bölümlere geçebilir, oynatma hızını düşürerek ayrıntılara bakabilirsin.",
    "status": "Hile örneği",
    "verificationSource": "Uzman AAC tarafından hile örneği olarak sağlandı.",
    "music": {
      "title": "Chopin · Nocturne Op. 9 No. 2",
      "file": "assets/music/nocturne.mp3",
      "composer": "Frédéric Chopin",
      "performer": "Membeth",
      "source": "https://commons.wikimedia.org/wiki/File:Chopin.Nocturne.Es-Dur.opus.9.2.ogg",
      "license": "CC0",
      "licenseURL": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "changes": "50-second MP3 excerpt; normalized loudness; 0.5-second fade-in"
    }
  },
  {
    "id": 5,
    "file": "Örnek-Hile-Klipleri/b47e0333-5791-498c-b8c9-fe9d001a1f31-ses-v1.mp4",
    "duration": 21,
    "poster": "assets/posters/clip-5.jpg",
    "title": "Hile örneği 05",
    "summary": "Zaman işaretlerinden ilgili bölümlere geçerek kaydı inceleyebilirsin.",
    "observations": [
      {
        "time": 5.4,
        "label": "İlk doldurma",
        "text": "Hotbardaki boş iksir yuvaları, envanterin açıldığı bu aralıkta yeniden doluyor."
      },
      {
        "time": 11.2,
        "label": "Tekrarlanan doldurma",
        "text": "Boşalan hotbar yuvaları bir sonraki envanter açılışında tekrar dolduruluyor."
      },
      {
        "time": 16,
        "label": "Totemle kurtuluş",
        "text": "Totemin tetiklendiği anı, hotbar geçişlerini ve ardından gelen envanter açılışını takip et."
      },
      {
        "time": 18.8,
        "label": "Son envanter kontrolü",
        "text": "İksirler ve aktif etkiler görülebiliyor; seçilen slotlar ayrıca karşılaştırılabilir."
      }
    ],
    "discord": {
      "kind": "Dosya kimliği eşleşti",
      "date": "14 Kasım 2026 · 17:28",
      "recordTitle": "Totemle kurtuluş · Atlas Oyuncu · 14.11 17:22:01",
      "report": "Önceki raporda turkuz31692 için kont kaçış yazıyor. Dosya kimliği birebir eşleşti.",
      "url": "https://discord.com/channels/1225920047625797814/1279352655625457754"
    },
    "focus": "Zaman işaretlerinden ilgili bölümlere geçebilir, oynatma hızını düşürerek ayrıntılara bakabilirsin.",
    "status": "Hile örneği",
    "verificationSource": "Uzman AAC tarafından hile örneği olarak sağlandı.",
    "music": {
      "title": "Bach · Prelüd, BWV 846",
      "file": "assets/music/prelude.mp3",
      "composer": "Johann Sebastian Bach",
      "performer": "Kimiko Ishizaka",
      "source": "https://commons.wikimedia.org/wiki/File:Kimiko_Ishizaka_-_Bach_-_Well-Tempered_Clavier,_Book_1_-_01_Prelude_No._1_in_C_major,_BWV_846.ogg",
      "license": "CC0",
      "licenseURL": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "changes": "50-second MP3 excerpt; normalized loudness; 0.5-second fade-in"
    }
  },
  {
    "id": 6,
    "file": "Örnek-Hile-Klipleri/5ebaebbd-30e9-4d06-a4fc-fc17fd56ee65-ses-v1.mp4",
    "duration": 21,
    "poster": "assets/posters/clip-6.jpg",
    "title": "PvP bitirişi · Atlas Oyuncu · 15.11 01:34:54",
    "summary": "Oynatma hızını düşürerek kaydı inceleyebilir, zaman işaretinden bitiriş anına geçebilirsin.",
    "observations": [
      {
        "time": 15.544676922999997,
        "label": "PvP bitiriş işareti",
        "text": ""
      }
    ],
    "focus": "",
    "status": "Hile örneği",
    "music": {
      "title": "Mozart · Senfoni No. 40",
      "file": "assets/music/symphony-40.mp3",
      "composer": "Wolfgang Amadeus Mozart",
      "performer": "Musopen Symphony",
      "source": "https://commons.wikimedia.org/wiki/File:Mozart_-_Symphony_No._40_in_G_minor,_K550_-_I._Molto_allegro_(Musopen_Symphony).flac",
      "license": "Public domain",
      "licenseURL": "",
      "changes": "50-second MP3 excerpt; normalized loudness; fade-in"
    }
  }
];
const pages={updates:'Güncellemeler',pc:'AtlasAC',process:'PC kontrol süreci',report:'Hile kanıtı oluştur',home:'Genel bakış',guide:'AAC rehberi',clips:'Örnek arşivi',tools:'Kontrol uygulamaları',quiz:'Uygulama testi',mobile:'AtlasAC Mobil',checklist:'İnceleme listesi'};
const modPenalties=[
  [
    "Schematica Printer",
    3
  ],
  [
    "Litematica Easy Place",
    3
  ],
  [
    "Shield Disable",
    3
  ],
  [
    "Elytra / Spear / Mace … Swapper",
    3
  ],
  [
    "Auto Totem",
    7
  ],
  [
    "Auto Armor",
    3
  ],
  [
    "Auto Swap",
    3
  ],
  [
    "Anti-Invisibility",
    3
  ],
  [
    "Chest Finder",
    5
  ],
  [
    "Storage ESP",
    3
  ],
  [
    "Cave Finder",
    3
  ],
  [
    "Auto Tool",
    3
  ],
  [
    "Auto Refill",
    3
  ],
  [
    "Auto Shield Breaker",
    7
  ],
  [
    "X-Ray",
    7
  ],
  [
    "Freecam",
    7
  ]
];
const visualInfoMods=new Set(['Anti-Invisibility','Chest Finder','Storage ESP','Cave Finder','X-Ray','Freecam']);
const inGameUsageMods=new Set([...visualInfoMods,'Schematica Printer','Litematica Easy Place']);
const penaltyBody=`<p>Listede yer alan modlar için aşağıdaki uzaklaştırma sürelerini uygula.</p><p class="visual-mod-rule"><strong>Görüntü ve bilgi modları:</strong> Freecam, ESP, X-Ray ve benzeri modlar yalnızca kontrolde görüldüğü için ban uygulanmaz. Oyunda kullanım tespit edildiğinde ilgili modun tablodaki uzaklaştırma süresi uygulanır.</p><p class="visual-mod-rule"><strong>Schematica Printer ve Litematica Easy Place:</strong> Sadece kontrolde mod veya dosyasının bulunması ceza için yeterli değildir. <strong>Oyunda kullanım tespiti gerekir.</strong> Kullanım tespit edildiğinde her ikisi için de <strong>3 gün</strong> uzaklaştırma uygulanır.</p><table class="penalty-table"><caption>Yasaklı modların uzaklaştırma süreleri</caption><thead><tr><th scope="col">Yasaklı mod</th><th scope="col">Uzaklaştırma</th></tr></thead><tbody>${modPenalties.map(([name,days])=>`<tr><th scope="row"><span>${escapeHTML(name)}</span>${inGameUsageMods.has(name)?'<small class="penalty-condition">Oyunda kullanım tespiti gerekir</small>':''}</th><td><strong>${days} gün</strong></td></tr>`).join('')}</tbody></table><div class="client-penalty"><strong>Diğer hile clientleri: 30 gün</strong><p>Wurst, Meteor ve bu listede ayrı süre belirtilmeyen diğer hile clientleri 30 gün uzaklaştırma sebebidir.</p></div>`;
const guides=[
  {
    id:'team',title:'Üst yetkililer ve AAC kadrosu',
    text:'Üst yetkili isteği AAC kadro '+seniorTeam.concat(aacTeam).map(name=>'@'+name).join(' '),
    body:`<p>Kullanıcı adına tıklayarak kopyalayabilirsin. Kanıt hazırlarken <a href="#report">hızlı doldurma listesinden</a> de seçim yapabilirsin.</p><h3>Üst yetkililer</h3>${staffRoster(seniorTeam)}<h3>AAC kadrosu</h3>${staffRoster(aacTeam)}`
  },
  {
    "id": "commands",
    "title": "Kontrol komutları",
    "text": "freeze tempban alts history grim profile hesap komutlar",
    "body": "<p>Kontrole başlamadan önce kullandığımız komutların ne yaptığını bil. Özellikle freeze ve tempban komutlarını yalnızca görev kapsamında kullan.</p><ul><li><code>/freeze [nick] [Sebep] [Oyun Modu]</code> — Oyuncuyu dondurur veya mevcut freeze durumunu kaldırır. Oyuncu bu sırada hareket edemez, komut kullanamaz; sohbetten yazabilir. Freeze sırasında oyundan çıkarsa otomatik yasaklanır.</li><li><code>/tempban [nick] [Süre] [Sebep]</code> — Süreli yasaklama uygular. Yasaklı modlarda süreyi ceza tablosundan seç: <code>3d</code>, <code>5d</code> veya <code>7d</code>. Wurst, Meteor ve tabloda ayrı süre belirtilmeyen diğer hile clientleri için <code>30d</code> kullan. <a href=\"#guide/penalties\">Mod ve ceza tablosuna bak →</a></li><li><code>/alts [nick]</code> — Aynı IP adresindeki hesapları gösterir.</li><li><code>/history [nick]</code> — Oyuncunun ceza ve kick geçmişini gösterir.</li><li><code>/grim profile [nick]</code> — Oyuncunun ping ve client bilgilerini gösterir.</li><li><code>/hesap [nick]</code> — Hesabın ilk giriş ve hesap bilgilerini gösterir.</li></ul><p>Komutları amaçları dışında kullanmak, yetkilinin sınırsız yasaklanmasına neden olur.</p>"
  },
  {
    "id": "freeze-conditions",
    "title": "Oyuncuyu ne zaman kontrole alırız?",
    "text": "48 saat 4 kick 3 şikayet reach 3.8 ping 200 üst yetkili",
    "body": "<p>Bir oyuncuyu kontrole almak için aşağıdaki gerekçelerden en az biri bulunmalı:</p><ul><li><strong>Kick geçmişi:</strong> Son 48 saat içinde en az 4 kick.</li><li><strong>Şikâyet:</strong> En az 3 oyuncu şikâyeti. Hemen kontrole çekmek yerine önce yanına git ve vuruşlarını izle.</li><li><strong>Video:</strong> Hile kullanımını net gösteren bir kayıt. Emin olmadığın kaydı işlemden önce Hile Kontrol Uzmanına danış.</li><li><strong>Grim:</strong> Yalnız Grim verisine dayanıyorsan reach en az 3,8 blok ve ping en fazla 200 olmalı. İki koşul birlikte aranır.</li><li><strong>Üst yetkili yönlendirmesi:</strong> Hile Kontrol Uzmanı, Moderatör, Admin veya diğer üst yetkililerin talebi.</li></ul><p>Sadece geçmişte banlı alt hesabı bulunması, oyuncuyu kontrole almak için yeterli değildir. Banın hemen ardından başka hesapla geri dönme durumu ise alt ban kapsamında ayrıca değerlendirilir.</p>"
  },
  {
    "id": "client",
    "title": "Client bilgisini kontrol et",
    "text": "client grim profile atlasclient grim-bildiri",
    "body": "<p>Yasaklamadan önce <code>/grim profile [nick]</code> ile oyuncunun client ve ping bilgilerine bak. Oyuncunun üstünde AtlasClient yazmasıyla yetinme; komut çıktısını kontrol et.</p><p>Client bilgisine önceden bakmadıysan ve oyuncu Grim bildirisi düşürdüyse grim-bildiri kanalındaki kaydını incele. Raporun client alanını gördüğün bilgiyle doldur.</p>"
  },
  {
    "id": "penalties",
    "title": "Yasaklı modlar ve cezaları",
    "text": "yasaklı mod ceza süre gün ban Wurst Meteor hile client XRay ESP görüntü bilgi kontrolde ban yok Schematica Printer Litematica Easy Place Shield Disable Elytra / Spear / Mace … Swapper Auto Totem Auto Armor Auto Swap Anti-Invisibility Chest Finder Storage ESP Cave Finder Auto Tool Auto Refill Auto Shield Breaker X-Ray Freecam",
    "body": penaltyBody
  },
  {
    "id": "evidence",
    "title": "Kanıtı ve sonucu kaydet",
    "text": "hile kanıt rapor temiz kont red kont kaçış itiraf",
    "body": "<p>Kontrolün ardından raporu hile kanıt kanalına gönder. Oyuncunun adını, kontrol sebebini, kontrolü yapan yetkiliyi, client bilgisini, sonucu ve saati eksiksiz yaz.</p><p>Rapor kısa, tarafsız ve anlaşılır olsun. Yasaklama varsa sebebiyle birlikte kanıtını ekle. Kontrol reddi, kontrolden kaçış ve hile itirafını birbirine karıştırma.</p><p><a href=\"#clips\">İtiraf ve kontrol reddi örneklerini incele →</a></p>"
  },
  {
    "id": "report",
    "title": "Raporu nasıl doldururuz?",
    "text": "oyuncu nick kontrol nedeni saat rapor şablon",
    "body": "<ul><li><strong>Oyuncu Nick:</strong> Oyun içindeki tam ad.</li><li><strong>Kontrol Alma Nedeni:</strong> Gerekçe ve ilgili sayı. Örneğin 4 Kick / 3 Şikayet.</li><li><strong>İşlem Uygulayan AAC Yetkilisi:</strong> Oyuncuyu kontrole alan yetkilinin etiketi.</li><li><strong>Oyuncunun Oynadığı Client:</strong> Kontrol ettiğin client bilgisi.</li><li><strong>Yasaklanma Sebebi ve Kanıtı:</strong> Sonuç, açıklama ve kanıt. Oyuncu temiz çıktıysa <code>temiz</code>; freezedeyken oyundan ayrıldıysa <code>freeze oto ban</code> yaz. Üst yetkili yönlendirmesinde <code>Üst Yetkili</code> yazıp ilgili kişiyi etiketle.</li><li><strong>Saat:</strong> Oyuncunun kontrole alındığı saat.</li></ul><p>Üst yetkili talebiyle yapılan kontrollerde ikinci alanı <code>[Yönlendiren Üst Yetkili: @Yetkili]</code> şeklinde doldur.</p><h3>Hile kanıtı mesajı</h3><pre class=\"evidence-format\">[OyuncuNick]\n[kayıt]\n[işlem uygulayan aac: @Yetkili]\n[fabric]\n[hile kullanımı]\n[18:09]</pre><p><a href=\"#report\">Hile kanıtı oluştur →</a></p>"
  },
  {
    "id": "rules",
    "title": "Kontrolde dikkat edeceğimiz noktalar",
    "text": "fastxp format bir ay temiz mobil kontrol",
    "body": "<ul><li>Freecam, ESP, X-Ray ve benzeri görüntü / bilgi modları yalnızca kontrolde görüldüğünde ban uygulama. Oyunda kullanım tespit edildiğinde ilgili modun süresini <a href=\"#guide/penalties\">ceza tablosundan</a> kontrol et. FastXP için ban uygulamıyoruz.</li><li>Elinde video olsa bile oyuncuyu kontrole almadan doğrudan ban atma.</li><li>Oyuncudan kontrol veya ban açılması için bilgisayarına format atmasını isteme.</li><li>Hile tamamen silinmiş ve üzerinden en az bir ay geçmişse temiz olarak değerlendir. Yeni tarihli kullanım, kalıntı ve silinme durumlarını bu koşulla karıştırma.</li><li>Mobil ve PC kontrol süreçlerini ayrı tut.</li><li>Kararsız kaldığın durumu üst yetkiliyle görüş; eksik bilgiyi tahminle tamamlama.</li></ul>"
  },
  {
    "id": "pc-process",
    "title": "PC kontrolünün sırası",
    "text": "Everything Journal Tool JournalTrace LastActivityView BrowserDownloadsView USBDeview WinPrefetchView",
    "body": "<p>Kontrolü dört bölümde yürüt: bağlantı ve sistem kayıtları; Minecraft dizinleri; dosya hareketleri; tarayıcı / etkinlik / USB kayıtları ve raporlama.</p><ol><li>AnyDesk bağlantısını kur; ilk olarak AtlasAC’yi açıp taramayı başlat. AtlasAC arka planda çalışırken diğer araçları hazırla ve kontrolüne devam et.</li><li>Kurulum, önyükleme, USN ve servis durumlarını kaydet.</li><li>Gerçek oyun dizinini ve dosya hareketlerini incele.</li><li>İndirme, ziyaret, etkinlik ve USB kayıtlarını zamanlarıyla karşılaştır.</li><li>AtlasAC taraması tamamlandığında sonuçları ve taranamayan kaynakları incele; diğer bulgularla karşılaştır. Gerekiyorsa JSON raporunu kaydet.</li><li>Kontrolü bitir ve kanıt metnini hazırla.</li></ol><p><a href=\"#process\">Dört bölümlük PC kontrol sürecini aç →</a></p>"
  },
  {
    "id": "cheat-types",
    "title": "Örnek kayıtları nasıl incelemeliyiz?",
    "text": "hile örnekleri itiraf kont red video zaman işaretleri",
    "body": "<p>Önce kayıt sahibini ve incelenen oyuncuyu ayır. Şüpheli anı normal hızda gör, öncesine dönüp yavaş hızda karşılaştır. Nişan, hasar ve eşya geçişlerini aynı zaman aralığında takip et.</p><p>Her davranış için neye bakılacağını tek bir rehberde topladım.</p><button type=\"button\" class=\"outline-btn\" data-review>Kayıt inceleme rehberini aç →</button>"
  }
];
const checks=[
 ['nick','Oyuncunun oyun içi adını kaydet','Raporun Oyuncu Nick alanını doldur.'],
 ['reason','Kontrole alma nedenini ve sayıyı belirt','Sebebi, varsa kick / şikâyet sayısıyla birlikte yaz.'],
 ['staff','Kontrolü yapan AAC yetkilisini etiketle','İşlemi uygulayan kişiyi raporda belirt.'],
 ['client','Client bilgisini kontrol et','Yasaklamadan önce /grim profile; bakılmadıysa grim-bildiri kaydı.'],
 ['evidence','Sonuç, sebep ve kanıtı ekle','Duruma göre temiz, freeze oto ban veya Üst Yetkili sonucunu yaz.'],
 ['time','Kontrole alınma saatini ve raporu tamamla','Saati ekle; düzenli, tarafsız raporu hile kanıt kanalına gönder.']
];
let storageOK=true;
let checked=[];
try{const saved=JSON.parse(localStorage.getItem('aac-wiki-checks')||'[]');if(Array.isArray(saved))checked=saved.filter(x=>checks.some(c=>c[0]===x));}catch{storageOK=false;}
let clipFilter='all';
const duration=n=>`${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`;
const heading=(title,desc,action='')=>`<div class="page-heading"><div><h1>${title}</h1><p>${desc}</p></div>${action}</div>`;
const notice=()=>'';
function clipCard(c){return `<article class="clip-card"><button class="clip-poster" data-watch="${c.id}" aria-label="${escapeHTML(c.title)} kaydını aç"><img src="${c.poster}" alt="" loading="lazy"><span class="clip-index">VİDEO / ${String(c.id).padStart(2,'0')}</span><span class="play-circle">${icon('triangle')}</span><span class="duration">${duration(c.duration)}</span></button><div class="clip-body"><span class="tag">Hile örneği</span><h3>${escapeHTML(c.title)}</h3><div class="clip-meta"><span>${duration(c.duration)} · Video</span><button data-watch="${c.id}">Kaydı izle ${icon('arrow')}</button></div></div></article>`;}
function home(){return `<section class="wiki-cover" aria-labelledby="wiki-title"><video class="wiki-cover-video" id="ambient-video" muted loop playsinline preload="none" poster="assets/brand/atlas-background.webp" aria-hidden="true" tabindex="-1" data-src="assets/brand/atlas-background.mp4"></video><div class="wiki-cover-copy"><span class="cover-kicker"><i></i> ATLASOYUNCU · AAC REHBERİ</span><h1 id="wiki-title">Kontrolün her adımı,<br><span>aynı yerde.</span></h1><p>Kontrol notları, uygulamalar, örnek kayıtlar.<br>İhtiyacın olan bölümü seç, kaldığın yerden devam et.</p><div class="cover-actions"><a class="primary-btn" href="#guide">Rehberi aç ${icon('arrow')}</a><a class="outline-btn" href="#report">Hile kanıtı oluştur ${icon('copy')}</a></div><div class="cover-links"><a href="#clips">${clips.length} video · ${imageExamples.length} görsel ↗</a><a href="#quiz">8 soruluk uygulama testi ↗</a></div></div></section>
<section class="home-updates" aria-labelledby="home-updates-title"><div class="section-heading"><h2 id="home-updates-title">Güncellemeler</h2><a class="small-link" href="#updates">Tümünü gör →</a></div><div class="home-update-grid"><a class="home-update-card" href="#updates/atlasac"><img src="assets/updates/atlasac-pc-duyuru.png" width="1672" height="941" alt="AtlasAC duyuru afişi" loading="lazy" decoding="async"><span><small>WINDOWS · LINUX</small><strong>AtlasAC yayında</strong><span>İndirme ve kullanım rehberi →</span></span></a><a class="home-update-card" href="#updates/mobile"><img src="assets/updates/atlasac-mobil-4.7-duyuru.png?v=dosya1" width="1536" height="1024" alt="AtlasAC Mobil dosya inceleme afişi" loading="lazy" decoding="async"><span><small>ANDROID · 4.7</small><strong>AtlasAC Mobil yenilendi</strong><span>Yeni özellikler ve APK indir →</span></span></a></div></section>
<div class="wiki-columns"><section class="wiki-index" aria-labelledby="contents-title"><h2 id="contents-title">İçindekiler</h2>${[
 ['01','guide','AAC rehberi','Komutlar, kontrole alma şartları ve kontrol süreci.'],
 ['02','process','PC kontrol süreci','Önce AtlasAC taraması, ardından diğer kontroller.'],
 ['03','tools','Kontrol uygulamaları','Paketteki 8 uygulamanın ne işe yaradığı.'],
 ['04','pc','AtlasAC','Windows ve Linux için indirme ve adım adım kullanım.'],
 ['05','mobile','AtlasAC Mobil','Adım adım tarama, dosya içeriği ve kırmızı vurgu rehberi.'],
 ['06','clips','Örnek arşivi',`${clips.length} hile videosu, hile itirafı ve kontrol reddi.`],
 ['07','report','Hile kanıtı oluştur','Kanıt kanalına uygun metni hazırla ve kopyala.'],
 ['08','quiz','Uygulama testi','Her uygulama için bir soru. Toplam 8 soru.'],
 ['09','checklist','Rapor kontrolü','Raporu göndermeden önce kontrol edilecekler.'],
 ['10','updates','Güncellemeler','AtlasAC ve AtlasAC Mobil afişleri ve yenilikleri.']
 ].map(([n,url,title,desc])=>`<a class="wiki-index-row" href="#${url}"><span class="entry-number">${n}</span><div><h3>${title}</h3><p>${desc}</p></div><span class="entry-arrow" aria-hidden="true">↗</span></a>`).join('')}</section>
<aside class="wiki-quick-notes"><h2>Sık bakılanlar</h2><a href="#guide/freeze-conditions">Hangi durumda kontrole alınır? <span>↗</span></a><a href="#guide/commands">AAC komutları <span>↗</span></a><a href="#guide/penalties">Yasaklı modlar ve cezaları <span>↗</span></a><a href="#report">Hile kanıtı oluştur <span>↗</span></a><div class="wiki-margin-note"><h3>Örnek kayıtlar</h3><p>Videoları yavaşlatarak izleyebilirsin. İtiraf ve kontrol reddi görselleri de aynı arşivde.</p><a href="#clips">Arşivi aç →</a></div></aside></div>
<section class="home-example-section"><div class="section-heading"><h2>Örneklerden birkaçı</h2><a class="small-link" href="#clips">Hepsini gör →</a></div><div class="clips-grid home-clips">${clipCard(clips[3])+imageExamples.map(imageExampleCard).join('')}</div></section>`;}
function guide(){return heading('AAC rehberi','Kontrole başlamadan raporu tamamlayana kadar bilmen gerekenler.')+`<div class="article-layout"><div><div class="guide-actions"><span>${guides.length} başlık</span><button type="button" data-guide-expand="true">Tümünü aç</button><button type="button" data-guide-expand="false">Tümünü kapat</button></div><div class="guide-sections">${guides.map((g,i)=>`<details class="guide-section" id="${g.id}" ${i===0?'open':''}><summary><span class="guide-number">0${i+1}</span>${g.title}</summary><div class="guide-content">${g.body}</div></details>`).join('')}</div><section class="guide-evidence-link"><div><h2>Hile kanıtını hazırla</h2><p>Oyuncu, yetkili ve kontrol bilgilerini girip kanıt kanalına uygun metni kopyala.</p></div><a href="#report" class="primary-btn">Kanıt oluştur ${icon('arrow')}</a></section></div><aside class="panel aside-panel"><h3>Bu rehberde</h3>${guides.map((g,i)=>`<a href="#guide/${g.id}">0${i+1} &nbsp; ${g.title}</a>`).join('')}<div class="aside-separator"><p>Raporunu göndermeden önce kontrol listesinden son kez geç.</p><a href="#checklist">Kontrol listesine git →</a></div></aside></div>`;}
function clipPage(){const videos=clipFilter==='all'||clipFilter==='videos';const images=imageExamples.filter(e=>clipFilter==='all'||clipFilter===e.id);const count=(videos?clips.length:0)+images.length;return heading('Örnek arşivi','Hile kayıtları, hile itirafı ve kontrol reddi örnekleri.',`<button class="outline-btn" type="button" data-review>Kaydı nasıl incelemeliyim? ${icon('book')}</button>`)+`<div class="filterbar"><div class="filter-pills" aria-label="Örnek türleri">${[['all','Tümü',clips.length+imageExamples.length],['videos','Hile videoları',clips.length],['confession','Hile itirafı',1],['refusal','Kont red',1]].map(([key,label,n])=>`<button data-filter="${key}" class="${clipFilter===key?'selected':''}" aria-pressed="${clipFilter===key}">${label}<span>${n}</span></button>`).join('')}</div><span class="result-count">${count} örnek</span></div>${images.length?`<section class="archive-section"><div class="section-heading"><h2>Sohbetten örnekler</h2><span class="eyebrow">${images.length} GÖRSEL</span></div><div class="image-examples-grid">${images.map(imageExampleCard).join('')}</div></section>`:''}${videos?`<section class="archive-section"><div class="section-heading"><h2>Hile video arşivi</h2><span class="eyebrow">${clips.length} VİDEO</span></div><div class="clips-grid">${clips.map(clipCard).join('')}</div></section>`:''}`;}
function checklist(){return heading('Rapor kontrol listesi','Raporunu göndermeden önce altı alanı sırayla kontrol et.')+`<div class="article-layout"><section class="panel"><div class="progress-header"><strong>Rapor hazırlığı</strong><span id="progress-label"></span></div><div class="progress-track" role="progressbar" aria-label="Tamamlanan rapor alanları" aria-valuemin="0" aria-valuemax="6" aria-valuenow="0"><div id="progress-fill"></div></div><div class="check-list">${checks.map(([id,title,desc])=>`<label class="check-item"><input type="checkbox" data-check="${id}" ${checked.includes(id)?'checked':''}><span><strong>${title}</strong><small>${desc}</small></span></label>`).join('')}</div><div class="check-actions"><button class="primary-btn" id="copy-checklist">${icon('copy')} Kontrol özetini kopyala</button><button class="outline-btn" id="reset-checklist">Yeni inceleme</button></div><p id="storage-note" style="margin-top:18px;font-size:10px">${storageOK?'İşaretler yalnızca bu tarayıcıda tutulur. Yeni incelemede listeyi sıfırla.':'Tarayıcı kaydı kullanılamıyor. İşaretler yalnızca bu oturumda tutulur.'}</p></section><aside class="panel aside-panel"><h3>Eksiksiz raporlama</h3><p>Bu liste rapor alanlarını takip etmene yardımcı olur. Karar ve uygulama için sunucunun güncel yönergelerini esas al.</p><div class="aside-separator"><a href="#guide/report">Rapor formatını incele →</a></div></aside></div>${notice()}`;}
function closeMenu(){document.getElementById('sidebar').classList.remove('open');document.getElementById('scrim').hidden=true;document.getElementById('menu-toggle').setAttribute('aria-expanded','false');}
function route(){document.getElementById('ambient-video')?.pause();const [requested,section]=location.hash.slice(1).split('/');const page=Object.hasOwn(pages,requested)?requested:'home';document.getElementById('main').innerHTML=({home,guide,clips:clipPage,checklist,report:evidencePage,process:controlProcessPage,...learningPages})[page]();document.getElementById('breadcrumb-page').textContent=pages[page];document.title=`${pages[page]} · AAC Wiki`;document.dispatchEvent(new Event('aac:route'));document.querySelectorAll('nav a').forEach(a=>{a.classList.toggle('active',a.dataset.page===page);if(a.dataset.page===page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});closeMenu();if(page==='checklist')updateProgress();if(page==='report')updateEvidence();if(section&&page==='tools'){const el=document.getElementById('tool-'+section);if(el)el.scrollIntoView({block:'start'});}else if(section&&page==='pc'){document.getElementById('pc-'+section)?.scrollIntoView({block:'start'});}else if(section&&page==='updates'){document.getElementById('update-'+section)?.scrollIntoView({block:'start'});}else if(section&&page==='mobile'){document.getElementById('mobile-'+section)?.scrollIntoView({block:'start'});}else if(section&&(page==='guide'||page==='process')){const el=document.getElementById(section);if(el&&el.matches('details')){el.open=true;el.scrollIntoView({block:'start'});}}else window.scrollTo(0,0);}
function updateProgress(){const count=checked.length;document.getElementById('progress-label').textContent=`${count} / ${checks.length} tamamlandı`;document.getElementById('progress-fill').style.width=`${count/checks.length*100}%`;document.querySelector('[role="progressbar"]').setAttribute('aria-valuenow',String(count));}
function persistChecks(){try{localStorage.setItem('aac-wiki-checks',JSON.stringify(checked));}catch{storageOK=false;const el=document.getElementById('storage-note');if(el)el.textContent='Tarayıcı kaydı kullanılamıyor. İşaretler yalnızca bu oturumda tutulur.';}}
let toastTimer;
function toast(message){const t=document.getElementById('toast');t.textContent=message;t.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.hidden=true,3500);}
async function copyText(text){try{if(!navigator.clipboard)throw new Error('unavailable');await navigator.clipboard.writeText(text);toast('Panoya kopyalandı.');return true;}catch{const field=document.createElement('textarea');field.value=text;field.style.cssText='position:fixed;left:-9999px';document.body.append(field);field.select();let ok=false;try{ok=document.execCommand('copy');}catch{}field.remove();toast(ok?'Panoya kopyalandı.':'Otomatik kopyalama kullanılamıyor. Metni seçip kopyalayabilirsin.');return ok;}}
function watch(id){const c=clips.find(c=>c.id===Number(id));if(!c)return;const d=document.getElementById('video-dialog'),v=document.getElementById('video-player');document.getElementById('video-title').textContent=c.title;v.src=c.file;v.poster=c.poster;v.playbackRate=1;document.getElementById('video-speed').value='1';document.getElementById('video-note').textContent=c.summary;document.getElementById('video-analysis').innerHTML=`<h3>İşaretli anlar</h3><div class="timeline">${c.observations.map(o=>`<button class="timeline-item" data-seek="${o.time}"><span class="timestamp">${Math.floor(o.time/60)}:${(o.time%60).toFixed(2).padStart(5,'0')}</span><span><strong>${escapeHTML(o.label)}</strong></span>${icon('play')}</button>`).join('')}</div>`;document.getElementById('video-download').href=c.file;prepareMusic(c.music);d.showModal();v.focus();}
const searchItems=[...processSections.map(section=>({title:section.title,text:section.text,href:'#process/'+section.id,kind:'Kontrol süreci',icon:'layers'})),...controlTools.map(t=>({title:t.name,text:t.description,href:'#tools/'+t.id,kind:'Uygulama',icon:'layers'})),...imageExamples.map(e=>({title:e.title,text:e.description,href:'#clips',image:e.id,kind:'Görsel',icon:'layers'})),...Object.entries(pages).map(([id,title])=>({title,text:id==='home'?'Ana sayfa, hızlı erişim':id==='clips'?'Video, hile, kayıt kütüphanesi':id==='checklist'?'Rapor alanları, kontrol listesi':id==='mobile'?'AtlasAC Mobil Android APK JAR ZIP dosya içeriği kırmızı vurgu kullanım rehberi':id==='updates'?'AtlasAC ve AtlasAC Mobil güncellemeler afiş duyuru yenilikler':id==='pc'?'AtlasAC Windows Linux tarama Sonuçlar PowerShell Journal JSON indir kullanım':'Freeze, tempban, client, kanıt, raporlama',href:`#${id}`,kind:'Sayfa',icon:id==='clips'?'play':'book'})),...guides.map(g=>({title:g.title,text:g.text,href:`#guide/${g.id}`,kind:'Rehber',icon:'book'})),...clips.map(c=>({title:c.title,text:`${c.summary} hile örneği video`,clip:c.id,kind:'Klip',icon:'play'}))];
function renderSearch(){const query=document.getElementById('search-input').value.trim().toLocaleLowerCase('tr-TR');const results=searchItems.filter(x=>!query||`${x.title} ${x.text}`.toLocaleLowerCase('tr-TR').includes(query));document.getElementById('search-results').innerHTML=results.length?results.map(r=>`<a class="search-result" href="${r.href||'#clips'}" ${r.clip?`data-search-watch="${r.clip}"`:''} ${r.image?`data-search-image="${r.image}"`:''}>${icon(r.icon)}<span><strong>${escapeHTML(r.title)}</strong><small>${escapeHTML(r.text)}</small></span><em>${r.kind}</em></a>`).join(''):'<div class="search-empty">Sonuç bulunamadı.<br>Başka bir konu veya klip adı deneyebilirsin.</div>';}
function openSearch(){closeMenu();const d=document.getElementById('search-dialog');d.showModal();document.getElementById('search-input').value='';renderSearch();document.getElementById('search-input').focus();}
document.querySelector('.nav-pill').textContent=guides.length;
document.querySelector('nav [data-page=clips] .nav-count').textContent=clips.length+imageExamples.length;
document.getElementById('video-speed').addEventListener('change',e=>document.getElementById('video-player').playbackRate=Number(e.target.value));
document.getElementById('video-analysis').addEventListener('click',e=>{const b=e.target.closest('[data-seek]');if(b){const v=document.getElementById('video-player');v.pause();v.currentTime=Number(b.dataset.seek);v.focus();}if(e.target.closest('#video-guide-link'))document.getElementById('video-dialog').close();});
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
document.getElementById('search-trigger').addEventListener('click',openSearch);
document.getElementById('search-input').addEventListener('input',renderSearch);
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(!document.getElementById('search-dialog').open&&!document.getElementById('video-dialog').open)openSearch();}if(e.key==='Escape')closeMenu();});
document.getElementById('menu-toggle').addEventListener('click',()=>{const open=document.getElementById('sidebar').classList.toggle('open');document.getElementById('scrim').hidden=!open;document.getElementById('menu-toggle').setAttribute('aria-expanded',String(open));});
document.getElementById('scrim').addEventListener('click',closeMenu);
document.getElementById('video-dialog').addEventListener('close',()=>{const v=document.getElementById('video-player');v.pause();v.removeAttribute('src');v.load();});
document.getElementById('video-player').addEventListener('error',()=>{if(document.getElementById('video-player').getAttribute('src'))toast('Video yüklenemedi. Klip klasörünün HTML dosyasının yanında olduğunu kontrol et.');});
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target!==d)return;const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}));
document.addEventListener('click',async e=>{const searchResult=e.target.closest('.search-result');if(searchResult){document.getElementById('search-dialog').close();if(searchResult.dataset.searchImage){e.preventDefault();showExample(searchResult.dataset.searchImage);}else if(searchResult.dataset.searchWatch){e.preventDefault();watch(searchResult.dataset.searchWatch);}else if(searchResult.getAttribute('href')===location.hash){route();}return;}const watchButton=e.target.closest('[data-watch]');if(watchButton){watch(watchButton.dataset.watch);return;}const expand=e.target.closest('[data-guide-expand]');if(expand){document.querySelectorAll('.guide-section').forEach(el=>el.open=expand.dataset.guideExpand==='true');return;}const filter=e.target.closest('[data-filter]');if(filter){clipFilter=filter.dataset.filter;const y=window.scrollY;route();document.querySelector(`[data-filter="${clipFilter}"]`).focus({preventScroll:true});window.scrollTo(0,y);}if(e.target.closest('#reset-checklist')){checked=[];persistChecks();document.querySelectorAll('[data-check]').forEach(x=>x.checked=false);updateProgress();toast('Liste yeni inceleme için sıfırlandı.');}if(e.target.closest('#copy-checklist')){const text='AAC rapor kontrol listesi\n'+checks.map(([id,title])=>`[${checked.includes(id)?'x':' '}] ${title}`).join('\n');const ok=await copyText(text);if(!ok){let output=document.getElementById('checklist-output');if(!output){output=document.createElement('textarea');output.id='checklist-output';output.className='report-output';output.readOnly=true;output.setAttribute('aria-label','Kontrol listesi özeti');document.querySelector('.check-actions').after(output);}output.value=text;output.focus();output.select();}}});
document.addEventListener('change',e=>{if(e.target.matches('[data-check]')){const id=e.target.dataset.check;checked=checked.filter(x=>x!==id);if(e.target.checked)checked.push(id);persistChecks();updateProgress();}});
document.addEventListener('submit',async e=>{if(e.target.id!=='report-form')return;e.preventDefault();if(!e.target.reportValidity())return;updateEvidence();const text=evidenceText(evidenceValues());const output=document.getElementById('report-output');const ok=await copyText(text);if(!ok){output.closest('details').open=true;output.focus();output.select();}});

document.getElementById('review-content').innerHTML=reviewMethodHTML;
window.addEventListener('hashchange',route);
route();

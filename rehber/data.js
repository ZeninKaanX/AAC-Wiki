"use strict";
const guideData={
  "penalties": [
    {
      "id": "hafif",
      "name": "Hafif cezalar",
      "color": "green",
      "duration": "30 dakika",
      "code": "30m",
      "steps": [
        "Sözlü uyarı",
        "Sözlü uyarı",
        "Warn",
        "Sözlü uyarı",
        "Temp mute"
      ],
      "rows": [
        [
          "Sohbet kirletme",
          "Spam, flood, harf uzatma, caps vb."
        ],
        [
          "Sohbeti amacı dışında kullanmak",
          ""
        ],
        [
          "Gereksiz ada reklamı",
          ""
        ],
        [
          "Yetkili ekibinin işine karışma",
          ""
        ],
        [
          "Tehdit ve şantaj etme",
          ""
        ],
        [
          "Kışkırtma",
          ""
        ],
        [
          "Üst yönetimden item / para istemek",
          ""
        ]
      ],
      "image": "assets/table-hafif-cezalar.webp"
    },
    {
      "id": "kusurlu",
      "name": "Kusurlu cezalar",
      "color": "amber",
      "duration": "1 saat",
      "code": "1h",
      "steps": [
        "Sözlü uyarı",
        "Warn",
        "Sözlü uyarı",
        "Mute"
      ],
      "rows": [
        [
          "Oyunculara hakaret",
          ""
        ],
        [
          "Halk dilinde argo",
          ""
        ],
        [
          "Tartışma",
          "Her iki tarafa da uygulanır."
        ],
        [
          "Oyuncuları örgütleme",
          ""
        ]
      ],
      "image": "assets/table-kusurlu-cezalar.webp"
    },
    {
      "id": "agir",
      "name": "Ağır cezalar",
      "color": "red",
      "duration": "3–12 saat",
      "code": null,
      "steps": [
        "Mute"
      ],
      "rows": [
        [
          "Yetkili ekibine hakaret",
          "",
          "3 saat",
          "3h"
        ],
        [
          "Cinsel içerikli sohbet",
          "",
          "3 saat",
          "3h"
        ],
        [
          "Irkçılık, din ve siyaset ile ilgili sohbet",
          "",
          "3 saat",
          "3h"
        ],
        [
          "Link paylaşımı (URL)",
          "",
          "3 saat",
          "3h"
        ],
        [
          "Yetkili gibi davranma",
          "Örnek: “Ben yetkiliyim, bana güvenin.”",
          "3 saat",
          "3h"
        ],
        [
          "Küfür / kısaltması ve iması",
          "",
          "6 saat",
          "6h"
        ],
        [
          "Ailevi küfür / kısaltması ve iması",
          "",
          "12 saat",
          "12h"
        ]
      ],
      "image": "assets/table-agir-cezalar.webp"
    }
  ],
  "rules": [
    {
      "id": "uyari",
      "title": "Uyarı ve işlem sırası",
      "tag": "TEMEL YAKLAŞIM",
      "body": "<p>Rehberin görevi sohbeti düzenli tutmak ve oyuncuya yardımcı olmaktır. Gereksiz susturmalarla oyuncuları uzaklaştırma.</p><p>Hafif ve kusurlu ihlallerde <a href=\"#penalties\">ceza grubunun uyarı basamaklarını</a> izle. Küfür, reklam, cinsellik ve aşırı spam gibi doğrudan işlem gerektiren durumları ayrıca değerlendir.</p><p><code>/warn</code> uyguladığında oyuncuyu aynı anda sohbetten de uyar. Oyuncu ısrarla devam ederse susturma açıklamasında <strong>“uyarı sonrası …”</strong> ifadesini kullan. Örnek: <code>uyarı sonrası yetkili oyalama</code>.</p>"
    },
    {
      "id": "ozel-sohbet",
      "title": "Özel mesaj ve ada sohbeti",
      "tag": "MSG / IS CHAT",
      "body": "<p><code>/msg</code> veya SkyBlock <code>is chat</code> üzerindeki küfür ve hakaretler için, dinî ya da millî değerlere yönelik olmadığı sürece işlem uygulama.</p><p>Dinî / millî değerlere yönelik olayları kanıtıyla birlikte üst yetkililere ilet.</p>"
    },
    {
      "id": "reklam",
      "title": "Sunucu adı ve reklam",
      "tag": "24 SAAT",
      "body": "<p>Başka sunucu adı veren oyuncuya <strong>24 saat mute</strong> uygulanır.</p><p>Sunucu reklamı yapılıyorsa <strong>24 saat mute</strong> uygula ve kanıtıyla birlikte <strong>üst-iletişim</strong> kanalından adminlere bildir.</p>"
    },
    {
      "id": "isim",
      "title": "Uygunsuz oyuncu adı",
      "tag": "24 SAAT",
      "body": "<p>Küfür, reklam vb. içeren uygunsuz isimlerde <strong>24 saat mute</strong> uygula. Açıklamayı şu şekilde yaz:</p><div class=\"inline-copy\"><code>uygunsuz isim, isim değiştiriniz</code><button data-copy=\"uygunsuz isim, isim değiştiriniz\">Kopyala</button></div>"
    },
    {
      "id": "oto-mesaj",
      "title": "Otomatik mesajlar",
      "tag": "SOHBET DÜZENİ",
      "body": "<p>Otomatik mesaj sohbeti ciddi derecede rahatsız ediyorsa <strong>24 saat mute</strong> uygulanır.</p><p>Seyrek aralıklarla, örneğin 5–10 dakikada bir gönderilen bir mesaja yalnızca otomatik olduğu için mute uygulama.</p>"
    },
    {
      "id": "gece",
      "title": "Gece saatlerinde yaklaşım",
      "tag": "ÖLÇÜLÜ TUTUM",
      "body": "<p>Çoğu kişinin aktif olmadığı gece saatlerinde kuralları uygularken oyunculara biraz daha müsamaha gösterebilirsin. Bu yaklaşımı aşırıya kaçırma; sohbet düzenini takip etmeye devam et.</p>"
    },
    {
      "id": "emin-degilsen",
      "title": "Kararsız kaldığında",
      "tag": "USTA REHBER",
      "body": "<p>Hangi işlem veya sürenin uygulanacağından emin değilsen, öncelikle <strong>@Usta Rehber</strong> olmak üzere üst yetkililerine danış.</p><p>Güncel susturma sürelerini oyun içinde <code>/kurallar</code> komutuyla kontrol edebilirsin.</p>"
    }
  ],
  "conduct": [
    {
      "id": "afk",
      "title": "Aktiflik ve AFK",
      "tag": "/LOBI",
      "body": "<p>Rehberlerin oyunda AFK kalması yasaktır. Kısa bir süre için ayrılacak olsan bile <code>/lobi</code> üzerinde bekle.</p><p>Görevdeyken sohbeti takip et ve oyuncuların yardım talepleriyle ilgilen.</p>"
    },
    {
      "id": "mazeret",
      "title": "Mazeret bildirimi",
      "tag": "1 GÜN VE ÜZERİ",
      "body": "<p>Bir gün ve üzeri giriş yapamayacaksan durumunu kısaca açıkla ve süre belirt.</p><ul><li>“Evde tadilat var, 2 gün aktiflik sağlayamayacağım.”</li><li>“Köye gideceğim, 1 hafta aktif olamayacağım.”</li><li>“Ailevi nedenlerden dolayı 3 gün aktif olamayacağım.”</li></ul><p>Birkaç saatlik ayrılıklar için mazeret yazma. <strong>“2 gün yokum”</strong> gibi durumu açıklamayan bildirimlerle yetinme.</p>"
    },
    {
      "id": "uslup",
      "title": "Yetkili üslubu",
      "tag": "EKİP SORUMLULUĞU",
      "body": "<p>Rehberlerin sohbette veya özel mesajda küfür ve hakaret etmesi yasaktır. Sana hakaret eden veya tartışma çıkarmaya çalışan oyuncuları üst yetkililerine bildir; aynı üslupla karşılık verme.</p><p>Oyunculara saygılı davran, diğer rehberlerle kavga etme, oyuncu kayırma ve yetkini amacı dışında kullanma.</p>"
    },
    {
      "id": "rutbe",
      "title": "Rütbe yükselme süreci",
      "tag": "YÖNETİM DEĞERLENDİRMESİ",
      "body": "<p>Rütbe yükseltmeleri yönetimin uygun gördüğü zaman ve koşullarda yapılır. Mevcut rütbenin yetki sınırları dışına çıkma; Deneme Rehberken Rehber, Rehberken Usta Rehber yetkisiyle hareket etme.</p><p>Yönetime <strong>“Rütbem ne zaman yükselir?”</strong> şeklinde mesaj gönderme. Değerlendirmeler düzenli olarak yapılır ve uygun görüldüğünde rütbe yükseltilir.</p><p>Yetki sınırlarını aşmak ve gereksiz yükselme talepleri süreci olumsuz etkiler.</p>"
    }
  ],
  "warningReasons": [
    "Oyuncuyla üslupsuz konuşma",
    "Yanlış susturma uygulama",
    "Mazeretsiz aktiflik eksikliği",
    "Yetersiz aktiflik",
    "Başka bir rehberle kavga etme",
    "Sohbeti takip etmeme",
    "Yetkiyi kötüye veya amacı dışında kullanma",
    "Sunucuda küfür veya argo kullanma",
    "Oyuncu kayırma",
    "Bug kullanımını görüp bildirmeme veya kendi yararına kullanma"
  ],
  "communication": [
    {
      "id": "danis",
      "title": "Kime danışmalıyım?",
      "tag": "ÖNCE İLGİLİ EKİP",
      "body": "<p>Susturma kararı veya süresi konusunda emin değilsen <strong>@Usta Rehber</strong> ya da üst yetkiline danış.</p><p>Küçük bir olayı doğrudan üst-iletişim kanalına taşımak yerine ilgili ekibe ilet: rehberlik konuları için Usta Rehber, hile şüphesi için Hile Kontrol ekibi, susturma gerektiren durumlar için Rehberler.</p>"
    },
    {
      "id": "ust-iletisim",
      "title": "Üst-iletişim kanalı",
      "tag": "MODERATÖR / ADMIN",
      "body": "<p>Bu kanal; Deneme Rehber, Rehber, Usta Rehber, Hile Kontrol ve Hile Kontrol Uzmanının yetkisinin yetmediği, Moderatör ve üstünü ilgilendiren olaylar içindir.</p><ul><li>Sunucu reklamı</li><li>Dinî / millî değerlere küfür — sesli sohbet dâhil</li><li>Sunucu çökmesi</li><li>Dupe, yani eşya çoğaltma, ve benzeri ciddi olaylar</li></ul><p>Olayı açıklayıp kanıtını ekledikten sonra <strong>@Moderatör</strong> veya <strong>@Admin</strong> etiketleyebilirsin. Kanalı gereksiz yere kullanma.</p>"
    },
    {
      "id": "yanlis-mute",
      "title": "Yanlış muteler kanalı",
      "tag": "DÜZELTME VE KANIT",
      "body": "<p>Deneme Rehber ve Rehberlerin yanlış susturmaları burada değerlendirilir; hata düzeltilir ve ilgili yetkiliye uyarı iletilir. Gerekmedikçe kanala mesaj yazma.</p><p>Susturmaya neden olan söz son 10 mesajda görünmüyorsa ekran görüntüsünü alıp <strong>“Bu mutenin kanıtı”</strong> açıklamasıyla kanala ekleyebilirsin.</p>"
    }
  ],
  "examples": [
    {
      "id": 1,
      "category": "Ailevi Küfür",
      "group": "Ağır Cezalar",
      "file": "assets/examples/ailevi-kufur-1.webp",
      "width": 186,
      "height": 54
    },
    {
      "id": 2,
      "category": "Ailevi Küfür",
      "group": "Ağır Cezalar",
      "file": "assets/examples/ailevi-kufur-2.webp",
      "width": 218,
      "height": 40
    },
    {
      "id": 3,
      "category": "Ailevi Küfür",
      "group": "Ağır Cezalar",
      "file": "assets/examples/ailevi-kufur-3.webp",
      "width": 151,
      "height": 47
    },
    {
      "id": 4,
      "category": "Cinsel İçerikli Sohbet",
      "group": "Ağır Cezalar",
      "file": "assets/examples/cinsel-icerikli-sohbet-1.webp",
      "width": 682,
      "height": 43
    },
    {
      "id": 5,
      "category": "Cinsel İçerikli Sohbet",
      "group": "Ağır Cezalar",
      "file": "assets/examples/cinsel-icerikli-sohbet-2.webp",
      "width": 1656,
      "height": 73
    },
    {
      "id": 6,
      "category": "Cinsel İçerikli Sohbet",
      "group": "Ağır Cezalar",
      "file": "assets/examples/cinsel-icerikli-sohbet-3.webp",
      "width": 343,
      "height": 26
    },
    {
      "id": 7,
      "category": "Irkçılık",
      "group": "Ağır Cezalar",
      "file": "assets/examples/irkcilik-1.webp",
      "width": 271,
      "height": 40
    },
    {
      "id": 8,
      "category": "Irkçılık",
      "group": "Ağır Cezalar",
      "file": "assets/examples/irkcilik-2.webp",
      "width": 292,
      "height": 43
    },
    {
      "id": 9,
      "category": "Irkçılık",
      "group": "Ağır Cezalar",
      "file": "assets/examples/irkcilik-3.webp",
      "width": 148,
      "height": 51
    },
    {
      "id": 10,
      "category": "Küfür",
      "group": "Ağır Cezalar",
      "file": "assets/examples/kufur-1.webp",
      "width": 257,
      "height": 20
    },
    {
      "id": 11,
      "category": "Küfür",
      "group": "Ağır Cezalar",
      "file": "assets/examples/kufur-2.webp",
      "width": 571,
      "height": 30
    },
    {
      "id": 12,
      "category": "Küfür",
      "group": "Ağır Cezalar",
      "file": "assets/examples/kufur-3.webp",
      "width": 158,
      "height": 37
    },
    {
      "id": 13,
      "category": "Yetkili Ekibine Hakaret",
      "group": "Ağır Cezalar",
      "file": "assets/examples/yetkili-ekibine-hakaret-1.webp",
      "width": 338,
      "height": 50
    },
    {
      "id": 14,
      "category": "Yetkili Ekibine Hakaret",
      "group": "Ağır Cezalar",
      "file": "assets/examples/yetkili-ekibine-hakaret-2.webp",
      "width": 383,
      "height": 51
    },
    {
      "id": 15,
      "category": "Yetkili Ekibine Hakaret",
      "group": "Ağır Cezalar",
      "file": "assets/examples/yetkili-ekibine-hakaret-3.webp",
      "width": 504,
      "height": 57
    },
    {
      "id": 16,
      "category": "Sohbet Kirletme",
      "group": "Hafif Cezalar",
      "file": "assets/examples/sohbet-kirletme-1.webp",
      "width": 651,
      "height": 203
    },
    {
      "id": 17,
      "category": "Halk Dilinde Argo",
      "group": "Kusurlu Cezalar",
      "file": "assets/examples/halk-dilinde-argo-1.webp",
      "width": 186,
      "height": 48
    },
    {
      "id": 18,
      "category": "Halk Dilinde Argo",
      "group": "Kusurlu Cezalar",
      "file": "assets/examples/halk-dilinde-argo-2.webp",
      "width": 537,
      "height": 69
    },
    {
      "id": 19,
      "category": "Halk Dilinde Argo",
      "group": "Kusurlu Cezalar",
      "file": "assets/examples/halk-dilinde-argo-3.webp",
      "width": 386,
      "height": 56
    },
    {
      "id": 20,
      "category": "Oyunculara Hakaret",
      "group": "Kusurlu Cezalar",
      "file": "assets/examples/oyunculara-hakaret-1.webp",
      "width": 268,
      "height": 55
    },
    {
      "id": 21,
      "category": "Oyunculara Hakaret",
      "group": "Kusurlu Cezalar",
      "file": "assets/examples/oyunculara-hakaret-2.webp",
      "width": 304,
      "height": 57
    },
    {
      "id": 22,
      "category": "Oyunculara Hakaret",
      "group": "Kusurlu Cezalar",
      "file": "assets/examples/oyunculara-hakaret-3.webp",
      "width": 230,
      "height": 58
    },
    {
      "id": 23,
      "category": "Yetkili Oyalama",
      "group": "Kusurlu Cezalar",
      "file": "assets/examples/yetkili-oyalama-1.webp",
      "width": 651,
      "height": 47
    },
    {
      "id": 24,
      "category": "Yetkili Oyalama",
      "group": "Kusurlu Cezalar",
      "file": "assets/examples/yetkili-oyalama-2.webp",
      "width": 536,
      "height": 42
    },
    {
      "id": 25,
      "category": "Yetkili Oyalama",
      "group": "Kusurlu Cezalar",
      "file": "assets/examples/yetkili-oyalama-3.webp",
      "width": 651,
      "height": 43
    }
  ]
};

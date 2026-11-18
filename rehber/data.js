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
        "Mute"
      ],
      "rows": [
        [
          "Sohbet kirletme",
          "Spam, flood, harf uzatma, caps vb. Tekrarları ve sohbetin ne kadar kaplandığını birlikte incele."
        ],
        [
          "Sohbeti amacı dışında kullanmak",
          "Sohbet kanalını kullanım amacı dışına taşıyan davranış. Mesajın gönderildiği kanalı ve konuşmanın devamını kontrol et."
        ],
        [
          "Gereksiz ada reklamı",
          "Ada reklamının sohbeti gereksiz yere meşgul etmesi. Başka sunucu reklamıyla karıştırma; onun özel kuralı farklıdır."
        ],
        [
          "Yetkili ekibinin işine karışma",
          "Yetkilinin yürüttüğü işleme müdahale etmek. Bir soru veya saygılı düzeltme talebiyle aynı değerlendirilmez."
        ],
        [
          "Tehdit ve şantaj etme",
          "Bir oyuncuyu korkutarak veya baskıyla bir şey yapmaya zorlamak. Önceki mesajlar ve varsa özel durumlar da incelenir."
        ],
        [
          "Kışkırtma",
          "Oyuncuyu veya sohbeti tartışmaya çekmeye yönelik davranış. Tepkiyi değil, olayın başlangıcını da incele."
        ],
        [
          "Üst yönetimden item / para istemek",
          "Üst yönetimden eşya ya da oyun parası talep etmek. Oyuncular arasındaki alışverişten ayrılır."
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
          "Hakaretin hedefi oyuncudur. Hedef kişi Rehber veya başka bir yetkiliyse yetkiliye hakaret başlığına bak."
        ],
        [
          "Halk dilinde argo",
          "Sözü, hedefini ve bağlamını birlikte değerlendir. Aileye yönelik küfür veya küfür kısaltmasıyla aynı başlık değildir."
        ],
        [
          "Tartışma",
          "Her iki tarafa da uygulanır. Konuşmanın tamamını gör; taraflardan yalnızca birinin son mesajıyla karar verme."
        ],
        [
          "Oyuncuları örgütleme",
          "Oyuncuları topluca sorun çıkarmaya yönlendirme. Birlikte oynamaya davet etmekle aynı şey değildir."
        ],
        [
          "Yetkili oyalama",
          "Mesaj, sohbet, adereklam vb. Tek bir yardım sorusu yeterli değildir; tekrarları ve uyarı sonrası devamı incele."
        ]
      ],
      "image": "assets/table-kusurlu-cezalar-v2.webp"
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
          "Mesajın yetkiliyi hedef aldığını ve hedef kişinin rolünü doğrula. Oyuncuya hakaret başlığından ayrılır.",
          "3 saat",
          "3h"
        ],
        [
          "Cinsel içerikli sohbet",
          "Cinsel içerikli mesajı çevresindeki konuşmayla değerlendir. Uygunsuz oyuncu adı için ayrıca özel isim kuralına bak.",
          "3 saat",
          "3h"
        ],
        [
          "Irkçılık, din ve siyaset ile ilgili sohbet",
          "İfadeyi bağlamıyla incele. Bir kimlik veya topluluk adının tek başına geçmesi ırkçılığı kanıtlamaz. Dinî / millî değerlere hakaret varsa üst yetkililere ilet.",
          "3 saat",
          "3h"
        ],
        [
          "Link paylaşımı (URL)",
          "Paylaşılan adresi ve bağlamı kontrol et. Başka sunucu reklamı veya sunucu adı paylaşımı için 24 saatlik özel reklam kuralına bak.",
          "3 saat",
          "3h"
        ],
        [
          "Yetkili gibi davranma",
          "Yetkisi olmadığı hâlde kendini yetkili olarak tanıtma. Sözü gerçekten söyleyen kişinin rolünü doğrula.",
          "3 saat",
          "3h"
        ],
        [
          "Küfür / kısaltması ve iması",
          "Açık küfür, kısaltma ve ima bu başlıktadır. Aile bireylerini hedef alan küfür için ayrı 12 saatlik başlık vardır.",
          "6 saat",
          "6h"
        ],
        [
          "Ailevi küfür / kısaltması ve iması",
          "Aile bireylerini hedef alan küfür, kısaltma ve ima. Hedefi ve önceki mesajları birlikte kaydet.",
          "12 saat",
          "12h"
        ]
      ],
      "image": "assets/table-agir-cezalar.webp"
    }
  ],
  "rules": [
    {
      "id": "karar-sirasi",
      "title": "Bir mesajı nasıl değerlendirebilirim?",
      "tag": "Başlangıç",
      "body": "<ol><li><strong>Konuşmanın tamamını gör.</strong> Önceki mesajları, mesajın yazıldığı kanalı ve kime söylendiğini kontrol et.</li><li><strong>Doğru başlığı seç.</strong> Oyuncuya hakaret ile yetkiliye hakaret; normal küfür ile ailevi küfür farklı sürelerdir.</li><li><strong>Özel durum var mı bak.</strong> Özel mesaj, ada sohbeti, reklam ve uygunsuz isim için aşağıdaki kuralları oku.</li><li><strong>Uyarı sırasını kontrol et.</strong> Hafif ve kusurlu cezalarda ilgili grubun basamaklarını uygula. Örneğin başlığındaki süre, gerekli şartlar oluştuktan sonraki mute süresidir.</li><li><strong>Komutu ve açıklamayı doğrula.</strong> Oyuncu adını, süreyi ve sebebi kontrol et; kanıtı sakla. Emin değilsen Usta Rehber’e danış.</li></ol>"
    },
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
      "category": "Irkçılık, Din ve Siyaset",
      "group": "Ağır Cezalar",
      "file": "assets/examples/irkcilik-1.webp",
      "width": 271,
      "height": 40
    },
    {
      "id": 8,
      "category": "Irkçılık, Din ve Siyaset",
      "group": "Ağır Cezalar",
      "file": "assets/examples/irkcilik-2.webp",
      "width": 292,
      "height": 43
    },
    {
      "id": 9,
      "category": "Irkçılık, Din ve Siyaset",
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
    },
    {
      "id": 26,
      "category": "Sohbeti Amacı Dışında Kullanmak",
      "group": "Hafif Cezalar",
      "file": "assets/scenes-v5/jungle.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 27,
      "category": "Sohbeti Amacı Dışında Kullanmak",
      "group": "Hafif Cezalar",
      "file": "assets/scenes-v5/mushroom.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 28,
      "category": "Gereksiz Ada Reklamı",
      "group": "Hafif Cezalar",
      "file": "assets/scenes-v5/end.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 29,
      "category": "Gereksiz Ada Reklamı",
      "group": "Hafif Cezalar",
      "file": "assets/scenes-v5/autumn.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 30,
      "category": "Yetkili Ekibinin İşine Karışma",
      "group": "Hafif Cezalar",
      "file": "assets/scenes-v5/canal.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 31,
      "category": "Yetkili Ekibinin İşine Karışma",
      "group": "Hafif Cezalar",
      "file": "assets/scenes-v5/library.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 32,
      "category": "Tehdit ve Şantaj Etme",
      "group": "Hafif Cezalar",
      "file": "assets/scenes-v5/volcano.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 33,
      "category": "Tehdit ve Şantaj Etme",
      "group": "Hafif Cezalar",
      "file": "assets/zero-two-village-v4.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 34,
      "category": "Kışkırtma",
      "group": "Hafif Cezalar",
      "file": "assets/zero-two-mine-v4.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 35,
      "category": "Kışkırtma",
      "group": "Hafif Cezalar",
      "file": "assets/zero-two-cherry-v4.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 36,
      "category": "Üst Yönetimden İtem / Para İstemek",
      "group": "Hafif Cezalar",
      "file": "assets/zero-two-nether-v4.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 37,
      "category": "Üst Yönetimden İtem / Para İstemek",
      "group": "Hafif Cezalar",
      "file": "assets/scenes-v5/harbor.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 38,
      "category": "Tartışma",
      "group": "Kusurlu Cezalar",
      "file": "assets/scenes-v5/snow.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 39,
      "category": "Tartışma",
      "group": "Kusurlu Cezalar",
      "file": "assets/scenes-v5/desert.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 40,
      "category": "Oyuncuları Örgütleme",
      "group": "Kusurlu Cezalar",
      "file": "assets/scenes-v5/underwater.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 41,
      "category": "Oyuncuları Örgütleme",
      "group": "Kusurlu Cezalar",
      "file": "assets/scenes-v5/sky.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 42,
      "category": "Link Paylaşımı (URL)",
      "group": "Ağır Cezalar",
      "file": "assets/scenes-v5/jungle.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 43,
      "category": "Link Paylaşımı (URL)",
      "group": "Ağır Cezalar",
      "file": "assets/scenes-v5/mushroom.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 44,
      "category": "Yetkili Gibi Davranma",
      "group": "Ağır Cezalar",
      "file": "assets/scenes-v5/end.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 45,
      "category": "Yetkili Gibi Davranma",
      "group": "Ağır Cezalar",
      "file": "assets/scenes-v5/autumn.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 46,
      "category": "Irkçılık, Din ve Siyaset",
      "group": "Ağır Cezalar",
      "file": "assets/scenes-v5/canal.webp",
      "width": 1440,
      "height": 810
    },
    {
      "id": 47,
      "category": "Irkçılık, Din ve Siyaset",
      "group": "Ağır Cezalar",
      "file": "assets/scenes-v5/library.webp",
      "width": 1440,
      "height": 810
    }
  ],
  "support": {
    "requirements": [
      {
        "title": "Oyun ve sunucu bilgisi",
        "body": "Minecraft’ın temel mekaniklerini ve sunucudaki sistemleri bil. Bilmediğin bir konuda tahminle cevap vermek yerine doğru bilgiyi öğren veya ilgili yetkiliye danış."
      },
      {
        "title": "Oyuncuyu ve durumu tanıma",
        "body": "Oyuncunun ne istediğini ve sorunun nasıl oluştuğunu anlamadan işlem yapma. İddiaları mevcut kayıtlar ve kanıtlarla doğrula; kelime oyunlarıyla veya eksik bilgiyle haksız eşya ya da kazanç elde edilmesine dikkat et."
      },
      {
        "title": "Olgun ve tutarlı üslup",
        "body": "Yaşı veya sana yakınlığı ne olursa olsun herkese saygılı, açık ve ciddi cevap ver. Talepte arkadaşın olsa bile görev üslubunu koru; şakalaşma, tartışma ve kayırma yapma."
      }
    ],
    "cases": [
      {
        "id": "sifre",
        "title": "Şifremi unuttum",
        "owner": "Bilgileri al → ilgili üst yetkiliye aktar",
        "collect": [
          "Oyun içi hesap adı",
          "Hesaba bağlı e-posta adresi — yalnızca destek talebi içinde"
        ],
        "steps": [
          "Oyuncudan hesap adını ve hesaba bağlı e-posta adresini iste.",
          "Bilgiler tamamlandığında talebi ilgili üst yetkiliye aktar. Şifre işleminin devamını ilgili ekip yürütür.",
          "Oyuncudan mevcut şifresini veya doğrulama kodunu isteme."
        ],
        "response": "Merhaba, yardımcı olabilmemiz için oyun içi hesap adınızı ve hesabınıza bağlı e-posta adresini bu destek talebi üzerinden paylaşır mısınız?",
        "note": "Hesap bilgilerini genel sohbete taşımadan talep üzerinden ilerle."
      },
      {
        "id": "bilgi",
        "title": "Genel komut / bilgi sorusu",
        "owner": "Bilgin ve yetkin dâhilinde cevapla",
        "collect": [
          "İlgili oyun modu veya site bölümü",
          "Öğrenilmek istenen komut ya da yapılamayan işlem",
          "Varsa hata mesajı veya ekran görüntüsü"
        ],
        "steps": [
          "Oyuncunun yapmak istediği işlemi netleştir.",
          "Doğru komutu veya işlem adımlarını sırayla anlat.",
          "Oyuncunun adımları uygulayıp uygulayamadığını kontrol et. Emin olmadığın bilgiyi doğrulamadan paylaşma."
        ],
        "response": "Merhaba, hangi oyun modunda veya site bölümünde, hangi komut ya da işlemle ilgili yardıma ihtiyacınız olduğunu açıklar mısınız? Varsa gördüğünüz hata mesajını da paylaşabilirsiniz."
      },
      {
        "id": "hile",
        "title": "Hile bildirimi",
        "owner": "Bilgileri al → Hile Kontrol ekibine ilet",
        "collect": [
          "Bildirilen oyuncunun oyun içi adı",
          "Oyun modu",
          "Varsa kayıt veya diğer kanıtlar"
        ],
        "steps": [
          "Oyuncunun adını, oyun modunu ve varsa kanıtını iste.",
          "Kanıtı Hile Kontrol yetkililerine ilet; incelemeyi ve gerekli işlemi ilgili ekip yapar.",
          "Kanıt yoksa Hile Kontrol ekibinden yardım iste ve ilgili oyuncunun kontrol edilmesini talep et.",
          "İncelemeyi yapan yetkiliden sonucu destek talebine yazmasını iste."
        ],
        "response": "Merhaba, bildirdiğiniz oyuncunun oyun içi adını, bulunduğu oyun modunu ve varsa kayıt ya da diğer kanıtları paylaşır mısınız? Bildiriniz Hile Kontrol ekibi tarafından değerlendirilecektir.",
        "note": "Hile kararını destek yanıtını yazan kişi değil, incelemeyi yapan Hile Kontrol ekibi verir."
      },
      {
        "id": "odeme",
        "title": "Ödeme sorunları",
        "owner": "Paneldeki hazır cevabı kullan",
        "collect": [
          "Oyuncunun bildirdiği ödeme sorununun açıklaması"
        ],
        "steps": [
          "Sorunun açıklamasını oku.",
          "Hazır cevaplar bölümünden “Ödeme Sorunları Beyaz Ekran” seçeneğini kullan.",
          "Yanıtın talebe uygunluğunu kontrol et; çözemediğin kısmı ilgili yetkiliye aktar."
        ],
        "preset": "Ödeme Sorunları Beyaz Ekran",
        "note": "Bu başlıkta paneldeki mevcut hazır cevap kullanılır."
      },
      {
        "id": "diger",
        "title": "Diğer talepler",
        "owner": "Uygun hazır cevap → gerekirse ilgili yetkili",
        "collect": [
          "Sorunun anlaşılır açıklaması",
          "İlgili oyun modu veya site bölümü",
          "Varsa hatayı gösteren ekran görüntüsü"
        ],
        "steps": [
          "Talebi okuyup konuyu netleştir.",
          "Hazırlanmış hızlı cevaplar arasından konuya uygun olanı kullan.",
          "Talep bilginin veya yetkinin dışındaysa ilgili yetkiliye aktar; çözüm ya da sonuç sözü verme."
        ],
        "response": "Merhaba, yaşadığınız sorunu, ilgili oyun modu veya site bölümüyle birlikte biraz daha ayrıntılı anlatır mısınız? Varsa hata mesajını ya da ekran görüntüsünü de paylaşabilirsiniz."
      }
    ],
    "roleSteps": [
      "Bu bölümdeki bilgi, üslup ve talep yönlendirme adımlarını dikkatlice oku.",
      "Üst-iletişim kanalında Admin veya Moderatöre “Ben destek rolü almak istiyorum.” şeklinde talebini ilet.",
      "Admin veya Moderatörle sesli görüşme yap."
    ]
  }
};

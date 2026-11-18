"use strict";
const chatScenarios={
  "1": {
    "message": "senin bacını s2km",
    "note": "Aile bireylerini hedef alan küfür veya kısaltması. Ağır ceza tablosunda 12 saat.",
    "context": [
      "pazara nereden gidiliyor?",
      "/pazar yazabilirsin."
    ],
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "emircan3151",
        "role": "player"
      }
    ]
  },
  "2": {
    "message": "senin ananı bir sikerim",
    "note": "Aile bireylerini hedef alan küfür veya kısaltması. Ağır ceza tablosunda 12 saat.",
    "context": [
      "kazmam kırılmak üzere, yedek var mı?",
      "girişteki sandığa bir tane bıraktım."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "emircan3151",
        "role": "player"
      }
    ]
  },
  "3": {
    "message": "sağlam oç",
    "note": "Aile bireylerini hedef alan küfür veya kısaltması. Ağır ceza tablosunda 12 saat.",
    "context": [
      "şu tepenin yanına ev yapabilir miyim?",
      "claim sınırını kontrol edip yapabilirsin."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "Lostaratorr",
        "role": "player"
      }
    ]
  },
  "4": {
    "message": "satılıktır\n[apo'nun kara kıllı a'ına bastığım kılıç]",
    "note": "Görseldeki satış mesajı ve eşya adı birlikte aktarılmıştır. Eşya adındaki ifadeyi de sohbet bağlamıyla değerlendir.",
    "context": [
      "portalı işaretleyen oldu mu?",
      "koordinatları not aldım."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "Lostaratorr",
        "role": "player"
      }
    ]
  },
  "5": {
    "message": "gotikdöliseadamkçık",
    "note": "Sohbetin cinsel içerikli konuşmaya yönlendirilmesi. Ağır ceza tablosunda 3 saat.",
    "context": [
      "bu tarlayı beraber büyütelim mi?",
      "olur, su kanallarını ben açayım."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "Lostaratorr",
        "role": "player"
      }
    ]
  },
  "6": {
    "message": "[PurnaYıldızı✱]",
    "note": "Bu örnekte mesaj yerine görünen ad yer alır. Uygunsuz isim durumunda İşlem kurallarındaki 24 saatlik özel kuralı kontrol et.",
    "context": [
      "raylar hangi tünele çıkıyor?",
      "sağdaki geçit ana madene çıkıyor."
    ],
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "emircan3151",
        "role": "player"
      }
    ]
  },
  "7": {
    "message": "zenci zafermert14",
    "note": "Görseldeki metin aktarılmıştır. Bir etnik kimliğin yalnızca belirtilmesi tek başına ırkçılık kanıtı değildir; hedef gösterme, hakaret ve bağlamı değerlendir.",
    "context": [
      "kiraz fidanı düşüren oldu mu?",
      "bende iki tane var, birini verebilirim."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "emircan3151",
        "role": "player"
      }
    ]
  },
  "8": {
    "message": "Lostaratorr la kürt cevap versene",
    "note": "Görseldeki metin aktarılmıştır. Bir etnik kimliğin yalnızca belirtilmesi tek başına ırkçılık kanıtı değildir; hedef gösterme, hakaret ve bağlamı değerlendir.",
    "context": [
      "köprüyü hangi blokla yapalım?",
      "yanmayan blok kullanalım."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "Lostaratorr",
        "role": "player"
      }
    ]
  },
  "9": {
    "message": "Kürt",
    "note": "Görseldeki metin aktarılmıştır. Bir etnik kimliğin yalnızca belirtilmesi tek başına ırkçılık kanıtı değildir; hedef gösterme, hakaret ve bağlamı değerlendir.",
    "context": [
      "pazar sandığını buraya koyabilir miyim?",
      "yolu kapatmayan bir yer seçebilirsin."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "Lostaratorr",
        "role": "player"
      }
    ]
  },
  "10": {
    "message": "oha am",
    "note": "Küfür, kısaltması veya iması. Ağır ceza tablosunda 6 saat.",
    "context": [
      "elması demir kazmayla kırabilir miyim?",
      "evet, demir veya daha iyi kazma kullan."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "Lostaratorr",
        "role": "player"
      }
    ]
  },
  "11": {
    "message": "kaçma siderim kelleni",
    "note": "Küfür, kısaltması veya iması. Ağır ceza tablosunda 6 saat.",
    "context": [
      "çatının rengi nasıl olmuş?",
      "köşelere merdiven eklersen güzel durur."
    ],
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "emircan3151",
        "role": "player"
      }
    ]
  },
  "12": {
    "message": "beyin yokki amk",
    "note": "Küfür, kısaltması veya iması. Ağır ceza tablosunda 6 saat.",
    "context": [
      "Nether’da yatak kullanmayalım değil mi?",
      "evet, burada yatak patlar."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "emircan3151",
        "role": "player"
      }
    ]
  },
  "13": {
    "message": "ShadowViper köpüşüm 2 kişilik ses gel",
    "note": "Yetkiliyi veya ekibi aşağılayan hakaret. Ağır ceza tablosunda 3 saat. Bu canlandırmada ShadowViper Rehber, mesajı yazan emircan3151 ise Oyuncu rolündedir.",
    "context": [
      "spawn’a hangi komutla dönülüyor?",
      "/spawn yazabilirsin."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "ShadowViper",
        "role": "staff"
      }
    ]
  },
  "14": {
    "message": "rehber m a l sınız açtım kapatmacammm",
    "note": "Yetkiliyi veya ekibi aşağılayan hakaret. Ağır ceza tablosunda 3 saat. Bu canlandırmada emircan3151 Rehber, mesajı yazan Shadow01 ise Oyuncu rolündedir.",
    "context": [
      "envanter doldu, sandık kuralım mı?",
      "girişte boş bir sandık var."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "emircan3151",
        "role": "staff"
      }
    ]
  },
  "15": {
    "message": "zyxperBTW la ben bu Lostaratorr kadar esek görmedim",
    "note": "Yetkiliyi veya ekibi aşağılayan hakaret. Ağır ceza tablosunda 3 saat. Bu canlandırmada Lostaratorr Rehber, mesajı yazan ShadowViper ise Oyuncu rolündedir.",
    "context": [
      "derenin üstüne köprü yapıyorum.",
      "yolu da köprüye bağlayalım."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "Lostaratorr",
        "role": "staff"
      }
    ]
  },
  "16": {
    "message": "Selamun aleyküm",
    "note": "Tekrarlanan mesajlar sohbeti kaplıyor. Hafif ceza grubunun uyarı basamaklarını izle.",
    "context": [
      "meşalesi olan var mı?",
      "dönüş yoluna birkaç tane bıraktım."
    ],
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "emircan3151",
        "role": "player"
      }
    ]
  },
  "17": {
    "message": "zırlama göt",
    "note": "Argo ifade içeren mesaj. Bağlamı okuyup kusurlu ceza basamaklarını kontrol et.",
    "context": [
      "çeşmenin etrafını taşla kaplıyorum.",
      "merdivenleri açık bırakırsan geçiş rahat olur."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "emircan3151",
        "role": "player"
      }
    ]
  },
  "18": {
    "message": "Limonlusoda2231 la sus parayı bulcaz her musteriden 1 k karşılık senin göt",
    "note": "Argo ifade içeren mesaj. Bağlamı okuyup kusurlu ceza basamaklarını kontrol et.",
    "context": [
      "bu katmanda demir bulabilir miyim?",
      "duvarlardaki cevherleri de kontrol et."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "Lostaratorr",
        "role": "player"
      }
    ]
  },
  "19": {
    "message": "Shadow01 sen hiç osurdun mu yada sıçtın mı",
    "note": "Argo ifade içeren mesaj. Bağlamı okuyup kusurlu ceza basamaklarını kontrol et.",
    "context": [
      "tapınağın bahçesine çiçek ekiyorum.",
      "girişe doğru bir yol da bırakalım."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "player"
      }
    ],
    "speaker": "emircan3151"
  },
  "20": {
    "message": "sünepe salak bir çocuksun",
    "note": "Başka bir oyuncuyu hedef alan aşağılayıcı mesaj. Kusurlu ceza basamakları geçerlidir.",
    "context": [
      "lavın yanındaki geçidi kapattım.",
      "iyi olmuş, diğer köprüden geçebiliriz."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "Lostaratorr",
        "role": "player"
      }
    ]
  },
  "21": {
    "message": "ENES2067v3 mal mısın paşam",
    "note": "Başka bir oyuncuyu hedef alan aşağılayıcı mesaj. Kusurlu ceza basamakları geçerlidir.",
    "context": [
      "şu boş dükkân kimin?",
      "sahibini tabelasından kontrol edebilirsin."
    ],
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "emircan3151",
        "role": "player"
      }
    ]
  },
  "22": {
    "message": "Aptal çocuk ya",
    "note": "Başka bir oyuncuyu hedef alan aşağılayıcı mesaj. Kusurlu ceza basamakları geçerlidir.",
    "context": [
      "maden asansörü çalışıyor mu?",
      "evet, alt kattaki düğmeyi kullan."
    ],
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "emircan3151",
        "role": "player"
      }
    ]
  },
  "23": {
    "message": "Rehber Evrendeki kütle çekimi en yüksek cisim karadelik ise evreni neden çekmiyor?\nRehber siyahi ajanlar bunu bizden saklıyor",
    "note": "Tek bir soru veya alakasız mesaj tek başına yetkili oyalamayı kanıtlamaz. Tekrarları, bağlamı ve uyarı sonrasında devam edilip edilmediğini değerlendir. Bu canlandırmada Lostaratorr Rehber, mesajı yazan Raphaell ise Oyuncu rolündedir.",
    "context": [
      "pagodaya çıkış hangi tarafta?",
      "sağdaki merdivenlerden çıkılıyor."
    ],
    "speaker": "Raphaell",
    "messages": [
      "Rehber Evrendeki kütle çekimi en yüksek cisim karadelik ise evreni neden çekmiyor?",
      "Rehber siyahi ajanlar bunu bizden saklıyor"
    ],
    "contextSpeakers": [
      {
        "name": "emircan3151",
        "role": "player"
      },
      {
        "name": "Lostaratorr",
        "role": "staff"
      }
    ]
  },
  "24": {
    "message": "lan rehber (×4)\nnapion aşkim (×8)",
    "note": "Yardım talebini açıklaması istendiği halde yetkiliyi tekrar tekrar meşgul etme. Önce uyarı sürecini değerlendir. Bu canlandırmada ShadowViper Rehber, mesajı yazan emircan3151 ise Oyuncu rolündedir.",
    "context": [
      "kaleye giden köprü nerede?",
      "büyük kapının karşısında."
    ],
    "speaker": "emircan3151",
    "contextSpeakers": [
      {
        "name": "Raphaell",
        "role": "player"
      },
      {
        "name": "ShadowViper",
        "role": "staff"
      }
    ]
  },
  "25": {
    "message": "Rehber tost makinesine Minecraft kursam shader açar mı?",
    "note": "Tek bir soru veya alakasız mesaj tek başına yetkili oyalamayı kanıtlamaz. Tekrarları, bağlamı ve uyarı sonrasında devam edilip edilmediğini değerlendir. Bu canlandırmada Shadow01 Rehber, mesajı yazan Raphaell ise Oyuncu rolündedir.",
    "context": [
      "surları dolaşınca eve döneceğim.",
      "tamam, meydanda görüşürüz."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "staff"
      }
    ]
  },
  "26": {
    "message": "ürün yazmayacağım, bu kanalı bütün gece şarkı sözleriyle dolduracağım",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "ticaret kanalında ne satıyorsunuz?",
      "burası alım satım için, ilanını yazabilirsin."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "player"
      }
    ]
  },
  "27": {
    "message": "yardım sorusu yok, burada sadece maç muhabbeti yapmaya devam edeceğim",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "yardım kanalına sorunu yazabilirsin.",
      "sorunumu çözdüm, teşekkürler."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "emircan3151",
        "role": "player"
      },
      {
        "name": "ShadowViper",
        "role": "player"
      }
    ]
  },
  "28": {
    "message": "adama gelin alışveriş var! (kısa aralıklarla tekrar)",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "ada dükkânının ilanını az önce gördük.",
      "ilanları aralıklı paylaş, sohbeti kaplamasın."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "player"
      }
    ]
  },
  "29": {
    "message": "/adareklam — aynı ilanı yeniden gönderir",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "ada reklamını biraz önce de paylaştın.",
      "sohbeti takip edemiyoruz, tekrar gönderme."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "emircan3151",
        "role": "player"
      },
      {
        "name": "ShadowViper",
        "role": "player"
      }
    ]
  },
  "30": {
    "message": "sen bakma rehber, cezayı ben belirlerim; herkes benim dediğimi yapsın",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "bu işlemi ilgili yetkili inceliyor.",
      "konuyu inceliyorum, oyuncular beklesin lütfen."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "staff"
      }
    ]
  },
  "31": {
    "message": "incelemeyi bırak, hemen sustur şunu; bütün sohbete ben karar vereceğim",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "olayın önceki mesajlarını da ilettim.",
      "kanıtları inceleyip karar vereceğim."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "emircan3151",
        "role": "player"
      },
      {
        "name": "ShadowViper",
        "role": "staff"
      }
    ]
  },
  "32": {
    "message": "bana para vermezsen seni asılsız şikâyetlerle uğraştıracağım",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "eşyanı satın almak istemiyorum.",
      "istemiyorsan alışveriş yapmayabilirsiniz."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "player"
      }
    ]
  },
  "33": {
    "message": "eşyayı bedava vermezsen hakkında yalan yayacağım",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "alışveriş için anlaşamadık.",
      "konuyu kapatalım, takas yapmayalım."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "emircan3151",
        "role": "player"
      },
      {
        "name": "ShadowViper",
        "role": "player"
      }
    ]
  },
  "34": {
    "message": "hadi cevap versene, herkesin önünde kavga et de görelim",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "tartışmayı kapattım, oyuna dönüyorum.",
      "tamam, konuyu uzatmayalım."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "player"
      }
    ]
  },
  "35": {
    "message": "korktun mu, cevap ver de sohbeti yeniden karıştıralım",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "birlikte oyun oynamaya devam edelim.",
      "tartışma çıkmasını istemiyorum."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "emircan3151",
        "role": "player"
      },
      {
        "name": "ShadowViper",
        "role": "player"
      }
    ]
  },
  "36": {
    "message": "admin bana bedava elmas ve oyun parası verir misin?",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "üst yönetim birazdan duyuru yapacak.",
      "duyuruyu bekliyorum."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "player"
      }
    ]
  },
  "37": {
    "message": "admin ödülsüz de olur, hesabıma özel para gönderir misin?",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "etkinlik ödülleri duyuruda yazıyor.",
      "ödül şartlarını oradan okuyabiliriz."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "emircan3151",
        "role": "player"
      },
      {
        "name": "ShadowViper",
        "role": "player"
      }
    ]
  },
  "38": {
    "message": "sen de susmayacaksın biliyorum, bütün gece tartışacağım seninle",
    "note": "İki oyuncunun karşılıklı devam eden tartışmasını birlikte değerlendir. Tabloya göre işlem her iki tarafa da uygulanır.",
    "context": [
      "takas konusunda anlaşamadık, burada kapatalım.",
      "hayır, son sözü ben söyleyeceğim; sen sus!"
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "player"
      }
    ]
  },
  "39": {
    "message": "ben de her yazdığına karşılık vereceğim, bu tartışma bitmeyecek",
    "note": "İki oyuncunun karşılıklı devam eden tartışmasını birlikte değerlendir. Tabloya göre işlem her iki tarafa da uygulanır.",
    "context": [
      "mesajları uzatmayalım, oyunumuza bakalım.",
      "konuyu kapatmıyorum, cevap vermeye devam edeceğim."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "emircan3151",
        "role": "player"
      },
      {
        "name": "ShadowViper",
        "role": "player"
      }
    ]
  },
  "40": {
    "message": "herkes aynı anda sohbeti doldursun, kimse yardım soramasın",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "yardım isteyen oyuncular var.",
      "sohbeti açık tutalım."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "player"
      }
    ]
  },
  "41": {
    "message": "toplanıp etkinliği bilerek bozalım, herkes engel olsun",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "etkinlik sırasını bekliyoruz.",
      "sıramız gelince katılırız."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "emircan3151",
        "role": "player"
      },
      {
        "name": "ShadowViper",
        "role": "player"
      }
    ]
  },
  "42": {
    "message": "https://ornek.invalid/baglanti — buraya tıklayın",
    "note": "Buradaki .invalid adresi yalnızca örnektir ve gerçek bir bağlantı değildir. Sunucu reklamı içeriyorsa özel reklam kuralını ayrıca kontrol et.",
    "context": [
      "aradığın açıklama kurallarda var.",
      "tamam, oradan bakacağım."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "player"
      }
    ]
  },
  "43": {
    "message": "https://ornek.invalid/liste — liste bu adreste",
    "note": "Buradaki .invalid adresi yalnızca örnektir ve gerçek bir bağlantı değildir. Sunucu reklamı içeriyorsa özel reklam kuralını ayrıca kontrol et.",
    "context": [
      "eşya fiyatını oyun içinden konuşalım.",
      "pazardaki tabelada fiyatı görebilirsin."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "emircan3151",
        "role": "player"
      },
      {
        "name": "ShadowViper",
        "role": "player"
      }
    ]
  },
  "44": {
    "message": "ben yetkiliyim bana güvenin, dediklerimi yapmanız zorunlu",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "yanındaki rolde Oyuncu yazıyor.",
      "rehberden yardım isteyeceğim."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "player"
      }
    ]
  },
  "45": {
    "message": "gizli adminim, yetkim görünmüyor; hesabını kontrol için bana ver",
    "note": "Bu konuşma eğitim amacıyla oluşturulmuştur. Mesajın tamamını, hedefini ve uyarı geçmişini birlikte değerlendir.",
    "context": [
      "bu işlemi kim yapacak?",
      "gerçek yetkiliyi bekleyelim."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "emircan3151",
        "role": "player"
      },
      {
        "name": "ShadowViper",
        "role": "player"
      }
    ]
  },
  "46": {
    "message": "din tartışmasını burada sürdürmeye devam edeceğim",
    "note": "Dinle ilgili sohbet örneği. Dinî / millî değerlere yönelik hakaret ile aynı durum değildir; o durumda üst yetkililere ilet.",
    "context": [
      "sohbeti oyunla ilgili tutalım.",
      "evet, oyun içi sorulara dönelim."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "player"
      }
    ]
  },
  "47": {
    "message": "bu kanalı siyaset tartışması için kullanacağım, konuyu kapatmayacağım",
    "note": "Siyasetle ilgili sohbet örneği. Mesajın tamamını ve kanalın bağlamını değerlendir.",
    "context": [
      "sohbeti oyunla ilgili tutalım.",
      "evet, oyun içi sorulara dönelim."
    ],
    "speaker": "Raphaell",
    "contextSpeakers": [
      {
        "name": "Lostaratorr",
        "role": "player"
      },
      {
        "name": "Shadow01",
        "role": "player"
      }
    ]
  }
};

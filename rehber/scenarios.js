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
  }
};

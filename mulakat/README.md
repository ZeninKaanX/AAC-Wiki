# Atlas kontrol laboratuvarı

AAC Wiki içindeki `#interview` veya doğrudan `/mulakat/` üzerinden açılır. Gerçek Windows / uzaktan masaüstü değildir; tarayıcıda üretilen eğitim dosyaları ve kayıtlarla çalışır.

Her yeni oturum `crypto.getRandomValues` ile ayrı bir tohum alır. Oyuncu, Windows kullanıcısı, başlatıcı, profil, dosya adları, konumlar, seçilen bulgular ve kayıt sırası değişir. Aynı dosyaya ait kaynaklar birbiriyle ilişkilidir. 3–5 şüpheli bulguya temiz modlar ve kontrol aracı örnekleri eşlik eder.

İlerleme `sessionStorage` içinde sekmeye özel saklanır. Farklı kullanıcılar / sekmeler kendi ortamlarını kullanır; paylaşılan sunucu durumu veya merkezi puan tablosu yoktur. Sekme kapanınca ilerleme kaybolabilir. Aynı sekmede sayfayı yenileyince Devam et ile sürdürülür. Sonuç JSON olarak indirilebilir.

Puan, her örnekte sınıflandırma (%35), içerik/silme kaydı (%25), konum (%15), destekleyen kaynak (%15), oyun içi kullanım iddiasını ayırma (%10) üzerinden hesaplanır. Son puan örnek puanlarının ortalamasıdır. Serbest açıklamalar otomatik değerlendirilmez. Cevaplar yalnız bitirildikten sonra arayüzde açılır. Bu istemci taraflı bir alıştırmadır; cevap anahtarının tarayıcı geliştirici araçlarından gizlenmesi veya sunucuda doğrulanan resmî sınav güvenliği vaat edilmez.

Gerçek şüpheli dosya, hile kodu, gerçek kişi bilgisi veya Windows sanal makinesinin özel dosyaları yayımlanmaz. Dosya içerikleri, SHA-256 değerleri ve günlükler eğitim verisidir. Gerçek ağ ziyaretleri / dosya indirmeleri yapılmaz.

Testler: `node tests/interview-engine.cjs` (repo kökünden). 300 tohum, puanlama, yeniden üretilebilirlik, temiz örnekler ve silinmiş dosya tutarlılığı doğrulanır. Tarayıcı testinde iki bağımsız sekme, kanıt toplama, arama, içerik açma, oturum sürdürme, sonuç ve mobil düzen kontrol edildi.

Duvar kâğıdı yerleşik imagegen ile bu proje için üretildi. Üretim tarifi: 16:9 Minecraft Viking kalesi, karlı fiyort, gece ve hafif kuzey ışıkları; Atlas lacivert/buz mavisi/altın paleti; sağda taş işçiliği ve sıcak fenerler, ortada masaüstü pencerelerine uygun sakin alan; yazı, logo ve karakter yok.

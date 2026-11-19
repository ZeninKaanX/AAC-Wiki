# Atlas Wiki

Oyuncular için ayrı wiki: https://astralissaga.xyz/atlas/

## İçerik

- Altı oyun modu: Towny, SkyBlock, BoxPvP, SMP, PvP ve Pillars.
- Kullanıcının Wiki.zip arşivinden aktarılan komutlar ve 76 görsel.
- Resmî AtlasOyuncu dokümantasyonuna dayanarak yeniden yazılan başlangıç, sistem ve destek rehberleri.
- Üç Towny afişi ana sayfanın giriş ve keşif alanlarında kullanılır.

`data.js` içeriği; `app.js` yönlendirmeyi, aramayı, filtreleri ve görsel görüntüleyiciyi; `styles.css` görünümü yönetir. Statik çalışır; hesap bilgisi toplamaz. Site ve oyun hesaplarına giriş, ödeme, indirme ve destek bağlantıları resmî AtlasOyuncu sayfalarına gider.

Rehberlerde başvuru kaynağı bağlantıları bulunur. Sunucuya ait fiyat, limit veya ceza süreleri tahmin edilmez. Gönderilen komut listesinde belirtilen biçimler esas alınır; oyun içi açıklamalar güncellemelerde tekrar kontrol edilmelidir.

## Yerelde açma

`index.html` tarayıcıda doğrudan açılabilir. Sunucu üzerinden denemek için bu klasörde `python -m http.server 8770` çalıştırılabilir.

Görsellerin büyük kopyaları `assets/scenes`, küçük önizlemeleri `assets/thumbs` içindedir. Küçük menü görselleri kayıpsız WebP olarak saklanır. Poppins lisansı `assets/fonts/Poppins-OFL.txt` içindedir.

## Doğrulama

Başlangıç ve altı oyun modu, komut araması ve sayfalama, kategori filtreleri, global arama, galeri kenar düğmeleri ve klavye kullanımı, mobil taşma ve menü kaydırması tarayıcıda kontrol edilmiştir.

## Görsellerle anlatım

Görseller artık rehber adımlarındaki `sections[].figures` alanına bağlanır. Her görsel, bir `photo` kimliği ve o adımı açıklayan `caption` taşır. Yakınlaştırıcı yalnızca açık rehberin görselleri arasında geçiş yapar. Eski `#places` bağlantıları resimli konu rehberlerine yönlenir.

Client ayarları ve ilk bağlantı için resmî dokümantasyondaki ekran görüntülerinin yerel kopyaları kullanılır. Kaynak sayfaları içerik verisinde saklanır. ZIP’teki tüm öğretici görseller en az bir ilgili adımda kullanılmıştır; üç afiş ana sayfada korunur.

Komutlar önce oyun, sonra konu kategorisiyle açılır. Toplu bütün-oyun listesi yoktur. Sol gezinmede Client ve altı oyun modu tek satırlık açılır başlıklardır. Deniz videosu, ışık ve kabarcıklar hareket düğmesine ve azaltılmış hareket tercihine uyar; video sekme arka plandayken durur.

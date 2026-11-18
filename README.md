# AAC Wiki

AtlasOyuncu AAC rehberi. Giriş veya sunucu uygulaması gerekmez; statik HTML, CSS ve JavaScript kullanır.

GitHub Pages: ana dalın kök dizini. `CNAME` mevcut alan adını korur. `.nojekyll`, alt çizgi içeren dosya yolları dâhil statik dosyaların doğrudan yayınlanmasını sağlar.

## Yerel önizleme

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

## Monarch Store yedeği

Önceki mağaza ve tüm Git geçmişi `backup/monarch-store-20261116` dalında korunur. Wikiye geçişten önceki commit: `1e0e7a023cce610ef519aa27c60afa601c6ef102`.

## İçerik

Rehber, PC kontrol süreci, uygulama açıklamaları, AtlasAC Mobil kullanım rehberi, kanıt oluşturucu, rapor kontrol listesi, altı video ve iki ekran görüntüsü, uygulama testi. Reach eşiği 3,8 bloktur. Yazı tipleri ve medya yereldir; Mobil rehberdeki ekran görüntüleri yereldir; harici video oynatıcı yüklenmez. Müzik atıfları `assets/music/credits.json` içinde korunur.

## Kayıtların ana sesi

Altı kaydın ses izi iki geçişli loudnorm ile yaklaşık −23 LUFS seviyesine getirildi (tepe hedefi −4 dBTP). Yeniden kodlanan AAC sesin en yüksek gerçek tepesi −3 dBTP altında doğrulandı. Görüntü akışı yeniden kodlanmadan kopyalandı ve SHA-256 ile eşitliği kontrol edildi. Müzik ayrı oynatıcıdan ayarlanır. Orijinaller, değişiklikten önceki Git geçmişinde korunur.

## AtlasAC kullanımı

`#pc` sayfası Windows/Linux indirmelerini, sekiz kullanım adımını, gerçek uygulama ekranlarını, eşleşme gerekçelerini, kapsam uyarılarını ve JSON dışa aktarmayı açıklar. Eşleşmelerin AAC tarafından değerlendirilmesi gerektiği notu korunur. Sayfa menü, ana sayfa, uygulamalar, PC süreci ve mobil rehberden erişilebilir; aramaya eklenmiştir.

AtlasAC 0.3.30 uygulama arşivleri, Windows/Linux otomatik testleri ve paket bütünlüğü kontrolü geçen dağıtımlardan hazırlanmıştır. İndirmeler GitHub Releases üzerinden yapılır ve tek HTML içinde uygulama dosyaları bulunmaz. `atlasac-pc-0.3.30` sürümündeki SHA256SUMS.txt indirme bütünlüğünü doğrulamak içindir.

## Mobil rehber ve güncellemeler

`#mobile`, 4.7 arayüzündeki tarama, izin, canlı sonuçlar, dosya/arşiv inceleme, kırmızı tespit vurgusu, mavi arama ve raporlama adımlarını açıklar. Önceki mobil video kaldırılmıştır; eski `mobile-player.html` bağlantısı rehbere yönlenir. Görseller çalıştırılmayan örnek test dosyalarından alınmıştır.

`#updates`, AtlasAC ve AtlasAC Mobil afişlerini, kısa yenilik notlarını ve ilgili rehber bağlantılarını içerir. Afişler `assets/updates/`, mobil ekran görüntüleri `assets/mobile/` içindedir. Mobil indirme düğmesi, kullanıcının paylaşım talebiyle AAC Wiki'nin `atlasac-mobil-4.7-test` sürümüne yüklenen test APK'sına yönlenir. APK/SHA-256 dosyası GitHub Releases üzerinden sunulur; 4.7'nin test paketi ve imza uyumluluğu rehberde belirtilir. Ana sayfada iki küçük duyuru kartı bulunur; afişlerin tam boyu `#updates` bölümündedir.

AtlasAC rehberindeki dolu sonuç ve dosya detayı ekranları, doğrulanmış resmî BleachHack örneğinin tek dosyalık statik taramasından alınmıştır. Uygulama/istemci çalıştırma veya sunucuda kullanım kanıtı olarak sunulmaz. Kaynak ve SHA-256 bilgisi `assets/desktop/README.md` içindedir. Schematica Printer ve Litematica Easy Place satırlarında 3 günlük ceza için oyunda kullanım koşulu belirtilir.

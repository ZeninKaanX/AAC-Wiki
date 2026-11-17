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

Rehber, PC kontrol süreci, uygulama açıklamaları, mobil video, kanıt oluşturucu, rapor kontrol listesi, altı video ve iki ekran görüntüsü, uygulama testi. Reach eşiği 3,8 bloktur. Yazı tipleri ve medya yereldir; YouTube kullanım videosu internet gerektirir. Müzik atıfları `assets/music/credits.json` içinde korunur.

## Kayıtların ana sesi

Altı kaydın ses izi iki geçişli loudnorm ile yaklaşık −23 LUFS seviyesine getirildi (tepe hedefi −4 dBTP). Yeniden kodlanan AAC sesin en yüksek gerçek tepesi −3 dBTP altında doğrulandı. Görüntü akışı yeniden kodlanmadan kopyalandı ve SHA-256 ile eşitliği kontrol edildi. Müzik ayrı oynatıcıdan ayarlanır. Orijinaller, değişiklikten önceki Git geçmişinde korunur.

## AtlasAC PC kullanımı

`#pc` sayfası Windows/Linux dosya adlarını, altı kullanım adımını, bölüm uyarılarını ve JSON dışa aktarmayı açıklar. Eşleşmelerin AAC tarafından değerlendirilmesi gerektiği notu korunur. Sayfa menü, ana sayfa, uygulamalar, PC süreci ve mobil rehberden erişilebilir; aramaya eklenmiştir.

Uygulama arşivleri, kullanıcı tarafından sağlanan Windows/Linux dosyalarından hazırlanmıştır. İndirmeler GitHub Releases üzerinden yapılır ve tek HTML içinde uygulama dosyaları bulunmaz. `atlasac-pc-20261117` sürümündeki SHA256SUMS.txt indirme bütünlüğünü doğrulamak içindir.

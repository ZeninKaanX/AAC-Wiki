# Atlas Lab — tarayıcı kontrol mülakatı

Wiki: `#interview`. Doğrudan giriş: `/mulakat/`.

## Kapsam

Kullanıcının son belirttiği AAC RAR paketindeki sekiz araç kullanılır: Everything, Journal-Tool, JournalTrace, BrowserDownloadsView, BrowsingHistoryView, LastActivityView, USBDeview, WinPrefetchView. AtlasAC ek olarak tarama ve dosya/arşiv incelemesi sağlar. Dosya Gezgini sanal masaüstünün parçasıdır. Process Explorer, Process Monitor, Autoruns, System Informer, Luyten, Detect It Easy, RedLotus ve ayrı Mod Inspector uygulaması bu sürümde yer almaz.

Programlar tarayıcıdaki eğitim verileri üzerinde çalışır; gerçek EXE dosyaları veya bir oyuncunun bilgisayarı çalıştırılmaz / taranmaz. Everything için düz arama, *.jar, ext:jar;bin, path:, dm:today ve OR; kaynaklarda işlem/zaman filtresi, sıralama ve CSV; AtlasAC'de tarama, metaveri ve iç arşiv girdileri vardır. Manifest veya temiz alt girdi, şüpheli mod kimliğini doğrulama puanı sağlamaz.

## Vakalar

`cases.js`: 120 benzersiz vaka kimliği, 10 doğrulanmış istemci/eklenti kimliği, 12 farklı kanıt akışı. Rastgele ad varyasyonları vaka sayısı olarak sayılmaz. Akışlar konum, görünürlük, arşiv derinliği, indirme, USB kaynak/hedef/hash, kopya, yeniden adlandırma zinciri ve silme/güncelleme olaylarıyla farklılaşır. Her oturumda 4–5 vaka ve temiz dikkat dağıtıcılar seçilir. Hemen önceki oturumun vaka kimlikleri tekrar seçilmez. Metaveri kimlikleri yerel Atlas Lab örnekleri ve cases.js içindeki resmi kaynak bağlantılarından doğrulandı. Dosyalar, hash değerleri ve zamanlar eğitim için üretilir; gerçek tespit imzası veya oyun içi kullanım kanıtı değildir.

Her vaka için sınıflandırma %35, içerik/silme kaydı %25, konum %15, destekleyen kayıt %15, kullanım ayrımı %10. USB vakasında USB ve Journal birlikte gerekir. Serbest yazı otomatik puanlanmaz. Son puan örneklerin ortalamasıdır.

## Orijinal görseller

Oluşturulan Atlas Lab logosu kaldırıldı. Logo, kullanıcının sağladığı orijinal yılbaşı AtlasOyuncu görselidir. Araç simgeleri yerel orijinal EXE kaynaklarından çıkarıldı. AtlasAC simgesi kullanıcının https://files.fm/u/ej9ctd4vg3w89ays bağlantısındaki AtlasAC.exe dosyasından çıkarıldı. Kaynak dosya SHA-256 ve PE kaynak bilgileri `icons/sources.json` içinde. JournalTrace.exe dosyasında yerel uygulama simgesi kaynağı bulunmadığından genel uygulama simgesi gösterilir; başka bir ürünün logosuyla değiştirilmez. EXE dosyaları yayımlanmaz.

Duvar kâğıdı Atlas teması için imagegen ile üretildi: karlı Minecraft Viking kalesi, koyu mavi fiyort, buz mavisi / altın fenerler ve hafif kuzey ışıkları. Yazı veya logo içermez.

## Oturumlar ve test

Her sekme kendi sessionStorage kaydını kullanır. Yenileme sonrası devam edilebilir; sekme kapanınca ilerleme kaybolabilir. Farklı adaylar ortak sunucu durumu paylaşmaz. Sonuç JSON indirilebilir. Bu istemci taraflı eğitimdir; gizli cevap anahtarı / sunucuda doğrulanan resmî sınav güvenliği sağlamaz.

`node tests/interview-engine.cjs`: 120 vakanın tamamının izinli araçlarla çözülebilmesi, 500 rastgele oturum, tüm vaka havuzuna erişim, peş peşe tekrar etmeme, kaynak ve puan tutarlılığı test edilir. Tarayıcıda tarama, arşiv içeriği/manifest ayrımı, kanıt toplama, filtreleme, bağımsız iki sekme, yenileme sonrası devam, sonuç ve mobil düzen kontrol edildi.

Orijinal Windows ortamı ayrı qcow2 inceleme katmanı üzerinde açılıp güncel masaüstü, AtlasAC-Lab ve AAC Uygulamalar klasörleri gözle incelendi. Asıl Windows diski değiştirilmedi. Windows kaynaklı ekran görüntüleri ve özel kurulum dosyaları bu siteye eklenmedi.

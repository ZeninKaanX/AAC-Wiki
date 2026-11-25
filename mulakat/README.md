# Atlas Lab — Windows kontrol eğitimi

Wiki girişi `#interview`, doğrudan masaüstü `/mulakat/`. Laboratuvar dar iframe yerine ayrı sekmede tüm ekranı kullanır.

## Kapsam ve uygulamalar

Kullanıcının paketindeki sekiz araç: Everything, Journal-Tool, JournalTrace, BrowserDownloadsView, BrowsingHistoryView, LastActivityView, USBDeview, WinPrefetchView. AtlasAC ve işletim sistemi Dosya Gezgini eklenir. Başka inceleme aracı menüye eklenmez.

Bu, tarayıcıda çalışan eğitim uyarlamasıdır. Gerçek Windows, EXE veya bir oyuncunun bilgisayarı çalıştırılmaz/taranmaz. Uygulamaların bütün sürümlerindeki bütün özelliklerin birebir portu değildir; aşağıdaki kontrol akışları oturumun sanal dosya ve kayıtlarında uygulanır. Yeni sistemin doğrulaması, EXE'lerin tarayıcıda çalıştığı iddiasına dayanmaz.

## Referans incelemesi

25 Kasım'da asıl Windows diskine dokunmadan ayrı qcow2 katmanı açıldı. Gerçek uygulamalarda BrowserDownloadsView ana ekranı/Properties, BrowsingHistoryView açılış Advanced Options, WinPrefetchView iki panel, USBDeview aygıt alanları, LastActivityView alanları, JournalTrace Drive Select → Scan → Layout → Data Grid → Name araması ve Easy Journal Viewer açılışı gözle incelendi. Everything daha önce aynı yöntemle canlı açılıp karşılaştırıldı. AtlasAC düzeni yerel `Atlas-AC/atlasac/desktop.py` build_scan/build_results kodu ve gerçek wiki kullanım görüntülerinden alındı. İnceleme VM'si kapatıldı; geçici yazma katmanı silindi. Özel Windows ekran görüntüleri, Windows dosyaları ve uygulama EXE'leri siteye eklenmedi.

Resmî davranış kaynakları: [Everything arama sözdizimi](https://www.voidtools.com/support/everything/searching/), [BrowserDownloadsView](https://www.nirsoft.net/utils/web_browser_downloads_view.html), [BrowsingHistoryView](https://www.nirsoft.net/utils/browsing_history_view.html), [WinPrefetchView](https://www.nirsoft.net/utils/win_prefetch_view.html).

## Uygulanan akışlar

- Windows düzeninde Başlat, görev çubuğu, Çalıştır, bağımsız ve aynı anda açık pencereler; taşıma, kenardan boyutlandırma, büyütme/küçültme, geri açma. Kanıt alanı sürekli ekranı daraltmaz.
- Dosya Gezgini: sürücü/klasör ağacı, adres, üst klasör, geri/ileri, mevcut ve gizli dosyalar, alt klasörde arama. Çalıştır ve adres çubuğu `%appdata%`, `%localappdata%`, `%userprofile%`, `shell:downloads` gibi sanal yolları çözer.
- Everything: klasik açık yüzey ve kendi menüleri, dosya/klasör listesi, ad/yol/boyut/tarih sütunları, sütun genişliği, sıralama, `*.jar`, `ext:jar;bin`, `!`, `|`/OR, `file:`, `folder:`, `name:`, `path:`, `size:` ve `dm:` temel aramaları; arama yer imleri. Desteklenmeyen gelişmiş sözdizimi tam Everything motoru olarak sunulmaz.
- Journal-Tool: gerçek Easy Journal Viewer'a göre koyu mavi yüzey, altı renkli işlem filtresi, yol/işlem/tarih, 15 kayıtlık sayfalama, arama. Klasör simgesi kaydın kendi yolunu açar.
- JournalTrace: Drive → Select, sürücü bilgisi/Select, Scan, All done, Layout → Data Grid / Directory Tree. Data Grid, Search'e basınca USN/Name/Date/Reason/Directory alanlarında arar. Clear aramayı kaldırır. Journal-Tool ile aynı arayüz kullanılmaz.
- BrowserDownloadsView: dosyanın indirildiği ilk ad ve yol korunur. Yeniden adlandırılmış gizli hedefe otomatik atlanmaz. Download URL 1/2/3, Web Page URL, Start/End Time ve boyut alanları, klasik Properties ve kaynak dosya klasörü vardır.
- BrowsingHistoryView: açılış Advanced Options; zaman, URL dahil/hariç ve Edge/profil seçimi; seçime göre yüklenen geçmiş; URL/Title/Visit Time/Visit Count/Browser/Profile alanları. Simülasyonda temsil edilen kaynak Edge profilidir.
- WinPrefetchView: üst panelde Prefetch kayıtları; seçilen kaydın yüklediği dosyalar alt panelde. Kayıt, belirli bir modun oyunda kullanıldığı anlamına getirilmez.
- USBDeview: aygıt/bağlantı/sürücü/seri/registry zamanı alanları. Dosya aktarımı, kaynak-hedef hash veya dosya kopyalama günlüğü uydurulmaz. Aygıt satırı doğrudan hile bulgusu diye işaretlenmez.
- LastActivityView: Action Time/Description/Filename/Full Path/More Information/Extension/Data Source alanları. Java programının çalışması, belirli bir JAR'ın oyun içinde kullanıldığı iddiasına çevrilmez.
- NirSoft düzeninde Properties, Find, Quick Filter, seçili kayıtlar, CSV, çoklu seçim. Araçlara göre kayıt açma davranışı ayrıdır; her çift tık AtlasAC'ye gönderilmez.
- AtlasAC: özgün arka plan/logo; Tarama/Sonuçlar, eğitim kapsamı onayı, durdurma, arka planda tamamlanma, sonuç arama, dosya indeksi/kapsam, JSON, tarama verisini silme, dosya/arşiv ayrıntısı. Eşleşme, cevap anahtarındaki doğru/yanlış etiketinden değil sanal dosyanın bilinen mod kimliğinden üretilir.

## Buldum ve değerlendirme

Dosya veya ilgili kayıt yanındaki **Buldum** doğrudan kaydeder. Form, durum seçimi, kaynak kontrol listesi veya gerekçe zorunlu değildir. Aynı dosyanın farklı araçlarda tekrar işaretlenmesi tek bulgu sayılır. Bulduklarım panelinden geri alınır. Doğru olup olmadığı bitirene kadar gösterilmez.

Sonuç: doğru bulunan / toplam şüpheli vaka, kaçırılanlar ve yanlış işaretlenen temiz dosyalar. Doğru vakalar eşit değerdedir; her temiz dosya işaretlemesi 10 puan düşürür, alt sınır 0. Eski ayrıntılı `evaluate` motoru test/uyumluluk için durur; kullanıcı akışı `evaluateFound` kullanır. Oturuma göre değişen yüzlerce olağan oyuncu dosyasını tek tek sınıflandırmak gerekmez; yanlış işaretlenirlerse değerlendirmeye girerler.

`cases.js`: 10 doğrulanmış istemci/eklenti ailesi × 12 kayıt akışı = 120 benzersiz vaka. Bu sayı 120 ayrı hile istemcisi anlamına gelmez. Her oturumda 4–5 vaka seçilir; önceki oturumun vaka kimlikleri hemen tekrarlanmaz. Ad, oyuncu, profil, yollar, olay zamanları ve sıranın yanı sıra normal dosyalar değişir. USB vakası yalnız aygıt bağlantısı ve dosya zamanını karşılaştırır; zaman yakınlığı aktarım veya kullanım kanıtı değildir. Dosya içerikleri/hash'ler eğitim verisidir.

## Görseller ve oturumlar

Atlas logosu kullanıcının orijinal yılbaşı logosudur. Uygulama simgeleri orijinal PE kaynaklarından çıkarıldı; `icons/sources.json` köken/SHA bilgisi içerir. JournalTrace EXE'sinde simge kaynağı bulunmadığından genel uygulama simgesi kullanılır. AtlasAC'nin değiştirilmemiş özgün görselleri `assets/atlasac-background.gif` ve `assets/atlasac-logo.png` içinde; masaüstü kış/Viking duvar kâğıdı önceki kullanıcı talebi için üretildi.

Her sekme bağımsız `sessionStorage` oturumudur; aynı anda farklı kişiler kullanabilir. Yenilemede ortam ve bulgular korunur; açılmış pencere düzeni yeniden kurulur. Bu alıştırmadır; sunucuda doğrulanan/gizli cevap anahtarlı resmî sınav değildir. Supabase eklenmedi.

## Kontroller

- `node tests/interview-engine.cjs`: 120 vakanın izinli araçlarla çözülebilmesi, 500 rastgele oturum, vaka havuzu, kaynak tutarlılığı, içerik tabanlı Atlas eşleşmesi, USB sınırı, Buldum/geri alma/yanlış işaretleme.
- `python tests/interview-windows.py`: ayrı Firefox profilinde gerçek fareyle taşıma/boyutlandırma, pencere/görev çubuğu, çoklu seçim, Çalıştır, bağımsız aday sekmeleri ve wiki başlatıcısı.
- `python tests/interview-findings.py`: klasör ağacı, Everything, doğrudan Buldum/tekilleştirme/geri alma, Properties, Prefetch, History Advanced Options, JournalTrace sürücü-tarama-layout-search, USB kapsamı, AtlasAC, sonuç ve mobil taşma.

Python tarayıcı testleri Firefox gerektirir; kişisel açık tarayıcı profilini kullanmaz.

Normal ortam: tarihli ekran görüntüleri, 2–4 dünya ve bölge verileri, gerçek bağımlılık adları, okul/kişisel belgeler, resimler, indirmeler, kaynak paketleri, Edge profili/önbelleği, Discord ve başlatıcı günlükleri, geçici dosyalar. Sayılar, seçimler, tarihler ve boyutlar seed ile değişir. Tarayıcı ve indirme kaynaklarında da normal kayıtlar bulunur. Tüm kişisel içerik sentetiktir.

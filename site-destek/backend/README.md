# Ortak Wiki Site Destek

AAC ve Rehber Wiki statik olarak GitHub Pages üzerinde kalır. Yalnızca Site Destek kayıtları Supabase Postgres ve `wiki-support` Edge Function üzerinden çalışır.

## Canlı proje

Proje: `xnhuoxgmnbzfjshcrpdv` (`https://xnhuoxgmnbzfjshcrpdv.supabase.co`). Ortak uç nokta: `https://xnhuoxgmnbzfjshcrpdv.supabase.co/functions/v1/wiki-support`.

Tablolar, atomik gönderim RPC'si ve yalnızca servis rolüne izin veren politikalar kuruldu. Kurulum Supabase Management API üzerinden yapıldı; sohbet eklentisinin eski hesabına bağlı erişim doğru projeyi göremiyordu. Yönetim token'ı yalnızca özel yerel dosyadan okunur, kaynak kodda tutulmaz.

## Erişim modeli

- Ziyaretçi yalnızca doğrulanan kısa bildirim gönderebilir. Kayıtlar herkese açık listelenmez.
- `wiki_feedback*` tablolarında RLS açıktır. `anon` ve `authenticated` rollerine tablo veya RPC yetkisi verilmez.
- Edge Function, Edge Secrets içindeki `WIKI_SERVICE_KEY` anahtarıyla işlem yapar. Bu anahtar `wiki_support_backend` adıyla bu sisteme özel oluşturulmuştur. Sohbette paylaşılan Secret API key veya yönetim token’ı çalışma zamanında kullanılmaz. Servis anahtarı hiçbir site dosyasında yer almaz.
- Yönetim bağlantısının fragment kısmında 256 bit rastgele bir anahtar bulunur. Her listeleme ve güncellemede sunucu anahtarın SHA-256 özetini doğrular. Anahtarın kendisi veritabanına veya Git deposuna kaydedilmez.
- Bağlantıyı bilen kişi yönetici yetkisine sahiptir. HTML klasörünün adı tek başına erişim sağlamaz. Panelde giriş formu yoktur.
- İsim alanı doğrulanmış kimlik değildir. Panel bunu açıkça belirtir.
- Atomik veritabanı işlemi, istemci başına 15 dakikada 5 ve toplamda saatte 100 yeni bildirim sınırı uygular. Ham IP saklanmaz. İstemci kimliği altyapının ilettiği IP başlığından türetilir; proxy başlıklarının davranışı dağıtımda doğrulanmalıdır. Genel sınır, başlıkların değiştirildiği durumda da geçerlidir.
- Gönderim UUID'si tekrar denemelerde aynı kaydı döndürür. Yönetim güncellemeleri, başka bir yöneticinin değişikliğini sessizce ezmez.

## Dağıtım

1. Kullanıcının belirttiği Supabase projesini URL/ref ile doğrula; mevcut tabloları incele.
2. `schema.sql` dosyasını Supabase migration aracıyla uygula. Bu dosya kurulu yapının birleştirilmiş referansıdır; kurulu projeye yeniden uygulanmaz.
3. Yerel özel dosyadaki SHA-256 özetini ve rastgele rate salt değerini `wiki_feedback_settings` tablosuna servis erişimiyle yaz. Ham yönetim anahtarını SQL'e yazma.
4. Projeye özel secret API key oluşturup Edge Secrets alanında `WIKI_SERVICE_KEY` adıyla sakla. `index.ts` dosyasını `wiki-support` Edge Function olarak dağıt. İşlev kendi yönetici yetkilendirmesini yaptığı ve herkese açık gönderim kabul ettiği için `verify_jwt=false` kullanılır.
5. `site-support.js` ve `admin.js` içindeki `endpoint` değerini işlevin gerçek URL'siyle doldur. Buraya key ekleme.
6. Gerçek gönderim, iki wikinin ortak listelenmesi, güncelleme, yetkisiz erişim ve doğrudan tablo erişiminin reddedilmesini doğrula. Test kayıtlarını temizle. Advisors çalıştır.
7. Doğrulanan site değişikliklerini yayınla. Yönetim bağlantısını sadece kullanıcıya ilet.

Yerel özel bağlantı dosyası: `~/.local/share/atlas-wiki/site-destek-admin.json`. Dizin 0700, dosya 0600 izinlidir; depoya dahil edilmez.

## Anahtarı yenileme

32 rastgele bayttan URL-safe anahtar üret; özel yerel dosyayı güncelle. Yalnızca yeni anahtarın SHA-256 özetini sunucudaki `wiki_feedback_settings.admin_token_hash` alanına yaz. Eski bağlantı sonraki API isteğinde 401 döndürür. Yeni bağlantıyı yöneticilere özel olarak ilet.

## Kontrol

`node tests/site-support-backend.mjs` sunucu istek doğrulaması, anahtar denetimi, hata durumları ve eşzamanlı güncelleme çakışmasını sınar. Canlı API ve tarayıcı kontrollerinde AAC/Rehber gönderimi, idempotent tekrar, ortak liste, filtre, not/durum güncelleme, çakışma, yanlış/eksik anahtarla ret, doğrudan tablo erişiminin reddi, hız sınırı ve metin güvenliği doğrulandı. Test kayıtları temizlenir. CORS kendi alan adı, yerel geliştirme adresleri ve dışa aktarılan `file:` HTML için `null` origin kabul eder; yönetim yetkisi her durumda ayrı sunucu kontrolüne tabidir.

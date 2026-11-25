'use strict';
// Screenshots and control descriptions supplied by the AAC team, 25 November 2026.
const acrImages = {
  records: ['assets/acr/records.png', 372, 272, 'PvP Kayıtları menüsü'],
  search: ['assets/acr/player-search.png', 395, 270, 'Oyuncu ara pusulası'],
  back: ['assets/acr/back-five.png', 743, 836, '1. slot: 5 saniye geri'],
  previous: ['assets/acr/previous-frame.png', 827, 907, '2. slot: önceki kare'],
  pause: ['assets/acr/pause-play.png', 727, 831, '3. slot: duraklat / oynat'],
  next: ['assets/acr/next-frame.png', 687, 868, '4. slot: sonraki kare'],
  forward: ['assets/acr/forward-five.png', 843, 785, '5. slot: 5 saniye ileri'],
  speed: ['assets/acr/speed.png', 592, 746, '6. slot: hızı değiştir'],
  camera: ['assets/acr/camera-control.png', 393, 152, '7. slot: kamera ve envanter'],
  players: ['assets/acr/players-menu.png', 415, 292, 'Replay Oyuncuları menüsünde sol ve sağ tık seçenekleri'],
  pov: ['assets/acr/player-camera.png', 1130, 895, 'Seçilen oyuncunun kamerasıyla kayıt inceleme'],
  hits: ['assets/acr/hits-menu.png', 352, 272, 'Vuruşlar ve Ölümler menüsü'],
  hitsControl: ['assets/acr/hits-control.png', 430, 133, '8. slot: vuruşlar ve ölümler'],
  hitDetail: ['assets/acr/hit-details.png', 562, 290, 'Vuruşun zamanı, hasarı ve ana eldeki eşya bilgisi']
};
const acrControls = [
  ['back', '1', '5 saniye geri', 'Kaydı 5 saniye geri sarar. Şüpheli vuruşun öncesine dönmek için kullan.'],
  ['previous', '2', 'Önceki kare', 'Bir önceki kareye geçer. Duraklattığın anı kare kare geriye doğru inceleyebilirsin.'],
  ['pause', '3', 'Duraklat / oynat', 'Kaydı duraklatır veya oynatmaya devam eder.'],
  ['next', '4', 'Sonraki kare', 'Bir sonraki kareye geçer. Bakış yönü ve vuruş anını adım adım takip et.'],
  ['forward', '5', '5 saniye ileri', 'Kaydı 5 saniye ileri götürür.'],
  ['speed', '6', 'Hızı değiştir', 'Her tıklamada oynatma hızı değişir: 1,5× → 2× → 0,25× → 0,5× → 1×.']
];
const acrSections = [
  {id: 'records', title: 'Kaydı bul', text: '/acr PvP kayıtları oyuncu ara pusula son iki dakika şikâyet şikayet video istemeden'},
  {id: 'playback', title: 'Oynatma kontrolleri', text: 'slot 1 2 3 4 5 6 geri ileri kare duraklat oynat hız'},
  {id: 'camera', title: 'Kamera ve envanter', text: 'slot 7 replay oyuncuları sol tık oyuncunun gözü sağ tık kaydedilen envanter can ping'},
  {id: 'hits', title: 'Vuruşlar ve ölümler', text: 'slot 8 zaman hasar ana eldeki eşya olaydan önce oynat'},
  {id: 'review', title: 'İnceleme ve karar', text: 'hile açık tespit şüphe üst yetkili rapor kanıt kontrol süreci'}
];
function acrFigure(key, caption) {
  const [src, width, height, alt] = acrImages[key];
  return `<figure class="acr-figure"><button type="button" data-acr-image="${key}" aria-label="${escapeHTML(alt)} — görseli büyüt"><img src="${src}" width="${width}" height="${height}" alt="${escapeHTML(alt)}" loading="lazy" decoding="async"><span class="acr-zoom">Büyüt ↗</span></button><figcaption>${caption}</figcaption></figure>`;
}
function acrPage() {
  return heading('ACR · PvP kayıt sistemi', 'Geçmiş PvP kayıtlarını bul, şüpheli anı farklı açılardan ve kare kare incele.') + `
    <div class="acr-layout"><div class="acr-main">
      <section class="panel acr-intro">
        <span class="tag">SUNUCU İÇİ KAYIT İNCELEME</span>
        <h2>Önce kaydı aç, sonra ilgili ana dön.</h2>
        <p><code>/acr</code> komutuyla PvP Kayıtları menüsünü açabilirsin. Sistem, yakın zamanda gerçekleşen PvP’lerin son <strong>2 dakikalık bölümünü</strong> incelemene olanak verir.</p>
        <p><strong>Oyuncu hakkında şikâyet geldiğinde ayrıca video kaydı istemeden ACR üzerinden ilgili PvP kaydını inceleyebilirsin.</strong> Bu rehber, sistemin açık olduğu oyun modlarında kullanacağın menüleri ve kontrol çubuğunu anlatır.</p>
        <a class="outline-btn" href="#acr/records">Kayıt bulmayla başla ${icon('arrow')}</a>
      </section>
      <section class="panel acr-section" id="acr-records" aria-labelledby="acr-records-title">
        <div class="acr-section-title"><span>01</span><h2 id="acr-records-title">Kaydı bul</h2></div>
        <ol class="acr-steps"><li>Sunucuda <code>/acr</code> yaz. <strong>PvP Kayıtları</strong> menüsü açılır.</li><li>Belirli bir oyuncunun kayıtları için alt sıradaki pusulayı, yani <strong>Oyuncu ara</strong> seçeneğini kullan.</li><li>İnceleyeceğin PvP kaydını seç ve oynatmayı aç.</li></ol>
        <div class="acr-pair acr-menu-pair">${acrFigure('records', 'PvP kayıtlarının listelendiği ana menü.')}${acrFigure('search', 'Pusula, belirli bir oyuncunun PvP kayıtlarını aramak için kullanılır.')}</div>
      </section>
      <section class="panel acr-section" id="acr-playback" aria-labelledby="acr-playback-title">
        <div class="acr-section-title"><span>02</span><h2 id="acr-playback-title">Oynatma kontrolleri</h2></div>
        <p>Kayıt açılınca kontroller alt eşya çubuğunda görünür. Slotları <strong>soldan sağa</strong> say.</p>
        <div class="acr-slot-strip" aria-label="Kontrol çubuğundaki slotlar">${[...acrControls.map(([key, slot, title]) => [slot, title, 'playback']), ['7', 'Kamera / envanter', 'camera'], ['8', 'Vuruşlar / ölümler', 'hits']].map(([slot, title, section]) => `<a href="#acr/${section}"><strong>${slot}</strong><span>${title}</span></a>`).join('')}</div>
        <div class="acr-control-grid">${acrControls.map(([key, slot, title, text]) => `<article class="acr-control"><header><span class="acr-slot">${slot}. SLOT</span><h3>${title}</h3></header><p>${text}</p>${acrFigure(key, `${slot}. slot · ${title}`)}</article>`).join('')}</div>
      </section>
      <section class="panel acr-section" id="acr-camera" aria-labelledby="acr-camera-title">
        <div class="acr-section-title"><span>03</span><h2 id="acr-camera-title">Kamera ve envanter</h2></div>
        <p><strong>7. slottaki ender gözü</strong>, Kamera ve envanter menüsünü açar. <strong>Replay Oyuncuları</strong> ekranında inceleyeceğin oyuncunun kafasını seç.</p>
        <dl class="acr-actions"><div><dt>Sol tık</dt><dd>Kaydı oyuncunun gözünden gösterir.</dd></div><div><dt>Sağ tık</dt><dd>Oyuncunun kaydedilen envanterini gösterir.</dd></div></dl>
        <p>Oyuncu bilgi kutusunda can ve ping bilgileri de yer alır.</p>
        <div class="acr-pair acr-menu-pair">${acrFigure('camera', '7. slot · Kamera ve envanter.')}${acrFigure('players', 'Oyuncunun kafasına sol tıkla kamera, sağ tıkla kaydedilen envanter açılır.')}</div>
        ${acrFigure('pov', 'Oyuncu kamerasını seçtikten sonra kaydı bu görünüm üzerinden takip edebilirsin.')}
      </section>
      <section class="panel acr-section" id="acr-hits" aria-labelledby="acr-hits-title">
        <div class="acr-section-title"><span>04</span><h2 id="acr-hits-title">Vuruşlar ve ölümler</h2></div>
        <p><strong>8. slottaki kitap</strong>, Vuruşlar ve Ölümler menüsünü açar. Bir olayın üzerine geldiğinde vuran ve hasar alan oyuncuyu, hasarı, kayıt içindeki zamanı ve ana eldeki eşya bilgisini görebilirsin.</p>
        <p><strong>Olayı tıkladığında kayıt olayın öncesinden oynar.</strong> Böylece yalnızca hasar anını değil, o ana nasıl gelindiğini de izleyebilirsin.</p>
        <div class="acr-pair acr-menu-pair">${acrFigure('hitsControl', '8. slot · Vuruşlar ve ölümler.')}${acrFigure('hits', 'Vuruş ve ölüm olaylarının listelendiği menü.')}</div>
        ${acrFigure('hitDetail', 'Örnek olay: HzSams → AKBAKAL400, 5,7 hasar, 111,35. saniye. Alt bölümde ana eldeki eşyanın özellikleri görünür.')}
      </section>
      <section class="panel acr-section" id="acr-review" aria-labelledby="acr-review-title">
        <div class="acr-section-title"><span>05</span><h2 id="acr-review-title">İnceleme ve karar</h2></div>
        <ol class="acr-steps"><li>İlgili bölümü önce normal hızda izle. Şüpheli anın öncesini ve sonrasını birlikte değerlendir.</li><li>5 saniye geri dön; gerekirse hızı düşür, duraklat ve kare kontrollerini kullan.</li><li>Oyuncu kamerasını, vuruş zamanını, hasarı ve eşya bilgisini karşılaştır.</li><li>Bulguyu raporlarken oyuncu adını ve kayıttaki ilgili zamanı belirt; kanıtını ve kısa açıklamanı ekle.</li></ol>
        <div class="acr-decision"><strong>ACR kaydında hile kullanımı açıkça tespit edilirse</strong><p>Yeni sistem duyurusuna göre oyuncu kontrole alınmadan doğrudan cezalandırılabilir. Şüpheli durumlarda mevcut hile kontrol prosedürü uygulanmaya devam eder. Emin olmadığın kaydı üst yetkiliyle değerlendir.</p></div>
        <div class="acr-links"><a class="primary-btn" href="#report">Hile kanıtını hazırla ${icon('arrow')}</a><a class="outline-btn" href="#guide/freeze-conditions">Kontrole alma şartları</a></div>
      </section>
    </div><aside class="panel acr-toc"><h3>Bu rehberde</h3>${acrSections.map((s, i) => `<a href="#acr/${s.id}"><span>0${i + 1}</span>${s.title}</a>`).join('')}<p>Komut: <code>/acr</code><br>Kontroller: 1–8. slotlar</p></aside></div>`;
}
function acrUpdateCard() {
  return `<article class="panel update-card" id="update-acr"><a class="update-poster" href="#acr" aria-label="ACR resimli rehberini aç"><img src="assets/updates/acr-duyuru-2026.png" width="1536" height="1024" alt="ACR sistemi yayında: şikâyet geldiğinde kaydı ACR’den incele" loading="lazy"></a><div class="update-body"><div class="update-meta"><span class="tag">SUNUCU İÇİ SİSTEM</span></div><h2>ACR kayıt rehberi</h2><p><code>/acr</code> ile kayıt bulma, kare kare oynatma, kamera ve envanter, vuruş ve ölüm ayrıntıları.</p><div class="update-actions"><a class="primary-btn" href="#acr">Resimli rehberi aç ${icon('arrow')}</a><a class="small-link" href="assets/updates/acr-duyuru-2026.png" download>ACR afişini indir ↗</a></div></div></article>`;
}
document.addEventListener('click', e => {
  const button = e.target.closest('[data-acr-image]');
  if (!button) return;
  const image = acrImages[button.dataset.acrImage];
  if (!image) return;
  let dialog = document.getElementById('acr-image-dialog');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.id = 'acr-image-dialog';
    dialog.className = 'acr-image-dialog';
    dialog.setAttribute('aria-labelledby', 'acr-image-title');
    dialog.innerHTML = '<form method="dialog"><h2 id="acr-image-title"></h2><button aria-label="Görseli kapat">✕</button></form><img alt="">';
    dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
    document.body.append(dialog);
  }
  document.getElementById('acr-image-title').textContent = image[3];
  const img = dialog.querySelector('img');
  img.src = image[0]; img.alt = image[3];
  dialog.showModal();
});

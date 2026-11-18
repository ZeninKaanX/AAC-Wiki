'use strict';
(()=>{
 const script=document.currentScript;
 const root=script?.src?new URL('../',script.src):new URL('.',location.href);
 const scenes=[
  {name:'eclipse',file:'assets/support-scenes/eclipse-v1.mp4',poster:'assets/support-scenes/eclipse-v1.webp'},
  {name:'skyline',file:'assets/support-scenes/skyline-v1.mp4',poster:'assets/support-scenes/skyline-v1.webp'},
  {name:'lamborghini',file:'assets/support-scenes/lamborghini-v1.mp4',poster:'assets/support-scenes/lamborghini-v1.webp'}
 ];
 const admin=!!document.getElementById('admin-content'),reduce=matchMedia('(prefers-reduced-motion: reduce)');
 const layer=document.createElement('div'),poster=document.createElement('img'),video=document.createElement('video');
 layer.className='support-background';layer.setAttribute('aria-hidden','true');layer.hidden=true;poster.alt='';video.muted=true;video.loop=true;video.playsInline=true;video.preload='none';video.disablePictureInPicture=true;video.tabIndex=-1;video.hidden=true;layer.append(poster,video);document.body.prepend(layer);
 let active=false,scene;
 function url(path){if(path.startsWith('aac-media:'))return window.singleMediaURL(path);return new URL(path,root).href;}
 function choose(){let previous;try{previous=localStorage.getItem('wiki-support-scene');}catch{}const pool=scenes.filter(s=>s.name!==previous);scene=pool[Math.floor(Math.random()*pool.length)];try{localStorage.setItem('wiki-support-scene',scene.name);}catch{}layer.dataset.scene=scene.name;poster.src=url(scene.poster);video.poster=poster.src;}
 function sync(){
  const enabled=admin||location.hash.split('/')[0]==='#feedback';
  if(enabled&&!active)choose();active=enabled;layer.hidden=!enabled;document.body.classList.toggle('support-scene',enabled);document.body.classList.toggle('support-admin',admin);
  const button=document.getElementById(admin?'admin-motion':'motion-toggle');
  const moving=enabled&&!document.hidden&&!reduce.matches&&!navigator.connection?.saveData&&button?.getAttribute('aria-pressed')!=='false';
  if(moving){if(!video.getAttribute('src'))video.src=url(scene.file);video.hidden=false;video.play().catch(()=>{video.hidden=true;});}
  else{video.pause();video.hidden=true;if(!enabled&&video.getAttribute('src')){video.removeAttribute('src');video.load();}}
 }
 const button=document.getElementById(admin?'admin-motion':'motion-toggle');
 if(button)new MutationObserver(sync).observe(button,{attributes:true,attributeFilter:['aria-pressed']});
 addEventListener('hashchange',sync);document.addEventListener('aac:route',sync);document.addEventListener('visibilitychange',sync);reduce.addEventListener('change',sync);navigator.connection?.addEventListener('change',sync);sync();
})();

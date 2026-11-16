'use strict';
const motionButton=document.getElementById('motion-toggle');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let motionEnabled=!reducedMotion.matches;
try{const saved=localStorage.getItem('aac-motion')??localStorage.getItem('aac-rain');if(saved!==null)motionEnabled=saved==='true'&&!reducedMotion.matches;}catch{}
function syncAmbientVideo(){const video=document.getElementById('ambient-video');if(!video)return;const canPlay=motionEnabled&&!document.hidden&&!reducedMotion.matches&&innerWidth>700&&!navigator.connection?.saveData;if(canPlay){if(!video.getAttribute('src'))video.src=video.dataset.src;video.play().catch(()=>{});}else video.pause();}
function updateMotion(){const active=motionEnabled&&!reducedMotion.matches;motionButton.setAttribute('aria-pressed',String(active));motionButton.textContent=active?'Efekti durdur':'Efekti aç';syncAmbientVideo();}
motionButton.addEventListener('click',()=>{motionEnabled=!motionEnabled;try{localStorage.setItem('aac-motion',String(motionEnabled));}catch{}updateMotion();});
let resizeTimer;addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(syncAmbientVideo,150);});
document.addEventListener('visibilitychange',syncAmbientVideo);
reducedMotion.addEventListener('change',()=>{motionEnabled=!reducedMotion.matches;updateMotion();});
document.addEventListener('aac:route',syncAmbientVideo);
updateMotion();

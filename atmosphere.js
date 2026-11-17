'use strict';
const ambientScene=chooseAmbientScene('aac-background-last');
const motionButton=document.getElementById('motion-toggle');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let motionEnabled=!reducedMotion.matches;
try{const saved=localStorage.getItem('aac-motion')??localStorage.getItem('aac-rain');if(saved!==null)motionEnabled=saved==='true'&&!reducedMotion.matches;}catch{}
function syncAmbientVideo(){const video=document.getElementById('ambient-video');if(!video)return;video.dataset.src=ambientScene.file;video.poster=ambientScene.poster;video.closest('.wiki-cover').style.backgroundImage=`linear-gradient(90deg,rgba(5,19,32,.94),rgba(6,24,35,.76) 47%,rgba(8,29,42,.25)),url("${ambientScene.poster}")`;const canPlay=motionEnabled&&!document.hidden&&!reducedMotion.matches&&innerWidth>700&&!navigator.connection?.saveData;video.hidden=!canPlay;if(canPlay){if(!video.getAttribute('src'))video.src=video.dataset.src;video.play().catch(()=>{video.hidden=true;});}else video.pause();}
function updateMotion(){const active=motionEnabled&&!reducedMotion.matches;motionButton.setAttribute('aria-pressed',String(active));motionButton.textContent=active?'Efekti durdur':'Efekti aç';syncAmbientVideo();}
motionButton.addEventListener('click',()=>{motionEnabled=!motionEnabled;try{localStorage.setItem('aac-motion',String(motionEnabled));}catch{}updateMotion();});
let resizeTimer;addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(syncAmbientVideo,150);});
document.addEventListener('visibilitychange',syncAmbientVideo);
reducedMotion.addEventListener('change',()=>{motionEnabled=!reducedMotion.matches;updateMotion();});
document.addEventListener('aac:route',syncAmbientVideo);
updateMotion();

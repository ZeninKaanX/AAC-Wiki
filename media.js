'use strict';
let musicEnabled=true;
let musicLevel=0.18;
try{musicEnabled=localStorage.getItem('aac-music-enabled')!=='false';const level=Number(localStorage.getItem('aac-music-level'));if(localStorage.getItem('aac-music-level')!==null&&Number.isFinite(level))musicLevel=Math.min(1,Math.max(0,level));}catch{}
function saveMusicPreferences(){try{localStorage.setItem('aac-music-enabled',String(musicEnabled));localStorage.setItem('aac-music-level',String(musicLevel));}catch{}}
const musicAudio=document.getElementById('example-music');
const evidenceVideo=document.getElementById('video-player');
const musicToggle=document.getElementById('music-enabled');
const musicVolume=document.getElementById('music-volume');
const musicRetry=document.getElementById('music-retry');
musicToggle.checked=musicEnabled;musicVolume.value=String(Math.round(musicLevel*100));musicAudio.volume=musicLevel;
function prepareMusic(track){musicAudio.pause();musicAudio.src=track.file;musicAudio.load();musicAudio.volume=musicLevel;musicAudio.playbackRate=1;document.getElementById('music-title').textContent=track.title;const credit=document.getElementById('music-credit');credit.replaceChildren();if(track.license?.startsWith('CC BY-SA')){const artist=document.createElement('a');artist.href=track.source;artist.target='_blank';artist.rel='noopener noreferrer';artist.textContent=track.performer;const license=document.createElement('a');license.href=track.licenseURL;license.target='_blank';license.rel='noopener noreferrer';license.textContent=track.license;credit.append(artist,document.createTextNode(' · 50 sn kesit, ses düzeyi düzenlendi · '),license);}musicRetry.hidden=true;document.getElementById('music-status').textContent='';}
async function playMusic(){if(!musicEnabled||evidenceVideo.paused||evidenceVideo.ended||!musicAudio.getAttribute('src'))return;try{if(musicAudio.readyState>=1&&Math.abs(musicAudio.currentTime-evidenceVideo.currentTime)>.6)musicAudio.currentTime=evidenceVideo.currentTime;musicAudio.playbackRate=evidenceVideo.playbackRate;await musicAudio.play();musicRetry.hidden=true;document.getElementById('music-status').textContent='';}catch(error){if(!musicEnabled||evidenceVideo.paused||error.name==='AbortError')return;musicRetry.hidden=false;document.getElementById('music-status').textContent='Müziği başlatmak için dokun.';}}
evidenceVideo.addEventListener('play',playMusic);
evidenceVideo.addEventListener('playing',playMusic);
evidenceVideo.addEventListener('pause',()=>musicAudio.pause());
evidenceVideo.addEventListener('waiting',()=>musicAudio.pause());
evidenceVideo.addEventListener('ended',()=>musicAudio.pause());
evidenceVideo.addEventListener('ratechange',()=>{musicAudio.playbackRate=evidenceVideo.playbackRate;});
evidenceVideo.addEventListener('seeking',()=>{if(musicAudio.readyState>=1)musicAudio.currentTime=evidenceVideo.currentTime;});
evidenceVideo.addEventListener('seeked',()=>{if(!evidenceVideo.paused)playMusic();});
musicAudio.addEventListener('loadedmetadata',()=>{if(evidenceVideo.currentTime<musicAudio.duration)musicAudio.currentTime=evidenceVideo.currentTime;});
musicAudio.addEventListener('error',()=>{if(musicAudio.getAttribute('src'))document.getElementById('music-status').textContent='Müzik yüklenemedi.';});
musicToggle.addEventListener('change',()=>{musicEnabled=musicToggle.checked;saveMusicPreferences();if(!musicEnabled){musicAudio.pause();musicRetry.hidden=true;document.getElementById('music-status').textContent='';}else playMusic();});
musicVolume.addEventListener('input',()=>{musicLevel=Number(musicVolume.value)/100;musicAudio.volume=musicLevel;saveMusicPreferences();});
musicRetry.addEventListener('click',playMusic);
document.getElementById('video-dialog').addEventListener('close',()=>{musicAudio.pause();musicAudio.removeAttribute('src');musicAudio.load();musicRetry.hidden=true;document.getElementById('music-status').textContent='';});

"use strict";
const ambientScenes=[
  {
    "name": "rainy-swamp",
    "file": "assets/ambient/rainy-swamp-v1.mp4",
    "poster": "assets/ambient/rainy-swamp-v1.webp"
  },
  {
    "name": "aquarium",
    "file": "assets/ambient/aquarium-v1.mp4",
    "poster": "assets/ambient/aquarium-v1.webp"
  },
  {
    "name": "sakura-forest",
    "file": "assets/ambient/sakura-forest-v1.mp4",
    "poster": "assets/ambient/sakura-forest-v1.webp"
  },
  {
    "name": "cat",
    "file": "assets/ambient/cat-v1.mp4",
    "poster": "assets/ambient/cat-v1.webp"
  },
  {
    "name": "landscape",
    "file": "assets/ambient/landscape-v1.mp4",
    "poster": "assets/ambient/landscape-v1.webp"
  },
  {
    "name": "axolotl",
    "file": "assets/ambient/axolotl-v1.mp4",
    "poster": "assets/ambient/axolotl-v1.webp"
  },
  {
    "name": "dog-in-a-boat",
    "file": "assets/ambient/dog-in-a-boat-v1.mp4",
    "poster": "assets/ambient/dog-in-a-boat-v1.webp"
  },
  {
    "name": "cherry-sunset",
    "file": "assets/ambient/cherry-sunset-v1.mp4",
    "poster": "assets/ambient/cherry-sunset-v1.webp"
  },
  {
    "name": "girl",
    "file": "assets/ambient/girl-v1.mp4",
    "poster": "assets/ambient/girl-v1.webp"
  },
  {
    "name": "marin-edit",
    "file": "assets/ambient/marin-edit-v1.mp4",
    "poster": "assets/ambient/marin-edit-v1.webp"
  }
];
function chooseAmbientScene(key,names){let last;try{last=localStorage.getItem(key);}catch{}const pool=names?ambientScenes.filter(s=>names.includes(s.name)):ambientScenes;const choices=pool.filter(s=>s.name!==last);const scene=choices[Math.floor(Math.random()*choices.length)];try{localStorage.setItem(key,scene.name);}catch{}return scene;}

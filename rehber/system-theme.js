'use strict';
(()=>{
 const preference=matchMedia('(prefers-color-scheme: dark)');
 const update=()=>{const dark=preference.matches;document.documentElement.dataset.theme=dark?'dark':'light';document.querySelector('meta[name="theme-color"]')?.setAttribute('content',dark?'#0b1624':'#eff6fb');};
 update();preference.addEventListener('change',update);
})();

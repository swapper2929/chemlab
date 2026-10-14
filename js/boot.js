/* Boot guard: never let a failed CDN/import/WebGL lock the app behind splash. */
(function(){
  function releaseSplash(){var el=document.getElementById('splashScreen');if(el){el.classList.add('hide');el.style.pointerEvents='none';}}
  window.__releaseChemLabSplash=releaseSplash;
  window.addEventListener('load',function(){setTimeout(releaseSplash,900);});
  window.addEventListener('error',function(){setTimeout(releaseSplash,40);});
  window.addEventListener('unhandledrejection',function(){setTimeout(releaseSplash,40);});
  setTimeout(releaseSplash,2800);
})();

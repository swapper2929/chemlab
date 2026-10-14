/* PWA install affordance: works when this file is served over HTTPS/localhost. */
let deferredInstallPrompt=null;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;const b=document.querySelector('[data-pwa-install]');if(b)b.hidden=false});
if('serviceWorker' in navigator && location.protocol !== 'file:'){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}

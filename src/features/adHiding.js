import { loadSettings } from '../storage.js';

let adHidingInterval = null;

function applyAdHiding(hideAds) {
  const adElements = document.querySelectorAll('.ads_ads__Z1cPk');
  
  if (hideAds) {

    adElements.forEach(ad => {
      ad.style.opacity = '0';
      ad.style.pointerEvents = 'none'; 
    });
    
    if (adElements.length > 0) {
      console.log('[Grizzway Tools] Hidden', adElements.length, 'ad elements');
    }
  } else {
    adElements.forEach(ad => {
      ad.style.opacity = '';
      ad.style.pointerEvents = '';
    });
    
    if (adElements.length > 0) {
      console.log('[Grizzway Tools] Restored', adElements.length, 'ad elements');
    }
  }
}

function manageAdHidingInterval(hideAds) {

  if (adHidingInterval) {
    clearInterval(adHidingInterval);
    adHidingInterval = null;
  }
  
  if (hideAds) {
    adHidingInterval = setInterval(() => {
      applyAdHiding(true);
    }, 1000); 
    console.log('[Grizzway Tools] Ad hiding monitoring started');
  } else {
    console.log('[Grizzway Tools] Ad hiding monitoring stopped');
  }
}

export function adHidingFeature() {
  console.log('[Grizzway Tools] Ad hiding feature initialized');
  
  const settings = loadSettings();
  const hideAds = settings.hideAds === true; 
  
  console.log('[Grizzway Tools] Ad hiding setting from storage:', hideAds);
  console.log('[Grizzway Tools] Full settings object:', settings);
  
  applyAdHiding(hideAds);
  
  manageAdHidingInterval(hideAds);
  
  setTimeout(() => {
    applyAdHiding(hideAds);
  }, 500);
}

export function updateAdHiding(hideAds) {
  console.log('[Grizzway Tools] Updating ad hiding to:', hideAds ? 'enabled' : 'disabled');
  
  applyAdHiding(hideAds);
  manageAdHidingInterval(hideAds);
}   
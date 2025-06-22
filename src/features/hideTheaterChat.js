import { loadSettings } from '../storage.js';

let theaterChatInterval = null;
let lastCinemaState = false;
let lastHideState = false;
let hiddenElements = new Set();

function applyTheaterChatHiding(hideChat) {
  const cinemaElement = document.querySelector('.live-stream-player_cinema__yPkWC');
  const theaterChatElements = document.querySelectorAll('.chat_cinema__iXQz9');
  const isInCinemaMode = !!cinemaElement;
  
  if (isInCinemaMode !== lastCinemaState || hideChat !== lastHideState) {
    console.log('[Grizzway Tools] Cinema mode:', isInCinemaMode, '| Hide chat setting:', hideChat);
    console.log('[Grizzway Tools] Found', theaterChatElements.length, 'theater chat elements');
    lastCinemaState = isInCinemaMode;
    lastHideState = hideChat;
  }
  
  if (hideChat && isInCinemaMode) {
    theaterChatElements.forEach(chat => {
      chat.style.setProperty('opacity', '0', 'important');
      chat.style.setProperty('z-index', '-999', 'important');
      chat.style.setProperty('pointer-events', 'none', 'important');
      chat.setAttribute('data-grizzway-hidden', 'true');
      hiddenElements.add(chat);
    });
    
    if (theaterChatElements.length > 0) {
      console.log('[Grizzway Tools] Hidden', theaterChatElements.length, 'theater chat elements (cinema mode active)');
    }
  } else {

    hiddenElements.forEach(chat => {
      if (chat.parentNode) { 
        chat.style.removeProperty('opacity');
        chat.style.removeProperty('z-index');
        chat.style.removeProperty('pointer-events');
        chat.removeAttribute('data-grizzway-hidden');
      }
    });
    hiddenElements.clear();
    
    theaterChatElements.forEach(chat => {
      chat.style.removeProperty('opacity');
      chat.style.removeProperty('z-index');
      chat.style.removeProperty('pointer-events');
      chat.removeAttribute('data-grizzway-hidden');
    });
    
    const hiddenChats = document.querySelectorAll('[data-grizzway-hidden="true"]');
    hiddenChats.forEach(chat => {
      chat.style.removeProperty('opacity');
      chat.style.removeProperty('z-index');
      chat.style.removeProperty('pointer-events');
      chat.removeAttribute('data-grizzway-hidden');
    });
    
    if (theaterChatElements.length > 0) {
      if (!isInCinemaMode && hideChat) {
        console.log('[Grizzway Tools] Restored', theaterChatElements.length, 'theater chat elements (exited cinema mode)');
      } else if (!hideChat) {
        console.log('[Grizzway Tools] Restored', theaterChatElements.length, 'theater chat elements (hiding disabled)');
      }
    }
  }
}

function manageTheaterChatInterval(hideChat) {
  if (theaterChatInterval) {
    clearInterval(theaterChatInterval);
    theaterChatInterval = null;
  }
  
  theaterChatInterval = setInterval(() => {
    applyTheaterChatHiding(hideChat);
  }, 100); 
  
  console.log('[Grizzway Tools] Theater chat monitoring started (cinema mode aware)');
}

export function hideTheaterChatFeature() {
  console.log('[Grizzway Tools] Hide theater chat feature initialized');
  
  const settings = loadSettings();
  const hideChat = settings.hideTheaterChat === true;
  
  console.log('[Grizzway Tools] Hide theater chat setting from storage:', hideChat);

  applyTheaterChatHiding(hideChat);

  manageTheaterChatInterval(hideChat);
}

export function updateTheaterChatHiding(hideChat) {
  console.log('[Grizzway Tools] Updating theater chat hiding to:', hideChat ? 'enabled' : 'disabled');
  
  if (!hideChat) {
    hiddenElements.clear();
  }
  
  applyTheaterChatHiding(hideChat);

  manageTheaterChatInterval(hideChat);
}
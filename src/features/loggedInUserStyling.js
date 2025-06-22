import { loadSettings } from '../storage.js';

export function loggedInUserStylingFeature() {
    console.log('[Grizzway Tools] Configurable logged in user styling initialized');
    
    let currentUserName = null;

    function getLoggedInUsername() {
        const userElement = document.querySelector('.top-bar-user_display-name__bzlpw') ||
                           document.querySelector('.top-bar_username__nJaN2') ||
                           document.querySelector('[class*="display-name"]');
        return userElement ? userElement.textContent.trim() : null;
    }

    function getUserStylingSettings() {
        const settings = loadSettings();
        return {
            enabled: settings.loggedInUserStyling !== false, 
            highlightEnabled: settings.userHighlightEnabled !== false, 
            glowEnabled: settings.userGlowEnabled !== false, 
            highlightColor: settings.userHighlightColor || '#7d0505', 
            glowColor: settings.userGlowColor || '#00ff00' 
        };
    }

    function hexToRgba(hex, opacity = 0.4) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    function styleLoggedInUserMessages() {
        const settings = getUserStylingSettings();
        if (!settings.enabled) return;

        const username = getLoggedInUsername();
        if (!username) return;

        const messages = document.querySelectorAll('.chat-message-default_user__uVNvH');
        messages.forEach(message => {
            if (message.textContent.includes(username)) {
                const userElement = message;
                if (userElement) {
                    userElement.style.textShadow = 'none';
                    userElement.style.fontWeight = '1000';
                }

                const messageTextElement = message.closest('.chat-message-default_chat-message-default__JtJQL').querySelector('.chat-message-default_body__iFlH4');
                if (messageTextElement) {
                    messageTextElement.style.textShadow = 'none';
                    messageTextElement.style.fontWeight = '1000';
                }
            }
        });
    }

    function highlightUserMessages() {
        const settings = getUserStylingSettings();
        if (!settings.enabled) return;

        const username = getLoggedInUsername();
        if (!username) return;

        const messages = document.querySelectorAll('.chat-message-default_user__uVNvH');
        messages.forEach(message => {
            if (message.textContent.includes(username)) {
                const chatMessage = message.closest('.chat-message-default_chat-message-default__JtJQL');

                if (settings.highlightEnabled && chatMessage && !chatMessage.classList.contains('highlighted-message')) {
                    chatMessage.classList.add('highlighted-message');
                    chatMessage.style.backgroundColor = hexToRgba(settings.highlightColor, 0.4);
                }

                if (settings.glowEnabled && !message.classList.contains('glowing-username')) {
                    message.classList.add('glowing-username');
                    const glowRgba = hexToRgba(settings.glowColor, 0.6);
                    message.style.webkitTextStroke = `1px ${glowRgba}`;
                    message.style.filter = `drop-shadow(0 0 2px ${settings.glowColor}) drop-shadow(0 0 4px ${settings.glowColor})`;
                }
            }
        });
    }

    function removeUserStyling() {
        const settings = getUserStylingSettings();
        const username = getLoggedInUsername();
        if (!username) return;

        const messages = document.querySelectorAll('.chat-message-default_user__uVNvH');
        messages.forEach(message => {
            if (message.textContent.includes(username)) {
                const chatMessage = message.closest('.chat-message-default_chat-message-default__JtJQL');
                
                if (!settings.highlightEnabled && chatMessage && chatMessage.classList.contains('highlighted-message')) {
                    chatMessage.classList.remove('highlighted-message');
                    chatMessage.style.backgroundColor = '';
                }

                if (!settings.glowEnabled && message.classList.contains('glowing-username')) {
                    message.classList.remove('glowing-username');
                    message.style.webkitTextStroke = '';
                    message.style.filter = '';
                }
            }
        });
    }

    function updateUserStyling() {
        const settings = getUserStylingSettings();
        
        if (settings.enabled) {
            highlightUserMessages();
            styleLoggedInUserMessages();
            removeUserStyling();
        } else {
            removeUserStyling();
        }
    }


    setInterval(() => {
        updateUserStyling();
    }, 1000);

    console.log('[Grizzway Tools] Configurable user styling functions started');
}

export function updateLoggedInUserCSS() {
    const settings = loadSettings();
    const highlightColor = settings.userHighlightColor || '#7d0505';
    const glowColor = settings.userGlowColor || '#00ff00';
    
    const userCSS = `
        /* Configurable logged-in user styling */
        .highlighted-message {
            background-color: ${settings.userHighlightColor ? 
                `rgba(${parseInt(highlightColor.slice(1, 3), 16)}, ${parseInt(highlightColor.slice(3, 5), 16)}, ${parseInt(highlightColor.slice(5, 7), 16)}, 0.4)` : 
                'rgba(125, 5, 5, 0.4)'} !important;
        }
        
        .glowing-username {
            -webkit-text-stroke: 1px ${settings.userGlowColor ? 
                `rgba(${parseInt(glowColor.slice(1, 3), 16)}, ${parseInt(glowColor.slice(3, 5), 16)}, ${parseInt(glowColor.slice(5, 7), 16)}, 0.6)` : 
                'rgba(0, 255, 0, 0.2)'} !important;
            filter: drop-shadow(0 0 1px ${glowColor}) drop-shadow(0 0 2px ${glowColor}) !important;
        }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.id = 'grizzway-logged-in-user-styling';
    styleElement.textContent = userCSS;
    
    const existing = document.getElementById('grizzway-logged-in-user-styling');
    if (existing) existing.remove();
    
    document.head.appendChild(styleElement);
}
import { loadSettings } from '../storage.js';

let streamTitleInterval = null;
let currentColor = '#00ff00';
let currentGlowIntensity = 2;
let isEnabled = false;

export function streamTitleStyleFeature(color = null, glowIntensity = null) {
    console.log('[Grizzway Tools] Stream title style initialized');
    
    const settings = loadSettings();
    isEnabled = settings.streamTitleEnabled === true;
    currentColor = color || settings.streamTitleColor || '#00ff00';
    currentGlowIntensity = glowIntensity || settings.streamTitleGlowIntensity || 2;
    
    if (streamTitleInterval) {
        clearInterval(streamTitleInterval);
        streamTitleInterval = null;
    }
    
    if (isEnabled) {
        applyStreamTitleStyle();
        
        streamTitleInterval = setInterval(() => {
            applyStreamTitleStyle();
        }, 1000);
    } else {
        removeStreamTitleStyle();
    }
}

export function updateStreamTitleStyle(color, glowIntensity = null) {
    if (color === null) {
        isEnabled = false;
        currentColor = '#00ff00';
        currentGlowIntensity = 2;
        removeStreamTitleStyle();
        
        if (streamTitleInterval) {
            clearInterval(streamTitleInterval);
            streamTitleInterval = null;
        }
    } else {
        isEnabled = true;
        currentColor = color;
        if (glowIntensity !== null) {
            currentGlowIntensity = glowIntensity;
        }
        
        if (!streamTitleInterval) {
            applyStreamTitleStyle();
            streamTitleInterval = setInterval(() => {
                applyStreamTitleStyle();
            }, 1000);
        } else {
            applyStreamTitleStyle();
        }
    }
}

function applyStreamTitleStyle() {
    if (!isEnabled) return;
    
    const baseBlur = currentGlowIntensity * 0.5; 
    const strongBlur = currentGlowIntensity * 1; 
    
    let streamTitleFilter = '';
    if (currentGlowIntensity > 0) {
        if (currentGlowIntensity <= 3) {
            streamTitleFilter = `drop-shadow(0 0 ${baseBlur}px ${currentColor})`;
        } else if (currentGlowIntensity <= 6) {
            streamTitleFilter = `drop-shadow(0 0 ${baseBlur}px ${currentColor}) drop-shadow(0 0 ${strongBlur}px ${currentColor})`;
        } else {
            streamTitleFilter = `drop-shadow(0 0 ${baseBlur}px ${currentColor}) drop-shadow(0 0 ${strongBlur}px ${currentColor}) drop-shadow(0 0 ${strongBlur * 1.5}px ${currentColor})`;
        }
    }
    
    const streamTitles = document.querySelectorAll('.live-stream_name__ngU04');
    streamTitles.forEach(title => {
        title.style.color = currentColor;
        title.style.filter = streamTitleFilter;
    });
    
    if (streamTitles.length > 0) {
        console.log('[Grizzway Tools] Applied styling to', streamTitles.length, 'stream titles with color', currentColor, 'and glow intensity', currentGlowIntensity);
    }
}

function removeStreamTitleStyle() {
    const streamTitles = document.querySelectorAll('.live-stream_name__ngU04');
    streamTitles.forEach(title => {
        title.style.color = '';
        title.style.filter = '';
    });
    
    if (streamTitles.length > 0) {
        console.log('[Grizzway Tools] Removed styling from', streamTitles.length, 'stream titles');
    }
}
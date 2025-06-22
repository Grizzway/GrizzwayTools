import { getThemeConfig } from '../config.js';

export function blockSoundsFeature() {
    const themeConfig = getThemeConfig();
    const customPingSound = themeConfig?.customPingSound || 'https://cdn.fishtank.live/sounds/mention.mp3';
    
    console.log('[Grizzway Tools] Using custom ping sound:', customPingSound);
    
    const blockedSounds = [
        'https://cdn.fishtank.live/sounds/suicidebomb.mp3',
        'https://cdn.fishtank.live/sounds/suicidebomb-1.mp3',
        'https://cdn.fishtank.live/sounds/suicidebomb-2.mp3',
        'https://cdn.fishtank.live/sounds/suicidebomb-3.mp3',
        'https://cdn.fishtank.live/sounds/suicidebomb-4.mp3',
        'https://cdn.fishtank.live/sounds/nuke-1.mp3',
        'https://cdn.fishtank.live/sounds/nuke-2.mp3',
        'https://cdn.fishtank.live/sounds/nuke-3.mp3',
        'https://cdn.fishtank.live/sounds/nuke-4.mp3',
        'https://cdn.fishtank.live/sounds/nuke-5.mp3',
        'https://cdn.fishtank.live/sounds/horn.mp3'
    ];

    const OriginalAudio = window.Audio;
    window.Audio = function (src) {
        console.log('[Grizzway Tools] Audio requested:', src);
        if (src && src.includes("mention")) {
            console.log('[Grizzway Tools] Replacing mention sound with:', customPingSound);
            return new OriginalAudio(customPingSound);
        }
        if (blockedSounds.some(sound => src?.includes(sound))) {
            console.log('[Grizzway Tools] Blocking sound:', src);
            return new OriginalAudio();
        }
        return new OriginalAudio(src);
    };
    window.Audio.prototype = OriginalAudio.prototype;

    const originalPlay = HTMLAudioElement.prototype.play;
    HTMLAudioElement.prototype.play = function () {
        if (this.src && this.src.includes("mention.mp3")) {
            console.log('[Grizzway Tools] Changing audio src to:', customPingSound);
            this.src = customPingSound;
        }
        if (blockedSounds.some(sound => this.src && this.src.includes(sound))) {
            console.log('[Grizzway Tools] Blocking audio play:', this.src);
            return Promise.reject('Blocked sound');
        }
        return originalPlay.apply(this, arguments);
    };

    const originalFetch = window.fetch;
    window.fetch = async function (resource, init) {
        if (typeof resource === 'string') {
            if (resource.includes('mention.mp3')) {
                console.log('[Grizzway Tools] Fetching custom ping sound instead');
                return fetch(customPingSound);
            }
            if (blockedSounds.some(sound => resource.includes(sound)))
                return new Response(null, { status: 403 });
        }
        return originalFetch(resource, init);
    };

    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url) {
        if (url && url.includes("mention.mp3")) {
            console.log('[Grizzway Tools] XHR redirect to custom ping sound');
            this.abort();
            const req = new XMLHttpRequest();
            req.open(method, customPingSound, true);
            req.send();
            return;
        }
        if (blockedSounds.some(sound => url && url.includes(sound))) {
            this.abort();
        } else {
            originalOpen.apply(this, arguments);
        }
    };
}
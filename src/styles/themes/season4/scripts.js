export default [
    // Custom Ping Sound Switcher
    () => {
        let pingInterval = null;
        let currentPingTheme = null;
        let mentionSoundObserver = null;
        let currentPingSound = null;
        let originalPlay = null;
        let isIntercepting = false;
        
        const dayPingSound = 'https://files.catbox.moe/bi12nh.mp3';
        const nightPingSound = 'https://files.catbox.moe/ojs7i7.mp3';
        
        const getCurrentTime = () => {
            const now = new Date();
            return now.getHours() + now.getMinutes() / 60;
        };
        
        const shouldUseNightTheme = () => {
            const settings = JSON.parse(localStorage.getItem("grizzway-tools-settings") || "{}");
            const forceMode = settings.season4ForceMode || window.grizzwaySeason4ForceMode;
            
            if (forceMode === 'day') return false;
            if (forceMode === 'night') return true;
            
            const currentTime = getCurrentTime();
            return currentTime >= 22.0 || currentTime < 8.0; // 10:00 PM to 8:00 AM
        };
        
        const getCurrentPingSound = () => {
            const useNightTheme = shouldUseNightTheme();
            return useNightTheme ? nightPingSound : dayPingSound;
        };
        
        const replaceMentionSound = (audioElement) => {
            if (audioElement && audioElement.src && 
                (audioElement.src.includes("mention") || audioElement.src.includes("notification"))) {
                console.log("[Season 4] Replacing mention sound with:", currentPingSound);
                audioElement.src = currentPingSound;
                return true;
            }
            return false;
        };
        
        const setupMentionSoundInterceptor = (pingSound) => {
            // Store the original play method if not already stored
            if (!originalPlay) {
                originalPlay = HTMLAudioElement.prototype.play;
            }
            
            // Remove any existing observer
            if (mentionSoundObserver) {
                mentionSoundObserver.disconnect();
            }
            
            // Create a new observer to watch for audio elements and mention sounds
            mentionSoundObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            // Check if it's an audio element
                            if (node.tagName === 'AUDIO') {
                                replaceMentionSound(node);
                            }
                            
                            // Also check for any audio elements within the added node
                            const audioElements = node.querySelectorAll ? node.querySelectorAll('audio') : [];
                            audioElements.forEach(audio => {
                                replaceMentionSound(audio);
                            });
                        }
                    });
                });
            });
            
            // Observe the entire document for new audio elements
            mentionSoundObserver.observe(document.body, {
                childList: true,
                subtree: true
            });
            
            // Also check existing audio elements on the page
            const existingAudioElements = document.querySelectorAll('audio');
            existingAudioElements.forEach(audio => {
                replaceMentionSound(audio);
            });
            
            // Create a custom play method that doesn't interfere with existing functionality
            if (!isIntercepting) {
                isIntercepting = true;
                HTMLAudioElement.prototype.play = function() {
                    // Check if this is a mention sound before playing
                    if (this.src && (this.src.includes("mention") || this.src.includes("notification"))) {
                        console.log("[Season 4] Intercepting mention sound play, replacing with:", pingSound);
                        this.src = pingSound;
                    }
                    return originalPlay.apply(this, arguments);
                };
            }
        };
        
        const checkAndSwitchPingSound = () => {
            const newTheme = shouldUseNightTheme() ? 'night-theme' : 'day-theme';
            if (newTheme !== currentPingTheme) {
                currentPingTheme = newTheme;
                currentPingSound = getCurrentPingSound();
                setupMentionSoundInterceptor(currentPingSound);
                console.log(`[Season 4] Ping sound switched to ${newTheme}: ${currentPingSound}`);
            }
        };
        
        // Pre-calculate initial theme and ping sound
        currentPingTheme = shouldUseNightTheme() ? 'night-theme' : 'day-theme';
        currentPingSound = getCurrentPingSound();
        
        // Initial setup with pre-calculated values
        setupMentionSoundInterceptor(currentPingSound);
        console.log(`[Season 4] Initial ping sound setup: ${currentPingTheme} - ${currentPingSound}`);
        
        // Set up interval to check ping sound every minute
        pingInterval = setInterval(checkAndSwitchPingSound, 60000);
        
        return () => {
            if (pingInterval) {
                clearInterval(pingInterval);
            }
            
            if (mentionSoundObserver) {
                mentionSoundObserver.disconnect();
            }
            
            // Restore original play method
            if (originalPlay && isIntercepting) {
                HTMLAudioElement.prototype.play = originalPlay;
                isIntercepting = false;
            }
            
            console.log('[Season 4] Mention sound interceptor cleaned up');
        };
    },

    // Logo Glow
    () => {
        let imgs = [];
        let styleEl = null;
        let observer = null;
      
        const selectors = [
          '.top-bar_logo__XL0_C img.maejok-logo_hover',
          '.top-bar_logo__XL0_C img.maejok-logo_hide',
          '.top-bar_logo__XL0_C img.top-bar_desktop__pjX2g'
        ];
      
        const applyGlow = () => {
          imgs = selectors
            .map(sel => Array.from(document.querySelectorAll(sel)))
            .flat()
            .filter(Boolean);
      
          if (!imgs.length) return false;
      
          imgs.forEach(img => img.classList.add('grizz-glow-img'));
      
          styleEl = document.createElement('style');
          styleEl.id = 'grizz-glow-style';
          styleEl.textContent = `
            @keyframes grizzGlow {
              from { filter: drop-shadow(0 0 0px red); }
              to   { filter: drop-shadow(0 0 10px red); }
            }
      
            .grizz-glow-img {
              animation: grizzGlow 1.6s infinite alternate !important;
              will-change: filter;
            }
          `;
          document.head.appendChild(styleEl);
      
          return true;
        };
      
        if (!applyGlow()) {
          observer = new MutationObserver(() => {
            if (applyGlow()) observer.disconnect();
          });
      
          observer.observe(document.body, {
            childList: true,
            subtree: true,
          });
        }
      
        return () => {
          imgs.forEach(img => img.classList.remove('grizz-glow-img'));
          if (styleEl && styleEl.parentNode) styleEl.remove();
          if (observer) observer.disconnect();
        };
      },

    // Day/Night Theme Switcher
    () => {
        let themeInterval = null;
        let currentTheme = 'day-theme';
        let themeObserver = null;
        
        const targetElementXPath = '//*[@id="__next"]/main/div[4]/div[2]/div[2]/div[2]';
        
        const getElementByXPath = (xpath) => {
            try {
                const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                return result.singleNodeValue;
            } catch (error) {
                console.warn('[Season 4] XPath evaluation failed:', error);
                return null;
            }
        };
        
        const getCurrentTime = () => {
            const now = new Date();
            return now.getHours() + now.getMinutes() / 60;
        };
        
        const shouldUseNightTheme = () => {
            // Check for force mode first
            const settings = JSON.parse(localStorage.getItem("grizzway-tools-settings") || "{}");
            const forceMode = settings.season4ForceMode || window.grizzwaySeason4ForceMode;
            
            if (forceMode === 'day') {
                return false; // Force day theme
            } else if (forceMode === 'night') {
                return true; // Force night theme
            }
            
            const currentTime = getCurrentTime();
            return currentTime >= 22.0 || currentTime < 8.0; // 10:00 PM to 8:00 AM
        };
        
        const applyTheme = (theme) => {
            const elements = [
                document.body,
                ...document.querySelectorAll('.layout_layout__5rz87'),
                ...document.querySelectorAll('.select_options__t1ibN'),
                ...document.querySelectorAll('.chat_chat__2rdNg'),
                ...document.querySelectorAll('.maejok-input-invalid'),
                ...document.querySelectorAll('.maejok-context-message'),
                ...document.querySelectorAll('.maejok-tts-warning-text'),
                ...document.querySelectorAll('.chat_header__8kNPS'),
                ...document.querySelectorAll('.top-bar_top-bar__X4p2n'),
                ...document.querySelectorAll('.panel_body__O5yBA'),
                ...document.querySelectorAll('.inventory_slots__D4IrC'),
                ...document.querySelectorAll('.panel_header__T2yFW'),
                ...document.querySelectorAll('.poll_footer__rALdX'),
                ...document.querySelectorAll('.chat-message-tts_chat-message-tts__2Jlxi'),
                ...document.querySelectorAll('.chat-message-sfx_chat-message-sfx__OGv6q'),
                ...document.querySelectorAll('.stocks-bar_stocks-bar__7kNv8')
            ];
            
            elements.forEach(el => {
                if (el) {
                    el.classList.remove('day-theme', 'night-theme');
                    el.classList.add(theme);
                }
            });
            
            // Clean up any persisting background styles when switching themes
            const chatElements = document.querySelectorAll('.chat_chat__2rdNg');
            chatElements.forEach(el => {
                // Remove any inline background styles that might persist
                el.style.removeProperty('background-image');
                el.style.removeProperty('background-size');
                el.style.removeProperty('background-position');
                el.style.removeProperty('background-repeat');
                el.style.removeProperty('background-color');
                // Restore opacity to 1 if it was set to 0
                if (el.style.opacity === '0') {
                    el.style.setProperty('opacity', '1', 'important');
                }
            });
            
            currentTheme = theme;
        };
        
        const checkAndSwitchTheme = () => {
            const targetElement = getElementByXPath(targetElementXPath);
            
            if (targetElement) {
                const useNightTheme = shouldUseNightTheme();
                const newTheme = useNightTheme ? 'night-theme' : 'day-theme';
                
                if (newTheme !== currentTheme) {
                    applyTheme(newTheme);
                    console.log(`[Season 4] Switched to ${newTheme} at ${new Date().toLocaleTimeString()}`);
                }
            }
        };
        
        // Initial theme application
        applyTheme('day-theme');
        
        // Set up interval to check theme every minute
        themeInterval = setInterval(checkAndSwitchTheme, 60000);
        
        // Also check immediately
        checkAndSwitchTheme();
        
        // Set up observer to watch for DOM changes
        themeObserver = new MutationObserver(() => {
            checkAndSwitchTheme();
        });
        
        themeObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });
        
        return () => {
            if (themeInterval) {
                clearInterval(themeInterval);
            }
            if (themeObserver) {
                themeObserver.disconnect();
            }
            // Reset to day theme on cleanup
            applyTheme('day-theme');
        };
    },

    // Custom Image Replacement
    () => {
        let imageInterval = null;
        let currentImageTheme = null; // Start as null to force initial application
        let imageObserver = null;
        let originalSources = new Map();

        const targetImageXPaths = [
            '//*[@id="__next"]/main/div[1]/div[1]/button[2]/img[1]',
            '//*[@id="__next"]/main/div[1]/div[1]/button[2]/img[2]'
        ];

        const getElementByXPath = (xpath) => {
            try {
                return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            } catch (error) {
                console.warn('[Season 4] Image XPath evaluation failed:', error);
                return null;
            }
        };

        const getCurrentTime = () => new Date().getHours() + new Date().getMinutes() / 60;

        const shouldUseNightTheme = () => {
            // Check for force mode first
            const settings = JSON.parse(localStorage.getItem("grizzway-tools-settings") || "{}");
            const forceMode = settings.season4ForceMode || window.grizzwaySeason4ForceMode;
            
            if (forceMode === 'day') {
                return false; // Force day theme
            } else if (forceMode === 'night') {
                return true; // Force night theme
            }
            
            const currentTime = getCurrentTime();
            return currentTime >= 22.0 || currentTime < 8.0; // 10:00 PM to 8:00 AM
        };

        const applyImageTheme = (theme) => {
            const daySrc = 'https://i.imgur.com/5yhYE3u.png';
            const nightSrc = 'https://i.imgur.com/W8t0QR1.png';
            const targetSrc = theme === 'day-theme' ? daySrc : nightSrc;

            targetImageXPaths.forEach(xpath => {
                const imgElement = getElementByXPath(xpath);
                if (imgElement) {
                    if (!originalSources.has(imgElement)) {
                        originalSources.set(imgElement, imgElement.src);
                    }
                    if (imgElement.src !== targetSrc) {
                        imgElement.src = targetSrc;
                        console.log(`[Season 4] Image source set to ${theme}: ${targetSrc}`);
                    }
                    imgElement.classList.remove('day-theme', 'night-theme', 'season4-custom-image');
                    imgElement.classList.add('season4-custom-image', theme);
                }
            });
            currentImageTheme = theme;
        };

        const checkAndSwitchImages = () => {
            const newTheme = shouldUseNightTheme() ? 'night-theme' : 'day-theme';
            if (newTheme !== currentImageTheme) {
            applyImageTheme(newTheme);
            }
        };

        checkAndSwitchImages();
        imageInterval = setInterval(checkAndSwitchImages, 60000); // Check every minute instead of every second

        imageObserver = new MutationObserver(checkAndSwitchImages);
        imageObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            clearInterval(imageInterval);
            imageObserver.disconnect();
            originalSources.forEach((src, img) => {
                if(img) img.src = src;
            });
            originalSources.clear();
        };
      },

    // Theater Mode Detection and Restoration
    () => {
        let theaterInterval = null;
        let lastTheaterState = false;
        let originalChatBackgrounds = new Map(); // Store original background states
        
        const isInTheaterMode = () => {
            return !!document.querySelector('.live-stream-player_cinema__yPkWC');
        };
        
        const disableChatBackground = () => {
            console.log('[Season 4] Theater mode entered, hiding chat background...');
            
            const chatElements = document.querySelectorAll('.chat_chat__2rdNg');
            chatElements.forEach(el => {
                // Store original background if not already stored
                if (!originalChatBackgrounds.has(el)) {
                    originalChatBackgrounds.set(el, {
                        backgroundImage: el.style.backgroundImage || getComputedStyle(el).backgroundImage,
                        backgroundSize: el.style.backgroundSize || getComputedStyle(el).backgroundSize,
                        backgroundPosition: el.style.backgroundPosition || getComputedStyle(el).backgroundPosition,
                        backgroundRepeat: el.style.backgroundRepeat || getComputedStyle(el).backgroundRepeat,
                        opacity: el.style.opacity || getComputedStyle(el).opacity
                    });
                }
                
                // Always hide the background by setting it to transparent (preserves the element)
                el.style.setProperty('background-image', 'none', 'important');
                el.style.setProperty('background-color', 'transparent', 'important');
            });
            console.log('[Season 4] Chat background hidden for theater mode');

            const targetImageXPaths = [
                '//*[@id="__next"]/main/div[1]/div[1]/button[2]/img[1]',
                '//*[@id="__next"]/main/div[1]/div[1]/button[2]/img[2]'
            ];
            const getElementByXPath = (xpath) => {
                try {
                    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                } catch (error) {
                    console.warn('[Season 4] Image XPath evaluation failed:', error);
                    return null;
                }
            };
            targetImageXPaths.forEach(xpath => {
                const imgElement = getElementByXPath(xpath);
                if (imgElement) {
                    imgElement.style.setProperty('opacity', '0', 'important');
                }
            });
        };
        
        const restoreThemeElements = () => {
            console.log('[Season 4] Theater mode exited, restoring theme elements...');
            
            // Get current theme
            const shouldUseNightTheme = () => {
                const settings = JSON.parse(localStorage.getItem("grizzway-tools-settings") || "{}");
                const forceMode = settings.season4ForceMode || window.grizzwaySeason4ForceMode;
                
                if (forceMode === 'day') return false;
                if (forceMode === 'night') return true;
                
                const currentTime = new Date().getHours() + new Date().getMinutes() / 60;
                return currentTime >= 22.0 || currentTime < 8.0; // 10:00 PM to 8:00 AM
            };
            
            const currentTheme = shouldUseNightTheme() ? 'night-theme' : 'day-theme';
            
            // Restore the chat background by re-enabling it
            const chatElements = document.querySelectorAll('.chat_chat__2rdNg');
            const chatBgUrl = 'https://files.catbox.moe/aqi0wq.gif';
            
            chatElements.forEach(el => {
                // Re-enable the background by restoring the background image
                el.style.setProperty('background-image', `url('${chatBgUrl}')`, 'important');
                el.style.setProperty('background-size', 'cover', 'important');
                el.style.setProperty('background-position', 'center', 'important');
                el.style.setProperty('background-repeat', 'no-repeat', 'important');
                el.style.setProperty('background-color', 'transparent', 'important');
                
                console.log('[Season 4] Restored chat background image');
            });
            
            // Re-apply custom images
            const targetImageXPaths = [
                '//*[@id="__next"]/main/div[1]/div[1]/button[2]/img[1]',
                '//*[@id="__next"]/main/div[1]/div[1]/button[2]/img[2]'
            ];
            
            const getElementByXPath = (xpath) => {
                try {
                    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                } catch (error) {
                    console.warn('[Season 4] Image XPath evaluation failed:', error);
                    return null;
                }
            };
            
            const daySrc = 'https://i.imgur.com/5yhYE3u.png';
            const nightSrc = 'https://i.imgur.com/W8t0QR1.png';
            const targetSrc = currentTheme === 'day-theme' ? daySrc : nightSrc;
            
            targetImageXPaths.forEach(xpath => {
                const imgElement = getElementByXPath(xpath);
                if (imgElement) {
                    // Apply the appropriate theme image directly
                    imgElement.src = targetSrc;
                    console.log(`[Season 4] Restored custom image: ${targetSrc}`);
                    
                    // Apply the same class handling as the main function
                    imgElement.classList.remove('day-theme', 'night-theme', 'season4-custom-image');
                    imgElement.classList.add('season4-custom-image', currentTheme);
                }
            });
            
            targetImageXPaths.forEach(xpath => {
                const imgElement = getElementByXPath(xpath);
                if (imgElement) {
                    imgElement.style.setProperty('opacity', '1', 'important');
                }
            });
        };
        
        const checkTheaterMode = () => {
            const currentTheaterState = isInTheaterMode();
            
            if (currentTheaterState !== lastTheaterState) {
                console.log(`[Season 4] Theater mode changed: ${lastTheaterState} -> ${currentTheaterState}`);
                
                if (currentTheaterState && !lastTheaterState) {
                    console.log('[Season 4] Theater mode ENTERED - hiding background');
                    disableChatBackground();
                } else if (!currentTheaterState && lastTheaterState) {
                    console.log('[Season 4] Theater mode EXITED - restoring background');
                    restoreThemeElements();
                }
                
                lastTheaterState = currentTheaterState;
            }
        };
        
        checkTheaterMode();
        
        theaterInterval = setInterval(checkTheaterMode, 100);
        console.log('[Season 4] Theater mode monitoring started (100ms polling)');
        
        return () => {
            if (theaterInterval) {
                clearInterval(theaterInterval);
                console.log('[Season 4] Theater mode monitoring stopped');
            }
            
            originalChatBackgrounds.clear();
            
            // Remove any season4 classes that might have been added
            document.body.classList.remove('season4');
            
            // Clean up any inline styles that might persist
            const chatElements = document.querySelectorAll('.chat_chat__2rdNg');
            chatElements.forEach(el => {
                el.style.removeProperty('background-image');
                el.style.removeProperty('background-size');
                el.style.removeProperty('background-position');
                el.style.removeProperty('background-repeat');
                el.style.removeProperty('background-color');
                el.style.removeProperty('opacity');
                el.classList.remove('season4-restored-chat');
            });
        };
      }
  ];
  
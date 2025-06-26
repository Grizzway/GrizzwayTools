export default [
    () => {
        console.log('[E-Girl Theme] Loading Nunito font...');
        
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap';
        document.head.appendChild(linkElement);
        
        setTimeout(() => {
            console.log('[E-Girl Theme] Nunito font loaded! ✨');
        }, 1000);
        
        return () => {
            console.log('[E-Girl Theme] Font loading cleaned up');
        };
    },
    
    () => {
        let observer = null;
        let styleEl = null;

        const getKawaiiColor = (color) => {
            const colorPallet = [
                'rgba(255, 105, 180, 0.9)',
                'rgba(255, 182, 193, 0.9)',
                'rgba(255, 192, 203, 0.9)',
                'rgba(255, 20, 147, 0.9)',
                'rgba(255, 240, 245, 0.9)',
                'rgba(255, 228, 225, 0.9)',
                'rgba(255, 218, 185, 0.9)',
                'rgba(221, 160, 221, 0.9)'
            ];

            const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (!rgbMatch) return colorPallet[0];

            const r = parseInt(rgbMatch[1]);
            const g = parseInt(rgbMatch[2]);
            const b = parseInt(rgbMatch[3]);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            
            if (brightness > 200) {
                if (r > g && r > b) return colorPallet[4];
                if (g > r && g > b) return colorPallet[5];
                if (b > r && b > g) return colorPallet[6];
                return colorPallet[1];
            } else if (brightness > 120) {
                if (r > g && r > b) return colorPallet[0];
                if (g > r && g > b) return colorPallet[2];
                if (b > r && b > g) return colorPallet[7];
                return colorPallet[1];
            } else {
                if (r > g && r > b) return colorPallet[3];
                if (g > r && g > b) return colorPallet[0];
                if (b > r && b > g) return colorPallet[7];
                return colorPallet[0];
            }
        };

        const applyKawaiiStyling = () => {
            const userContainer = document.querySelector('.top-bar-user_top-bar-user__VUdJm');
            const displayName = document.querySelector('.top-bar-user_display-name__bzlpw');

            if (!userContainer || !displayName) return false;

            const computedStyle = window.getComputedStyle(displayName);
            const textColor = computedStyle.color;
            const bgColor = getKawaiiColor(textColor);
            const lighterBgColor = bgColor.replace('0.9', '0.7');

            if (!styleEl) {
                styleEl = document.createElement('style');
                styleEl.id = 'egirl-dynamic-user-style';
                document.head.appendChild(styleEl);
            }

            styleEl.textContent = `
                .top-bar-user_top-bar-user__VUdJm {
                    background: linear-gradient(135deg, ${bgColor}, ${lighterBgColor}) !important;
                    border: 3px solid #ff69b4 !important;
                    border-radius: 15px !important;
                    padding: 8px 12px !important;
                    box-shadow: 
                        0 0 20px rgba(255, 105, 180, 0.5),
                        inset 0 0 15px rgba(255, 192, 203, 0.3) !important;
                    position: relative !important;
                    overflow: visible !important;
                }

                .top-bar-user_display-name__bzlpw {
                    text-shadow: 0 0 8px #ff69b4, 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
                    font-weight: 700 !important;
                    font-family: 'Nunito', sans-serif !important;
                    position: relative !important;
                    z-index: 2 !important;
                    letter-spacing: 0.5px !important;
                }

                .top-bar-user_top-bar-user__VUdJm::before {
                    content: '💕';
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    font-size: 14px;
                    animation: kawaii-pulse 2s ease-in-out infinite;
                    z-index: 3;
                }

                @keyframes kawaii-pulse {
                    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
                    50% { transform: scale(1.2) rotate(10deg); opacity: 1; }
                }
            `;

            console.log('[E-Girl Theme] Applied kawaii styling ✨💖');
            return true;
        };

        if (!applyKawaiiStyling()) {
            observer = new MutationObserver(() => {
                if (applyKawaiiStyling()) {
                    console.log('[E-Girl Theme] Dynamic kawaii styling applied! 🌸');
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['style', 'class']
            });
        }

        return () => {
            if (styleEl && styleEl.parentNode) {
                styleEl.remove();
            }
            if (observer) {
                observer.disconnect();
            }
            console.log('[E-Girl Theme] Kawaii styling cleaned up 👋💕');
        };
    },

    () => {
        let messageObserver = null;
        const kawaiiEmojis = ['💖', '✨', '🌸', '💕', '🦄', '🌈', '💫', '🎀'];
        
        const addKawaiiEffects = () => {
            const messages = document.querySelectorAll('.chat-message_message__iZ2CT:not(.kawaii-enhanced)');
            
            messages.forEach(message => {
                if (Math.random() < 0.15) {
                    const sparkle = document.createElement('span');
                    sparkle.textContent = kawaiiEmojis[Math.floor(Math.random() * kawaiiEmojis.length)];
                    sparkle.style.cssText = `
                        position: absolute;
                        top: -5px;
                        right: -5px;
                        font-size: 12px;
                        animation: kawaii-float 3s ease-in-out infinite;
                        pointer-events: none;
                        z-index: 10;
                    `;
                    
                    message.style.position = 'relative';
                    message.appendChild(sparkle);
                }
                message.classList.add('kawaii-enhanced');
            });
        };

        const addFloatAnimation = () => {
            if (!document.getElementById('kawaii-float-animation')) {
                const style = document.createElement('style');
                style.id = 'kawaii-float-animation';
                style.textContent = `
                    @keyframes kawaii-float {
                        0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
                        33% { transform: translateY(-8px) scale(1.1); opacity: 1; }
                        66% { transform: translateY(-3px) scale(0.95); opacity: 0.9; }
                    }
                `;
                document.head.appendChild(style);
            }
        };

        addFloatAnimation();
        addKawaiiEffects();

        messageObserver = new MutationObserver(() => {
            addKawaiiEffects();
        });

        messageObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        console.log('[E-Girl Theme] Kawaii message effects loaded! 🌸✨');

        return () => {
            if (messageObserver) {
                messageObserver.disconnect();
            }
            const style = document.getElementById('kawaii-float-animation');
            if (style) style.remove();
            console.log('[E-Girl Theme] Kawaii message effects cleaned up! 💕');
        };
    }
];
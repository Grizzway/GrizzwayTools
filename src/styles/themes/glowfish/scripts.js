export default [
    () => {
        console.log('[Cosmic Theme] Loading Anta font...');
        
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = 'https://fonts.googleapis.com/css2?family=Anta&display=swap';
        document.head.appendChild(linkElement);
        
        setTimeout(() => {
            console.log('[Cosmic Theme] Anta font loaded!');
        }, 1000);
        
        return () => {
            console.log('[Cosmic Theme] Font loading cleaned up');
        };
    },
    
    () => {
        let observer = null;
        let styleEl = null;

        const getCosmicColor = (color) => {
            const cosmicColors = [
                'rgba(0, 255, 170, 0.8)',    
                'rgba(138, 43, 226, 0.8)',    
                'rgba(75, 0, 130, 0.8)',     
                'rgba(255, 20, 147, 0.8)',    
                'rgba(25, 10, 50, 0.8)',     
                'rgba(0, 128, 128, 0.8)', 
                'rgba(199, 21, 133, 0.8)', 
                'rgba(72, 61, 139, 0.8)' 
            ];

            const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (!rgbMatch) return cosmicColors[0];

            const r = parseInt(rgbMatch[1]);
            const g = parseInt(rgbMatch[2]);
            const b = parseInt(rgbMatch[3]);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            
            if (brightness > 180) {
                if (g > r && g > b) return cosmicColors[5];
                if (r > g && r > b) return cosmicColors[3];
                if (b > r && b > g) return cosmicColors[2];
                return cosmicColors[4];
            } else if (brightness > 100) {
                if (g > r && g > b) return cosmicColors[0];
                if (r > g && r > b) return cosmicColors[6];
                if (b > r && b > g) return cosmicColors[1];
                return cosmicColors[7];
            } else {
                if (g > r && g > b) return cosmicColors[0];
                if (r > g && r > b) return cosmicColors[3];
                if (b > r && b > g) return cosmicColors[1];
                return cosmicColors[0];
            }
        };

        const applyDynamicStyling = () => {
            const userContainer = document.querySelector('.top-bar-user_top-bar-user__VUdJm');
            const displayName = document.querySelector('.top-bar-user_display-name__bzlpw');

            if (!userContainer || !displayName) return false;

            const computedStyle = window.getComputedStyle(displayName);
            const textColor = computedStyle.color;
            const bgColor = getCosmicColor(textColor);

            if (!styleEl) {
                styleEl = document.createElement('style');
                styleEl.id = 'glowfish-dynamic-user-style';
                document.head.appendChild(styleEl);
            }

            styleEl.textContent = `
                .top-bar-user_top-bar-user__VUdJm {
                    background: linear-gradient(135deg, ${bgColor}, ${bgColor.replace('0.8', '0.6')}) !important;
                    border: 2px solid #00ffaa !important;
                    border-radius: 6px !important;
                    padding: 6px 8px !important;
                    box-shadow: 
                        0 0 15px rgba(0, 255, 170, 0.4),
                        inset 0 0 10px rgba(138, 43, 226, 0.2) !important;
                    position: relative !important;
                    overflow: visible !important;
                }

                .top-bar-user_display-name__bzlpw {
                    text-shadow: none !important;
                    font-weight: unset !important;
                    font-family: 'Anta', sans-serif !important;
                    position: relative !important;
                    z-index: 2 !important;
                }
            `;

            console.log('[Glow Fish Theme] Applied cosmic styling');
            return true;
        };

        if (!applyDynamicStyling()) {
            observer = new MutationObserver(() => {
                if (applyDynamicStyling()) {
                    console.log('[Glow Fish Theme] Dynamic user styling applied');
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
            console.log('[Glow Fish Theme] Dynamic styling cleaned up');
        };
    }
];
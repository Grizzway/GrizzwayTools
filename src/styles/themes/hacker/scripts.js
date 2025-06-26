export default [
    () => {
        let observer = null;
        let styleEl = null;

        const getPolarizingColor = (color) => {
            const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (!rgbMatch) {
                const hexMatch = color.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
                if (hexMatch) {
                    const r = parseInt(hexMatch[1], 16);
                    const g = parseInt(hexMatch[2], 16);
                    const b = parseInt(hexMatch[3], 16);
                    return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
                }
                return 'rgba(0, 0, 0, 0.8)';
            }

            const r = parseInt(rgbMatch[1]);
            const g = parseInt(rgbMatch[2]);
            const b = parseInt(rgbMatch[3]);
            const polarR = 255 - r;
            const polarG = 255 - g;
            const polarB = 255 - b;

            return `rgba(${polarR}, ${polarG}, ${polarB}, 0.8)`;
        };

        const applyDynamicStyling = () => {
            const userContainer = document.querySelector('.top-bar-user_top-bar-user__VUdJm');
            const displayName = document.querySelector('.top-bar-user_display-name__bzlpw');

            if (!userContainer || !displayName) return false;

            const computedStyle = window.getComputedStyle(displayName);
            const textColor = computedStyle.color;

            const bgColor = getPolarizingColor(textColor);

            if (!styleEl) {
                styleEl = document.createElement('style');
                styleEl.id = 'hacker-dynamic-user-style';
                document.head.appendChild(styleEl);
            }

            styleEl.textContent = `
                .top-bar-user_top-bar-user__VUdJm {
                    background-color: ${bgColor} !important;
                    border: 1px solid #00ff00 !important;
                    border-radius: 4px !important;
                    padding: 4px 8px !important;
                    box-shadow: 0 0 10px rgba(0, 255, 0, 0.3) !important;
                }

                .top-bar-user_display-name__bzlpw {
                    text-shadow: 
                        -1px -1px 0 #000,
                        1px -1px 0 #000,
                        -1px 1px 0 #000,
                        1px 1px 0 #000,
                        0 0 5px #00ff00 !important;
                    font-weight: bold !important;
                    font-family: 'Courier New', monospace !important;
                }
            `;

            console.log('[Hacker Theme] Applied dynamic styling - Text:', textColor, 'Background:', bgColor);
            return true;
        };

        if (!applyDynamicStyling()) {
            observer = new MutationObserver(() => {
                if (applyDynamicStyling()) {
                    console.log('[Hacker Theme] Dynamic user styling applied');
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
            console.log('[Hacker Theme] Dynamic styling cleaned up');
        };
    }
];
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
    },

    () => {
        let canvas = null;
        let ctx = null;
        let animationId = null;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?";
        const drops = [];

        const initMatrixRain = () => {
            canvas = document.createElement('canvas');
            canvas.id = 'hacker-matrix-canvas';
            canvas.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                pointer-events: none;
                z-index: -1;
                opacity: 0.1;
            `;
            
            document.body.appendChild(canvas);
            ctx = canvas.getContext('2d');

            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                
                const columns = Math.floor(canvas.width / 20);
                for (let i = 0; i < columns; i++) {
                    drops[i] = Math.random() * canvas.height;
                }
            };

            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            const draw = () => {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = '#00ff00';
                ctx.font = '16px Courier New';

                for (let i = 0; i < drops.length; i++) {
                    const char = chars[Math.floor(Math.random() * chars.length)];
                    const x = i * 20;
                    const y = drops[i] * 20;

                    ctx.fillText(char, x, y);

                    if (y > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }

                animationId = requestAnimationFrame(draw);
            };

            draw();
        };

        initMatrixRain();

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            if (canvas && canvas.parentNode) {
                canvas.remove();
            }
            console.log('[Hacker Theme] Matrix rain effect cleaned up');
        };
    }
];
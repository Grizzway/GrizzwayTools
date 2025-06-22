export default [
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
            0%   { filter: drop-shadow(0 0 0px red); }
            30%  { filter: drop-shadow(0 0 14px red); }
            60%  { filter: drop-shadow(0 0 14px red); }
            100% { filter: drop-shadow(0 0 0px red); }
          }
  
          .grizz-glow-img {
            animation: grizzGlow 1.2s infinite ease-in-out !important;
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
    }
  ];
  
import { injectBaseCSS } from '../styles/baseCss.js';
import { getCurrentTheme, setThemeName } from '../storage.js';
import themes from '../styles/themes/index.js';

let cleanupFunctions = [];

export function applyTheme(themeName) {
  console.log('[Grizzway Tools] Applying theme:', themeName);

  cleanupFunctions.forEach(fn => {
    try {
      fn?.();
    } catch (e) {
      console.warn('[Grizzway Tools] Error during theme cleanup:', e);
    }
  });
  cleanupFunctions = [];

  const existingThemeStyle = document.getElementById('grizzway-theme-styles');
  if (existingThemeStyle) existingThemeStyle.remove();

  const theme = themes[themeName] || themes.default;
  injectBaseCSS();

  if (theme.style) {
    const styleElement = document.createElement('style');
    styleElement.id = 'grizzway-theme-styles';
    styleElement.textContent = theme.style;
    document.head.appendChild(styleElement);
    console.log('[Grizzway Tools] Theme styles applied for:', themeName);
  }

  if (Array.isArray(theme.scripts)) {
    theme.scripts.forEach((fn, i) => {
      try {
        if (typeof fn === 'function') {
          const cleanup = fn();
          if (typeof cleanup === 'function') {
            cleanupFunctions.push(cleanup);
          }
          console.log(`[Grizzway Tools] Script ${i + 1} executed for:`, themeName);
        }
      } catch (e) {
        console.error(`[Grizzway Tools] Script ${i + 1} failed:`, e);
      }
    });
  } else {
    console.log(`[Grizzway Tools] No scripts to run for:`, themeName);
  }
}

export function initTheme() {
  let selectedTheme = getCurrentTheme();
  if (!selectedTheme || !themes[selectedTheme]) {
    selectedTheme = 'default';
    setThemeName('default');
  }
  applyTheme(selectedTheme);
}

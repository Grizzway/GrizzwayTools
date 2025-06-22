import { getCurrentTheme } from './storage.js';
import defaultTheme from './styles/themes/default/default.js';
import chaoTheme from './styles/themes/chao/chao.js';

const themeMap = {
    default: defaultTheme,
    chao: chaoTheme
};

export function getThemeConfig() {
    const selected = getCurrentTheme();
    return themeMap[selected] || defaultTheme;
}

export function setThemeName(themeName) {
    localStorage.setItem('grizzway_theme', themeName);
}
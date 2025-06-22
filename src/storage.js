export function getCurrentTheme() {
    return localStorage.getItem('grizzway_theme') || 'default';
}

const STORAGE_KEY = 'grizzway-tools-settings';

export function saveSettings(newSettings = {}) {
    const existing = loadSettings();
    const merged = { ...existing, ...newSettings };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
}

export function loadSettings() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
        return {};
    }
}

export function getStorageItem(key) {
    return localStorage.getItem(key);
}

export function setStorageItem(key, value) {
    localStorage.setItem(key, value);
}

export function setThemeName(themeName) {
    localStorage.setItem('grizzway_theme', themeName);
}
import { saveSettings, loadSettings, getCurrentTheme } from '../storage.js';
import { applyTheme } from '../utils/themeLoader.js';
import { blockSoundsFeature } from '../features/blockSounds.js';
import { updateLoggedInUserCSS } from '../features/loggedInUserStyling.js';
import { streamTitleStyleFeature, updateStreamTitleStyle } from '../features/streamTitleStyle.js';
import { updateAdHiding } from '../features/adHiding.js';
import { updateTheaterChatHiding } from '../features/hideTheaterChat.js';
import themes from '../styles/themes/index.js';

console.log('[Debug] Themes imported in configModal:', themes);
console.log('[Debug] Available themes:', Object.keys(themes));
console.log('[Debug] AVAILABLE_THEMES array:', AVAILABLE_THEMES);

const AVAILABLE_THEMES = [
  { label: 'Default', value: 'default' },
  { label: 'Chao Garden', value: 'chao' },
  { label: 'Hacker', value: 'hacker' },
  { label: 'Glow Fish', value: 'glowfish' },
  { label: 'Season 2', value: 'season2' },
  { label: 'E-Girl', value: 'egirl' }
];


export function showConfigModal() {
  const existing = document.querySelector('#grizzway-config-modal');
  if (existing) existing.remove();

  const settings = loadSettings();
  const currentTheme = settings.theme || getCurrentTheme();

  const originalSettings = { ...settings };

  const overlay = document.createElement('div');
  overlay.id = 'grizzway-config-modal-overlay';
  Object.assign(overlay.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 9998,
  });

  const modal = document.createElement('div');
  modal.id = 'grizzway-config-modal';
  Object.assign(modal.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    backgroundColor: 'rgba(34, 34, 34, 0.85)',
    color: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 0 30px rgba(0,0,0,0.8)',
    border: '1px solid rgba(68, 68, 68, 0.8)',
    width: '78.125vw',
    maxWidth: '1500px',
    height: 'auto',
    maxHeight: '85vh',
    fontFamily: 'sans-serif',
    overflowY: 'auto'
  });

console.log('[Debug] Current theme from settings:', currentTheme);
console.log('[Debug] Theme options will be generated from:', AVAILABLE_THEMES);

  const themeOptions = AVAILABLE_THEMES
    .map(({ label, value }) =>
      `<option value="${value}" ${value === currentTheme ? 'selected' : ''}>${label}</option>`
    )
    .join('');

  modal.innerHTML = `
    <button id="close-config-modal" style="
      position: absolute;
      top: 15px;
      right: 15px;
      background: transparent;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      padding: 8px;
      border-radius: 4px;
      transition: background-color 0.2s;
    " onmouseover="this.style.backgroundColor='rgba(255,255,255,0.1)'" onmouseout="this.style.backgroundColor='transparent'">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M5 3H3v18h18V3H5zm14 2v14H5V5h14zm-8 4H9V7H7v2h2v2h2v2H9v2H7v2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2v-2h2V9h2V7h-2v2h-2v2h-2V9z" fill="currentColor"></path>
      </svg>
    </button>

    <h1 style="
      text-align: center;
      font-size: 28px;
      margin-bottom: 30px;
      margin-top: 10px;
    ">Grizzway Tools Config</h1>

    <!-- Main Content Grid -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
      
      <!-- Left Column -->
      <div>
        <!-- Theme Selection -->
        <div style="margin-bottom: 25px;">
          <h2 style="font-size: 20px; margin-bottom: 15px; color: #fff;">Theme Settings</h2>
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(68,68,68,0.5);">
            <label for="theme-select" style="display: block; margin-bottom: 10px; font-weight: bold;">Select Theme:</label>
            <select id="theme-select" style="
              width: 100%;
              padding: 10px;
              border-radius: 6px;
              border: 1px solid #666;
              background-color: #333;
              color: white;
              font-size: 14px;
            ">
              ${themeOptions}
            </select>
            <div id="theme-meta-display" style="color: #ccc; font-size: 14px; margin-top: 10px; text-align: center;"></div>
          </div>
        </div>

        <!-- Quick Toggles -->
        <div style="margin-bottom: 25px;">
          <h2 style="font-size: 20px; margin-bottom: 15px; color: #fff;">Quick Toggles</h2>
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(68,68,68,0.5);">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <label style="display: flex; align-items: center; cursor: pointer; padding: 8px; background: rgba(255,255,255,0.05); border-radius: 4px;">
                <input type="checkbox" id="hide-ads-toggle" style="margin-right: 10px;" ${settings.hideAds === true ? 'checked' : ''}>
                <span style="font-weight: bold;">Hide Ads</span>
              </label>
              <label style="display: flex; align-items: center; cursor: pointer; padding: 8px; background: rgba(255,255,255,0.05); border-radius: 4px;">
                <input type="checkbox" id="hide-theater-chat-toggle" style="margin-right: 10px;" ${settings.hideTheaterChat === true ? 'checked' : ''}>
                <span style="font-weight: bold;">Hide Theater Chat</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Stream Title Styling -->
        <div style="margin-bottom: 25px;">
          <h2 style="font-size: 20px; margin-bottom: 15px; color: #fff;">Stream Title Styling</h2>
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(68,68,68,0.5);">
            <div style="margin-bottom: 15px;">
              <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="checkbox" id="stream-title-toggle" style="margin-right: 10px;" ${settings.streamTitleEnabled === true ? 'checked' : ''}>
                <span style="font-weight: bold;">Enable stream title styling</span>
              </label>
            </div>

            <div id="stream-title-options" style="${settings.streamTitleEnabled !== true ? 'opacity: 0.5; pointer-events: none;' : ''}">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <label style="display: block; margin-bottom: 8px; font-weight: bold;">Color:</label>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="color" id="stream-title-color" value="${settings.streamTitleColor || '#00ff00'}" style="width: 40px; height: 30px; border: 1px solid #666; border-radius: 4px; background: transparent; cursor: pointer;">
                    <span id="stream-title-color-value" style="font-family: monospace; font-size: 12px;">${settings.streamTitleColor || '#00ff00'}</span>
                  </div>
                </div>
                <div>
                  <label style="display: block; margin-bottom: 8px; font-weight: bold;">Glow Intensity:</label>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="range" id="stream-title-glow-intensity" min="0" max="10" step="0.5" value="${settings.streamTitleGlowIntensity || '2'}" style="flex: 1;">
                    <span id="glow-intensity-value" style="font-family: monospace; min-width: 25px; text-align: center; font-size: 12px;">${settings.streamTitleGlowIntensity || '2'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div>
        <!-- Logged-In User Styling -->
        <div style="margin-bottom: 25px;">
          <h2 style="font-size: 20px; margin-bottom: 15px; color: #fff;">Logged-In User Styling</h2>
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(68,68,68,0.5);">
            <div style="margin-bottom: 15px;">
              <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="checkbox" id="logged-in-styling-toggle" style="margin-right: 10px;" ${settings.loggedInUserStyling !== false ? 'checked' : ''}>
                <span style="font-weight: bold;">Enable logged-in user styling</span>
              </label>
            </div>

            <div id="user-styling-options" style="${settings.loggedInUserStyling === false ? 'opacity: 0.5; pointer-events: none;' : ''}">
              <!-- Message Highlight -->
              <div style="margin-bottom: 20px;">
                <div style="margin-bottom: 10px;">
                  <label style="display: flex; align-items: center; cursor: pointer;">
                    <input type="checkbox" id="user-highlight-toggle" style="margin-right: 10px;" ${settings.userHighlightEnabled !== false ? 'checked' : ''}>
                    <span style="font-weight: bold;">Message Highlight</span>
                  </label>
                </div>

                <div id="highlight-color-section" style="${settings.userHighlightEnabled === false ? 'opacity: 0.5; pointer-events: none;' : ''}">
                  <label style="display: block; margin-bottom: 8px;">Highlight Color:</label>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="color" id="user-highlight-color" value="${settings.userHighlightColor || '#7d0505'}" style="width: 40px; height: 30px; border: 1px solid #666; border-radius: 4px; background: transparent; cursor: pointer;">
                    <span id="highlight-color-value" style="font-family: monospace; font-size: 12px;">${settings.userHighlightColor || '#7d0505'}</span>
                  </div>
                </div>
              </div>

              <!-- Username Glow -->
              <div>
                <div style="margin-bottom: 10px;">
                  <label style="display: flex; align-items: center; cursor: pointer;">
                    <input type="checkbox" id="user-glow-toggle" style="margin-right: 10px;" ${settings.userGlowEnabled !== false ? 'checked' : ''}>
                    <span style="font-weight: bold;">Username Glow</span>
                  </label>
                </div>

                <div id="glow-color-section" style="${settings.userGlowEnabled === false ? 'opacity: 0.5; pointer-events: none;' : ''}">
                  <label style="display: block; margin-bottom: 8px;">Glow Color:</label>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="color" id="user-glow-color" value="${settings.userGlowColor || '#00ff00'}" style="width: 40px; height: 30px; border: 1px solid #666; border-radius: 4px; background: transparent; cursor: pointer;">
                    <span id="glow-color-value" style="font-family: monospace; font-size: 12px;">${settings.userGlowColor || '#00ff00'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div style="text-align: center;">
        <button id="save-config" style="
            background-color: #2B2D2E;
            color: #f8ec94;
            border: 2px solid transparent;
            padding: 12px;
            width: 80px;
            height: 48px;
            border-color: #666666;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: border-color 0.2s;" 
            onmouseover="this.style.borderColor='#00ff00'" onmouseout="this.style.borderColor='#666666'">Save</button>
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  const selectEl = document.querySelector('#theme-select');
  const themeMetaDisplay = document.querySelector('#theme-meta-display');

  function updateThemeMetaDisplay(themeKey) {
    const theme = themes[themeKey];
    if (theme) {
      themeMetaDisplay.textContent = `Selected theme: ${theme.name} by ${theme.author}`;
    } else {
      themeMetaDisplay.textContent = '';
    }
  }

  updateThemeMetaDisplay(selectEl.value);
  selectEl.addEventListener('change', () => {
    updateThemeMetaDisplay(selectEl.value);
    applyTheme(selectEl.value);
  });


  function revertToOriginalSettings() {
    console.log('[Grizzway Tools] Reverting to original settings');
    
    if (selectEl.value !== originalSettings.theme) {
      applyTheme(originalSettings.theme || 'default');
    }
    
    updateAdHiding(originalSettings.hideAds === true);
    
    updateTheaterChatHiding(originalSettings.hideTheaterChat === true);
    
    if (originalSettings.streamTitleEnabled === true) {
      updateStreamTitleStyle(
        originalSettings.streamTitleColor || '#00ff00',
        originalSettings.streamTitleGlowIntensity || 2
      );
    } else {
      updateStreamTitleStyle(null);
    }
    
    updateLoggedInUserCSS();
  }

  const hideAdsToggle = document.querySelector('#hide-ads-toggle');
  
  hideAdsToggle.addEventListener('change', () => {
    updateAdHiding(hideAdsToggle.checked);
  });

  const hideTheaterChatToggle = document.querySelector('#hide-theater-chat-toggle');
  
  hideTheaterChatToggle.addEventListener('change', () => {
    updateTheaterChatHiding(hideTheaterChatToggle.checked);
  });

  const streamTitleToggle = document.querySelector('#stream-title-toggle');
  const streamTitleOptions = document.querySelector('#stream-title-options');
  const streamTitleColorInput = document.querySelector('#stream-title-color');
  const streamTitleColorValue = document.querySelector('#stream-title-color-value');
  const streamTitleGlowIntensity = document.querySelector('#stream-title-glow-intensity');
  const glowIntensityValue = document.querySelector('#glow-intensity-value');

  streamTitleToggle.addEventListener('change', () => {
    streamTitleOptions.style.opacity = streamTitleToggle.checked ? '1' : '0.5';
    streamTitleOptions.style.pointerEvents = streamTitleToggle.checked ? 'auto' : 'none';
    
    if (streamTitleToggle.checked) {
      updateStreamTitleStyle(streamTitleColorInput.value, parseFloat(streamTitleGlowIntensity.value));
    } else {
      updateStreamTitleStyle(null);
    }
  });

  streamTitleColorInput.addEventListener('input', () => {
    streamTitleColorValue.textContent = streamTitleColorInput.value;
    
    if (streamTitleToggle.checked) {
      updateStreamTitleStyle(streamTitleColorInput.value, parseFloat(streamTitleGlowIntensity.value));
    }
  });

  streamTitleGlowIntensity.addEventListener('input', () => {
    glowIntensityValue.textContent = streamTitleGlowIntensity.value;
    
    if (streamTitleToggle.checked) {
      updateStreamTitleStyle(streamTitleColorInput.value, parseFloat(streamTitleGlowIntensity.value));
    }
  });

  const loggedInToggle = document.querySelector('#logged-in-styling-toggle');
  const userStylingOptions = document.querySelector('#user-styling-options');
  const highlightToggle = document.querySelector('#user-highlight-toggle');
  const glowToggle = document.querySelector('#user-glow-toggle');
  const highlightColorSection = document.querySelector('#highlight-color-section');
  const glowColorSection = document.querySelector('#glow-color-section');
  const highlightColorInput = document.querySelector('#user-highlight-color');
  const glowColorInput = document.querySelector('#user-glow-color');
  const highlightColorValue = document.querySelector('#highlight-color-value');
  const glowColorValue = document.querySelector('#glow-color-value');

  loggedInToggle.addEventListener('change', () => {
    userStylingOptions.style.opacity = loggedInToggle.checked ? '1' : '0.5';
    userStylingOptions.style.pointerEvents = loggedInToggle.checked ? 'auto' : 'none';
  });

  highlightToggle.addEventListener('change', () => {
    highlightColorSection.style.opacity = highlightToggle.checked ? '1' : '0.5';
    highlightColorSection.style.pointerEvents = highlightToggle.checked ? 'auto' : 'none';
  });

  glowToggle.addEventListener('change', () => {
    glowColorSection.style.opacity = glowToggle.checked ? '1' : '0.5';
    glowColorSection.style.pointerEvents = glowToggle.checked ? 'auto' : 'none';
  });

  highlightColorInput.addEventListener('input', () => {
    highlightColorValue.textContent = highlightColorInput.value;
  });

  glowColorInput.addEventListener('input', () => {
    glowColorValue.textContent = glowColorInput.value;
  });

  document.querySelector('#save-config').addEventListener('click', () => {
    const newSettings = {
      theme: selectEl.value,
      hideAds: hideAdsToggle.checked,
      hideTheaterChat: hideTheaterChatToggle.checked,
      streamTitleEnabled: streamTitleToggle.checked,
      streamTitleColor: streamTitleColorInput.value,
      streamTitleGlowIntensity: parseFloat(streamTitleGlowIntensity.value),
      loggedInUserStyling: loggedInToggle.checked,
      userHighlightEnabled: highlightToggle.checked,
      userGlowEnabled: glowToggle.checked,
      userHighlightColor: highlightColorInput.value,
      userGlowColor: glowColorInput.value
    };

    localStorage.setItem('grizzway_theme', newSettings.theme);
    saveSettings(newSettings);
    applyTheme(newSettings.theme);
    updateLoggedInUserCSS();
    blockSoundsFeature();
    
    updateAdHiding(newSettings.hideAds);
    
    updateTheaterChatHiding(newSettings.hideTheaterChat);
    
    if (newSettings.streamTitleEnabled) {
      streamTitleStyleFeature(newSettings.streamTitleColor, newSettings.streamTitleGlowIntensity);
    } else {
      updateStreamTitleStyle(null);
    }
    
    overlay.remove();

    console.log('[Grizzway Tools] Settings saved:', newSettings);
  });

  document.querySelector('#close-config-modal').addEventListener('click', () => {
    revertToOriginalSettings();
    overlay.remove();
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      revertToOriginalSettings();
      overlay.remove();
    }
  });
}
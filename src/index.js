import { blockSoundsFeature } from './features/blockSounds.js';
import { chatLinkButtonsFeature } from './features/chatLinkButtons.js';
import { loggedInUserStylingFeature } from './features/loggedInUserStyling.js';
import { grizzwaySpecialStylingFeature, addGrizzwaySpecialCSS } from './features/grizzwayChatStyle.js';
import { modalFixesFeature } from './features/modalFixes.js';
import { profileFixFeature, observeProfileFix } from './features/profileFix.js';
import { streamTitleStyleFeature } from './features/streamTitleStyle.js';
import { configButtonFeature } from './features/configButton.js';
import { adHidingFeature } from './features/adHiding.js';
import { hideTheaterChatFeature } from './features/hideTheaterChat.js';
import { unwantedClassesFeature } from './features/unwantedClasses.js';

import { injectBaseCSS } from './styles/baseCss.js';
import { applyTheme } from './utils/themeLoader.js';
import { getThemeConfig, setThemeName } from './config.js';
import { getCurrentTheme } from './storage.js';
import { addProfileEditingCSS } from './features/profileFix.js';

function initMedalFunctionality() {
    let isElementVisible = false;

    function changeMedalSize(isVisible) {
        const buttons = document.querySelectorAll('.medal_medal__Hqowf.medal_md__RvQMV button');
        buttons.forEach(button => {
            if (isVisible) {
                button.style.setProperty('--medal-size', '32px');
            } else {
                button.style.setProperty('--medal-size', '64px');
            }
        });
    }

    function checkElement() {
        const medalSelector = document.querySelector('.medal-selector_medals__sk3PN');

        if (medalSelector) {
            const rect = medalSelector.getBoundingClientRect();
            const isVisible = rect.width > 0 && rect.height > 0;

            if (isVisible !== isElementVisible) {
                isElementVisible = isVisible;
                changeMedalSize(isElementVisible);
            }
        } else {
            if (isElementVisible) {
                isElementVisible = false;
                changeMedalSize(false);
            }
        }
    }

    setInterval(checkElement, 100);
}

function applyOptionalStyles() {
  const theme = getThemeConfig();
  const styleId = 'optionalStyles';

  if (!theme || !theme.customStyles) {
    console.warn('[Grizzway Tools] No customStyles found in selected theme.');
    return;
  }

  if (document.getElementById(styleId)) return;

  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = theme.customStyles;
  document.head.appendChild(style);
}

function init() {
  if (location.hostname === 'api.fishtank.live') return;

  console.log('[Grizzway Tools] Script initialized on:', location.hostname);

  injectBaseCSS();

  let currentTheme = getCurrentTheme();
  if (!currentTheme) {
    currentTheme = 'default';
    setThemeName('default');
  }

  applyTheme(currentTheme);
  applyOptionalStyles();

  console.log('[Grizzway Tools] Initializing features...');

  try {
    blockSoundsFeature();
    console.log('[Grizzway Tools] ✓ blockSoundsFeature initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ blockSoundsFeature failed:', e);
  }

  try {
    chatLinkButtonsFeature();
    console.log('[Grizzway Tools] ✓ chatLinkButtonsFeature initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ chatLinkButtonsFeature failed:', e);
  }

  try {
    loggedInUserStylingFeature();
    console.log('[Grizzway Tools] ✓ loggedInUserStylingFeature initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ loggedInUserStylingFeature failed:', e);
  }

  try {
    addGrizzwaySpecialCSS();
    grizzwaySpecialStylingFeature();
    console.log('[Grizzway Tools] ✓ grizzwaySpecialStylingFeature initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ grizzwaySpecialStylingFeature failed:', e);
  }

  try {
    modalFixesFeature();
    console.log('[Grizzway Tools] ✓ modalFixesFeature initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ modalFixesFeature failed:', e);
  }
  
  try {
    addProfileEditingCSS();
    console.log('[Grizzway Tools] ✓ Profile editing CSS initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ Profile editing CSS failed:', e);
  }

  try {
    profileFixFeature();
    console.log('[Grizzway Tools] ✓ profileFixFeature initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ profileFixFeature failed:', e);
  }

  try {
    observeProfileFix();
    console.log('[Grizzway Tools] ✓ observeProfileFix initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ observeProfileFix failed:', e);
  }

  try {
    streamTitleStyleFeature();
    console.log('[Grizzway Tools] ✓ streamTitleStyleFeature initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ streamTitleStyleFeature failed:', e);
  }

  try {
    configButtonFeature();
    console.log('[Grizzway Tools] ✓ configButtonFeature initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ configButtonFeature failed:', e);
  }

  try {
    adHidingFeature();
    console.log('[Grizzway Tools] ✓ adHidingFeature initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ adHidingFeature failed:', e);
  }

  try {
    hideTheaterChatFeature();
    console.log('[Grizzway Tools] ✓ hideTheaterChatFeature initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ hideTheaterChatFeature failed:', e);
  }

  try {
    unwantedClassesFeature();
    console.log('[Grizzway Tools] ✓ unwantedClassesFeature initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ unwantedClassesFeature failed:', e);
  }

  try {
    initMedalFunctionality();
    console.log('[Grizzway Tools] ✓ Medal functionality initialized');
  } catch (e) {
    console.error('[Grizzway Tools] ✗ Medal functionality failed:', e);
  }

  console.log('[Grizzway Tools] All features initialization completed');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
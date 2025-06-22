export function injectBaseCSS() {
    const baseStyleId = 'baseCssGrizzway';
    if (document.getElementById(baseStyleId)) return;
  
    const baseCSS = `
      /* BASE CSS – ALWAYS ON (No modal styles here) */
      
      /* Only non-modal essential styles */
      .user-profile-tts-sfx_messages__w4_Ew {
        max-height: 93vh !important;
      }

      .sfx-modal_sfx-modal__i_ppy,
      .tts-modal_tts-modal__rxY0z,
      .stocks-modal_stocks-modal__xgXY0,
      .stock-details_stock-details__AZOBD {
        max-width: 95vw !important;
      }
    `;

    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(baseCSS);
    } else {
        const style = document.createElement('style');
        style.id = baseStyleId;
        style.textContent = baseCSS;
        document.head.appendChild(style);
    }
}
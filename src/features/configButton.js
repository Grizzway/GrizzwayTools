import { showConfigModal } from './configModal.js';

export function configButtonFeature() {
  const BUTTON_ID = 'grizz-config-button';
  const ICON_SVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 16 16">
      <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
    </svg>
  `;

  function createButton() {
    const btn = document.createElement('button');
    btn.id = BUTTON_ID;
    btn.className = 'top-bar_link__0xN4F top-bar_red__1Up8r';
    btn.innerHTML = `<span><div class="icon_icon__bDzMA" style="color:black !important; ">${ICON_SVG}</div></span>Config`;

    Object.assign(btn.style, {
      backgroundColor: 'rgb(0 255 0 / 35%)',
      borderColor: 'rgb(0 0 0 / 93%)',
      boxShadow: '0 0 8px 2px #00FF00',
      animation: 'pulseGlow 2s infinite'
    });

    btn.addEventListener('click', () => {
      console.log('[Grizzway Tools] Config button clicked');
      showConfigModal();
    });

    return btn;
  }

  function insertButton() {
    const container = document.querySelector('.top-bar_links__4FJwt');
    if (!container || document.getElementById(BUTTON_ID)) return;

    console.log('[Grizzway Tools] Inserting config button');
    const btn = createButton();
    container.insertBefore(btn, container.firstChild);
  }

  if (!document.getElementById('glow-keyframes')) {
    const style = document.createElement('style');
    style.id = 'glow-keyframes';
    style.textContent = `
      @keyframes pulseGlow {
        0% { box-shadow: 0 0 5px 1px #00FF00; }
        50% { box-shadow: 0 0 10px 3px #00FF00; }
        100% { box-shadow: 0 0 5px 1px #00FF00; }
      }
    `;
    document.head.appendChild(style);
  }

  function waitForTopBar() {
    const existing = document.querySelector('.top-bar_links__4FJwt');
    if (existing) {
      insertButton();
    } else {
      const observer = new MutationObserver(() => {
        const container = document.querySelector('.top-bar_links__4FJwt');
        if (container) {
          insertButton();
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  waitForTopBar();
  setInterval(insertButton, 3000); 
}

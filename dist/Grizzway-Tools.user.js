// ==UserScript==
// @name         Grizzway Tools Development
// @namespace    http://tampermonkey.net/
// @version      5.0
// @description  Epic fixes and visual mods for fishtank.live
// @author       Grizzway
// @match        *://*.fishtank.live/*
// @exclude-match *://api.fishtank.live/*
// @grant        GM_addStyle
// @license      MIT
// ==/UserScript==

(() => {
  // src/storage.js
  function getCurrentTheme() {
    return localStorage.getItem("grizzway_theme") || "default";
  }
  var STORAGE_KEY = "grizzway-tools-settings";
  function saveSettings(newSettings = {}) {
    const existing = loadSettings();
    const merged = { ...existing, ...newSettings };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  }
  function loadSettings() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  // src/styles/themes/default/default.js
  var default_default = {
    name: "Default",
    author: "Wes",
    customPingSound: "https://cdn.fishtank.live/sounds/mention.mp3",
    style: ``
  };

  // src/styles/themes/chao/chao.js
  var chao_default = {
    name: "Chao Garden",
    author: "Grizzway",
    customPingSound: "https://files.catbox.moe/1qbutz.mp3",
    style: `
        /* This is for the site background */
        body, .layout_layout__5rz87, .select_options__t1ibN {
            background-image: url('https://images.gamebanana.com/img/ss/mods/5f681fd055666.jpg') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
        }

        /* This is for the chat background */
        .chat_chat__2rdNg {
            background-image: url('https://i.imgur.com/UVjYx1I.gif') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
        }
      
        /* This is a lot of stuff that you can split up or remove. */
        .maejok-input-invalid, .maejok-context-message, .maejok-tts-warning-text,
        .chat_header__8kNPS, .top-bar_top-bar__X4p2n, .panel_body__O5yBA, .inventory_slots__D4IrC {
            background-color: limegreen !important;
            border-color: limegreen !important;
        }

        /* Header Colors */
        .panel_header__T2yFW {
            background-color: darkgreen !important;
        }
        
        /* Top Bar stuff again feel free to remove or change */
        .top-bar_top-bar__X4p2n {
            box-shadow: none !important;
        }

        /* Do not remember */
        .maejok-context-message svg path {
            fill: black !important;
        }

        /* Live stream preloaded with opacity for fun */
        .hls-stream-player_hls-stream-player__BJiGl,
        .live-stream-player_container__A4sNR,
        .layout_center__Vsd3b {
            opacity: 1;
        }
        
        /* Poll Footer */
        .poll_footer__rALdX {
            background-color: limegreen;
        }

        /* Poll Vote Button Stuff */
        .poll_vote__b_NE0 button:disabled:hover {
            background-color: red !important;
            color: white !important;
            border-color: black !important;
        }
        .poll_vote__b_NE0 button:hover {
            background-color: red !important;
            color: white !important;
            border-color: black !important;
        }

        /* TTS and SFX Messages */
        .chat-message-tts_chat-message-tts__2Jlxi,
        .chat-message-sfx_chat-message-sfx__OGv6q {
            border-color: #00ff00 !important;
            background-color: darkgreen !important;
            filter: drop-shadow(0 0 2px #00ff00) drop-shadow(0 0 2px #00ff00);
        }
        .chat-message-tts_message__sWVCc,
        .chat-message-sfx_message__d2Rei {
            -webkit-text-stroke: 2px rgba(0, 255, 0, 0.6);
            filter: drop-shadow(0 0 2px #00ff00) drop-shadow(0 0 2px #00ff00);
        }
        .chat-message-tts_timestamp__pIVv0,
        .chat-message-sfx_timestamp__ilYfg {
            color: black !important;
            font-weight: bold !important;
            text-shadow: none !important;
        }

        /* Chat input area */
        .chat_input__bsNw2 {
            background-color: #000000 !important;
        }

        /* Chat Input area text color */
        .chat-input_chat-input__GAgOF, .chat-input_input-wrapper__rjiu1, .chat-input_input__jljCU {
            color: #00FF00 !important;
        }

        /* Stock ticker */
        .stocks-bar_stocks-bar__7kNv8 {
            background-color: rgba(0, 0, 0, 1) !important;
        }

        /* Bottom announcement banner */
        .announcement-bar_announcement-bar__gcGuh {
            background-color: rgba(0, 0, 0, 0) !important;
            color: red !important;
            text-shadow: 1px 1px 0 #000 !important;
            border: none !important;
        }

        /* Live stream header */
        .live-stream-player_header__58imR, .live-stream-player_live-stream-player__4CHjG {
            background-color: #191d2100 !important;
            border: none !important;
        }

        /* Bottom status bar */
        .status-bar_status-bar__vR_Tm {
            background-color: #000000 !important;
        }

        /* Big screen text opacity */
        .chat_cinema__iXQz9 {
            opacity: 0.4 !important;
        }
    `
  };

  // src/config.js
  var themeMap = {
    default: default_default,
    chao: chao_default
  };
  function getThemeConfig() {
    const selected = getCurrentTheme();
    return themeMap[selected] || default_default;
  }
  function setThemeName(themeName) {
    localStorage.setItem("grizzway_theme", themeName);
  }

  // src/features/blockSounds.js
  function blockSoundsFeature() {
    const themeConfig = getThemeConfig();
    const customPingSound = themeConfig?.customPingSound || "https://cdn.fishtank.live/sounds/mention.mp3";
    console.log("[Grizzway Tools] Using custom ping sound:", customPingSound);
    const blockedSounds = [
      "https://cdn.fishtank.live/sounds/suicidebomb.mp3",
      "https://cdn.fishtank.live/sounds/suicidebomb-1.mp3",
      "https://cdn.fishtank.live/sounds/suicidebomb-2.mp3",
      "https://cdn.fishtank.live/sounds/suicidebomb-3.mp3",
      "https://cdn.fishtank.live/sounds/suicidebomb-4.mp3",
      "https://cdn.fishtank.live/sounds/nuke-1.mp3",
      "https://cdn.fishtank.live/sounds/nuke-2.mp3",
      "https://cdn.fishtank.live/sounds/nuke-3.mp3",
      "https://cdn.fishtank.live/sounds/nuke-4.mp3",
      "https://cdn.fishtank.live/sounds/nuke-5.mp3",
      "https://cdn.fishtank.live/sounds/horn.mp3"
    ];
    const OriginalAudio = window.Audio;
    window.Audio = function(src) {
      console.log("[Grizzway Tools] Audio requested:", src);
      if (src && src.includes("mention")) {
        console.log("[Grizzway Tools] Replacing mention sound with:", customPingSound);
        return new OriginalAudio(customPingSound);
      }
      if (blockedSounds.some((sound) => src?.includes(sound))) {
        console.log("[Grizzway Tools] Blocking sound:", src);
        return new OriginalAudio();
      }
      return new OriginalAudio(src);
    };
    window.Audio.prototype = OriginalAudio.prototype;
    const originalPlay = HTMLAudioElement.prototype.play;
    HTMLAudioElement.prototype.play = function() {
      if (this.src && this.src.includes("mention.mp3")) {
        console.log("[Grizzway Tools] Changing audio src to:", customPingSound);
        this.src = customPingSound;
      }
      if (blockedSounds.some((sound) => this.src && this.src.includes(sound))) {
        console.log("[Grizzway Tools] Blocking audio play:", this.src);
        return Promise.reject("Blocked sound");
      }
      return originalPlay.apply(this, arguments);
    };
    const originalFetch = window.fetch;
    window.fetch = async function(resource, init2) {
      if (typeof resource === "string") {
        if (resource.includes("mention.mp3")) {
          console.log("[Grizzway Tools] Fetching custom ping sound instead");
          return fetch(customPingSound);
        }
        if (blockedSounds.some((sound) => resource.includes(sound)))
          return new Response(null, { status: 403 });
      }
      return originalFetch(resource, init2);
    };
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
      if (url && url.includes("mention.mp3")) {
        console.log("[Grizzway Tools] XHR redirect to custom ping sound");
        this.abort();
        const req = new XMLHttpRequest();
        req.open(method, customPingSound, true);
        req.send();
        return;
      }
      if (blockedSounds.some((sound) => url && url.includes(sound))) {
        this.abort();
      } else {
        originalOpen.apply(this, arguments);
      }
    };
  }

  // src/features/chatLinkButtons.js
  function chatLinkButtonsFeature() {
    function addLinkButton(messageElement, url) {
      const existingButton = messageElement.querySelector(`.custom-link-button[href="${url}"]`);
      if (existingButton) return;
      const button = document.createElement("a");
      button.href = url.startsWith("http") ? url : "https://" + url;
      button.target = "_blank";
      button.rel = "noopener noreferrer";
      button.className = "custom-link-button";
      button.style.marginLeft = "8px";
      button.style.width = "20px";
      button.style.height = "20px";
      button.style.display = "inline-flex";
      button.style.alignItems = "center";
      button.style.justifyContent = "center";
      button.style.backgroundColor = "#4EA1FF";
      button.style.color = "white";
      button.style.borderRadius = "4px";
      button.style.fontSize = "14px";
      button.style.textDecoration = "none";
      button.style.verticalAlign = "middle";
      button.textContent = "\u{1F517}";
      const messageContent = messageElement.querySelector(".chat-message-default_message__milmT");
      if (messageContent) {
        messageContent.appendChild(button);
      }
    }
    function detectLinksAndButton(messageElement) {
      const contentElement = messageElement.querySelector(".chat-message-default_message__milmT");
      if (!contentElement) return;
      const textContent = contentElement.innerText || contentElement.textContent || "";
      const urlRegex = /(\b(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?\b)/g;
      const matches = textContent.match(urlRegex);
      if (matches) {
        matches.forEach((url) => addLinkButton(messageElement, url));
      }
    }
    function observeMessages(chatContainer) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1 && node.classList.contains("chat-message-default_chat-message-default__JtJQL")) {
              detectLinksAndButton(node);
            }
          });
        });
      });
      observer.observe(chatContainer, {
        childList: true,
        subtree: true
      });
    }
    function waitForChatContainer() {
      const chatContainer = document.querySelector(".chat-messages_chat-messages__UeL0a");
      if (chatContainer) {
        observeMessages(chatContainer);
      } else {
        setTimeout(waitForChatContainer, 1e3);
      }
    }
    waitForChatContainer();
  }

  // src/features/loggedInUserStyling.js
  function loggedInUserStylingFeature() {
    console.log("[Grizzway Tools] Configurable logged in user styling initialized");
    let currentUserName = null;
    function getLoggedInUsername() {
      const userElement = document.querySelector(".top-bar-user_display-name__bzlpw") || document.querySelector(".top-bar_username__nJaN2") || document.querySelector('[class*="display-name"]');
      return userElement ? userElement.textContent.trim() : null;
    }
    function getUserStylingSettings() {
      const settings = loadSettings();
      return {
        enabled: settings.loggedInUserStyling !== false,
        // Default to true
        highlightEnabled: settings.userHighlightEnabled !== false,
        // Default to true
        glowEnabled: settings.userGlowEnabled !== false,
        // Default to true
        highlightColor: settings.userHighlightColor || "#7d0505",
        // Default red-ish
        glowColor: settings.userGlowColor || "#00ff00"
        // Default lime
      };
    }
    function hexToRgba(hex, opacity = 0.4) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    function styleLoggedInUserMessages() {
      const settings = getUserStylingSettings();
      if (!settings.enabled) return;
      const username = getLoggedInUsername();
      if (!username) return;
      const messages = document.querySelectorAll(".chat-message-default_user__uVNvH");
      messages.forEach((message) => {
        if (message.textContent.includes(username)) {
          const userElement = message;
          if (userElement) {
            userElement.style.textShadow = "none";
            userElement.style.fontWeight = "1000";
          }
          const messageTextElement = message.closest(".chat-message-default_chat-message-default__JtJQL").querySelector(".chat-message-default_body__iFlH4");
          if (messageTextElement) {
            messageTextElement.style.textShadow = "none";
            messageTextElement.style.fontWeight = "1000";
          }
        }
      });
    }
    function highlightUserMessages() {
      const settings = getUserStylingSettings();
      if (!settings.enabled) return;
      const username = getLoggedInUsername();
      if (!username) return;
      const messages = document.querySelectorAll(".chat-message-default_user__uVNvH");
      messages.forEach((message) => {
        if (message.textContent.includes(username)) {
          const chatMessage = message.closest(".chat-message-default_chat-message-default__JtJQL");
          if (settings.highlightEnabled && chatMessage && !chatMessage.classList.contains("highlighted-message")) {
            chatMessage.classList.add("highlighted-message");
            chatMessage.style.backgroundColor = hexToRgba(settings.highlightColor, 0.4);
          }
          if (settings.glowEnabled && !message.classList.contains("glowing-username")) {
            message.classList.add("glowing-username");
            const glowRgba = hexToRgba(settings.glowColor, 0.6);
            message.style.webkitTextStroke = `1px ${glowRgba}`;
            message.style.filter = `drop-shadow(0 0 2px ${settings.glowColor}) drop-shadow(0 0 4px ${settings.glowColor})`;
          }
        }
      });
    }
    function removeUserStyling() {
      const settings = getUserStylingSettings();
      const username = getLoggedInUsername();
      if (!username) return;
      const messages = document.querySelectorAll(".chat-message-default_user__uVNvH");
      messages.forEach((message) => {
        if (message.textContent.includes(username)) {
          const chatMessage = message.closest(".chat-message-default_chat-message-default__JtJQL");
          if (!settings.highlightEnabled && chatMessage && chatMessage.classList.contains("highlighted-message")) {
            chatMessage.classList.remove("highlighted-message");
            chatMessage.style.backgroundColor = "";
          }
          if (!settings.glowEnabled && message.classList.contains("glowing-username")) {
            message.classList.remove("glowing-username");
            message.style.webkitTextStroke = "";
            message.style.filter = "";
          }
        }
      });
    }
    function updateUserStyling() {
      const settings = getUserStylingSettings();
      if (settings.enabled) {
        highlightUserMessages();
        styleLoggedInUserMessages();
        removeUserStyling();
      } else {
        removeUserStyling();
      }
    }
    setInterval(() => {
      updateUserStyling();
    }, 1e3);
    console.log("[Grizzway Tools] Configurable user styling functions started");
  }
  function updateLoggedInUserCSS() {
    const settings = loadSettings();
    const highlightColor = settings.userHighlightColor || "#7d0505";
    const glowColor = settings.userGlowColor || "#00ff00";
    const userCSS = `
        /* Configurable logged-in user styling */
        .highlighted-message {
            background-color: ${settings.userHighlightColor ? `rgba(${parseInt(highlightColor.slice(1, 3), 16)}, ${parseInt(highlightColor.slice(3, 5), 16)}, ${parseInt(highlightColor.slice(5, 7), 16)}, 0.4)` : "rgba(125, 5, 5, 0.4)"} !important;
        }
        
        .glowing-username {
            -webkit-text-stroke: 1px ${settings.userGlowColor ? `rgba(${parseInt(glowColor.slice(1, 3), 16)}, ${parseInt(glowColor.slice(3, 5), 16)}, ${parseInt(glowColor.slice(5, 7), 16)}, 0.6)` : "rgba(0, 255, 0, 0.2)"} !important;
            filter: drop-shadow(0 0 1px ${glowColor}) drop-shadow(0 0 2px ${glowColor}) !important;
        }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "grizzway-logged-in-user-styling";
    styleElement.textContent = userCSS;
    const existing = document.getElementById("grizzway-logged-in-user-styling");
    if (existing) existing.remove();
    document.head.appendChild(styleElement);
  }

  // src/features/grizzwayChatStyle.js
  function grizzwaySpecialStylingFeature() {
    console.log("[Grizzway Tools] Grizzway special styling initialized");
    function styleGrizzwayMessages() {
      const messages = document.querySelectorAll(".chat-message-default_user__uVNvH");
      messages.forEach((message) => {
        if (message.textContent.toLowerCase().includes("grizzway")) {
          const chatMessage = message.closest(".chat-message-default_chat-message-default__JtJQL");
          if (chatMessage && !chatMessage.querySelector(".grizzway-animated-border")) {
            chatMessage.classList.add("grizzway-highlighted-message");
            message.classList.add("grizzway-username-bold");
            const messageTextElement = chatMessage.querySelector(".chat-message-default_body__iFlH4");
            if (messageTextElement) {
              messageTextElement.classList.add("grizzway-message-text");
            }
            const messageContentElement = chatMessage.querySelector(".chat-message-default_message__milmT");
            if (messageContentElement) {
              messageContentElement.classList.add("grizzway-message-content-green");
            }
            const borderContainer = document.createElement("div");
            borderContainer.className = "grizzway-animated-border";
            chatMessage.style.position = "relative";
            chatMessage.appendChild(borderContainer);
          }
        }
      });
    }
    setInterval(styleGrizzwayMessages, 50);
    requestAnimationFrame(function loop() {
      styleGrizzwayMessages();
      requestAnimationFrame(loop);
    });
    const observer = new MutationObserver(() => {
      styleGrizzwayMessages();
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    window.addEventListener("scroll", styleGrizzwayMessages);
    document.addEventListener("visibilitychange", styleGrizzwayMessages);
    styleGrizzwayMessages();
    console.log("[Grizzway Tools] Grizzway special styling active");
  }
  function addGrizzwaySpecialCSS() {
    const grizzwayCSS = `
        .grizzway-highlighted-message {
            background-color: rgba(140, 0, 255, 0.35) !important;
            position: relative !important;
            border-radius: 0 !important;
            padding: 8px !important;
            margin: 4px 0 !important;
            z-index: 3 !important;
            animation: grizzway-rainbow-highlight 2s linear infinite;
        }

        @keyframes grizzway-rainbow-highlight {
            0% { background-color: rgba(255, 0, 0, 0.1) !important; }     /* Red */
            16.67% { background-color: rgba(255, 165, 0, 0.1) !important; } /* Orange */
            33.33% { background-color: rgba(255, 255, 0, 0.1) !important; } /* Yellow */
            50% { background-color: rgba(0, 255, 0, 0.1) !important; }     /* Green */
            66.67% { background-color: rgba(0, 0, 255, 0.1) !important; }  /* Blue */
            83.33% { background-color: rgba(75, 0, 130, 0.1) !important; } /* Indigo */
            100% { background-color: rgba(238, 130, 238, 0.1) !important; } /* Violet */
        }

        .grizzway-animated-border {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            z-index: 10;
        }

        .grizzway-animated-border::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                linear-gradient(90deg, #00ff00 0%, #00ff00 50%, #000000 50%, #000000 100%),
                linear-gradient(90deg, #00ff00 0%, #00ff00 50%, #000000 50%, #000000 100%),
                linear-gradient(0deg, #00ff00 0%, #00ff00 50%, #000000 50%, #000000 100%),
                linear-gradient(0deg, #00ff00 0%, #00ff00 50%, #000000 50%, #000000 100%);
            background-size: 12px 2px, 12px 2px, 2px 12px, 2px 12px;
            background-position: 0 0, 0 100%, 0 0, 100% 0;
            background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
            animation: grizzway-marching-ants 0.6s linear infinite;
        }

        @keyframes grizzway-marching-ants {
            0% {
                background-position: 0 0, 0 100%, 0 0, 100% 0;
            }
            100% {
                background-position: 12px 0, -12px 100%, 0 12px, 100% -12px;
            }
        }

        .grizzway-username-bold {
            font-weight: 900 !important;
            font-size: 1.1em !important;
            text-shadow: 1px 1px 0px rgba(0,0,0,0.5) !important;
            letter-spacing: 0.5px !important;
        }

        .grizzway-message-text {
            font-weight: 700 !important;
        }

        .grizzway-message-content-green {
            color: #00ff00 !important;
            text-shadow: 0 0 3px #00ff00 !important;
            font-weight: bold !important;
        }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "grizzway-special-styling";
    styleElement.textContent = grizzwayCSS;
    const existing = document.getElementById("grizzway-special-styling");
    if (existing) existing.remove();
    document.head.appendChild(styleElement);
    console.log("[Grizzway Tools] Grizzway special styling CSS applied");
  }

  // src/features/modalFixes.js
  function modalFixesFeature() {
    console.log("[Grizzway Tools] Modal fixes initialized");
    const modalCSS = `
        /* IMPORTANT: THIS IS EVERY MODAL. DONT TOUCH THE SIZE OR ALIGNMENT */
        .modal_modal__MS70U {
             height: 900px !important;
             width: 1500px !important;
             align-self: anchor-center !important;
             justify-self: anchor-center !important;
             overflow: scroll !important;
             background-color: #191d21bb !important;
        }
        
        /* Modal Dim Background, 0% Opacity means no dimming */
        .modal_backdrop__94Bu6 {
             opacity: 0;
        }
        
        /* FULL SCREEN SETTINGS MENU & ITEM DEX DO NOT TOUCH */
        .settings-modal_body__qdvDm, .profile-modal_profile-modal__4mjE7 {
             display: flex;
             flex-direction: column;
             gap: 8px;
             align-items: center;
             margin: auto;
             width: 100%;
             padding: 16px;
             background-color: rgba(0, 0, 0, .25);
             border: 1px solid #505050;
             border-radius: 4px;
        }
        
        /* FULL SCREEN SETTINGS MENU & ITEM DEX DO NOT TOUCH */
        .user-profile-tabs_tab__2bsiR {
             display: flex;
             flex-wrap: wrap;
             background-color: rgba(0, 0, 0, .5);
             padding: 8px;
             border: 1px solid #505050;
             border-bottom-left-radius: 4px;
             border-bottom-right-radius: 4px;
             border-top: 0;
             gap: 4px;
             width: 1400px;
             height: 900px;
             justify-self: center;
        }
        
        /* FULL SCREEN SETTINGS MENU & ITEM DEX DO NOT TOUCH */
        .user-profile-items_user-profile-items__rl_CV {
             display: flex;
             width: 1400px;
             height: 900px;
        }
        
        /* FULL SCREEN SETTINGS MENU & ITEM DEX DO NOT TOUCH */
        .user-profile-items_items__zuulV {
             display: flex;
             flex-wrap: wrap;
             gap: 4px;
             padding: 8px;
             width: 100%;
             height: 100%;
             justify-content: space-evenly;
             max-height: 900px !important;
        }
        
        .user-profile-tts-sfx_messages__w4_Ew {
             max-height: 93vh !important;
        }
        
        .user-profile_profile__g_tBc {
             width: 1400px !important;
             max-width: 1400px !important;
        }
        
         .user-profile_body__hk8ZS {
             width: 1400px;
             align-content: center;
        }
        
        .profile-modal_profile-modal__4mjE7 {
             align-items: unset;
        }
        
        .user-profile_bio__nzdwR {
             padding-left: 80px;
             width: 1000px;
        }
        
        .input_input__Zwrui textarea {
             height: 100px;
        }
        
        .user-profile_header__zP1kv {
             width: 1400px;
        }
        
        .medal_medal__Hqowf.medal_md__RvQMV button {
             --medal-size: 64px;
        }
        
        .user-update-profile_actions__vbfIX button {
            width: 800px;
        }
        
        .user-update-profile_user-update-profile__sa20I {
            width: 1400px;
        }
        
        .user-update-profile_details__7bBRy {
            width: 350px;
        }
        
        .user-update-profile_bio__DaV4N {
            width: 800px;
            justify-self: flex-end;
            height: 200px;
        }
        
        .modal_body__j3Bav {
            align-self: anchor-center;
            height: 100%;
            overflow: visible !important;
        }
        
        .modal_header__O0ebJ {
            padding-top: 50px;
            font-size: xxx-large;
        }
        
        .item-generator-modal_items__Xs78_, .item-generator-modal_generator__vmam0 {
            background-color: rgba(14, 16, 18, 1) !important;
        }
        
        .logs_logs__YL0uF {
            width: 1400px;
            align-self: center;
        }
        
        .logs_body__lqe_U {
            height: 700px !important;
        }
        
        .logs_message__p9V2r {
            font-size: medium;
        }
        
         .sfx-modal_sfx-modal__i_ppy, .tts-modal_tts-modal__rxY0z {
             width: 1200px;
             padding-top: 150px;
         }
         
         .select_value__yPLpn {
             background-color: rgba(43, 45, 46, 1) !important;
         }
         
         .input_input-wrapper__xvMLO input{
             background-color: rgba(43, 45, 46, 1) !important;
         }
         
         .user-update-profile_user-update-profile__sa20I .user-update-profile_bio__DaV4N {
             grid-column: 1 / 3;
             grid-row: 1 / 4;
         }
         
         .input_input-wrapper__xvMLO textarea {
             height: 165px;
         }
         
         .user-update-profile_footer__kONMY {
             grid-row: 2 / 6 !important;
             height: 60px;
         }
         
         .user-profile-tabs_user-profile-tabs__7SFh7 {
             padding-top: 75px;
         }
         
         .stocks-modal_stocks-modal__xgXY0, .stock-details_stock-details__AZOBD {
             width: 1200px !important;
             max-width: 1200px !important;
         }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "grizzway-modal-fixes";
    styleElement.textContent = modalCSS;
    const existing = document.getElementById("grizzway-modal-fixes");
    if (existing) existing.remove();
    document.head.appendChild(styleElement);
    console.log("[Grizzway Tools] Modal CSS applied");
  }

  // src/features/profileFix.js
  function profileFixFeature() {
    console.log("[Grizzway Tools] Profile fix feature initialized");
    function profileFix() {
      const profileModal = document.querySelector(".profile-modal_profile-modal__4mjE7");
      if (!profileModal || profileModal.offsetParent === null) return;
      setTimeout(() => {
        const editForm = profileModal.querySelector(".user-update-profile_user-update-profile__sa20I");
        const viewBio = profileModal.querySelector(".user-profile_bio__nzdwR");
        const clanActions = profileModal.querySelector(".user-profile_clan-actions__aS32x");
        const header = profileModal.querySelector(".user-profile_header__zP1kv");
        if (editForm) {
          console.log("[Grizzway Tools] Profile EDIT mode detected");
          fixEditModeOriginal(editForm);
        } else if (viewBio && clanActions && header) {
          console.log("[Grizzway Tools] Profile VIEW mode detected");
          fixViewMode(viewBio, clanActions, header);
        }
      }, 100);
    }
    function fixEditModeOriginal(editForm) {
      console.log("[Grizzway Tools] Using original CSS grid layout for edit mode");
    }
    function fixViewMode(bio, clanActions, header) {
      if (header.contains(bio) && header.nextElementSibling === clanActions) {
        console.log("[Grizzway Tools] Profile VIEW already fixed");
        return;
      }
      const userInfo = header.querySelector(".user-profile_info__eFefT");
      if (userInfo && !header.contains(bio)) {
        bio.remove();
        userInfo.insertAdjacentElement("afterend", bio);
        console.log("[Grizzway Tools] Bio repositioned in header");
      }
      if (header.nextElementSibling !== clanActions) {
        clanActions.remove();
        header.insertAdjacentElement("afterend", clanActions);
        console.log("[Grizzway Tools] Clan actions repositioned");
      }
    }
    profileFix();
  }
  function observeProfileFix() {
    console.log("[Grizzway Tools] Profile fix observer initialized");
    const profileObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const modal2 = node.querySelector && node.querySelector(".profile-modal_profile-modal__4mjE7");
            if (modal2 || node.classList && node.classList.contains("profile-modal_profile-modal__4mjE7")) {
              console.log("[Grizzway Tools] Profile modal detected");
              setTimeout(() => {
                profileFixFeature();
              }, 200);
            }
          }
        });
      });
      const modal = document.querySelector(".profile-modal_profile-modal__4mjE7");
      if (modal && modal.offsetParent !== null) {
        profileFixFeature();
      }
    });
    profileObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  function addProfileEditingCSS() {
    const profileEditCSS = `
        /* EXACT CSS from original userscript - DO NOT MODIFY */
        .user-update-profile_user-update-profile__sa20I {
            width: 1400px !important;
        }
        
        .user-update-profile_details__7bBRy {
            width: 350px !important;
        }
        
        .user-update-profile_bio__DaV4N {
            width: 800px !important;
            justify-self: flex-end !important;
            height: 200px !important;
        }
        
        .user-update-profile_user-update-profile__sa20I .user-update-profile_bio__DaV4N {
            grid-column: 1 / 3 !important;
            grid-row: 1 / 4 !important;
        }
        
        .input_input-wrapper__xvMLO textarea {
            height: 165px !important;
        }
        
        .user-update-profile_footer__kONMY {
            grid-row: 2 / 6 !important;
            height: 60px !important;
        }
        
        .user-update-profile_actions__vbfIX button {
            width: 800px !important;
        }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "grizzway-profile-edit-fixes";
    styleElement.textContent = profileEditCSS;
    const existing = document.getElementById("grizzway-profile-edit-fixes");
    if (existing) existing.remove();
    document.head.appendChild(styleElement);
    console.log("[Grizzway Tools] Original profile editing CSS applied");
  }

  // src/features/streamTitleStyle.js
  var streamTitleInterval = null;
  var currentColor = "#00ff00";
  var currentGlowIntensity = 2;
  var isEnabled = false;
  function streamTitleStyleFeature(color = null, glowIntensity = null) {
    console.log("[Grizzway Tools] Stream title style initialized");
    const settings = loadSettings();
    isEnabled = settings.streamTitleEnabled === true;
    currentColor = color || settings.streamTitleColor || "#00ff00";
    currentGlowIntensity = glowIntensity || settings.streamTitleGlowIntensity || 2;
    if (streamTitleInterval) {
      clearInterval(streamTitleInterval);
      streamTitleInterval = null;
    }
    if (isEnabled) {
      applyStreamTitleStyle();
      streamTitleInterval = setInterval(() => {
        applyStreamTitleStyle();
      }, 1e3);
    } else {
      removeStreamTitleStyle();
    }
  }
  function updateStreamTitleStyle(color, glowIntensity = null) {
    if (color === null) {
      isEnabled = false;
      currentColor = "#00ff00";
      currentGlowIntensity = 2;
      removeStreamTitleStyle();
      if (streamTitleInterval) {
        clearInterval(streamTitleInterval);
        streamTitleInterval = null;
      }
    } else {
      isEnabled = true;
      currentColor = color;
      if (glowIntensity !== null) {
        currentGlowIntensity = glowIntensity;
      }
      if (!streamTitleInterval) {
        applyStreamTitleStyle();
        streamTitleInterval = setInterval(() => {
          applyStreamTitleStyle();
        }, 1e3);
      } else {
        applyStreamTitleStyle();
      }
    }
  }
  function applyStreamTitleStyle() {
    if (!isEnabled) return;
    const baseBlur = currentGlowIntensity * 0.5;
    const strongBlur = currentGlowIntensity * 1;
    let streamTitleFilter = "";
    if (currentGlowIntensity > 0) {
      if (currentGlowIntensity <= 3) {
        streamTitleFilter = `drop-shadow(0 0 ${baseBlur}px ${currentColor})`;
      } else if (currentGlowIntensity <= 6) {
        streamTitleFilter = `drop-shadow(0 0 ${baseBlur}px ${currentColor}) drop-shadow(0 0 ${strongBlur}px ${currentColor})`;
      } else {
        streamTitleFilter = `drop-shadow(0 0 ${baseBlur}px ${currentColor}) drop-shadow(0 0 ${strongBlur}px ${currentColor}) drop-shadow(0 0 ${strongBlur * 1.5}px ${currentColor})`;
      }
    }
    const streamTitles = document.querySelectorAll(".live-stream_name__ngU04");
    streamTitles.forEach((title) => {
      title.style.color = currentColor;
      title.style.filter = streamTitleFilter;
    });
    if (streamTitles.length > 0) {
      console.log("[Grizzway Tools] Applied styling to", streamTitles.length, "stream titles with color", currentColor, "and glow intensity", currentGlowIntensity);
    }
  }
  function removeStreamTitleStyle() {
    const streamTitles = document.querySelectorAll(".live-stream_name__ngU04");
    streamTitles.forEach((title) => {
      title.style.color = "";
      title.style.filter = "";
    });
    if (streamTitles.length > 0) {
      console.log("[Grizzway Tools] Removed styling from", streamTitles.length, "stream titles");
    }
  }

  // src/styles/baseCss.js
  function injectBaseCSS() {
    const baseStyleId = "baseCssGrizzway";
    if (document.getElementById(baseStyleId)) return;
    const baseCSS = `
      /* BASE CSS \u2013 ALWAYS ON (No modal styles here) */
      
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
    if (typeof GM_addStyle !== "undefined") {
      GM_addStyle(baseCSS);
    } else {
      const style = document.createElement("style");
      style.id = baseStyleId;
      style.textContent = baseCSS;
      document.head.appendChild(style);
    }
  }

  // src/styles/themes/chao/scripts.js
  var scripts_default = [
    // 🔥 Image glow only — no alert
    () => {
      let imgs = [];
      let styleEl = null;
      let observer = null;
      const selectors = [
        ".top-bar_logo__XL0_C img.maejok-logo_hover",
        ".top-bar_logo__XL0_C img.maejok-logo_hide",
        ".top-bar_logo__XL0_C img.top-bar_desktop__pjX2g"
      ];
      const applyGlow = () => {
        imgs = selectors.map((sel) => Array.from(document.querySelectorAll(sel))).flat().filter(Boolean);
        if (!imgs.length) return false;
        imgs.forEach((img) => img.classList.add("grizz-glow-img"));
        styleEl = document.createElement("style");
        styleEl.id = "grizz-glow-style";
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
          subtree: true
        });
      }
      return () => {
        imgs.forEach((img) => img.classList.remove("grizz-glow-img"));
        if (styleEl && styleEl.parentNode) styleEl.remove();
        if (observer) observer.disconnect();
      };
    }
  ];

  // src/styles/themes/hacker/hacker.js
  var hacker_default = {
    name: "Hacker",
    author: "Grizzway",
    customPingSound: "https://files.catbox.moe/qeq32a.mp3",
    style: `
        /* Site background with hacker matrix effect */
        body, .layout_layout__5rz87, .select_options__t1ibN {
            background-image: url('https://i.imgur.com/atvhW9r.gif') !important;
            background-size: unset !important;
            background-position: center !important;
            background-repeat: repeat !important;
            color: #00ff00 !important;
            /* Removed text-shadow from body as requested */
        }

        /* Chat background - darker overlay for readability */
        .chat_chat__2rdNg {
            background-color: rgba(0, 0, 0, 0.85) !important;
            border: 1px solid #00ff00 !important;
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.3) !important;
        }
      
        /* Main UI elements with terminal green theme */
        .maejok-input-invalid, .maejok-context-message, .maejok-tts-warning-text,
        .chat_header__8kNPS, .top-bar_top-bar__X4p2n, .panel_body__O5yBA, .inventory_slots__D4IrC {
            background-color: rgba(0, 0, 0, 0.9) !important;
            border-color: #00ff00 !important;
            color: #00ff00 !important;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.2) !important;
        }

        /* Header with hacker aesthetic */
        .panel_header__T2yFW {
            background-color: rgba(0, 20, 0, 0.95) !important;
            border-bottom: 2px solid #00ff00 !important;
            color: #00ff00 !important;
            text-shadow: 0 0 5px #00ff00 !important;
        }
        
        /* Top bar with terminal styling */
        .top-bar_top-bar__X4p2n {
            box-shadow: 0 2px 10px rgba(0, 255, 0, 0.3) !important;
            border-bottom: 1px solid #00ff00 !important;
        }

        /* Context message icons */
        .maejok-context-message svg path {
            fill: #00ff00 !important;
        }

        /* Stream containers with transparency */
        .hls-stream-player_hls-stream-player__BJiGl,
        .live-stream-player_container__A4sNR,
        .layout_center__Vsd3b {
            opacity: 1;
            border: 1px solid rgba(0, 255, 0, 0.3) !important;
        }
        
        /* Poll elements with hacker styling */
        .poll_footer__rALdX {
            background-color: rgba(0, 40, 0, 0.9) !important;
            border-top: 1px solid #00ff00 !important;
        }

        /* Poll buttons with hover effects */
        .poll_vote__b_NE0 button:disabled:hover,
        .poll_vote__b_NE0 button:hover {
            background-color: rgba(255, 0, 0, 0.8) !important;
            color: #ffffff !important;
            border-color: #ff0000 !important;
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.5) !important;
            text-shadow: 0 0 5px #ff0000 !important;
        }

        /* TTS and SFX with glowing green effect */
        .chat-message-tts_chat-message-tts__2Jlxi,
        .chat-message-sfx_chat-message-sfx__OGv6q {
            border-color: #00ff00 !important;
            background-color: rgba(0, 40, 0, 0.9) !important;
            filter: drop-shadow(0 0 5px #00ff00) drop-shadow(0 0 10px #00ff00);
            box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.2) !important;
        }
        
        .chat-message-tts_message__sWVCc,
        .chat-message-sfx_message__d2Rei {
            color: #00ff00 !important;
            text-shadow: 0 0 5px #00ff00 !important;
            font-family: 'Courier New', monospace !important;
        }
        
        .chat-message-tts_timestamp__pIVv0,
        .chat-message-sfx_timestamp__ilYfg {
            color: #00ff00 !important;
            font-weight: bold !important;
            text-shadow: 0 0 3px #00ff00 !important;
            font-family: 'Courier New', monospace !important;
        }

        /* Chat input with terminal styling */
        .chat_input__bsNw2 {
            background-color: rgba(0, 0, 0, 0.95) !important;
            border: 1px solid #00ff00 !important;
            box-shadow: 0 0 15px rgba(0, 255, 0, 0.3) !important;
        }

        /* Chat input text with hacker font */
        .chat-input_chat-input__GAgOF, .chat-input_input-wrapper__rjiu1, .chat-input_input__jljCU {
            color: #00ff00 !important;
            font-family: 'Courier New', monospace !important;
            text-shadow: 0 0 3px #00ff00 !important;
        }

        /* Stock ticker with terminal styling */
        .stocks-bar_stocks-bar__7kNv8 {
            background-color: rgba(0, 0, 0, 0.9) !important;
            border-top: 1px solid #00ff00 !important;
            color: #00ff00 !important;
            font-family: 'Courier New', monospace !important;
        }

        /* Announcement banner with warning styling */
        .announcement-bar_announcement-bar__gcGuh {
            background-color: rgba(20, 0, 0, 0.9) !important;
            color: #ff0000 !important;
            text-shadow: 0 0 5px #ff0000 !important;
            border: 1px solid #ff0000 !important;
            font-family: 'Courier New', monospace !important;
            font-weight: bold !important;
        }

        /* Live stream header */
        .live-stream-player_header__58imR, .live-stream-player_live-stream-player__4CHjG {
            background-color: rgba(0, 0, 0, 0.8) !important;
            border: 1px solid rgba(0, 255, 0, 0.5) !important;
        }

        /* Status bar at bottom */
        .status-bar_status-bar__vR_Tm {
            background-color: rgba(0, 0, 0, 0.95) !important;
            border-top: 1px solid #00ff00 !important;
            color: #00ff00 !important;
            font-family: 'Courier New', monospace !important;
        }

        /* Cinema mode with reduced opacity */
        .chat_cinema__iXQz9 {
            opacity: 1 !important;
        }

        /* Additional hacker styling for better immersion */
        * {
            font-family: 'Courier New', monospace !important;
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.8);
        }
        
        ::-webkit-scrollbar-thumb {
            background: #00ff00;
            border-radius: 4px;
            box-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #00cc00;
        }

        /* Button hover effects */
        button:hover {
            background-color: rgba(0, 255, 0, 0.1) !important;
            border-color: #00ff00 !important;
            color: #00ff00 !important;
            text-shadow: 0 0 5px #00ff00 !important;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.3) !important;
        }

        /* Links with hacker styling */
        a {
            color: #00ff00 !important;
            text-decoration: underline !important;
            text-shadow: 0 0 3px #00ff00 !important;
        }
        
        a:hover {
            color: #00cc00 !important;
            text-shadow: 0 0 5px #00cc00 !important;
        }

        /* Top bar buttons with full opacity backgrounds */
        .top-bar_link__0xN4F,
        .top-bar_red__1Up8r,
        .top-bar_green__S_hiA,
        .dropdown-button_dropdown-button__X_K4O,
        .item-nav-buttons_prize-machine__jnHNS,
        .item-nav-buttons_market__28l6K {
            background-color: rgba(0, 0, 0, 1) !important;
        }

        /* Specific styling for red and green buttons to maintain their color identity */
        .top-bar_red__1Up8r {
            background-color: rgba(139, 0, 0, 1) !important;
        }

        .top-bar_green__S_hiA {
            background-color: rgba(0, 100, 0, 1) !important;
        }
    `
  };

  // src/styles/themes/hacker/scripts.js
  var scripts_default2 = [
    // Dynamic background color based on display name color with black text stroke
    () => {
      let observer = null;
      let styleEl = null;
      const getPolarizingColor = (color) => {
        const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (!rgbMatch) {
          const hexMatch = color.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
          if (hexMatch) {
            const r2 = parseInt(hexMatch[1], 16);
            const g2 = parseInt(hexMatch[2], 16);
            const b2 = parseInt(hexMatch[3], 16);
            return `rgb(${255 - r2}, ${255 - g2}, ${255 - b2})`;
          }
          return "rgba(0, 0, 0, 0.8)";
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
        const userContainer = document.querySelector(".top-bar-user_top-bar-user__VUdJm");
        const displayName = document.querySelector(".top-bar-user_display-name__bzlpw");
        if (!userContainer || !displayName) return false;
        const computedStyle = window.getComputedStyle(displayName);
        const textColor = computedStyle.color;
        const bgColor = getPolarizingColor(textColor);
        if (!styleEl) {
          styleEl = document.createElement("style");
          styleEl.id = "hacker-dynamic-user-style";
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
        console.log("[Hacker Theme] Applied dynamic styling - Text:", textColor, "Background:", bgColor);
        return true;
      };
      if (!applyDynamicStyling()) {
        observer = new MutationObserver(() => {
          if (applyDynamicStyling()) {
            console.log("[Hacker Theme] Dynamic user styling applied");
          }
        });
        observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ["style", "class"]
        });
      }
      return () => {
        if (styleEl && styleEl.parentNode) {
          styleEl.remove();
        }
        if (observer) {
          observer.disconnect();
        }
        console.log("[Hacker Theme] Dynamic styling cleaned up");
      };
    },
    // Matrix digital rain effect (optional enhancement)
    () => {
      let canvas = null;
      let ctx = null;
      let animationId = null;
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?";
      const drops = [];
      const initMatrixRain = () => {
        canvas = document.createElement("canvas");
        canvas.id = "hacker-matrix-canvas";
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
        ctx = canvas.getContext("2d");
        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          const columns = Math.floor(canvas.width / 20);
          for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * canvas.height;
          }
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        const draw = () => {
          ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "#00ff00";
          ctx.font = "16px Courier New";
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
        console.log("[Hacker Theme] Matrix rain effect cleaned up");
      };
    }
  ];

  // src/styles/themes/index.js
  chao_default.scripts = scripts_default;
  hacker_default.scripts = scripts_default2;
  var themes = {
    "chao": chao_default,
    "default": default_default,
    "hacker": hacker_default
  };
  var themes_default = themes;

  // src/utils/themeLoader.js
  var cleanupFunctions = [];
  function applyTheme(themeName) {
    console.log("[Grizzway Tools] Applying theme:", themeName);
    cleanupFunctions.forEach((fn) => {
      try {
        fn?.();
      } catch (e) {
        console.warn("[Grizzway Tools] Error during theme cleanup:", e);
      }
    });
    cleanupFunctions = [];
    const existingThemeStyle = document.getElementById("grizzway-theme-styles");
    if (existingThemeStyle) existingThemeStyle.remove();
    const theme = themes_default[themeName] || themes_default.default;
    injectBaseCSS();
    if (theme.style) {
      const styleElement = document.createElement("style");
      styleElement.id = "grizzway-theme-styles";
      styleElement.textContent = theme.style;
      document.head.appendChild(styleElement);
      console.log("[Grizzway Tools] Theme styles applied for:", themeName);
    }
    if (Array.isArray(theme.scripts)) {
      theme.scripts.forEach((fn, i) => {
        try {
          if (typeof fn === "function") {
            const cleanup = fn();
            if (typeof cleanup === "function") {
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

  // src/features/adHiding.js
  var adHidingInterval = null;
  function applyAdHiding(hideAds) {
    const adElements = document.querySelectorAll(".ads_ads__Z1cPk");
    if (hideAds) {
      adElements.forEach((ad) => {
        ad.style.opacity = "0";
        ad.style.pointerEvents = "none";
      });
      if (adElements.length > 0) {
        console.log("[Grizzway Tools] Hidden", adElements.length, "ad elements");
      }
    } else {
      adElements.forEach((ad) => {
        ad.style.opacity = "";
        ad.style.pointerEvents = "";
      });
      if (adElements.length > 0) {
        console.log("[Grizzway Tools] Restored", adElements.length, "ad elements");
      }
    }
  }
  function manageAdHidingInterval(hideAds) {
    if (adHidingInterval) {
      clearInterval(adHidingInterval);
      adHidingInterval = null;
    }
    if (hideAds) {
      adHidingInterval = setInterval(() => {
        applyAdHiding(true);
      }, 1e3);
      console.log("[Grizzway Tools] Ad hiding monitoring started");
    } else {
      console.log("[Grizzway Tools] Ad hiding monitoring stopped");
    }
  }
  function adHidingFeature() {
    console.log("[Grizzway Tools] Ad hiding feature initialized");
    const settings = loadSettings();
    const hideAds = settings.hideAds === true;
    console.log("[Grizzway Tools] Ad hiding setting from storage:", hideAds);
    console.log("[Grizzway Tools] Full settings object:", settings);
    applyAdHiding(hideAds);
    manageAdHidingInterval(hideAds);
    setTimeout(() => {
      applyAdHiding(hideAds);
    }, 500);
  }
  function updateAdHiding(hideAds) {
    console.log("[Grizzway Tools] Updating ad hiding to:", hideAds ? "enabled" : "disabled");
    applyAdHiding(hideAds);
    manageAdHidingInterval(hideAds);
  }

  // src/features/hideTheaterChat.js
  var theaterChatInterval = null;
  var lastCinemaState = false;
  var lastHideState = false;
  var hiddenElements = /* @__PURE__ */ new Set();
  function applyTheaterChatHiding(hideChat) {
    const cinemaElement = document.querySelector(".live-stream-player_cinema__yPkWC");
    const theaterChatElements = document.querySelectorAll(".chat_cinema__iXQz9");
    const isInCinemaMode = !!cinemaElement;
    if (isInCinemaMode !== lastCinemaState || hideChat !== lastHideState) {
      console.log("[Grizzway Tools] Cinema mode:", isInCinemaMode, "| Hide chat setting:", hideChat);
      console.log("[Grizzway Tools] Found", theaterChatElements.length, "theater chat elements");
      lastCinemaState = isInCinemaMode;
      lastHideState = hideChat;
    }
    if (hideChat && isInCinemaMode) {
      theaterChatElements.forEach((chat) => {
        chat.style.setProperty("opacity", "0", "important");
        chat.style.setProperty("z-index", "-999", "important");
        chat.style.setProperty("pointer-events", "none", "important");
        chat.setAttribute("data-grizzway-hidden", "true");
        hiddenElements.add(chat);
      });
      if (theaterChatElements.length > 0) {
        console.log("[Grizzway Tools] Hidden", theaterChatElements.length, "theater chat elements (cinema mode active)");
      }
    } else {
      hiddenElements.forEach((chat) => {
        if (chat.parentNode) {
          chat.style.removeProperty("opacity");
          chat.style.removeProperty("z-index");
          chat.style.removeProperty("pointer-events");
          chat.removeAttribute("data-grizzway-hidden");
        }
      });
      hiddenElements.clear();
      theaterChatElements.forEach((chat) => {
        chat.style.removeProperty("opacity");
        chat.style.removeProperty("z-index");
        chat.style.removeProperty("pointer-events");
        chat.removeAttribute("data-grizzway-hidden");
      });
      const hiddenChats = document.querySelectorAll('[data-grizzway-hidden="true"]');
      hiddenChats.forEach((chat) => {
        chat.style.removeProperty("opacity");
        chat.style.removeProperty("z-index");
        chat.style.removeProperty("pointer-events");
        chat.removeAttribute("data-grizzway-hidden");
      });
      if (theaterChatElements.length > 0) {
        if (!isInCinemaMode && hideChat) {
          console.log("[Grizzway Tools] Restored", theaterChatElements.length, "theater chat elements (exited cinema mode)");
        } else if (!hideChat) {
          console.log("[Grizzway Tools] Restored", theaterChatElements.length, "theater chat elements (hiding disabled)");
        }
      }
    }
  }
  function manageTheaterChatInterval(hideChat) {
    if (theaterChatInterval) {
      clearInterval(theaterChatInterval);
      theaterChatInterval = null;
    }
    theaterChatInterval = setInterval(() => {
      applyTheaterChatHiding(hideChat);
    }, 100);
    console.log("[Grizzway Tools] Theater chat monitoring started (cinema mode aware)");
  }
  function hideTheaterChatFeature() {
    console.log("[Grizzway Tools] Hide theater chat feature initialized");
    const settings = loadSettings();
    const hideChat = settings.hideTheaterChat === true;
    console.log("[Grizzway Tools] Hide theater chat setting from storage:", hideChat);
    applyTheaterChatHiding(hideChat);
    manageTheaterChatInterval(hideChat);
  }
  function updateTheaterChatHiding(hideChat) {
    console.log("[Grizzway Tools] Updating theater chat hiding to:", hideChat ? "enabled" : "disabled");
    if (!hideChat) {
      hiddenElements.clear();
    }
    applyTheaterChatHiding(hideChat);
    manageTheaterChatInterval(hideChat);
  }

  // src/features/configModal.js
  console.log("[Debug] Themes imported in configModal:", themes_default);
  console.log("[Debug] Available themes:", Object.keys(themes_default));
  console.log("[Debug] AVAILABLE_THEMES array:", AVAILABLE_THEMES);
  var AVAILABLE_THEMES = [
    { label: "Default", value: "default" },
    { label: "Chao Garden", value: "chao" },
    { label: "Hacker", value: "hacker" }
  ];
  function showConfigModal() {
    const existing = document.querySelector("#grizzway-config-modal");
    if (existing) existing.remove();
    const settings = loadSettings();
    const currentTheme = settings.theme || getCurrentTheme();
    const originalSettings = { ...settings };
    const overlay = document.createElement("div");
    overlay.id = "grizzway-config-modal-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 9998
    });
    const modal = document.createElement("div");
    modal.id = "grizzway-config-modal";
    Object.assign(modal.style, {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 9999,
      backgroundColor: "rgba(34, 34, 34, 0.85)",
      color: "#fff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 0 30px rgba(0,0,0,0.8)",
      border: "1px solid rgba(68, 68, 68, 0.8)",
      width: "78.125vw",
      maxWidth: "1500px",
      height: "auto",
      maxHeight: "85vh",
      fontFamily: "sans-serif",
      overflowY: "auto"
    });
    console.log("[Debug] Current theme from settings:", currentTheme);
    console.log("[Debug] Theme options will be generated from:", AVAILABLE_THEMES);
    const themeOptions = AVAILABLE_THEMES.map(
      ({ label, value }) => `<option value="${value}" ${value === currentTheme ? "selected" : ""}>${label}</option>`
    ).join("");
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
                <input type="checkbox" id="hide-ads-toggle" style="margin-right: 10px;" ${settings.hideAds === true ? "checked" : ""}>
                <span style="font-weight: bold;">Hide Ads</span>
              </label>
              <label style="display: flex; align-items: center; cursor: pointer; padding: 8px; background: rgba(255,255,255,0.05); border-radius: 4px;">
                <input type="checkbox" id="hide-theater-chat-toggle" style="margin-right: 10px;" ${settings.hideTheaterChat === true ? "checked" : ""}>
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
                <input type="checkbox" id="stream-title-toggle" style="margin-right: 10px;" ${settings.streamTitleEnabled === true ? "checked" : ""}>
                <span style="font-weight: bold;">Enable stream title styling</span>
              </label>
            </div>

            <div id="stream-title-options" style="${settings.streamTitleEnabled !== true ? "opacity: 0.5; pointer-events: none;" : ""}">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <label style="display: block; margin-bottom: 8px; font-weight: bold;">Color:</label>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="color" id="stream-title-color" value="${settings.streamTitleColor || "#00ff00"}" style="width: 40px; height: 30px; border: 1px solid #666; border-radius: 4px; background: transparent; cursor: pointer;">
                    <span id="stream-title-color-value" style="font-family: monospace; font-size: 12px;">${settings.streamTitleColor || "#00ff00"}</span>
                  </div>
                </div>
                <div>
                  <label style="display: block; margin-bottom: 8px; font-weight: bold;">Glow Intensity:</label>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="range" id="stream-title-glow-intensity" min="0" max="10" step="0.5" value="${settings.streamTitleGlowIntensity || "2"}" style="flex: 1;">
                    <span id="glow-intensity-value" style="font-family: monospace; min-width: 25px; text-align: center; font-size: 12px;">${settings.streamTitleGlowIntensity || "2"}</span>
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
                <input type="checkbox" id="logged-in-styling-toggle" style="margin-right: 10px;" ${settings.loggedInUserStyling !== false ? "checked" : ""}>
                <span style="font-weight: bold;">Enable logged-in user styling</span>
              </label>
            </div>

            <div id="user-styling-options" style="${settings.loggedInUserStyling === false ? "opacity: 0.5; pointer-events: none;" : ""}">
              <!-- Message Highlight -->
              <div style="margin-bottom: 20px;">
                <div style="margin-bottom: 10px;">
                  <label style="display: flex; align-items: center; cursor: pointer;">
                    <input type="checkbox" id="user-highlight-toggle" style="margin-right: 10px;" ${settings.userHighlightEnabled !== false ? "checked" : ""}>
                    <span style="font-weight: bold;">Message Highlight</span>
                  </label>
                </div>

                <div id="highlight-color-section" style="${settings.userHighlightEnabled === false ? "opacity: 0.5; pointer-events: none;" : ""}">
                  <label style="display: block; margin-bottom: 8px;">Highlight Color:</label>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="color" id="user-highlight-color" value="${settings.userHighlightColor || "#7d0505"}" style="width: 40px; height: 30px; border: 1px solid #666; border-radius: 4px; background: transparent; cursor: pointer;">
                    <span id="highlight-color-value" style="font-family: monospace; font-size: 12px;">${settings.userHighlightColor || "#7d0505"}</span>
                  </div>
                </div>
              </div>

              <!-- Username Glow -->
              <div>
                <div style="margin-bottom: 10px;">
                  <label style="display: flex; align-items: center; cursor: pointer;">
                    <input type="checkbox" id="user-glow-toggle" style="margin-right: 10px;" ${settings.userGlowEnabled !== false ? "checked" : ""}>
                    <span style="font-weight: bold;">Username Glow</span>
                  </label>
                </div>

                <div id="glow-color-section" style="${settings.userGlowEnabled === false ? "opacity: 0.5; pointer-events: none;" : ""}">
                  <label style="display: block; margin-bottom: 8px;">Glow Color:</label>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="color" id="user-glow-color" value="${settings.userGlowColor || "#00ff00"}" style="width: 40px; height: 30px; border: 1px solid #666; border-radius: 4px; background: transparent; cursor: pointer;">
                    <span id="glow-color-value" style="font-family: monospace; font-size: 12px;">${settings.userGlowColor || "#00ff00"}</span>
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
    const selectEl = document.querySelector("#theme-select");
    const themeMetaDisplay = document.querySelector("#theme-meta-display");
    function updateThemeMetaDisplay(themeKey) {
      const theme = themes_default[themeKey];
      if (theme) {
        themeMetaDisplay.textContent = `Selected theme: ${theme.name} by ${theme.author}`;
      } else {
        themeMetaDisplay.textContent = "";
      }
    }
    updateThemeMetaDisplay(selectEl.value);
    selectEl.addEventListener("change", () => {
      updateThemeMetaDisplay(selectEl.value);
      applyTheme(selectEl.value);
    });
    function revertToOriginalSettings() {
      console.log("[Grizzway Tools] Reverting to original settings");
      if (selectEl.value !== originalSettings.theme) {
        applyTheme(originalSettings.theme || "default");
      }
      updateAdHiding(originalSettings.hideAds === true);
      updateTheaterChatHiding(originalSettings.hideTheaterChat === true);
      if (originalSettings.streamTitleEnabled === true) {
        updateStreamTitleStyle(
          originalSettings.streamTitleColor || "#00ff00",
          originalSettings.streamTitleGlowIntensity || 2
        );
      } else {
        updateStreamTitleStyle(null);
      }
      updateLoggedInUserCSS();
    }
    const hideAdsToggle = document.querySelector("#hide-ads-toggle");
    hideAdsToggle.addEventListener("change", () => {
      updateAdHiding(hideAdsToggle.checked);
    });
    const hideTheaterChatToggle = document.querySelector("#hide-theater-chat-toggle");
    hideTheaterChatToggle.addEventListener("change", () => {
      updateTheaterChatHiding(hideTheaterChatToggle.checked);
    });
    const streamTitleToggle = document.querySelector("#stream-title-toggle");
    const streamTitleOptions = document.querySelector("#stream-title-options");
    const streamTitleColorInput = document.querySelector("#stream-title-color");
    const streamTitleColorValue = document.querySelector("#stream-title-color-value");
    const streamTitleGlowIntensity = document.querySelector("#stream-title-glow-intensity");
    const glowIntensityValue = document.querySelector("#glow-intensity-value");
    streamTitleToggle.addEventListener("change", () => {
      streamTitleOptions.style.opacity = streamTitleToggle.checked ? "1" : "0.5";
      streamTitleOptions.style.pointerEvents = streamTitleToggle.checked ? "auto" : "none";
      if (streamTitleToggle.checked) {
        updateStreamTitleStyle(streamTitleColorInput.value, parseFloat(streamTitleGlowIntensity.value));
      } else {
        updateStreamTitleStyle(null);
      }
    });
    streamTitleColorInput.addEventListener("input", () => {
      streamTitleColorValue.textContent = streamTitleColorInput.value;
      if (streamTitleToggle.checked) {
        updateStreamTitleStyle(streamTitleColorInput.value, parseFloat(streamTitleGlowIntensity.value));
      }
    });
    streamTitleGlowIntensity.addEventListener("input", () => {
      glowIntensityValue.textContent = streamTitleGlowIntensity.value;
      if (streamTitleToggle.checked) {
        updateStreamTitleStyle(streamTitleColorInput.value, parseFloat(streamTitleGlowIntensity.value));
      }
    });
    const loggedInToggle = document.querySelector("#logged-in-styling-toggle");
    const userStylingOptions = document.querySelector("#user-styling-options");
    const highlightToggle = document.querySelector("#user-highlight-toggle");
    const glowToggle = document.querySelector("#user-glow-toggle");
    const highlightColorSection = document.querySelector("#highlight-color-section");
    const glowColorSection = document.querySelector("#glow-color-section");
    const highlightColorInput = document.querySelector("#user-highlight-color");
    const glowColorInput = document.querySelector("#user-glow-color");
    const highlightColorValue = document.querySelector("#highlight-color-value");
    const glowColorValue = document.querySelector("#glow-color-value");
    loggedInToggle.addEventListener("change", () => {
      userStylingOptions.style.opacity = loggedInToggle.checked ? "1" : "0.5";
      userStylingOptions.style.pointerEvents = loggedInToggle.checked ? "auto" : "none";
    });
    highlightToggle.addEventListener("change", () => {
      highlightColorSection.style.opacity = highlightToggle.checked ? "1" : "0.5";
      highlightColorSection.style.pointerEvents = highlightToggle.checked ? "auto" : "none";
    });
    glowToggle.addEventListener("change", () => {
      glowColorSection.style.opacity = glowToggle.checked ? "1" : "0.5";
      glowColorSection.style.pointerEvents = glowToggle.checked ? "auto" : "none";
    });
    highlightColorInput.addEventListener("input", () => {
      highlightColorValue.textContent = highlightColorInput.value;
    });
    glowColorInput.addEventListener("input", () => {
      glowColorValue.textContent = glowColorInput.value;
    });
    document.querySelector("#save-config").addEventListener("click", () => {
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
      localStorage.setItem("grizzway_theme", newSettings.theme);
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
      console.log("[Grizzway Tools] Settings saved:", newSettings);
    });
    document.querySelector("#close-config-modal").addEventListener("click", () => {
      revertToOriginalSettings();
      overlay.remove();
    });
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        revertToOriginalSettings();
        overlay.remove();
      }
    });
  }

  // src/features/configButton.js
  function configButtonFeature() {
    const BUTTON_ID = "grizz-config-button";
    const ICON_SVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 16 16">
      <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
    </svg>
  `;
    function createButton() {
      const btn = document.createElement("button");
      btn.id = BUTTON_ID;
      btn.className = "top-bar_link__0xN4F top-bar_red__1Up8r";
      btn.innerHTML = `<span><div class="icon_icon__bDzMA" style="color:black !important; ">${ICON_SVG}</div></span>Config`;
      Object.assign(btn.style, {
        backgroundColor: "rgb(0 255 0 / 35%)",
        borderColor: "rgb(0 0 0 / 93%)",
        boxShadow: "0 0 8px 2px #00FF00",
        animation: "pulseGlow 2s infinite"
      });
      btn.addEventListener("click", () => {
        console.log("[Grizzway Tools] Config button clicked");
        showConfigModal();
      });
      return btn;
    }
    function insertButton() {
      const container = document.querySelector(".top-bar_links__4FJwt");
      if (!container || document.getElementById(BUTTON_ID)) return;
      console.log("[Grizzway Tools] Inserting config button");
      const btn = createButton();
      container.insertBefore(btn, container.firstChild);
    }
    if (!document.getElementById("glow-keyframes")) {
      const style = document.createElement("style");
      style.id = "glow-keyframes";
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
      const existing = document.querySelector(".top-bar_links__4FJwt");
      if (existing) {
        insertButton();
      } else {
        const observer = new MutationObserver(() => {
          const container = document.querySelector(".top-bar_links__4FJwt");
          if (container) {
            insertButton();
            observer.disconnect();
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
      }
    }
    waitForTopBar();
    setInterval(insertButton, 3e3);
  }

  // src/features/unwantedClasses.js
  var unwantedClasses = [
    "mirror",
    "live-stream-player_blur__7BhBE",
    "live-stream-player_upside-down__YvkE4",
    "chat-message-default_shrink-ray__nGvpr"
  ];
  function unwantedClassesFeature() {
    function removeUnwantedClasses() {
      const body = document.querySelector("body");
      if (body) {
        unwantedClasses.forEach((className) => {
          if (body.classList.contains(className)) {
            body.classList.remove(className);
          }
        });
      }
      const videoPlayer = document.querySelector(".live-stream-player_live-stream-player__4CHjG");
      if (videoPlayer) {
        unwantedClasses.forEach((className) => {
          const elementsWithClass = videoPlayer.querySelectorAll(`.${className}`);
          elementsWithClass.forEach((el) => el.classList.remove(className));
          if (videoPlayer.classList.contains(className)) {
            videoPlayer.classList.remove(className);
          }
        });
      }
      const chatContainer = document.querySelector("#chat-messages.chat-messages_chat-messages__UeL0a");
      if (chatContainer) {
        unwantedClasses.forEach((className) => {
          const chatElements = chatContainer.querySelectorAll(`.${className}`);
          chatElements.forEach((el) => el.classList.remove(className));
        });
      }
    }
    setInterval(removeUnwantedClasses, 1e3);
    console.log("[Grizzway Tools] Unwanted classes removal feature initialized");
  }

  // src/index.js
  function initMedalFunctionality() {
    let isElementVisible = false;
    function changeMedalSize(isVisible) {
      const buttons = document.querySelectorAll(".medal_medal__Hqowf.medal_md__RvQMV button");
      buttons.forEach((button) => {
        if (isVisible) {
          button.style.setProperty("--medal-size", "32px");
        } else {
          button.style.setProperty("--medal-size", "64px");
        }
      });
    }
    function checkElement() {
      const medalSelector = document.querySelector(".medal-selector_medals__sk3PN");
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
    const styleId = "optionalStyles";
    if (!theme || !theme.customStyles) {
      console.warn("[Grizzway Tools] No customStyles found in selected theme.");
      return;
    }
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = theme.customStyles;
    document.head.appendChild(style);
  }
  function init() {
    if (location.hostname === "api.fishtank.live") return;
    console.log("[Grizzway Tools] Script initialized on:", location.hostname);
    injectBaseCSS();
    let currentTheme = getCurrentTheme();
    if (!currentTheme) {
      currentTheme = "default";
      setThemeName("default");
    }
    applyTheme(currentTheme);
    applyOptionalStyles();
    console.log("[Grizzway Tools] Initializing features...");
    try {
      blockSoundsFeature();
      console.log("[Grizzway Tools] \u2713 blockSoundsFeature initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 blockSoundsFeature failed:", e);
    }
    try {
      chatLinkButtonsFeature();
      console.log("[Grizzway Tools] \u2713 chatLinkButtonsFeature initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 chatLinkButtonsFeature failed:", e);
    }
    try {
      loggedInUserStylingFeature();
      console.log("[Grizzway Tools] \u2713 loggedInUserStylingFeature initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 loggedInUserStylingFeature failed:", e);
    }
    try {
      addGrizzwaySpecialCSS();
      grizzwaySpecialStylingFeature();
      console.log("[Grizzway Tools] \u2713 grizzwaySpecialStylingFeature initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 grizzwaySpecialStylingFeature failed:", e);
    }
    try {
      modalFixesFeature();
      console.log("[Grizzway Tools] \u2713 modalFixesFeature initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 modalFixesFeature failed:", e);
    }
    try {
      addProfileEditingCSS();
      console.log("[Grizzway Tools] \u2713 Profile editing CSS initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 Profile editing CSS failed:", e);
    }
    try {
      profileFixFeature();
      console.log("[Grizzway Tools] \u2713 profileFixFeature initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 profileFixFeature failed:", e);
    }
    try {
      observeProfileFix();
      console.log("[Grizzway Tools] \u2713 observeProfileFix initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 observeProfileFix failed:", e);
    }
    try {
      streamTitleStyleFeature();
      console.log("[Grizzway Tools] \u2713 streamTitleStyleFeature initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 streamTitleStyleFeature failed:", e);
    }
    try {
      configButtonFeature();
      console.log("[Grizzway Tools] \u2713 configButtonFeature initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 configButtonFeature failed:", e);
    }
    try {
      adHidingFeature();
      console.log("[Grizzway Tools] \u2713 adHidingFeature initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 adHidingFeature failed:", e);
    }
    try {
      hideTheaterChatFeature();
      console.log("[Grizzway Tools] \u2713 hideTheaterChatFeature initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 hideTheaterChatFeature failed:", e);
    }
    try {
      unwantedClassesFeature();
      console.log("[Grizzway Tools] \u2713 unwantedClassesFeature initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 unwantedClassesFeature failed:", e);
    }
    try {
      initMedalFunctionality();
      console.log("[Grizzway Tools] \u2713 Medal functionality initialized");
    } catch (e) {
      console.error("[Grizzway Tools] \u2717 Medal functionality failed:", e);
    }
    console.log("[Grizzway Tools] All features initialization completed");
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

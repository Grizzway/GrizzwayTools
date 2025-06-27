export default {
    name: 'Season 4',
    author: 'Deputy Ripper',
    style: `
        /* Day Theme (Default) */
        body.day-theme, .layout_layout__5rz87.day-theme, .select_options__t1ibN.day-theme {
            background-image: url('https://i.imgur.com/IsCSDH7.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
        }
        /* Night Theme (Default) */
        body.night-theme, .layout_layout__5rz87.night-theme, .select_options__t1ibN.night-theme {
            background-image: url('https://i.imgur.com/IsCSDH7.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
        }
        /* Day Theme Chat Background */
        .chat_chat__2rdNg.day-theme {
            background-image: url('https://files.catbox.moe/aqi0wq.gif') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
        }
        /* Night Theme Chat Background */
        .chat_chat__2rdNg.night-theme {
            background-image: url('https://files.catbox.moe/aqi0wq.gif') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
        }
		
		/* This is a lot of stuff that you can split up or remove. */
        /* Day Theme UI Elements */
        .maejok-input-invalid.day-theme, .maejok-context-message.day-theme, .maejok-tts-warning-text.day-theme,
        .chat_header__8kNPS.day-theme, .top-bar_top-bar__X4p2n.day-theme, .panel_body__O5yBA.day-theme, .inventory_slots__D4IrC.day-theme {
            background-color: rgb(175, 89, 68) !important;
            border-color: rgb(175, 89, 68) !important;
        }
		
		/* This is a lot of stuff that you can split up or remove. */
        /* Night Theme UI Elements */
        .maejok-input-invalid.night-theme, .maejok-context-message.night-theme, .maejok-tts-warning-text.night-theme,
        .chat_header__8kNPS.night-theme, .top-bar_top-bar__X4p2n.night-theme, .panel_body__O5yBA.night-theme, .inventory_slots__D4IrC.night-theme {
            background-color: #1d1640 !important;
            border-color: #6d16e1 !important;
        }
		
		/* Header Colors */
        /* Day Theme Header Colors */
        .panel_header__T2yFW.day-theme {
            background-color: rgb(175, 89, 68) !important;
            background-image: url('https://i.imgur.com/IsCSDH7.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-blend-mode: multiply !important;
        }
		
		/* Header Colors */
        /* Night Theme Header Colors */
        .panel_header__T2yFW.night-theme {
            background-color: #5704c1 !important;
            background-image: url('https://i.imgur.com/IsCSDH7.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-blend-mode: multiply !important;
        }
        .top-bar_top-bar__X4p2n {
            box-shadow: none !important;
        }
        .maejok-context-message svg path {
            fill: black !important;
        }

        /* Live stream preloaded with opacity for fun */
        .hls-stream-player_hls-stream-player__BJiGl,
        .live-stream-player_container__A4sNR,
        .layout_center__Vsd3b {
            opacity: 1;
        }

        /* Ad space - currently set to be invisible */
        .ads_ads__Z1cPk {
            opacity: 0;
        }
        
        /* Day Theme Poll Footer */
        .poll_footer__rALdX.day-theme {
            background-color: rgb(175, 89, 68);
        }

        /* Night Theme Poll Footer */
        .poll_footer__rALdX.night-theme {
            background-color: #1d1640;
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

        /* Day Theme TTS and SFX Messages */
        .chat-message-tts_chat-message-tts__2Jlxi.day-theme,
        .chat-message-sfx_chat-message-sfx__OGv6q.day-theme {
            border-color: rgb(175, 89, 68) !important;
            background-color: darkgreen !important;
            filter: drop-shadow(0 0 2px #00ff00) drop-shadow(0 0 2px #00ff00);
        }

        /* Night Theme TTS and SFX Messages */
        .chat-message-tts_chat-message-tts__2Jlxi.night-theme,
        .chat-message-sfx_chat-message-sfx__OGv6q.night-theme {
            border-color: #6d16e1 !important;
            background-color: #1d1640 !important;
            filter: drop-shadow(0 0 2px #a289c8) drop-shadow(0 0 2px #a289c8);
        }
        
        /* TTS Messages - Day Theme */
        body.day-theme #chat-messages > div[class*="chat-message-tts"] {
            background-color: rgb(175, 89, 68) !important;
            background-image: url('https://i.imgur.com/IsCSDH7.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-blend-mode: multiply !important;
            border: 2px solid rgb(175, 89, 68) !important;
            border-radius: 6px !important;
            box-shadow: 0 2px 8px rgba(175, 89, 68, 0.4) !important;
        }
        
        /* TTS Messages - Night Theme */
        body.night-theme #chat-messages > div[class*="chat-message-tts"] {
            background-color: #1d1640 !important;
            background-image: url('https://i.imgur.com/IsCSDH7.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-blend-mode: multiply !important;
            border: 2px solid #6d16e1 !important;
            border-radius: 6px !important;
            box-shadow: 0 2px 8px rgba(109, 22, 225, 0.5) !important;
        }
        
        /* TTS Message Text - Day Theme */
        body.day-theme #chat-messages > div[class*="chat-message-tts"] .chat-message-tts_message__sWVCc {
            color: #ffffff !important;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
            font-weight: bold !important;
        }
        
        /* TTS Message Text - Night Theme */
        body.night-theme #chat-messages > div[class*="chat-message-tts"] .chat-message-tts_message__sWVCc {
            color: #ffffff !important;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
            font-weight: bold !important;
        }
        
        /* TTS Timestamp - Day Theme */
        body.day-theme #chat-messages > div[class*="chat-message-tts"] .chat-message-tts_timestamp__pIVv0 {
            color: #ffffff !important;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
            font-weight: bold !important;
        }
        
        /* TTS Timestamp - Night Theme */
        body.night-theme #chat-messages > div[class*="chat-message-tts"] .chat-message-tts_timestamp__pIVv0 {
            color: #ffffff !important;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
            font-weight: bold !important;
        }

        /* Chat input area */
        .chat_input__bsNw2 {
            background-color: #000000 !important;
        }

        /* Day Theme - Chat input area */
        body.day-theme #__next > main > div.layout_right__x_sAY > div > div.chat_input__bsNw2 {
            background-color: rgb(175, 89, 68) !important;
            border-color: rgb(175, 89, 68) !important;
            border-radius: 8px !important;
            box-shadow: 0 2px 8px rgba(175, 89, 68, 0.3) !important;
        }

        /* Night Theme - Chat input area */
        body.night-theme #__next > main > div.layout_right__x_sAY > div > div.chat_input__bsNw2 {
            background-color: #1d1640 !important;
            border-color: #6d16e1 !important;
            border-radius: 8px !important;
            box-shadow: 0 2px 8px rgba(109, 22, 225, 0.4) !important;
        }

        /* Chat Input area text color */
        .chat-input_chat-input__GAgOF, .chat-input_input-wrapper__rjiu1, .chat-input_input__jljCU {
            color: #00FF00 !important;
        }

        /* Stock ticker */
        .stocks-bar_stocks-bar__7kNv8 {
            background-color: rgba(0, 0, 0, 1) !important;
        }
        
        /* Day Theme Stock Ticker */
        .stocks-bar_stocks-bar__7kNv8.day-theme {
            background-color: rgb(175, 89, 68) !important;
            background-image: url('https://i.imgur.com/IsCSDH7.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-blend-mode: multiply !important;
            border-color: rgb(175, 89, 68) !important;
            border-width: 2px !important;
            border-style: solid !important;
        }
        
        /* Night Theme Stock Ticker */
        .stocks-bar_stocks-bar__7kNv8.night-theme {
            background-color: #1d1640 !important;
            background-image: url('https://i.imgur.com/IsCSDH7.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-blend-mode: multiply !important;
            border-color: #6d16e1 !important;
            border-width: 2px !important;
            border-style: solid !important;
        }
        
        /* Entire Stocks Bar Container - Day Theme */
        body.day-theme #__next > main > div.layout_bottom__qRsMw {
            background-color: rgb(195, 109, 88) !important;
            background-image: url('https://i.imgur.com/IsCSDH7.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-blend-mode: multiply !important;
            border-color: rgb(175, 89, 68) !important;
            border-width: 3px !important;
            border-style: solid !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 12px rgba(175, 89, 68, 0.4) !important;
        }
        
        /* Entire Stocks Bar Container - Night Theme */
        body.night-theme #__next > main > div.layout_bottom__qRsMw {
            background-color: #2d1a50 !important;
            background-image: url('https://i.imgur.com/IsCSDH7.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-blend-mode: multiply !important;
            border-color: #6d16e1 !important;
            border-width: 3px !important;
            border-style: solid !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 15px rgba(109, 22, 225, 0.6) !important;
        }

        /* Bottom announcement banner */
        .announcement-bar_announcement-bar__gcGuh {
            background-color: rgba(0, 0, 0, 0) !important;
            color: red !important;
            text-shadow: 1px 1px 0 #000 !important;
            border: none !important;
        }
        
        /* Day Theme Announcement Bar */
        body.day-theme #__next > main > div.layout_center-bottom__yhDOH > div.announcement-bar_announcement-bar__gcGuh {
            background-color: rgb(215, 129, 108) !important;
            background-image: url('https://i.imgur.com/IsCSDH7.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-blend-mode: multiply !important;
            color: #ffffff !important;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
            border: 2px solid rgb(175, 89, 68) !important;
            border-radius: 6px !important;
            box-shadow: 0 2px 8px rgba(175, 89, 68, 0.4) !important;
        }
        
        /* Night Theme Announcement Bar */
        body.night-theme #__next > main > div.layout_center-bottom__yhDOH > div.announcement-bar_announcement-bar__gcGuh {
            background-color: #3d2a60 !important;
            background-image: url('https://i.imgur.com/IsCSDH7.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-blend-mode: multiply !important;
            color: #ffffff !important;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
            border: 2px solid #6d16e1 !important;
            border-radius: 6px !important;
            box-shadow: 0 2px 8px rgba(109, 22, 225, 0.5) !important;
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
        /* Custom image replacement classes for day theme */
        .season4-custom-image.day-theme {
            padding-right: 40px !important;
        }
		/* Custom image replacement classes for night theme */
        .season4-custom-image.night-theme {
            padding-right: 40px !important;
        }

        /* Night Theme - Specific element styling */
        body.night-theme #__next > main > div:nth-child(6) {
            background-color: #1d1640 !important;
            border-color: #6d16e1 !important;
        }
        body.night-theme #__next > main > div:nth-child(5) > div > div:nth-child(3) {
            background-color: #1d1640 !important;
            border-color: #6d16e1 !important;
        }
		 /* Day Theme - Top bar buttons */
        body.day-theme .top-bar_link__0xN4F,
        body.day-theme .top-bar_red__1Up8r,
        body.day-theme .top-bar_green__S_hiA {
            background-color: rgb(175, 89, 68) !important;
            border-color: rgb(175, 89, 68) !important;
            opacity: 0.9 !important;
        }
        
		/* Night Theme - Top bar buttons */		
        body.night-theme .top-bar_link__0xN4F,
        body.night-theme .top-bar_red__1Up8r,
        body.night-theme .top-bar_green__S_hiA {
            background-color: #1d1640 !important;
            border-color: #6d16e1 !important;
            opacity: 0.85 !important;
        }

        /* Watch and Info buttons match Play button */
        body.day-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(2),
        body.day-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(4) {
            background: linear-gradient(135deg, rgb(175, 89, 68) 0%, rgb(195, 109, 88) 100%) !important;
            border-color: rgb(175, 89, 68) !important;
            opacity: 0.9 !important;
            border-radius: 8px !important;
            transition: all 0.3s ease !important;
            position: relative !important;
            overflow: hidden !important;
            box-shadow: 0 2px 8px rgba(175, 89, 68, 0.3) !important;
        }
        body.night-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(2),
        body.night-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(4) {
            background: linear-gradient(135deg, #1d1640 0%, #2d1a50 100%) !important;
            border-color: #6d16e1 !important;
            opacity: 0.85 !important;
            border-radius: 8px !important;
            transition: all 0.3s ease !important;
            position: relative !important;
            overflow: hidden !important;
            box-shadow: 0 2px 8px rgba(109, 22, 225, 0.4) !important;
        }
        body.day-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(2):hover,
        body.day-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(4):hover {
            transform: scale(1.05) translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(175, 89, 68, 0.5) !important;
            background: linear-gradient(135deg, rgb(195, 109, 88) 0%, rgb(215, 129, 108) 100%) !important;
        }
        body.night-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(2):hover,
        body.night-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(4):hover {
            transform: scale(1.05) translateY(-2px) !important;
            box-shadow: 0 6px 25px rgba(109, 22, 225, 0.7) !important;
            background: linear-gradient(135deg, #2d1a50 0%, #3d2a60 100%) !important;
        }
        .live-stream-player_cinema__yPkWC .chat_chat__2rdNg {
            background-image: none !important;
            background-color: transparent !important;
        }
        .live-stream-player_cinema__yPkWC body,
        .live-stream-player_cinema__yPkWC .layout_layout__5rz87,
        .live-stream-player_cinema__yPkWC .select_options__t1ibN {
            background-image: none !important;
            background-color: transparent !important;
        }
        .chat_chat__2rdNg:not(.live-stream-player_cinema__yPkWC .chat_chat__2rdNg) {
            background-image: url('https://files.catbox.moe/aqi0wq.gif') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
        }
        body.season4 .chat_chat__2rdNg.season4-restored-chat,
        body.season4 .chat_chat__2rdNg.day-theme.season4-restored-chat,
        body.season4 .chat_chat__2rdNg.night-theme.season4-restored-chat {
            background-image: url('https://files.catbox.moe/aqi0wq.gif') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
        }
        *:not([id*="live-stream-player-camera"]):not(.clickable-zones_clickable-zones__OgYjT):not(.clickable-zones_live-stream__i75zd):not([class*="loading"]):not([class*="stream"]):not([class*="player"]):not([class*="live-stream"]):not([class*="hls"]):not([class*="video"]) {
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease !important;
        }
        button[id*="live-stream-player-camera"],
        div[id*="live-stream-player-camera"]:not([class*="loading"]):not([class*="stream"]):not([class*="player"]),
        .clickable-zones_clickable-zones__OgYjT > *,
        .clickable-zones_live-stream__i75zd > * {
            transition: none !important;
            animation: none !important;
            transform: none !important;
            filter: none !important;
            box-shadow: none !important;
            background-color: transparent !important;
            border-color: transparent !important;
        }
        button[id*="live-stream-player-camera"]:hover,
        div[id*="live-stream-player-camera"]:not([class*="loading"]):not([class*="stream"]):not([class*="player"]):hover,
        .clickable-zones_clickable-zones__OgYjT > *:hover,
        .clickable-zones_live-stream__i75zd > *:hover {
            transition: none !important;
            animation: none !important;
            transform: none !important;
            filter: none !important;
            box-shadow: none !important;
            background-color: transparent !important;
            border-color: transparent !important;
        }
        body.day-theme button:hover:not(.clickable-zones_clickable-zones__OgYjT):not(.clickable-zones_live-stream__i75zd):not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *),
        body.day-theme .top-bar_link__0xN4F:hover,
        body.day-theme .top-bar_red__1Up8r:hover,
        body.day-theme .top-bar_green__S_hiA:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 4px 12px rgba(175, 89, 68, 0.4) !important;
            background-color: rgb(195, 109, 88) !important;
            border-color: rgb(195, 109, 88) !important;
        }

        /* Button hover effects - Night Theme */
        body.night-theme button:hover:not(.clickable-zones_clickable-zones__OgYjT):not(.clickable-zones_live-stream__i75zd):not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *),
        body.night-theme .top-bar_link__0xN4F:hover,
        body.night-theme .top-bar_red__1Up8r:hover,
        body.night-theme .top-bar_green__S_hiA:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 4px 15px rgba(109, 22, 225, 0.6) !important;
            background-color: #2d1a50 !important;
            border-color: #8d26f1 !important;
        }

        /* Specific button hover effects */
        body.day-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(2):hover,
        body.day-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(4):hover {
            transform: scale(1.05) translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(175, 89, 68, 0.5) !important;
        }

        body.night-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(2):hover,
        body.night-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(4):hover {
            transform: scale(1.05) translateY(-2px) !important;
            box-shadow: 0 6px 25px rgba(109, 22, 225, 0.7) !important;
        }

        /* Chat message hover effects */
        body.day-theme .chat-message-default_chat-message-default__JtJQL:hover {
            background-color: rgba(175, 89, 68, 0.1) !important;
            transform: translateX(4px) !important;
            box-shadow: 2px 2px 8px rgba(175, 89, 68, 0.2) !important;
        }

        body.night-theme .chat-message-default_chat-message-default__JtJQL:hover {
            background-color: rgba(29, 22, 64, 0.2) !important;
            transform: translateX(4px) !important;
            box-shadow: 2px 2px 12px rgba(109, 22, 225, 0.3) !important;
        }

        /* Poll button hover effects */
        body.day-theme .poll_vote__b_NE0 button:hover {
            background-color: rgb(195, 109, 88) !important;
            transform: scale(1.02) !important;
            box-shadow: 0 4px 12px rgba(175, 89, 68, 0.4) !important;
        }

        body.night-theme .poll_vote__b_NE0 button:hover {
            background-color: #2d1a50 !important;
            transform: scale(1.02) !important;
            box-shadow: 0 4px 15px rgba(109, 22, 225, 0.6) !important;
        }

        /* Input field focus effects */
        body.day-theme input:focus:not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *),
        body.day-theme textarea:focus:not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *) {
            outline: none !important;
            border-color: rgb(175, 89, 68) !important;
            box-shadow: 0 0 8px rgba(175, 89, 68, 0.3) !important;
            transform: scale(1.01) !important;
        }

        body.night-theme input:focus:not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *),
        body.night-theme textarea:focus:not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *) {
            outline: none !important;
            border-color: #6d16e1 !important;
            box-shadow: 0 0 12px rgba(109, 22, 225, 0.4) !important;
            transform: scale(1.01) !important;
        }

        /* Link hover effects */
        body.day-theme a:hover {
            text-shadow: 0 0 5px rgba(175, 89, 68, 0.3) !important;
        }

        body.night-theme a:hover {
            text-shadow: 0 0 8px rgba(109, 22, 225, 0.5) !important;
        }

        /* Smooth theme transition animation */
        @keyframes themeTransition {
            0% { opacity: 0.8; }
            50% { opacity: 0.9; }
            100% { opacity: 1; }
        }

        body.day-theme,
        body.night-theme {
            animation: themeTransition 0.5s ease-in-out !important;
        }

        /* Pulse animation for important elements */
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }

        body.day-theme .top-bar_red__1Up8r {
            animation: pulse 2s infinite ease-in-out !important;
        }

        body.night-theme .top-bar_green__S_hiA {
            animation: pulse 2s infinite ease-in-out !important;
        }

        /* Glow effect for active elements */
        body.day-theme .chat-message-tts_chat-message-tts__2Jlxi,
        body.day-theme .chat-message-sfx_chat-message-sfx__OGv6q {
            animation: glow 2s ease-in-out infinite alternate !important;
        }

        body.night-theme .chat-message-tts_chat-message-tts__2Jlxi,
        body.night-theme .chat-message-sfx_chat-message-sfx__OGv6q {
            animation: glow 2s ease-in-out infinite alternate !important;
        }

        @keyframes glow {
            from { box-shadow: 0 0 5px currentColor; }
            to { box-shadow: 0 0 15px currentColor, 0 0 25px currentColor; }
        }

        body.night-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > button:nth-child(4):hover {
            transform: scale(1.05) translateY(-2px) !important;
            box-shadow: 0 6px 25px rgba(109, 22, 225, 0.7) !important;
        }

        /* Button 6 styling */
        body.day-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(6) {
            background: linear-gradient(135deg, rgb(175, 89, 68) 0%, rgb(195, 109, 88) 100%) !important;
            border-color: rgb(175, 89, 68) !important;
            opacity: 0.9 !important;
            border-radius: 8px !important;
            transition: all 0.3s ease !important;
            position: relative !important;
            overflow: hidden !important;
        }

        body.night-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(6) {
            background: linear-gradient(135deg, #1d1640 0%, #2d1a50 100%) !important;
            border-color: #6d16e1 !important;
            opacity: 0.85 !important;
            border-radius: 8px !important;
            transition: all 0.3s ease !important;
            position: relative !important;
            overflow: hidden !important;
            box-shadow: 0 0 8px rgba(109, 22, 225, 0.4) !important;
        }

        body.day-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(6):hover {
            transform: scale(1.05) translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(175, 89, 68, 0.5) !important;
            background: linear-gradient(135deg, rgb(195, 109, 88) 0%, rgb(215, 129, 108) 100%) !important;
        }

        body.night-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > div.top-bar_links__4FJwt > button:nth-child(6):hover {
            transform: scale(1.05) translateY(-2px) !important;
            box-shadow: 0 6px 25px rgba(109, 22, 225, 0.7) !important;
            background: linear-gradient(135deg, #2d1a50 0%, #3d2a60 100%) !important;
        }

        /* Advanced Button Styling - Enhanced gradients and effects */
        body.day-theme .top-bar_link__0xN4F,
        body.day-theme .top-bar_red__1Up8r,
        body.day-theme .top-bar_green__S_hiA {
            background: linear-gradient(135deg, rgb(175, 89, 68) 0%, rgb(195, 109, 88) 100%) !important;
            border-color: rgb(175, 89, 68) !important;
            opacity: 0.9 !important;
            border-radius: 8px !important;
            position: relative !important;
            overflow: hidden !important;
            box-shadow: 0 2px 8px rgba(175, 89, 68, 0.3) !important;
        }

        body.night-theme .top-bar_link__0xN4F,
        body.night-theme .top-bar_red__1Up8r,
        body.night-theme .top-bar_green__S_hiA {
            background: linear-gradient(135deg, #1d1640 0%, #2d1a50 100%) !important;
            border-color: #6d16e1 !important;
            opacity: 0.85 !important;
            border-radius: 8px !important;
            position: relative !important;
            overflow: hidden !important;
            box-shadow: 0 2px 8px rgba(109, 22, 225, 0.4) !important;
        }
        body.day-theme .top-bar_link__0xN4F span,
        body.day-theme .top-bar_red__1Up8r span,
        body.day-theme .top-bar_green__S_hiA span {
            font-weight: 600 !important;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) !important;
            letter-spacing: 0.5px !important;
        }
        body.night-theme .top-bar_link__0xN4F span,
        body.night-theme .top-bar_red__1Up8r span,
        body.night-theme .top-bar_green__S_hiA span {
            font-weight: 600 !important;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5) !important;
            letter-spacing: 0.5px !important;
        }

        /* Ignore hover effects for logo element */
        body.day-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > button.top-bar_logo__XL0_C,
        body.night-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > button.top-bar_logo__XL0_C {
            box-shadow: none !important;
            background-color: transparent !important;
            border-color: transparent !important;
            opacity: 1 !important;
        }

        body.day-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > button.top-bar_logo__XL0_C:hover,
        body.night-theme #__next > main > div.layout_top__MHaU_ > div.top-bar_top-bar___Z0QX > button.top-bar_logo__XL0_C:hover {
            box-shadow: none !important;
            background-color: transparent !important;
            border-color: transparent !important;
            opacity: 1 !important;
        }

        /* Unique Elements Styling */

        /* Custom Scrollbars with Theme Colors */
        body.day-theme ::-webkit-scrollbar {
            width: 12px !important;
            height: 12px !important;
        }

        body.day-theme ::-webkit-scrollbar-track {
            background: rgba(175, 89, 68, 0.1) !important;
            border-radius: 6px !important;
        }

        body.day-theme ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, rgb(175, 89, 68) 0%, rgb(195, 109, 88) 100%) !important;
            border-radius: 6px !important;
            border: 2px solid rgba(175, 89, 68, 0.2) !important;
        }

        body.day-theme ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, rgb(195, 109, 88) 0%, rgb(215, 129, 108) 100%) !important;
            box-shadow: 0 0 8px rgba(175, 89, 68, 0.5) !important;
        }

        body.night-theme ::-webkit-scrollbar {
            width: 12px !important;
            height: 12px !important;
        }

        body.night-theme ::-webkit-scrollbar-track {
            background: rgba(109, 22, 225, 0.1) !important;
            border-radius: 6px !important;
        }

        body.night-theme ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #1d1640 0%, #6d16e1 100%) !important;
            border-radius: 6px !important;
            border: 2px solid rgba(109, 22, 225, 0.3) !important;
        }

        body.night-theme ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #2d1a50 0%, #8d26f1 100%) !important;
            box-shadow: 0 0 12px rgba(109, 22, 225, 0.7) !important;
        }

        /* Animated Background Patterns */
        body.day-theme::before {
            content: '' !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background-image: 
                radial-gradient(circle at 20% 80%, rgba(175, 89, 68, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(195, 109, 88, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(175, 89, 68, 0.02) 0%, transparent 50%) !important;
            pointer-events: none !important;
            z-index: -1 !important;
            animation: dayPatternFloat 20s ease-in-out infinite !important;
        }

        body.night-theme::before {
            content: '' !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background-image: 
                radial-gradient(circle at 25% 75%, rgba(109, 22, 225, 0.04) 0%, transparent 50%),
                radial-gradient(circle at 75% 25%, rgba(29, 22, 64, 0.04) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(109, 22, 225, 0.03) 0%, transparent 50%) !important;
            pointer-events: none !important;
            z-index: -1 !important;
            animation: nightPatternFloat 25s ease-in-out infinite !important;
        }

        @keyframes dayPatternFloat {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(-10px, -10px) rotate(1deg); }
            50% { transform: translate(10px, -5px) rotate(-1deg); }
            75% { transform: translate(-5px, 10px) rotate(0.5deg); }
        }

        @keyframes nightPatternFloat {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(15px, -15px) rotate(-1deg); }
            66% { transform: translate(-15px, 10px) rotate(1deg); }
        }

        /* Icon Animations */
        body.day-theme .icon_icon__bDzMA:not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *),
        body.day-theme svg:not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *) {
            transition: all 0.3s ease !important;
        }

        body.day-theme .icon_icon__bDzMA:not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *):hover,
        body.day-theme svg:not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *):hover {
            transform: scale(1.1) rotate(5deg) !important;
            filter: drop-shadow(0 0 8px rgba(175, 89, 68, 0.6)) !important;
        }

        body.night-theme .icon_icon__bDzMA:not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *),
        body.night-theme svg:not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *) {
            transition: all 0.3s ease !important;
        }

        body.night-theme .icon_icon__bDzMA:not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *):hover,
        body.night-theme svg:not([id*="live-stream-player-camera"]):not([id*="live-stream-player-camera"] *):hover {
            transform: scale(1.1) rotate(-5deg) !important;
            filter: drop-shadow(0 0 12px rgba(109, 22, 225, 0.8)) !important;
        }

        /* Progress Bars with Gradient Fills */
        body.day-theme progress,
        body.day-theme .progress-bar,
        body.day-theme [class*="progress"] {
            background: rgba(175, 89, 68, 0.2) !important;
            border-radius: 8px !important;
            border: 1px solid rgba(175, 89, 68, 0.3) !important;
            overflow: hidden !important;
        }

        body.day-theme progress::-webkit-progress-bar {
            background: rgba(175, 89, 68, 0.2) !important;
            border-radius: 8px !important;
        }

        body.day-theme progress::-webkit-progress-value {
            background: linear-gradient(90deg, rgb(175, 89, 68) 0%, rgb(195, 109, 88) 50%, rgb(215, 129, 108) 100%) !important;
            border-radius: 8px !important;
            animation: dayProgressPulse 2s ease-in-out infinite !important;
        }

        body.night-theme progress,
        body.night-theme .progress-bar,
        body.night-theme [class*="progress"] {
            background: rgba(29, 22, 64, 0.3) !important;
            border-radius: 8px !important;
            border: 1px solid rgba(109, 22, 225, 0.4) !important;
            overflow: hidden !important;
        }

        body.night-theme progress::-webkit-progress-bar {
            background: rgba(29, 22, 64, 0.3) !important;
            border-radius: 8px !important;
        }

        body.night-theme progress::-webkit-progress-value {
            background: linear-gradient(90deg, #1d1640 0%, #6d16e1 50%, #8d26f1 100%) !important;
            border-radius: 8px !important;
            animation: nightProgressPulse 2s ease-in-out infinite !important;
        }

        @keyframes dayProgressPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }

        @keyframes nightProgressPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.9; }
        }

        /* Enhanced Loading States */
        body.day-theme .loading,
        body.day-theme [class*="loading"] {
            background: linear-gradient(90deg, transparent, rgba(175, 89, 68, 0.3), transparent) !important;
            background-size: 200% 100% !important;
            animation: dayLoadingShimmer 1.5s infinite !important;
        }

        body.night-theme .loading,
        body.night-theme [class*="loading"] {
            background: linear-gradient(90deg, transparent, rgba(109, 22, 225, 0.4), transparent) !important;
            background-size: 200% 100% !important;
            animation: nightLoadingShimmer 1.5s infinite !important;
        }

        @keyframes dayLoadingShimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }

        @keyframes nightLoadingShimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }

        /* Typography Enhancements */

        /* Import Custom Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap');

        /* Day Theme Typography */
        body.day-theme {
            font-family: 'Quicksand', sans-serif !important;
            font-weight: 400 !important;
            letter-spacing: 0.2px !important;
        }

        body.day-theme h1, body.day-theme h2, body.day-theme h3, 
        body.day-theme h4, body.day-theme h5, body.day-theme h6 {
            font-family: 'Quicksand', sans-serif !important;
            font-weight: 600 !important;
            letter-spacing: 0.5px !important;
            background: linear-gradient(135deg, rgb(175, 89, 68) 0%, rgb(195, 109, 88) 100%) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
            text-shadow: 0 2px 4px rgba(175, 89, 68, 0.3) !important;
        }

        /* Night Theme Typography */
        body.night-theme {
            font-family: 'Orbitron', monospace !important;
            font-weight: 400 !important;
            letter-spacing: 0.3px !important;
        }

        body.night-theme h1, body.night-theme h2, body.night-theme h3, 
        body.night-theme h4, body.night-theme h5, body.night-theme h6 {
            font-family: 'Orbitron', monospace !important;
            font-weight: 600 !important;
            letter-spacing: 0.8px !important;
            background: linear-gradient(135deg, #6d16e1 0%, #8d26f1 100%) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
            text-shadow: 0 2px 8px rgba(109, 22, 225, 0.5) !important;
        }

        /* Chat Header - Font Only Modifications */
        body.day-theme .chat_header__8kNPS {
            font-family: 'Quicksand', sans-serif !important;
            font-weight: 600 !important;
            letter-spacing: 0.5px !important;
        }

        body.night-theme .chat_header__8kNPS {
            font-family: 'Orbitron', monospace !important;
            font-weight: 600 !important;
            letter-spacing: 0.8px !important;
        }

        /* Button Text Enhancements */
        body.day-theme button {
            font-family: 'Quicksand', sans-serif !important;
            font-weight: 500 !important;
            letter-spacing: 0.3px !important;
        }

        body.night-theme button {
            font-family: 'Orbitron', monospace !important;
            font-weight: 500 !important;
            letter-spacing: 0.4px !important;
        }

        /* Input Field Typography */
        body.day-theme input, body.day-theme textarea {
            font-family: 'Quicksand', sans-serif !important;
            font-weight: 400 !important;
            letter-spacing: 0.2px !important;
        }

        body.night-theme input, body.night-theme textarea {
            font-family: 'Orbitron', monospace !important;
            font-weight: 400 !important;
            letter-spacing: 0.3px !important;
        }

        /* Link Typography */
        body.day-theme a {
            font-family: 'Quicksand', sans-serif !important;
            font-weight: 500 !important;
            letter-spacing: 0.2px !important;
        }

        body.night-theme a {
            font-family: 'Orbitron', monospace !important;
            font-weight: 500 !important;
            letter-spacing: 0.3px !important;
        }

        /* Custom Bullet Points for Lists */
        body.day-theme ul li::before {
            content: '✦' !important;
            color: rgb(175, 89, 68) !important;
            font-weight: bold !important;
            display: inline-block !important;
            width: 1em !important;
            margin-left: -1em !important;
            animation: dayBulletPulse 2s ease-in-out infinite !important;
        }

        body.night-theme ul li::before {
            content: '◆' !important;
            color: #6d16e1 !important;
            font-weight: bold !important;
            display: inline-block !important;
            width: 1em !important;
            margin-left: -1em !important;
            animation: nightBulletPulse 2s ease-in-out infinite !important;
        }

        @keyframes dayBulletPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
        }

        @keyframes nightBulletPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.1); }
        }

        /* Enhanced Text Hierarchy */
        body.day-theme .panel_header__T2yFW {
            font-family: 'Quicksand', sans-serif !important;
            font-weight: 700 !important;
            letter-spacing: 0.6px !important;
            background: linear-gradient(135deg, rgb(175, 89, 68) 0%, rgb(195, 109, 88) 100%) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
        }

        body.night-theme .panel_header__T2yFW {
            font-family: 'Orbitron', monospace !important;
            font-weight: 700 !important;
            letter-spacing: 1px !important;
            background: linear-gradient(135deg, #6d16e1 0%, #8d26f1 100%) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
        }

        /* Status and Notification Text */
        body.day-theme .status-bar_status-bar__vR_Tm {
            font-family: 'Quicksand', sans-serif !important;
            font-weight: 500 !important;
            letter-spacing: 0.3px !important;
        }

        body.night-theme .status-bar_status-bar__vR_Tm {
            font-family: 'Orbitron', monospace !important;
            font-weight: 500 !important;
            letter-spacing: 0.4px !important;
        }

        /* Modal and Dialog Typography */
        body.day-theme .modal_modal__MS70U h1,
        body.day-theme .modal_modal__MS70U h2,
        body.day-theme .modal_modal__MS70U h3 {
            font-family: 'Quicksand', sans-serif !important;
            font-weight: 600 !important;
            letter-spacing: 0.5px !important;
        }

        body.night-theme .modal_modal__MS70U h1,
        body.night-theme .modal_modal__MS70U h2,
        body.night-theme .modal_modal__MS70U h3 {
            font-family: 'Orbitron', monospace !important;
            font-weight: 600 !important;
            letter-spacing: 0.8px !important;
        }
    `
  }
  
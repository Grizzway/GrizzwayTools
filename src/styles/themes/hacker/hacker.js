export default {
    name: 'Hacker',
    author: 'Grizzway',
    customPingSound: 'https://files.catbox.moe/qeq32a.mp3',
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
}
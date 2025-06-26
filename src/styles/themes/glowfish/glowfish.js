export default {
    name: 'Glow Fish',
    author: 'Grizzway',
    customPingSound: 'https://files.catbox.moe/alh72d.mp3',
    
    style: `
        /* Site background with cosmic underwater effect */
        body, .layout_layout__5rz87, .select_options__t1ibN {
            background-image: url('https://i.imgur.com/v3aS7nX.gif') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-attachment: fixed !important;
            color: #00ffaa !important;
        }

        /* Chat background - deep ocean overlay for readability */
        .chat_chat__2rdNg {
            background-color: rgba(20, 5, 40, 0.9) !important;
            border: 2px solid #00ffaa !important;
            box-shadow: 0 0 25px rgba(0, 255, 170, 0.4), inset 0 0 20px rgba(138, 43, 226, 0.2) !important;
            border-radius: 8px !important;
        }
      
        /* Main UI elements with cosmic theme */
        .maejok-input-invalid, .maejok-context-message, .maejok-tts-warning-text,
        .chat_header__8kNPS, .top-bar_top-bar__X4p2n, .panel_body__O5yBA, .inventory_slots__D4IrC {
            background-color: rgba(25, 10, 50, 0.95) !important;
            border: 1px solid #00ffaa !important;
            color: #00ffaa !important;
            box-shadow: 0 0 15px rgba(0, 255, 170, 0.3) !important;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
        }

        /* Header with mystical aesthetic */
        .panel_header__T2yFW {
            background: linear-gradient(135deg, rgba(138, 43, 226, 0.9), rgba(75, 0, 130, 0.9)) !important;
            border-bottom: 2px solid #00ffaa !important;
            color: #00ffaa !important;
            text-shadow: 0 0 8px #00ffaa, 2px 2px 4px rgba(0, 0, 0, 0.9) !important;
            box-shadow: 0 2px 15px rgba(138, 43, 226, 0.5) !important;
        }
        
        /* Top bar with cosmic styling */
        .top-bar_top-bar__X4p2n {
            background: linear-gradient(180deg, rgba(25, 10, 50, 0.95), rgba(138, 43, 226, 0.8)) !important;
            box-shadow: 0 2px 15px rgba(0, 255, 170, 0.4) !important;
            border-bottom: 2px solid #00ffaa !important;
        }

        /* Context message icons */
        .maejok-context-message svg path {
            fill: #00ffaa !important;
            filter: drop-shadow(0 0 5px #00ffaa) !important;
        }

        /* Stream containers with cosmic glow */
        .hls-stream-player_hls-stream-player__BJiGl,
        .live-stream-player_container__A4sNR,
        .layout_center__Vsd3b {
            border: 2px solid rgba(0, 255, 170, 0.6) !important;
            box-shadow: 0 0 20px rgba(138, 43, 226, 0.4) !important;
            border-radius: 8px !important;
        }
        
        /* Poll elements with mystical styling */
        .poll_footer__rALdX {
            background: linear-gradient(135deg, rgba(75, 0, 130, 0.9), rgba(138, 43, 226, 0.9)) !important;
            border-top: 2px solid #00ffaa !important;
            box-shadow: 0 -2px 10px rgba(0, 255, 170, 0.3) !important;
        }

        /* Poll buttons with cosmic hover effects */
        .poll_vote__b_NE0 button:disabled:hover,
        .poll_vote__b_NE0 button:hover {
            background: linear-gradient(135deg, rgba(255, 20, 147, 0.8), rgba(138, 43, 226, 0.8)) !important;
            color: #ffffff !important;
            border: 2px solid #ff1493 !important;
            box-shadow: 0 0 15px rgba(255, 20, 147, 0.6) !important;
            text-shadow: 0 0 8px #ff1493, 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
            transform: translateY(-2px) !important;
        }

        /* TTS and SFX with glowing cosmic effect */
        .chat-message-tts_chat-message-tts__2Jlxi,
        .chat-message-sfx_chat-message-sfx__OGv6q {
            border: 2px solid #00ffaa !important;
            background: linear-gradient(135deg, rgba(25, 10, 50, 0.9), rgba(75, 0, 130, 0.9)) !important;
            filter: drop-shadow(0 0 8px #00ffaa) drop-shadow(0 0 15px #8a2be2);
            box-shadow: inset 0 0 15px rgba(0, 255, 170, 0.3) !important;
            border-radius: 6px !important;
        }
        
        .chat-message-tts_message__sWVCc,
        .chat-message-sfx_message__d2Rei {
            color: #00ffaa !important;
            text-shadow: 0 0 8px #00ffaa, 1px 1px 2px rgba(0, 0, 0, 0.9) !important;
            font-family: 'Anta', sans-serif !important;
        }
        
        .chat-message-tts_timestamp__pIVv0,
        .chat-message-sfx_timestamp__ilYfg {
            color: #8a2be2 !important;
            font-weight: bold !important;
            text-shadow: 0 0 5px #8a2be2, 1px 1px 2px rgba(0, 0, 0, 0.9) !important;
            font-family: 'Anta', sans-serif !important;
        }

        /* Chat input with mystical styling */
        .chat_input__bsNw2 {
            background: linear-gradient(135deg, rgba(25, 10, 50, 0.95), rgba(75, 0, 130, 0.8)) !important;
            border: 2px solid #00ffaa !important;
            box-shadow: 0 0 20px rgba(0, 255, 170, 0.4), inset 0 0 10px rgba(138, 43, 226, 0.3) !important;
            border-radius: 6px !important;
        }

        /* Chat input text with cosmic font */
        .chat-input_chat-input__GAgOF, .chat-input_input-wrapper__rjiu1, .chat-input_input__jljCU {
            color: #00ffaa !important;
            font-family: 'Anta', sans-serif !important;
            text-shadow: 0 0 5px #00ffaa, 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
        }

        /* Stock ticker with cosmic styling */
        .stocks-bar_stocks-bar__7kNv8 {
            background: linear-gradient(90deg, rgba(25, 10, 50, 0.95), rgba(75, 0, 130, 0.95)) !important;
            border-top: 2px solid #00ffaa !important;
            color: #00ffaa !important;
            font-family: 'Anta', sans-serif !important;
            text-shadow: 0 0 5px #00ffaa, 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
        }

        /* Announcement banner with warning styling */
        .announcement-bar_announcement-bar__gcGuh {
            background: linear-gradient(135deg, rgba(220, 20, 60, 0.9), rgba(139, 0, 0, 0.9)) !important;
            color: #fff !important;
            text-shadow: 0 0 8px #dc143c, 2px 2px 4px rgba(0, 0, 0, 0.9) !important;
            border: 2px solid #dc143c !important;
            font-family: 'Anta', sans-serif !important;
            font-weight: bold !important;
            box-shadow: 0 0 15px rgba(220, 20, 60, 0.5) !important;
        }

        /* Live stream header */
        .live-stream-player_header__58imR, .live-stream-player_live-stream-player__4CHjG {
            background: linear-gradient(135deg, rgba(25, 10, 50, 0.9), rgba(75, 0, 130, 0.8)) !important;
            border: 2px solid rgba(0, 255, 170, 0.6) !important;
            box-shadow: 0 0 15px rgba(138, 43, 226, 0.4) !important;
        }

        /* Status bar at bottom */
        .status-bar_status-bar__vR_Tm {
            background: linear-gradient(90deg, rgba(25, 10, 50, 0.95), rgba(138, 43, 226, 0.8)) !important;
            border-top: 2px solid #00ffaa !important;
            color: #00ffaa !important;
            font-family: 'Anta', sans-serif !important;
            text-shadow: 0 0 5px #00ffaa, 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
        }

        /* Cinema mode with cosmic glow */
        .chat_cinema__iXQz9 {
            border: 1px solid rgba(0, 255, 170, 0.3) !important;
            box-shadow: 0 0 20px rgba(138, 43, 226, 0.2) !important;
        }

        /* Apply fonts to all elements - Anta with standard fallbacks */
        html, body, div, span, p, a, button, input, textarea, select, option, 
        h1, h2, h3, h4, h5, h6, label, li, ul, ol, dl, dt, dd,
        .chat-input_input__jljCU, .top-bar-user_display-name__bzlpw,
        * {
            font-family: 'Anta', sans-serif !important;
        }

        /* Specific adjustments for key UI elements - REMOVED */

        /* Scrollbar styling with cosmic theme */
        ::-webkit-scrollbar {
            width: 10px;
        }
        
        ::-webkit-scrollbar-track {
            background: linear-gradient(180deg, rgba(25, 10, 50, 0.8), rgba(75, 0, 130, 0.8));
            border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #00ffaa, #8a2be2);
            border-radius: 5px;
            box-shadow: 0 0 8px rgba(0, 255, 170, 0.6);
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #00cc88, #9932cc);
            box-shadow: 0 0 12px rgba(0, 255, 170, 0.8);
        }

        /* Button hover effects with cosmic glow */
        button:hover {
            background: linear-gradient(135deg, rgba(0, 255, 170, 0.2), rgba(138, 43, 226, 0.2)) !important;
            color: #00ffaa !important;
            text-shadow: 0 0 8px #00ffaa, 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
            box-shadow: 0 0 15px rgba(0, 255, 170, 0.4) !important;
            transform: translateY(-1px) !important;
        }

        /* Links with cosmic styling */
        a {
            color: #00ffaa !important;
            text-decoration: underline !important;
            text-shadow: 0 0 5px #00ffaa, 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
        }
        
        a:hover {
            color: #8a2be2 !important;
            text-shadow: 0 0 8px #8a2be2, 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
        }

        /* Top bar buttons with cosmic backgrounds */
        .top-bar_red__1Up8r {
            background: linear-gradient(135deg, rgba(220, 20, 60, 0.8), rgba(139, 0, 0, 0.8)) !important;
            border: 1px solid #dc143c !important;
            color: #fff !important;
            text-shadow: 0 0 5px #dc143c, 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
        }

        .top-bar_green__S_hiA {
            background: linear-gradient(135deg, rgba(0, 255, 170, 0.8), rgba(0, 128, 128, 0.8)) !important;
            border: 1px solid #00ffaa !important;
            color: #000 !important;
            text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
        }

        .dropdown-button_dropdown-button__X_K4O {
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.8), rgba(255, 140, 0, 0.8)) !important;
            border: 1px solid #ffd700 !important;
            color: #000 !important;
            text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
        }

        .item-nav-buttons_prize-machine__jnHNS {
            background: linear-gradient(135deg, rgba(255, 20, 147, 0.8), rgba(199, 21, 133, 0.8)) !important;
            border: 1px solid #ff1493 !important;
            color: #fff !important;
            text-shadow: 0 0 5px #ff1493, 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
        }

        .item-nav-buttons_market__28l6K {
            background: linear-gradient(135deg, rgba(255, 69, 0, 0.8), rgba(220, 20, 60, 0.8)) !important;
            border: 1px solid #ff4500 !important;
            color: #fff !important;
            text-shadow: 0 0 5px #ff4500, 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
        }

        .top-bar_link__0xN4F {
            background: linear-gradient(135deg, rgba(25, 10, 50, 0.8), rgba(75, 0, 130, 0.8)) !important;
            border: 1px solid #00ffaa !important;
            color: #00ffaa !important;
            text-shadow: 0 0 5px #00ffaa, 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
        }

        .chat_chat__2rdNg::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #00ffaa, #8a2be2, #ff1493, #00ffaa);
            background-size: 400% 400%;
            animation: cosmic-border 4s ease-in-out infinite;
            border-radius: 10px;
            z-index: -1;
        }

        @keyframes cosmic-border {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .top-bar-user_top-bar-user__VUdJm {
            background: linear-gradient(135deg, rgba(138, 43, 226, 0.8), rgba(75, 0, 130, 0.6)) !important;
            border: 2px solid #00ffaa !important;
            border-radius: 6px !important;
            padding: 6px 8px !important;
            box-shadow: 
                0 0 15px rgba(0, 255, 170, 0.4),
                inset 0 0 10px rgba(138, 43, 226, 0.2) !important;
            position: relative !important;
            overflow: visible !important;
        }

        .top-bar-user_display-name__bzlpw {
            text-shadow: none !important;
            font-weight: unset !important;
            font-family: 'Anta', sans-serif !important;
            position: relative !important;
            z-index: 2 !important;
            letter-spacing: 0.5px !important;
        }
    `
}
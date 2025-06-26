export default {
    name: 'E-Girl',
    author: 'Grizzway',
    customPingSound: 'https://files.catbox.moe/alh72d.mp3',
    
    style: `
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap');
        
        /* Site background with kawaii Hello Kitty scene */
        body, .layout_layout__5rz87, .select_options__t1ibN {
            background-image: url('https://i.imgur.com/ZuBHfWp.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-attachment: fixed !important;
            color: #ff69b4 !important;
        }

        /* Chat background - soft pink overlay for readability */
        .chat_chat__2rdNg {
            background-color: rgba(255, 182, 193, 0.92) !important;
            border: 3px solid #ff69b4 !important;
            box-shadow: 0 0 30px rgba(255, 105, 180, 0.5), inset 0 0 25px rgba(255, 192, 203, 0.3) !important;
            border-radius: 20px !important;
            backdrop-filter: blur(5px) !important;
        }
      
        /* Main UI elements with kawaii theme */
        .maejok-input-invalid, .maejok-context-message, .maejok-tts-warning-text,
        .chat_header__8kNPS, .top-bar_top-bar__X4p2n, .panel_body__O5yBA, .inventory_slots__D4IrC {
            background-color: rgba(255, 182, 193, 0.95) !important;
            border: 2px solid #ff69b4 !important;
            color: #ff1493 !important;
            box-shadow: 0 0 20px rgba(255, 105, 180, 0.4) !important;
            text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
            border-radius: 15px !important;
        }

        /* Header with cute aesthetic */
        .panel_header__T2yFW {
            background: linear-gradient(135deg, rgba(255, 182, 193, 0.95), rgba(255, 105, 180, 0.9)) !important;
            border-bottom: 3px solid #ff1493 !important;
            color: #fff !important;
            text-shadow: 0 0 10px #ff69b4, 2px 2px 4px rgba(0, 0, 0, 0.3) !important;
            box-shadow: 0 4px 20px rgba(255, 105, 180, 0.6) !important;
            border-radius: 15px 15px 0 0 !important;
        }
        
        /* Top bar with kawaii styling */
        .top-bar_top-bar__X4p2n {
            background: linear-gradient(180deg, rgba(255, 182, 193, 0.95), rgba(255, 182, 193, 0.9)) !important;
            box-shadow: 0 3px 20px rgba(255, 105, 180, 0.5) !important;
            border-bottom: 3px solid #ff69b4 !important;
            border-radius: 15px !important;
        }

        /* Context message icons */
        .maejok-context-message svg path {
            fill: #ff69b4 !important;
            filter: drop-shadow(0 0 8px #ff69b4) !important;
        }

        /* Stream containers with cute borders */
        .hls-stream-player_hls-stream-player__BJiGl,
        .live-stream-player_container__A4sNR,
        .layout_center__Vsd3b {
            border: 3px solid rgba(255, 105, 180, 0.7) !important;
            box-shadow: 0 0 25px rgba(255, 182, 193, 0.5) !important;
            border-radius: 20px !important;
        }
        
        /* Poll elements with kawaii styling */
        .poll_footer__rALdX {
            background: linear-gradient(135deg, rgba(255, 182, 193, 0.9), rgba(255, 105, 180, 0.9)) !important;
            border-top: 3px solid #ff1493 !important;
            box-shadow: 0 -3px 15px rgba(255, 105, 180, 0.4) !important;
            border-radius: 0 0 15px 15px !important;
        }

        /* Poll buttons with cute hover effects */
        .poll_vote__b_NE0 button:disabled:hover,
        .poll_vote__b_NE0 button:hover {
            background: linear-gradient(135deg, rgba(255, 20, 147, 0.9), rgba(255, 105, 180, 0.8)) !important;
            color: #ffffff !important;
            border: 3px solid #ff1493 !important;
            box-shadow: 0 0 20px rgba(255, 20, 147, 0.7) !important;
            text-shadow: 0 0 10px #ff1493, 1px 1px 2px rgba(0, 0, 0, 0.3) !important;
            transform: translateY(-3px) scale(1.05) !important;
            border-radius: 15px !important;
        }

        /* TTS and SFX with kawaii styling */
        .chat-message-tts_chat-message-tts__2Jlxi,
        .chat-message-sfx_chat-message-sfx__OGv6q {
            border: 3px solid #ff69b4 !important;
            background: linear-gradient(135deg, rgba(255, 182, 193, 0.95), rgba(255, 182, 193, 0.9)) !important;
            filter: drop-shadow(0 0 10px #ff69b4) drop-shadow(0 0 20px #ffb6c1);
            box-shadow: inset 0 0 20px rgba(255, 105, 180, 0.3) !important;
            border-radius: 15px !important;
        }
        
        .chat-message-tts_message__sWVCc,
        .chat-message-sfx_message__d2Rei {
            color: #ff1493 !important;
            text-shadow: 0 0 8px #ff69b4, 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
            font-family: 'Nunito', sans-serif !important;
            font-weight: 600 !important;
        }
        
        .chat-message-tts_timestamp__pIVv0,
        .chat-message-sfx_timestamp__ilYfg {
            color: #ff69b4 !important;
            font-weight: bold !important;
            text-shadow: 0 0 6px #ff69b4, 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
            font-family: 'Nunito', sans-serif !important;
        }

        /* Chat input with kawaii styling */
        .chat_input__bsNw2 {
            background: linear-gradient(135deg, rgba(255, 182, 193, 0.95), rgba(255, 182, 193, 0.8)) !important;
            border: 3px solid #ff69b4 !important;
            box-shadow: 0 0 25px rgba(255, 105, 180, 0.5), inset 0 0 15px rgba(255, 192, 203, 0.3) !important;
            border-radius: 20px !important;
        }

        /* Chat input text with cute font */
        .chat-input_chat-input__GAgOF, .chat-input_input-wrapper__rjiu1, .chat-input_input__jljCU {
            color: #ff1493 !important;
            font-family: 'Nunito', sans-serif !important;
            font-weight: 600 !important;
            text-shadow: 0 0 5px #ff69b4, 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
        }

        /* Stock ticker with kawaii styling */
        .stocks-bar_stocks-bar__7kNv8 {
            background: linear-gradient(90deg, rgba(255, 182, 193, 0.95), rgba(255, 182, 193, 0.95)) !important;
            border-top: 3px solid #ff69b4 !important;
            color: #ff1493 !important;
            font-family: 'Nunito', sans-serif !important;
            font-weight: 600 !important;
            text-shadow: 0 0 5px #ff69b4, 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
        }

        /* Announcement banner with cute warning styling */
        .announcement-bar_announcement-bar__gcGuh {
            background: linear-gradient(135deg, rgba(255, 20, 147, 0.9), rgba(255, 69, 181, 0.9)) !important;
            color: #fff !important;
            text-shadow: 0 0 10px #ff1493, 2px 2px 4px rgba(0, 0, 0, 0.3) !important;
            border: 3px solid #ff1493 !important;
            font-family: 'Nunito', sans-serif !important;
            font-weight: 700 !important;
            box-shadow: 0 0 20px rgba(255, 20, 147, 0.6) !important;
            border-radius: 15px !important;
        }

        /* Live stream header */
        .live-stream-player_header__58imR, .live-stream-player_live-stream-player__4CHjG {
            background: linear-gradient(135deg, rgba(255, 182, 193, 0.9), rgba(255, 182, 193, 0.8)) !important;
            border: 3px solid rgba(255, 105, 180, 0.7) !important;
            box-shadow: 0 0 20px rgba(255, 182, 193, 0.5) !important;
            border-radius: 20px !important;
        }

        /* Status bar at bottom */
        .status-bar_status-bar__vR_Tm {
            background: linear-gradient(90deg, rgba(255, 182, 193, 0.95), rgba(255, 182, 193, 0.8)) !important;
            border-top: 3px solid #ff69b4 !important;
            color: #ff1493 !important;
            font-family: 'Nunito', sans-serif !important;
            font-weight: 600 !important;
            text-shadow: 0 0 5px #ff69b4, 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
        }

        /* Cinema mode with cute glow */
        .chat_cinema__iXQz9 {
            border: 2px solid rgba(255, 105, 180, 0.4) !important;
            box-shadow: 0 0 25px rgba(255, 182, 193, 0.3) !important;
        }

        /* Apply kawaii fonts to all elements - Nunito with cute fallbacks */
        html, body, div, span, p, a, button, input, textarea, select, option, 
        h1, h2, h3, h4, h5, h6, label, li, ul, ol, dl, dt, dd,
        .chat-input_input__jljCU, .top-bar-user_display-name__bzlpw,
        * {
            font-family: 'Nunito', 'Comic Sans MS', cursive, sans-serif !important;
        }

        /* Scrollbar styling with kawaii theme */
        ::-webkit-scrollbar {
            width: 12px;
        }
        
        ::-webkit-scrollbar-track {
            background: linear-gradient(180deg, rgba(255, 182, 193, 0.8), rgba(255, 182, 193, 0.8));
            border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #ff69b4, #ff1493);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(255, 105, 180, 0.7);
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #ff1493, #ff69b4);
            box-shadow: 0 0 15px rgba(255, 105, 180, 0.9);
        }

        /* Button hover effects with kawaii bounce */
        button:hover {
            background: linear-gradient(135deg, rgba(255, 105, 180, 0.3), rgba(255, 182, 193, 0.3)) !important;
            color: #ff1493 !important;
            text-shadow: 0 0 10px #ff69b4, 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
            box-shadow: 0 0 20px rgba(255, 105, 180, 0.5) !important;
            transform: translateY(-2px) scale(1.02) !important;
            border-radius: 12px !important;
        }

        /* Links with kawaii styling */
        a {
            color: #ff1493 !important;
            text-decoration: underline !important;
            text-shadow: 0 0 6px #ff69b4, 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
        }
        
        a:hover {
            color: #ff69b4 !important;
            text-shadow: 0 0 10px #ff69b4, 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
            transform: scale(1.05) !important;
        }

        /* Top bar buttons with kawaii backgrounds */
        .top-bar_red__1Up8r {
            background: linear-gradient(135deg, rgba(255, 20, 147, 0.8), rgba(220, 20, 60, 0.8)) !important;
            border: 2px solid #ff1493 !important;
            color: #fff !important;
            text-shadow: 0 0 8px #ff1493, 1px 1px 2px rgba(0, 0, 0, 0.3) !important;
            border-radius: 12px !important;
        }

        .top-bar_green__S_hiA {
            background: linear-gradient(135deg, rgba(255, 105, 180, 0.8), rgba(255, 182, 193, 0.8)) !important;
            border: 2px solid #ff69b4 !important;
            color: #fff !important;
            text-shadow: 0 0 8px #ff69b4, 1px 1px 2px rgba(0, 0, 0, 0.3) !important;
            border-radius: 12px !important;
        }

        .dropdown-button_dropdown-button__X_K4O {
            background: linear-gradient(135deg, rgba(255, 192, 203, 0.8), rgba(255, 182, 193, 0.8)) !important;
            border: 2px solid #ffb6c1 !important;
            color: #ff1493 !important;
            text-shadow: 0 0 6px #ff69b4, 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
            border-radius: 12px !important;
        }

        .item-nav-buttons_prize-machine__jnHNS {
            background: linear-gradient(135deg, rgba(255, 20, 147, 0.8), rgba(255, 105, 180, 0.8)) !important;
            border: 2px solid #ff1493 !important;
            color: #fff !important;
            text-shadow: 0 0 8px #ff1493, 1px 1px 2px rgba(0, 0, 0, 0.3) !important;
            border-radius: 12px !important;
        }

        .item-nav-buttons_market__28l6K {
            background: linear-gradient(135deg, rgba(255, 69, 181, 0.8), rgba(255, 20, 147, 0.8)) !important;
            border: 2px solid #ff45b5 !important;
            color: #fff !important;
            text-shadow: 0 0 8px #ff45b5, 1px 1px 2px rgba(0, 0, 0, 0.3) !important;
            border-radius: 12px !important;
        }

        .top-bar_link__0xN4F {
            background: linear-gradient(135deg, rgba(255, 182, 193, 0.8), rgba(255, 182, 193, 0.8)) !important;
            border: 2px solid #ff69b4 !important;
            color: #ff1493 !important;
            text-shadow: 0 0 6px #ff69b4, 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
            border-radius: 12px !important;
        }

        /* Kawaii animated border for chat */
        .chat_chat__2rdNg::before {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            background: linear-gradient(45deg, #ff69b4, #ff1493, #ffb6c1, #ff69b4);
            background-size: 400% 400%;
            animation: kawaii-border 3s ease-in-out infinite;
            border-radius: 23px;
            z-index: -1;
        }

        @keyframes kawaii-border {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        /* User display styling */
        .top-bar-user_top-bar-user__VUdJm {
            background: linear-gradient(135deg, rgba(255, 182, 193, 0.9), rgba(255, 105, 180, 0.7)) !important;
            border: 3px solid #ff69b4 !important;
            border-radius: 15px !important;
            padding: 8px 12px !important;
            box-shadow: 
                0 0 20px rgba(255, 105, 180, 0.5),
                inset 0 0 15px rgba(255, 192, 203, 0.3) !important;
            position: relative !important;
            overflow: visible !important;
        }

        .top-bar-user_display-name__bzlpw {
            text-shadow: 0 0 8px #ff69b4, 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
            font-weight: 700 !important;
            font-family: 'Nunito', sans-serif !important;
            position: relative !important;
            z-index: 2 !important;
            letter-spacing: 0.5px !important;
        }

        /* Cute sparkle effects */
        .chat_chat__2rdNg::after {
            content: '✨💖✨';
            position: absolute;
            top: -15px;
            right: 10px;
            font-size: 16px;
            animation: sparkle 2s ease-in-out infinite alternate;
            z-index: 10;
        }

        @keyframes sparkle {
            0% { transform: translateY(0px) scale(1); opacity: 0.7; }
            100% { transform: translateY(-5px) scale(1.1); opacity: 1; }
        }
    `
}
export default {
    name: 'Chao Garden',
    author: 'Grizzway',
    customPingSound: 'https://files.catbox.moe/1qbutz.mp3',
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
  }
  
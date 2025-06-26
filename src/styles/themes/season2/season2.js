export default {
    name: 'Season 2',
    author: 'Custom',
    customPingSound: 'https://files.catbox.moe/alh72d.mp3',
    
    style: `
        @import url('https://fonts.googleapis.com/css2?family=Highway+Gothic:wght@400;700&display=swap');

        /* Site background with desert landscape */
        body, .layout_layout__5rz87, .select_options__t1ibN {
            background-image: url('https://i.imgur.com/fIiYl9I.png') !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-attachment: fixed !important;
            color: #cbc6cb !important;
            font-family: 'Highway Gothic', Arial, sans-serif !important;
        }

        /* Base module styling with metallic gradient and texture overlay */
        .chat_header__8kNPS,
        .top-bar_top-bar__X4p2n,
        .inventory_slots__D4IrC,
        .maejok-input-invalid,
        .maejok-context-message,
        .maejok-tts-warning-text {
            background: 
                url('https://i.imgur.com/kogxhFB.png'),
                url('https://i.imgur.com/5WkCJKE.png'),
                linear-gradient(90deg, #88868b, #a7a2a6 10%, #a09b9f 50%, #8f8d93 75%, #625f60 90%, #4a4645) !important;
            background-size: 64px 64px, 32px 32px, cover !important;
            background-repeat: repeat, repeat, no-repeat !important;
            background-blend-mode: overlay, soft-light, normal !important;
            border-radius: 4px !important;
            border: 3px outset hsla(300, 5%, 79%, .75) !important;
            outline: 2px solid rgba(0, 0, 0, .5) !important;
            box-shadow: -2px 2px 1px rgba(0, 0, 0, .75), inset 0 0 4px #cbc6cb, 4px 4px 0 rgba(0, 0, 0, .75) !important;
            filter: drop-shadow(-2px 4px 0 rgba(0, 0, 0, .5)) !important;
            color: #cbc6cb !important;
            position: relative !important;
            z-index: 1 !important;
        }

        /* Panel header - clean styling without extra background, positioned better with screws */
        .panel_header__T2yFW {
            background: transparent !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            filter: none !important;
            color: #cbc6cb !important;
            position: relative !important;
            z-index: 1 !important;
            padding: 4px 24px 4px 24px !important; /* Reduced padding to align with screws */
            margin: 0 !important; /* Remove negative margin */
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
        }

        /* Panel body with sunken appearance and texture overlay - full width */
        .panel_body__O5yBA {
            background: 
                url('https://i.imgur.com/kogxhFB.png'),
                url('https://i.imgur.com/5WkCJKE.png'),
                linear-gradient(90deg, #88868b, #a7a2a6 10%, #a09b9f 50%, #8f8d93 75%, #625f60 90%, #4a4645) !important;
            background-size: 64px 64px, 32px 32px, cover !important;
            background-repeat: repeat, repeat, no-repeat !important;
            background-blend-mode: overlay, soft-light, normal !important;
            border-radius: 4px !important;
            contain: content !important;
            border: 3px inset hsla(300, 5%, 79%, .75) !important;
            outline: 2px solid rgba(0, 0, 0, .5) !important;
            box-shadow: inset -2px 2px 1px rgba(0, 0, 0, .75), inset 0 0 4px rgba(0, 0, 0, .5), inset 4px 4px 0 rgba(0, 0, 0, .75) !important;
            filter: drop-shadow(2px -2px 0 rgba(0, 0, 0, .3)) !important;
            color: #cbc6cb !important;
            position: relative !important;
            z-index: 1 !important;
            width: calc(100% - 16px) !important; /* Full width minus panel padding */
            margin: 0 8px !important; /* Center with panel padding */
            padding: 8px !important; /* Consistent padding */
            flex: 1 !important; /* Take remaining space */
        }

        /* Chat background - dark grey */
        .chat_chat__2rdNg {
            background: #2a2a2a !important;
            border-radius: 4px !important;
            border: 3px outset hsla(300, 5%, 79%, .75) !important;
            outline: 2px solid rgba(0, 0, 0, .5) !important;
            box-shadow: -2px 2px 1px rgba(0, 0, 0, .75), inset 0 0 4px #cbc6cb, 4px 4px 0 rgba(0, 0, 0, .75) !important;
            filter: drop-shadow(-2px 4px 0 rgba(0, 0, 0, .5)) !important;
            color: #cbc6cb !important;
            position: relative !important;
            z-index: 1 !important;
        }

        /* Add all 4 screws to video player, TTS/SFX messages, status bar, and panels */
        /* Top left screws */
        .layout_center__Vsd3b::before,
        .chat-message-tts_chat-message-tts__2Jlxi::before,
        .chat-message-sfx_chat-message-sfx__OGv6q::before,
        .status-bar_status-bar__vR_Tm::before {
            content: '';
            position: absolute;
            top: 8px;
            left: 8px;
            width: 16px;
            height: 16px;
            background-image: url('https://i.imgur.com/SisRwLf.png');
            background-size: contain;
            background-repeat: no-repeat;
            z-index: 10;
            pointer-events: none;
        }

        /* Top right screws */
        .layout_center__Vsd3b::after,
        .chat-message-tts_chat-message-tts__2Jlxi::after,
        .chat-message-sfx_chat-message-sfx__OGv6q::after,
        .status-bar_status-bar__vR_Tm::after {
            content: '';
            position: absolute;
            top: 8px;
            right: 8px;
            width: 16px;
            height: 16px;
            background-image: url('https://i.imgur.com/R89LMx7.png');
            background-size: contain;
            background-repeat: no-repeat;
            z-index: 10;
            pointer-events: none;
        }

        /* Smaller screws for panels - all 4 corners */
        /* Top left */
        .panel_panel__Tdjid::before {
            content: '';
            position: absolute;
            top: 8px;
            left: 8px;
            width: 12px;
            height: 12px;
            background-image: url('https://i.imgur.com/SisRwLf.png');
            background-size: contain;
            background-repeat: no-repeat;
            z-index: 10;
            pointer-events: none;
        }

        /* Top right */
        .panel_panel__Tdjid::after {
            content: '';
            position: absolute;
            top: 8px;
            right: 8px;
            width: 12px;
            height: 12px;
            background-image: url('https://i.imgur.com/R89LMx7.png');
            background-size: contain;
            background-repeat: no-repeat;
            z-index: 10;
            pointer-events: none;
        }

        /* Bottom screws styling - will be added via JavaScript to all screwed elements */
        .screw-bottom-left {
            position: absolute !important;
            bottom: 8px !important;
            left: 8px !important;
            width: 16px !important;
            height: 16px !important;
            background-image: url('https://i.imgur.com/5vm1q5n.png') !important;
            background-size: contain !important;
            background-repeat: no-repeat !important;
            z-index: 10 !important;
            pointer-events: none !important;
        }

        .screw-bottom-right {
            position: absolute !important;
            bottom: 8px !important;
            right: 8px !important;
            width: 16px !important;
            height: 16px !important;
            background-image: url('https://i.imgur.com/UJD6Rbb.png') !important;
            background-size: contain !important;
            background-repeat: no-repeat !important;
            z-index: 10 !important;
            pointer-events: none !important;
        }

        /* Smaller bottom screws for panels */
        .panel_panel__Tdjid .screw-bottom-left {
            width: 12px !important;
            height: 12px !important;
        }

        .panel_panel__Tdjid .screw-bottom-right {
            width: 12px !important;
            height: 12px !important;
        }

        /* Chat input styling */
        .chat_input__bsNw2 {
            border-radius: 4px !important;
            border: 3px outset hsla(300, 5%, 79%, .75) !important;
            outline: 2px solid rgba(0, 0, 0, .5) !important;
            box-shadow: -2px 2px 1px rgba(0, 0, 0, .75), inset 0 0 4px #cbc6cb, 4px 4px 0 rgba(0, 0, 0, .75) !important;
            filter: drop-shadow(-2px 4px 0 rgba(0, 0, 0, .5)) !important;
        }

        .chat-input_chat-input__GAgOF {
            background: 
                url('https://i.imgur.com/kogxhFB.png'),
                url('https://i.imgur.com/5WkCJKE.png'),
                linear-gradient(90deg, #88868b, #a7a2a6 10%, #a09b9f 50%, #8f8d93 75%, #625f60 90%, #4a4645) !important;
            background-size: 64px 64px, 32px 32px, cover !important;
            background-repeat: repeat, repeat, no-repeat !important;
            background-blend-mode: overlay, soft-light, normal !important;
            color: #cbc6cb !important;
            font-family: 'Highway Gothic', Arial, sans-serif !important;
        }

        /* Chat input text */
        .chat-input_input__jljCU {
            color: #cbc6cb !important;
            font-family: 'Highway Gothic', Arial, sans-serif !important;
        }

        /* Inner stream containers - remove metallic styling to avoid conflicts */
        .hls-stream-player_hls-stream-player__BJiGl,
        .live-stream-player_container__A4sNR,
        .live-stream-player_header__58imR,
        .live-stream-player_live-stream-player__4CHjG,
        [class*="live-stream-player-camera-"] {
            background: transparent !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            filter: none !important;
            position: relative !important;
            border-radius: 0 !important;
        }

        .stocks-panel_trade__n4bjt {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 4px !important;
            align-items: center !important;
            justify-content: flex-end !important;
        }

        /* Poll elements with texture overlay */
        .poll_footer__rALdX {
            background: 
                url('https://i.imgur.com/kogxhFB.png'),
                url('https://i.imgur.com/5WkCJKE.png'),
                linear-gradient(90deg, #88868b, #a7a2a6 10%, #a09b9f 50%, #8f8d93 75%, #625f60 90%, #4a4645) !important;
            background-size: 64px 64px, 32px 32px, cover !important;
            background-repeat: repeat, repeat, no-repeat !important;
            background-blend-mode: overlay, soft-light, normal !important;
            border-radius: 4px !important;
            border: 3px outset hsla(300, 5%, 79%, .75) !important;
            outline: 2px solid rgba(0, 0, 0, .5) !important;
            box-shadow: -2px 2px 1px rgba(0, 0, 0, .75), inset 0 0 4px #cbc6cb, 4px 4px 0 rgba(0, 0, 0, .75) !important;
            filter: drop-shadow(-2px 4px 0 rgba(0, 0, 0, .5)) !important;
        }

        /* Poll buttons - revert to original industrial styling */
        .poll_vote__b_NE0 button:disabled:hover,
        .poll_vote__b_NE0 button:hover {
            background: linear-gradient(90deg, #a7a2a6, #cbc6cb 20%, #b8b3b7 50%, #9c9a9f 75%, #7a777c 90%, #5d5a5b) !important;
            color: #2c2a2b !important;
            border: 3px inset hsla(300, 5%, 79%, .75) !important;
            outline: 2px solid rgba(0, 0, 0, .5) !important;
            box-shadow: inset -2px 2px 1px rgba(0, 0, 0, .75), inset 0 0 4px #e6e1e5, inset 4px 4px 0 rgba(0, 0, 0, .75) !important;
        }

        /* Links styling */
        a {
            color: #e6e1e5 !important;
            text-decoration: underline !important;
        }

        a:hover {
            color: #cbc6cb !important;
        }

        /* TTS and SFX styling with texture overlay */
        .chat-message-tts_chat-message-tts__2Jlxi,
        .chat-message-sfx_chat-message-sfx__OGv6q {
            background: 
                url('https://i.imgur.com/kogxhFB.png'),
                url('https://i.imgur.com/5WkCJKE.png'),
                linear-gradient(90deg, #88868b, #a7a2a6 10%, #a09b9f 50%, #8f8d93 75%, #625f60 90%, #4a4645) !important;
            background-size: 64px 64px, 32px 32px, cover !important;
            background-repeat: repeat, repeat, no-repeat !important;
            background-blend-mode: overlay, soft-light, normal !important;
            border-radius: 4px !important;
            border: 3px outset hsla(300, 5%, 79%, .75) !important;
            outline: 2px solid rgba(0, 0, 0, .5) !important;
            box-shadow: -2px 2px 1px rgba(0, 0, 0, .75), inset 0 0 4px #cbc6cb, 4px 4px 0 rgba(0, 0, 0, .75) !important;
            filter: drop-shadow(-2px 4px 0 rgba(0, 0, 0, .5)) !important;
            position: relative !important;
            padding: 8px 28px 8px 28px !important;
        }

        /* TTS/SFX icon positioning to avoid screw overlap */
        .chat-message-tts_icon__DWVlb,
        .chat-message-sfx_icon__DWVlb {
            margin-left: 30px !important;
        }

        /* TTS/SFX message area styling */
        .chat-message-tts_message__sWVCc,
        .chat-message-sfx_message__d2Rei {
            margin-left: 10px !important;
            margin-right: 10px !important;
        }

        .chat-message-tts_message__sWVCc,
        .chat-message-sfx_message__d2Rei,
        .chat-message-tts_timestamp__pIVv0,
        .chat-message-sfx_timestamp__ilYfg {
            color: #cbc6cb !important;
            font-family: 'Highway Gothic', Arial, sans-serif !important;
        }

        /* Chat timestamp styling - lime green */
        .chat-message-default_timestamp__sGwZy {
            color: #32ff32 !important;
            font-family: 'Highway Gothic', Arial, sans-serif !important;
        }

        .stocks-bar_stocks-bar__7kNv8 {
            background: black !important; 
        }

        /* Stock ticker with texture overlay */
        .layout_bottom__qRsMw {
            background: 
                url('https://i.imgur.com/kogxhFB.png'),
                url('https://i.imgur.com/5WkCJKE.png'),
                linear-gradient(90deg, #88868b, #a7a2a6 10%, #a09b9f 50%, #8f8d93 75%, #625f60 90%, #4a4645) !important;
            background-size: 64px 64px, 32px 32px, cover !important;
            background-repeat: repeat, repeat, no-repeat !important;
            background-blend-mode: overlay, soft-light, normal !important;
            border-radius: 4px !important;
            border: 3px outset hsla(300, 5%, 79%, .75) !important;
            outline: 2px solid rgba(0, 0, 0, .5) !important;
            box-shadow: -2px 2px 1px rgba(0, 0, 0, .75), inset 0 0 4px #cbc6cb, 4px 4px 0 rgba(0, 0, 0, .75) !important;
            filter: drop-shadow(-2px 4px 0 rgba(0, 0, 0, .5)) !important;
            color: #cbc6cb !important;
            font-family: 'Highway Gothic', Arial, sans-serif !important;
        }

        /* Announcement banner */
        .announcement-bar_announcement-bar__gcGuh {
            background: linear-gradient(90deg, #d4622a, #e67335 10%, #df6b30 50%, #cc5f2b 75%, #a04d21 90%, #7d3a19) !important;
            border-radius: 4px !important;
            border: 3px outset hsla(25, 70%, 60%, .75) !important;
            outline: 2px solid rgba(0, 0, 0, .5) !important;
            box-shadow: -2px 2px 1px rgba(0, 0, 0, .75), inset 0 0 4px #f2a373, 4px 4px 0 rgba(0, 0, 0, .75) !important;
            filter: drop-shadow(-2px 4px 0 rgba(0, 0, 0, .5)) !important;
            color: #fff !important;
            font-family: 'Highway Gothic', Arial, sans-serif !important;
            font-weight: bold !important;
        }

        /* Status bar with texture overlay and proper spacing for screws */
        .status-bar_status-bar__vR_Tm {
            background: 
                url('https://i.imgur.com/kogxhFB.png'),
                url('https://i.imgur.com/5WkCJKE.png'),
                linear-gradient(90deg, #88868b, #a7a2a6 10%, #a09b9f 50%, #8f8d93 75%, #625f60 90%, #4a4645) !important;
            background-size: 64px 64px, 32px 32px, cover !important;
            background-repeat: repeat, repeat, no-repeat !important;
            background-blend-mode: overlay, soft-light, normal !important;
            border-radius: 4px !important;
            border: 3px outset hsla(300, 5%, 79%, .75) !important;
            outline: 2px solid rgba(0, 0, 0, .5) !important;
            box-shadow: -2px 2px 1px rgba(0, 0, 0, .75), inset 0 0 4px #cbc6cb, 4px 4px 0 rgba(0, 0, 0, .75) !important;
            filter: drop-shadow(-2px 4px 0 rgba(0, 0, 0, .5)) !important;
            color: #cbc6cb !important;
            font-family: 'Highway Gothic', Arial, sans-serif !important;
            position: relative !important;
            padding: 10px 28px 10px 28px !important;
        }

        /* Panel styling with metallic area, screws, and texture overlay - better structure */
        .panel_panel__Tdjid {
            background: 
                url('https://i.imgur.com/kogxhFB.png'),
                url('https://i.imgur.com/5WkCJKE.png'),
                linear-gradient(90deg, #88868b, #a7a2a6 10%, #a09b9f 50%, #8f8d93 75%, #625f60 90%, #4a4645) !important;
            background-size: 64px 64px, 32px 32px, cover !important;
            background-repeat: repeat, repeat, no-repeat !important;
            background-blend-mode: overlay, soft-light, normal !important;
            border-radius: 4px !important;
            border: 3px outset hsla(300, 5%, 79%, .75) !important;
            outline: 2px solid rgba(0, 0, 0, .5) !important;
            box-shadow: -2px 2px 1px rgba(0, 0, 0, .75), inset 0 0 4px #cbc6cb, 4px 4px 0 rgba(0, 0, 0, .75) !important;
            filter: drop-shadow(-2px 4px 0 rgba(0, 0, 0, .5)) !important;
            position: relative !important;
            padding: 8px !important; /* Reduced padding */
            display: flex !important;
            flex-direction: column !important;
        }

        /* Ensure panel content containers use full width */
        .panel_no-padding__woODX .panel_body__O5yBA {
            padding: 0 !important;
            margin: 0 8px !important; /* Keep margin for visual spacing */
            width: calc(100% - 16px) !important; /* Account for margin */
        }

        /* Specific styling for stocks panel content */
        .stocks-panel_stocks__nVwY_ {
            width: 100% !important;
            max-width: none !important;
        }

        .stocks-panel_stocks-panel-item__eXyaT {
            width: 100% !important;
            gap: 2px !important;
            align-items: center !important;
            padding: 4px 0px !important;
            margin-bottom: 2px !important;
        }

        /* Stock panel buttons styling */
        .stocks-panel_button__T6lWW {
            background-image: url('https://i.imgur.com/rMQHz9Z.png') !important;
            background-size: 100% 100% !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            color: #000000 !important;
            border: 2px outset hsla(300, 5%, 79%, .75) !important;
            border-radius: 2px !important;
            padding: 2px 6px !important;
            font-family: 'Highway Gothic', Arial, sans-serif !important;
            font-size: 11px !important;
            margin: 0 1px !important;
            text-shadow: none !important;
        }

        .layout_layout__5rz87 {
            margin-right: 4px !important;
            overflow: unset !important;
        }   

        .layout_layout__5rz87 {
            padding: 8px !important;
        }

        .layout_bottom__qRsMw,
        .layout_center-bottom__yhDOH,
        .layout_center__Vsd3b {
            max-width: 1200px !important;
            width: 1200px !important;
            justify-self: right !important;
        }

        .layout_left__O2uku {
            width: 290px !important;
            overflow-x: clip !important;
            overflow-y: scroll !important;
        }
        
        .dropdown-button_dropdown-button-options__ZdUjh {
            background: 
                url('https://i.imgur.com/kogxhFB.png'),
                url('https://i.imgur.com/5WkCJKE.png'),
                linear-gradient(90deg, #88868b, #a7a2a6 10%, #a09b9f 50%, #8f8d93 75%, #625f60 90%, #4a4645) !important;
            border: 2px inset hsla(300, 5%, 79%, .75) !important;
        }

        .missions_mission__xabfm, .missions_complete__LiCcu, .missions_selected__35qyi {
            background-image: url('https://i.imgur.com/vOs9u2v.png') !important;
            background-repeat: no-repeat !important;
            background-size: cover !important;
            background-position-x: center !important;
            background-position-y: bottom !important;
            background-size: initial !important;
            background-repeat: initial !important;
            background-attachment: initial !important;
            background-origin: initial !important;
            background-clip: initial !important;
        }

        .stocks-panel_button__T6lWW:hover {
            border: 2px inset hsla(300, 5%, 79%, .75) !important;
            box-shadow: none !important;
            filter: none !important;
            background: 
                url('https://i.imgur.com/kogxhFB.png'),
                url('https://i.imgur.com/5WkCJKE.png'),
                linear-gradient(90deg, #88868b, #a7a2a6 10%, #a09b9f 50%, #8f8d93 75%, #625f60 90%, #4a4645) !important;
        }

        /* Inventory styling */
        .inventory_inventory__Qj_q0,
        .inventory_slots__D4IrC {
            width: 100% !important;
            max-width: none !important;
            background-color: black !important;
        }

        /* Inventory item styling */
        .inventory-item_inventory-item__B8vMd {
            background: linear-gradient(180deg, rgb(25, 25, 25), rgb(20, 20, 20) 20%, rgb(15, 15, 15) 50%, rgb(10, 10, 10) 75%,rgb(5, 5, 5) 90%,rgb(0, 0, 0)) !important;
            border: 2px inset hsl(0, 0.00%, 34.10%) !important;
            border-radius: 2px !important;
        }

        .inventory-item_inventory-item__B8vMd:not(.inventory-item_empty__HwVuD) {
            background: linear-gradient(180deg, rgb(25, 25, 25), rgb(20, 20, 20) 20%, rgb(15, 15, 15) 50%, rgb(10, 10, 10) 75%,rgb(5, 5, 5) 90%,rgb(0, 0, 0)) !important;
            border: 2px inset hsl(0, 0.00%, 34.10%) !important;
        }

        /* Cinema mode with texture overlay */
        .chat_cinema__iXQz9 {
            background: 
                url('https://i.imgur.com/kogxhFB.png'),
                url('https://i.imgur.com/5WkCJKE.png'),
                linear-gradient(90deg, #88868b, #a7a2a6 10%, #a09b9f 50%, #8f8d93 75%, #625f60 90%, #4a4645) !important;
            background-size: 64px 64px, 32px 32px, cover !important;
            background-repeat: repeat, repeat, no-repeat !important;
            background-blend-mode: overlay, soft-light, normal !important;
            border-radius: 4px !important;
            border: 3px outset hsla(300, 5%, 79%, .75) !important;
            outline: 2px solid rgba(0, 0, 0, .5) !important;
            box-shadow: -2px 2px 1px rgba(0, 0, 0, .75), inset 0 0 4px #cbc6cb, 4px 4px 0 rgba(0, 0, 0, .75) !important;
            filter: drop-shadow(-2px 4px 0 rgba(0, 0, 0, .5)) !important;
        }

        /* Apply Highway Gothic font to all elements */
        html, body, div, span, p, a, button, input, textarea, select, option,
        h1, h2, h3, h4, h5, h6, label, li, ul, ol, dl, dt, dd,
        .chat-input_input__jljCU, .top-bar-user_display-name__bzlpw,
        * {
            font-family: 'Highway Gothic', Arial, sans-serif !important;
        }

        .chat-input_input-wrapper__rjiu1 {
            background: #000000 !important;
            background-color: #000000 !important;
            font-family: 'Highway Gothic', Arial, sans-serif !important;
            color: #cbc6cb !important;
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: linear-gradient(180deg, #625f60, #4a4645);
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.5);
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #a7a2a6, #88868b);
            border-radius: 4px;
            border: 2px outset hsla(300, 5%, 79%, .75);
            box-shadow: inset 0 0 2px #cbc6cb;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #cbc6cb, #a7a2a6);
        }

        /* Specific button classes with custom image background */
        #grizz-config-button,
        .dropdown-button_dropdown-button__X_K4O,
        .top-bar_link__0xN4F.top-bar_green__S_hiA,
        .top-bar_link__0xN4F.top-bar_red__1Up8r,
        .item-nav-buttons_prize-machine__jnHNS,
        .item-nav-buttons_market__28l6K {
            background-image: url('https://i.imgur.com/rMQHz9Z.png') !important;
            background-size: 100% 100% !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            border: 2px solid rgba(0, 0, 0, 0.3) !important;
            border-radius: 4px !important;
            color: #333 !important;
            font-family: 'Highway Gothic', Arial, sans-serif !important;
            padding: 8px 12px !important;
            text-shadow: none !important;
        }

        #grizz-config-button:hover,
        .dropdown-button_dropdown-button__X_K4O:hover,
        .top-bar_link__0xN4F.top-bar_green__S_hiA:hover,
        .top-bar_link__0xN4F.top-bar_red__1Up8r:hover,
        .item-nav-buttons_prize-machine__jnHNS:hover,
        .item-nav-buttons_market__28l6K:hover {
            background-image: url('https://i.imgur.com/rMQHz9Z.png') !important;
            background-size: 100% 100% !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            color: #000 !important;
            filter: brightness(1.5) saturate(1) !important;
            box-shadow: 0 0 8px hsla(0, 0%, 100%, 0.8) !important;
            text-shadow: none !important;
        }

        /* User display - remove background styling */
        .top-bar-user_top-bar-user__VUdJm {
            background: none !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            filter: none !important;
            padding: 6px 8px !important;
            position: relative !important;
        }

        .top-bar-user_display-name__bzlpw {
            font-family: 'Highway Gothic', Arial, sans-serif !important;
            font-weight: normal !important;
        }

        .chat_presence__90XuO {
            color: lime !important;
            background: black !important;
            padding-left: 5px !important;
        }

        /* Logo replacement with video - container styling */
        .top-bar_logo__XL0_C {
            width: 400px !important;
            height: 60px !important;
            padding-top: 4px !important;
            padding-bottom: 4px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            position: relative !important;
        }

        /* Hide all original logo images */
        .top-bar_logo__XL0_C img {
            display: none !important;
        }

        /* Video element styling - doubled size with overflow cropping */
        .top-bar_logo__XL0_C video {
            width: 484px !important;
            height: 120px !important;
            object-fit: contain !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            z-index: 1 !important;
        }

        /* Cinema mode overrides - ONLY for true cinema mode */
        .live-stream-player_cinema__yPkWC .layout_center__Vsd3b {
            background: transparent !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            filter: none !important;
            padding: 0 !important;
            border-radius: 0 !important;
        }

        .experience-daily-login_experience-daily-login__S_LRK {
            background-image: url('https://i.imgur.com/GDKPrL7.png') !important;
            background-size: 100% 100% !important;
        }

        .experience-daily-login_experience-daily-login__S_LRK:hover {    
            background-image: url('https://i.imgur.com/GDKPrL7.png') !important;
            background-size: 100% 100% !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            color: #000 !important;
            filter: brightness(1.5) saturate(1) !important;
            box-shadow: 0 0 8px hsla(0, 0%, 100%, 0.8) !important;
            text-shadow: none !important;
        }

        .live-stream-player_cinema__yPkWC .layout_center__Vsd3b::before,
        .live-stream-player_cinema__yPkWC .layout_center__Vsd3b::after,
        .live-stream-player_cinema__yPkWC .screw-bottom-left,
        .live-stream-player_cinema__yPkWC .screw-bottom-right {
            display: none !important;
        }

        .live-stream-player_cinema__yPkWC .layout_bottom__qRsMw,
        .live-stream-player_cinema__yPkWC .layout_center-bottom__yhDOH,
        .live-stream-player_cinema__yPkWC .layout_center__Vsd3b {
            max-width: none !important;
            width: 100% !important;
            justify-self: stretch !important;
        }
    `
}
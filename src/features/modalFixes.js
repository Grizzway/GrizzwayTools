export function modalFixesFeature() {
    console.log('[Grizzway Tools] Modal fixes initialized');
    
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
    
    const styleElement = document.createElement('style');
    styleElement.id = 'grizzway-modal-fixes';
    styleElement.textContent = modalCSS;
    
    const existing = document.getElementById('grizzway-modal-fixes');
    if (existing) existing.remove();
    
    document.head.appendChild(styleElement);
    
    console.log('[Grizzway Tools] Modal CSS applied');
}
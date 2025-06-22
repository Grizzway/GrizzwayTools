export function profileFixFeature() {
    console.log('[Grizzway Tools] Profile fix feature initialized');
    
    function profileFix() {
        const profileModal = document.querySelector('.profile-modal_profile-modal__4mjE7');
        if (!profileModal || profileModal.offsetParent === null) return;

        setTimeout(() => {
            const editForm = profileModal.querySelector('.user-update-profile_user-update-profile__sa20I');
            const viewBio = profileModal.querySelector('.user-profile_bio__nzdwR');
            const clanActions = profileModal.querySelector('.user-profile_clan-actions__aS32x');
            const header = profileModal.querySelector('.user-profile_header__zP1kv');

            if (editForm) {
                console.log('[Grizzway Tools] Profile EDIT mode detected');
                fixEditModeOriginal(editForm);
            } else if (viewBio && clanActions && header) {
                console.log('[Grizzway Tools] Profile VIEW mode detected');
                fixViewMode(viewBio, clanActions, header);
            }
            
        }, 100);
    }
        
    function fixViewMode(bio, clanActions, header) {
        if (header.contains(bio) && header.nextElementSibling === clanActions) {
            console.log('[Grizzway Tools] Profile VIEW already fixed');
            return;
        }

        const userInfo = header.querySelector('.user-profile_info__eFefT');
        if (userInfo && !header.contains(bio)) {
            bio.remove();
            userInfo.insertAdjacentElement('afterend', bio);
            console.log('[Grizzway Tools] Bio repositioned in header');
        }

        if (header.nextElementSibling !== clanActions) {
            clanActions.remove();
            header.insertAdjacentElement('afterend', clanActions);
            console.log('[Grizzway Tools] Clan actions repositioned');
        }
    }
    
    profileFix();
}

export function observeProfileFix() {
    console.log('[Grizzway Tools] Profile fix observer initialized');
    
    const profileObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) {
                    const modal = node.querySelector && node.querySelector('.profile-modal_profile-modal__4mjE7');
                    if (modal || (node.classList && node.classList.contains('profile-modal_profile-modal__4mjE7'))) {
                        console.log('[Grizzway Tools] Profile modal detected');
                        setTimeout(() => {
                            profileFixFeature();
                        }, 200);
                    }
                }
            });
        });
        
        const modal = document.querySelector('.profile-modal_profile-modal__4mjE7');
        if (modal && modal.offsetParent !== null) {
            profileFixFeature();
        }
    });

    profileObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
}

export function addProfileEditingCSS() {
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
    
    const styleElement = document.createElement('style');
    styleElement.id = 'grizzway-profile-edit-fixes';
    styleElement.textContent = profileEditCSS;
    
    const existing = document.getElementById('grizzway-profile-edit-fixes');
    if (existing) existing.remove();
    
    document.head.appendChild(styleElement);
    
    console.log('[Grizzway Tools] Original profile editing CSS applied');
}
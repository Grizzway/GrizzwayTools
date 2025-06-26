export default [
    () => {
        console.log('[Season 2 Theme] Theme warning initialized...');
        const showThemeWarning = () => {
            alert("This theme is a bit broken. If any issues are visible, just refresh. Clickable zones are broken in theater mode and in normal mode in some rooms");
            console.log('[Season 2 Theme] Warning alert displayed');
        };
        setTimeout(showThemeWarning, 500);
        return () => {
            console.log('[Season 2 Theme] Theme warning cleaned up');
        };
    },
    () => {
        console.log('[Season 2 Theme] Cinema mode layout manager initialized...');

        let cinemaObserver = null;
        let lastCinemaState = false;
        let cinemaOverrideStyleElement = null;

        const cinemaLayoutOverrides = `
            /* Only apply cinema overrides to ACTUAL cinema mode with the proper class */
            .live-stream-player_cinema__yPkWC .layout_center__Vsd3b {
                background: transparent !important;
                border: none !important;
                outline: none !important;
                box-shadow: none !important;
                filter: none !important;
                padding: 0 !important;
                border-radius: 0 !important;
            }

            .live-stream-player_cinema__yPkWC .layout_center__Vsd3b::before,
            .live-stream-player_cinema__yPkWC .layout_center__Vsd3b::after {
                display: none !important;
            }

            .live-stream-player_cinema__yPkWC .layout_bottom__qRsMw,
            .live-stream-player_cinema__yPkWC .layout_center-bottom__yhDOH,
            .live-stream-player_cinema__yPkWC .layout_center__Vsd3b {
                max-width: none !important;
                width: 100% !important;
                justify-self: stretch !important;
            }

            .live-stream-player_cinema__yPkWC .layout_left__O2uku {
                width: auto !important;
            }

            .live-stream-player_cinema__yPkWC .hls-stream-player_hls-stream-player__BJiGl,
            .live-stream-player_cinema__yPkWC .live-stream-player_container__A4sNR,
            .live-stream-player_cinema__yPkWC .live-stream-player_header__58imR,
            .live-stream-player_cinema__yPkWC .live-stream-player_live-stream-player__4CHjG,
            .live-stream-player_cinema__yPkWC [class*="live-stream-player-camera-"] {
                background: transparent !important;
                border: none !important;
                outline: none !important;
                box-shadow: none !important;
                filter: none !important;
                border-radius: 0 !important;
                padding: 0 !important;
            }

            .live-stream-player_cinema__yPkWC .screw-bottom-left,
            .live-stream-player_cinema__yPkWC .screw-bottom-right {
                display: none !important;
            }

            .live-stream-player_cinema__yPkWC .season2-side-image-left,
            .live-stream-player_cinema__yPkWC .season2-side-image-right {
                display: none !important;
            }

            /* Force remove metallic class in cinema mode */
            .live-stream-player_cinema__yPkWC .season2-metallic-background {
                background: transparent !important;
                border: none !important;
                outline: none !important;
                box-shadow: none !important;
                filter: none !important;
                padding: 0 !important;
                border-radius: 0 !important;
            }

            .live-stream-player_cinema__yPkWC {
                position: fixed !important;
            }
        `;

        const createCinemaOverrides = () => {
            if (!cinemaOverrideStyleElement) {
                cinemaOverrideStyleElement = document.createElement('style');
                cinemaOverrideStyleElement.id = 'season2-cinema-overrides';
                cinemaOverrideStyleElement.textContent = cinemaLayoutOverrides;
                document.head.appendChild(cinemaOverrideStyleElement);
                console.log('[Season 2 Theme] Cinema layout overrides applied');
            }
        };

        const removeCinemaOverrides = () => {
            if (cinemaOverrideStyleElement) {
                cinemaOverrideStyleElement.remove();
                cinemaOverrideStyleElement = null;
                console.log('[Season 2 Theme] Cinema layout overrides removed');
            }
        };

        const checkCinemaMode = () => {
            const isInCinemaMode = document.querySelector('.live-stream-player_cinema__yPkWC') !== null;

            if (isInCinemaMode !== lastCinemaState) {
                console.log('[Season 2 Theme] Cinema mode state changed:', isInCinemaMode);
                lastCinemaState = isInCinemaMode;

                if (isInCinemaMode) {
                    createCinemaOverrides();
                    document.dispatchEvent(new CustomEvent('season2-cinema-mode-changed', { detail: { cinemaMode: true } }));
                } else {
                    removeCinemaOverrides();
                    document.dispatchEvent(new CustomEvent('season2-cinema-mode-changed', { detail: { cinemaMode: false } }));
                }
            }
        };

        setTimeout(checkCinemaMode, 100);

        cinemaObserver = new MutationObserver((mutations) => {
            let shouldCheck = false;
            
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (mutation.target.classList.contains('live-stream-player_cinema__yPkWC') ||
                        mutation.oldValue?.includes('live-stream-player_cinema__yPkWC')) {
                        shouldCheck = true;
                    }
                } else if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1 && (
                            node.classList?.contains('live-stream-player_cinema__yPkWC') ||
                            node.querySelector?.('.live-stream-player_cinema__yPkWC')
                        )) {
                            shouldCheck = true;
                        }
                    });
                }
            });
            
            if (shouldCheck) {
                setTimeout(checkCinemaMode, 50);
            }
        });

        cinemaObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class'],
            attributeOldValue: true
        });

        const intervalCheck = setInterval(checkCinemaMode, 2000);

        document.addEventListener('fullscreenchange', () => {
            setTimeout(checkCinemaMode, 100);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'f' || e.key === 'F' || e.key === 'Escape') {
                setTimeout(checkCinemaMode, 200);
            }
        });

        return () => {
            if (cinemaObserver) {
                cinemaObserver.disconnect();
            }
            if (intervalCheck) {
                clearInterval(intervalCheck);
            }
            removeCinemaOverrides();
            console.log('[Season 2 Theme] Cinema mode layout manager cleaned up');
        };
    },
    () => {
        console.log('[Season 2 Theme] Bottom screws manager initialized...');

        const addBottomScrews = () => {
            const screwedSelectors = [
                '.layout_center__Vsd3b',
                '.chat-message-tts_chat-message-tts__2Jlxi',
                '.chat-message-sfx_chat-message-sfx__OGv6q',
                '.status-bar_status-bar__vR_Tm',
                '.panel_panel__Tdjid'
            ];

            screwedSelectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);

                elements.forEach(element => {
                    if (element.querySelector('.screw-bottom-left') || 
                        element.querySelector('.screw-bottom-right') ||
                        element.closest('.live-stream-player_cinema__yPkWC')) {
                        return;
                    }

                    const bottomLeftScrew = document.createElement('div');
                    bottomLeftScrew.className = 'screw-bottom-left';
                    element.appendChild(bottomLeftScrew);

                    const bottomRightScrew = document.createElement('div');
                    bottomRightScrew.className = 'screw-bottom-right';
                    element.appendChild(bottomRightScrew);
                });
            });
        };

        addBottomScrews();

        const screwObserver = new MutationObserver((mutations) => {
            let shouldAddScrews = false;

            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            if (node.matches && (
                                node.matches('.layout_center__Vsd3b') ||
                                node.matches('.chat-message-tts_chat-message-tts__2Jlxi') ||
                                node.matches('.chat-message-sfx_chat-message-sfx__OGv6q') ||
                                node.matches('.status-bar_status-bar__vR_Tm') ||
                                node.matches('.panel_panel__Tdjid')
                            )) {
                                shouldAddScrews = true;
                            } else if (node.querySelector && (
                                node.querySelector('.layout_center__Vsd3b') ||
                                node.querySelector('.chat-message-tts_chat-message-tts__2Jlxi') ||
                                node.querySelector('.chat-message-sfx_chat-message-sfx__OGv6q') ||
                                node.querySelector('.status-bar_status-bar__vR_Tm') ||
                                node.querySelector('.panel_panel__Tdjid')
                            )) {
                                shouldAddScrews = true;
                            }
                        }
                    });
                }
            });

            if (shouldAddScrews) {
                setTimeout(addBottomScrews, 50);
            }
        });

        screwObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        const screwIntervalCheck = setInterval(addBottomScrews, 2000);

        return () => {
            screwObserver.disconnect();
            clearInterval(screwIntervalCheck);
            const screws = document.querySelectorAll('.screw-bottom-left, .screw-bottom-right');
            screws.forEach(screw => screw.remove());
            console.log('[Season 2 Theme] Bottom screws manager cleaned up');
        };
    },
    () => {
        console.log('[Season 2 Theme] Metallic background manager initialized...');

        let metallicStyleElement = null;
        let processedElements = new Set();
        let sideImagesApplied = new Set();
        let isInCinemaMode = false;

        const metallicStyles = `
            .season2-metallic-background:not(.live-stream-player_cinema__yPkWC):not(.live-stream-player_cinema__yPkWC *) {
                background: url('https://i.imgur.com/kogxhFB.png'), url('https://i.imgur.com/5WkCJKE.png'), linear-gradient(90deg, #88868b, #a7a2a6 10%, #a09b9f 50%, #8f8d93 75%, #625f60 90%, #4a4645) !important;
                background-size: 64px 64px, 32px 32px, cover !important;
                background-repeat: repeat, repeat, no-repeat !important;
                background-blend-mode: overlay, soft-light, normal !important;
                padding: 28px 28px 28px 28px !important;
                border-radius: 4px !important;
                border: 3px outset hsla(300, 5%, 79%, .75) !important;
                outline: 2px solid rgba(0, 0, 0, .5) !important;
                box-shadow: -2px 2px 1px rgba(0, 0, 0, .75), inset 0 0 4px #cbc6cb, 4px 4px 0 rgba(0, 0, 0, .75) !important;
                filter: drop-shadow(-2px 4px 0 rgba(0, 0, 0, .5)) !important;
                position: relative !important;
                overflow-y: scroll !important;
            }

            /* Force remove metallic styling in cinema mode */
            .live-stream-player_cinema__yPkWC .season2-metallic-background,
            .live-stream-player_cinema__yPkWC .layout_center__Vsd3b {
                background: transparent !important;
                padding: 0 !important;
                border: none !important;
                outline: none !important;
                box-shadow: none !important;
                filter: none !important;
                border-radius: 0 !important;
            }

            /* Adjust video player when side images are present - make it much wider */
            .has-side-images .live-stream-player_container__A4sNR {
                margin: 0 20px !important;
                max-width: calc(100% - 40px) !important;
            }

            .has-side-images .hls-stream-player_hls-stream-player__BJiGl {
                margin: 0 auto !important;
                max-width: calc(100% - 40px) !important;
            }

            /* Side images - positioned between the screws, much taller */
            .season2-side-image-left,
            .season2-side-image-right {
                position: absolute;
                top: 100px;
                bottom: 10px;
                width: 65px;
                height: 500px !important;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                pointer-events: none;
                z-index: 10;
                opacity: 0.8;
            }

            .season2-side-image-left {
                left: 5px;
                background-image: url('https://i.imgur.com/Zv6Uh7Y.png');
            }

            .season2-side-image-right {
                right: 0px;
                background-image: url('https://i.imgur.com/VANubO2.png');
            }

            /* Hide side images in cinema mode */
            .live-stream-player_cinema__yPkWC .season2-side-image-left,
            .live-stream-player_cinema__yPkWC .season2-side-image-right {
                display: none !important;
            }
        `;

        const createMetallicStyles = () => {
            if (!metallicStyleElement) {
                metallicStyleElement = document.createElement('style');
                metallicStyleElement.id = 'season2-metallic-styles';
                metallicStyleElement.textContent = metallicStyles;
                document.head.appendChild(metallicStyleElement);
                console.log('[Season 2 Theme] Metallic styles applied');
            }
        };

        const removeMetallicStyles = () => {
            if (metallicStyleElement) {
                metallicStyleElement.remove();
                metallicStyleElement = null;
            }
            
            processedElements.forEach(element => {
                if (element && element.parentNode) {
                    element.classList.remove('season2-metallic-background');
                    element.classList.remove('has-side-images');
                    element.style.removeProperty('background');
                    element.style.removeProperty('background-size');
                    element.style.removeProperty('background-repeat');
                    element.style.removeProperty('background-blend-mode');
                    element.style.removeProperty('padding');
                    element.style.removeProperty('border-radius');
                    element.style.removeProperty('border');
                    element.style.removeProperty('outline');
                    element.style.removeProperty('box-shadow');
                    element.style.removeProperty('filter');
                    const leftImage = element.querySelector('.season2-side-image-left');
                    const rightImage = element.querySelector('.season2-side-image-right');
                    if (leftImage) leftImage.remove();
                    if (rightImage) rightImage.remove();
                }
            });
            
            processedElements.clear();
            sideImagesApplied.clear();
            console.log('[Season 2 Theme] Metallic styles cleaned up');
        };

        const addSideImages = (element) => {
            if (sideImagesApplied.has(element)) return;
            const selectedStream = document.querySelector('.live-streams_selected-live-stream__bFOAj');
            if (!selectedStream || isInCinemaMode) return;
            element.classList.add('has-side-images');
            const leftImage = document.createElement('div');
            leftImage.className = 'season2-side-image-left';
            element.appendChild(leftImage);

            const rightImage = document.createElement('div');
            rightImage.className = 'season2-side-image-right';
            element.appendChild(rightImage);

            sideImagesApplied.add(element);
            console.log('[Season 2 Theme] Added side images to metallic background');
        };

        const removeSideImages = (element) => {
            element.classList.remove('has-side-images');
            const leftImage = element.querySelector('.season2-side-image-left');
            const rightImage = element.querySelector('.season2-side-image-right');
            if (leftImage) leftImage.remove();
            if (rightImage) rightImage.remove();
            
            sideImagesApplied.delete(element);
        };

        const applyMetallicBackground = () => {
            isInCinemaMode = document.querySelector('.live-stream-player_cinema__yPkWC') !== null;
            const hasSelectedStream = document.querySelector('.live-streams_selected-live-stream__bFOAj') !== null;
            const centerElements = document.querySelectorAll('.layout_center__Vsd3b');
            
            centerElements.forEach(element => {
                if (isInCinemaMode) {
                    element.classList.remove('season2-metallic-background');
                    removeSideImages(element);
                    element.style.removeProperty('background');
                    element.style.removeProperty('background-size');
                    element.style.removeProperty('background-repeat');
                    element.style.removeProperty('background-blend-mode');
                    element.style.removeProperty('padding');
                    element.style.removeProperty('border-radius');
                    element.style.removeProperty('border');
                    element.style.removeProperty('outline');
                    element.style.removeProperty('box-shadow');
                    element.style.removeProperty('filter');
                    if (processedElements.has(element)) {
                        processedElements.delete(element);
                    }
                    console.log('[Season 2 Theme] Removed metallic background for cinema mode');
                    return;
                }

                if (!processedElements.has(element)) {
                    element.classList.add('season2-metallic-background');
                    processedElements.add(element);
                    console.log('[Season 2 Theme] Added metallic background');
                }

                if (hasSelectedStream && !isInCinemaMode) {
                    addSideImages(element);
                } else {
                    removeSideImages(element);
                }
            });
        };

        const handleCinemaModeChange = (event) => {
            isInCinemaMode = event.detail.cinemaMode;
            console.log('[Season 2 Theme] Received cinema mode change event:', isInCinemaMode);
            setTimeout(applyMetallicBackground, 10);
        };

        document.addEventListener('season2-cinema-mode-changed', handleCinemaModeChange);

        createMetallicStyles();

        setTimeout(applyMetallicBackground, 100);

        const metallicObserver = new MutationObserver((mutations) => {
            let shouldReapply = false;
            
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const target = mutation.target;
                    if (target.classList.contains('live-stream-player_cinema__yPkWC') ||
                        mutation.oldValue?.includes('live-stream-player_cinema__yPkWC') ||
                        target.classList.contains('live-streams_selected-live-stream__bFOAj') ||
                        mutation.oldValue?.includes('live-streams_selected-live-stream__bFOAj')) {
                        shouldReapply = true;
                    }
                }
                else if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            if (node.matches && (
                                node.matches('.layout_center__Vsd3b') ||
                                node.matches('.live-streams_selected-live-stream__bFOAj')
                            )) {
                                shouldReapply = true;
                            } else if (node.querySelector && (
                                node.querySelector('.layout_center__Vsd3b') ||
                                node.querySelector('.live-streams_selected-live-stream__bFOAj')
                            )) {
                                shouldReapply = true;
                            }
                        }
                    });
                    mutation.removedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            if (node.matches && node.matches('.live-streams_selected-live-stream__bFOAj')) {
                                shouldReapply = true;
                            } else if (node.querySelector && node.querySelector('.live-streams_selected-live-stream__bFOAj')) {
                                shouldReapply = true;
                            }
                        }
                    });
                }
            });
            
            if (shouldReapply) {
                setTimeout(applyMetallicBackground, 50);
            }
        });

        metallicObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class'],
            attributeOldValue: true
        });

        const metallicCheck = setInterval(applyMetallicBackground, 1000);

        return () => {
            document.removeEventListener('season2-cinema-mode-changed', handleCinemaModeChange);
            metallicObserver.disconnect();
            clearInterval(metallicCheck);
            removeMetallicStyles();
            console.log('[Season 2 Theme] Metallic background manager cleaned up');
        };
    },
    () => {
        console.log('[Season 2 Theme] Live stream frames manager initialized...');
    
        let frameStyleElement = null;
        let processedStreams = new Set();
    
        const frameImages = [
            'https://i.imgur.com/lxbb3GJ.png',
            'https://i.imgur.com/8ws8gZA.png',
            'https://i.imgur.com/yPhLQ71.png',
            'https://i.imgur.com/CTby1Bz.png',
            'https://i.imgur.com/RcdZMVG.png',
            'https://i.imgur.com/YHN1Krs.png',
            'https://i.imgur.com/VuQs5Rx.png',
            'https://i.imgur.com/okBDXAU.png'
        ];
    
        const frameStyles = `
            .live-streams_live-streams-grid__Tp4ah {
                padding: 20px !important;
                gap: 24px !important;
                overflow: visible !important;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
                justify-items: center !important;
                align-items: center !important;
                min-height: 100% !important;
                display: grid !important;
            }
    
            .season2-stream-frame {
                position: absolute !important;
                top: -18px !important;
                left: -18px !important;
                right: -18px !important;
                bottom: -18px !important;
                background-size: 100% 100% !important;
                background-repeat: no-repeat !important;
                pointer-events: none !important;
                z-index: 0 !important;
            }
    
            .live-streams_live-stream__4Q7MX {
                position: relative !important;
                z-index: 1 !important;
                overflow: visible !important;
                margin: 0 !important;
                width: 220px !important;
                height: 165px !important;
            }
    
            .live-streams_live-stream__4Q7MX .live-stream_live-stream__uVezO {
                position: relative !important;
                z-index: 2 !important;
                width: 97% !important;
                height: 96% !important;
                border: none !important;
                background: none !important;
                padding: 0 !important;
                margin: 0 !important;
                left: 2px !important;
                box-shadow: unset !important;
            }
    
            .live-streams_live-stream__4Q7MX .live-stream_inner__n9syF {
                position: absolute !important;
                top: 0px !important;
                left: 0px !important;
                right: 18px !important;
                bottom: 20px !important;
                z-index: 1 !important;
                overflow: hidden !important;
            }
    
            .live-streams_live-stream__4Q7MX .live-stream_thumbnail__RN6pc {
                width: 100% !important;
                height: 100% !important;
                position: relative !important;
            }
    
            .live-streams_live-stream__4Q7MX .live-stream_thumbnail__RN6pc img {
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
            }
    
            .live-streams_live-stream__4Q7MX .live-stream_info__23np4 {
                position: absolute !important;
                top: 0px !important;
                left: 0px !important;
                right: 20px !important;
                z-index: 3 !important;
                padding: 2px 4px !important;
                font-size: 14px !important;
                text-align: left !important;
                color: #00ff00 !important;
                text-shadow: 0 0 2px rgba(0, 255, 0, 0.8) !important;
                background: none !important;
                height: auto !important;
                max-height: 40px !important;
            }
    
            /* Special handling for split screens (like the hallway cameras) */
            .live-streams_live-stream__4Q7MX.live-streams_split__Bnydk .live-stream_inner__n9syF {
                position: relative !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                height: 100% !important;
                gap: 0px !important;
            }
    
            .live-streams_live-stream__4Q7MX.live-streams_split__Bnydk .live-stream_info__23np4 {
                position: relative !important;
                top: 0px !important;
                left: 0px !important;
                right: 0px !important;
                gap: 0px !important;
            }
    
            .live-streams_live-stream__4Q7MX .live-stream_name__ngU04 {
                font-size: 14px !important;
                font-weight: bold !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
                white-space: nowrap !important;
                margin-bottom: -2px !important;
            }
    
            .live-streams_live-stream__4Q7MX .live-stream_viewers__UeUvp {
                font-size: 14px !important;
                opacity: 0.9 !important;
            }
    
            /* Ensure the grid container doesn't clip overflow */
            .live-streams_live-streams__BYV96 {
                overflow: visible !important;
                height: 100% !important;
            }
    
            .main-panel_main-panel__4RhyF {
                overflow: visible !important;
                height: 100% !important;
            }
        `;
    
        const createFrameStyles = () => {
            if (!frameStyleElement) {
                frameStyleElement = document.createElement('style');
                frameStyleElement.id = 'season2-frame-styles';
                frameStyleElement.textContent = frameStyles;
                document.head.appendChild(frameStyleElement);
                console.log('[Season 2 Theme] Frame styles applied');
            }
        };
    
        const removeFrameStyles = () => {
            if (frameStyleElement) {
                frameStyleElement.remove();
                frameStyleElement = null;
            }
            
            const frameElements = document.querySelectorAll('.season2-stream-frame');
            frameElements.forEach(frame => frame.remove());
            
            processedStreams.forEach(stream => {
                if (stream && stream.parentNode) {
                    stream.style.transform = '';
                    stream.style.maxWidth = '';
                    stream.style.width = '';
                    stream.style.margin = '';
                }
            });
            
            processedStreams.clear();
            console.log('[Season 2 Theme] Frame styles and elements cleaned up');
        };

        const addStreamFrames = () => {
            const streamElements = document.querySelectorAll('.live-streams_live-stream__4Q7MX');
            
            streamElements.forEach((stream, index) => {
                if (processedStreams.has(stream)) {
                    return;
                }

                const frame = document.createElement('div');
                frame.className = 'season2-stream-frame';
                
                const frameImage = frameImages[index % frameImages.length];
                frame.style.backgroundImage = `url('${frameImage}')`;
                
                stream.insertBefore(frame, stream.firstChild);
                
                processedStreams.add(stream);
                console.log(`[Season 2 Theme] Added frame to stream ${index + 1} with image ${frameImage}`);
            });
        };

        createFrameStyles();

        setTimeout(addStreamFrames, 100);

        const frameObserver = new MutationObserver((mutations) => {
            let shouldAddFrames = false;

            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            if (node.matches && node.matches('.live-streams_live-stream__4Q7MX')) {
                                shouldAddFrames = true;
                            } else if (node.querySelector && node.querySelector('.live-streams_live-stream__4Q7MX')) {
                                shouldAddFrames = true;
                            }
                        }
                    });
                }
            });

            if (shouldAddFrames) {
                setTimeout(addStreamFrames, 50);
            }
        });

        frameObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        const frameCheck = setInterval(addStreamFrames, 2000);

        return () => {
            frameObserver.disconnect();
            clearInterval(frameCheck);
            removeFrameStyles();
            console.log('[Season 2 Theme] Live stream frames manager cleaned up');
        };
    },
    () => {
        console.log('[Season 2 Theme] Logo video replacement initialized...');

        let processedButtons = new Set();

        const replaceLogoWithVideo = () => {
            const logoButton = document.querySelector('.top-bar_logo__XL0_C');
            
            if (logoButton && !logoButton.querySelector('video')) {
                const images = logoButton.querySelectorAll('img');
                images.forEach(img => {
                    img.style.display = 'none';
                });

                const video = document.createElement('video');
                video.src = 'https://files.catbox.moe/jaqcvs.webm';
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                video.style.width = '484px';
                video.style.height = '120px';
                video.style.objectFit = 'contain';
                video.style.position = 'absolute';
                video.style.top = '50%';
                video.style.left = '50%';
                video.style.transform = 'translate(-50%, -50%)';
                video.style.zIndex = '1';
                video.setAttribute('playsinline', '');
                video.classList.add('season2-logo-video');

                if (!logoButton.dataset.originalStyles) {
                    logoButton.dataset.originalStyles = JSON.stringify({
                        position: logoButton.style.position,
                        width: logoButton.style.width,
                        height: logoButton.style.height,
                        overflow: logoButton.style.overflow,
                        display: logoButton.style.display,
                        alignItems: logoButton.style.alignItems,
                        justifyContent: logoButton.style.justifyContent
                    });
                }

                logoButton.style.position = 'relative';
                logoButton.style.width = '242px';
                logoButton.style.height = '60px';
                logoButton.style.overflow = 'hidden';
                logoButton.style.display = 'flex';
                logoButton.style.alignItems = 'center';
                logoButton.style.justifyContent = 'center';
                
                logoButton.appendChild(video);
                processedButtons.add(logoButton);

                video.play().catch(e => {
                    console.log('[Season 2 Theme] Video autoplay failed, will try on user interaction');
                });

                console.log('[Season 2 Theme] Logo replaced with video');
            }
        };

        const cleanupLogoVideo = () => {
            const videos = document.querySelectorAll('.season2-logo-video');
            videos.forEach(video => {
                video.remove();
            });

            processedButtons.forEach(button => {
                if (button.dataset.originalStyles) {
                    const originalStyles = JSON.parse(button.dataset.originalStyles);
                    
                    Object.keys(originalStyles).forEach(prop => {
                        if (originalStyles[prop]) {
                            button.style[prop] = originalStyles[prop];
                        } else {
                            button.style.removeProperty(prop);
                        }
                    });
                    
                    delete button.dataset.originalStyles;
                }
                
                const images = button.querySelectorAll('img');
                images.forEach(img => {
                    img.style.display = '';
                });
            });

            processedButtons.clear();
            console.log('[Season 2 Theme] Logo video elements cleaned up');
        };

        setTimeout(replaceLogoWithVideo, 100);

        const logoObserver = new MutationObserver(() => {
            setTimeout(replaceLogoWithVideo, 50);
        });

        logoObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        const logoCheck = setInterval(replaceLogoWithVideo, 2000);

        return () => {
            logoObserver.disconnect();
            clearInterval(logoCheck);
            cleanupLogoVideo();
            console.log('[Season 2 Theme] Logo video replacement cleaned up');
        };
    }
];
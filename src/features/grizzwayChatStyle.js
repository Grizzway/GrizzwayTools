export function grizzwaySpecialStylingFeature() {
    console.log('[Grizzway Tools] Grizzway special styling initialized');

    function styleGrizzwayMessages() {
        const messages = document.querySelectorAll('.chat-message-default_user__uVNvH');
        messages.forEach(message => {
            if (message.textContent.toLowerCase().includes('grizzway')) {
                const chatMessage = message.closest('.chat-message-default_chat-message-default__JtJQL');

                if (chatMessage && !chatMessage.querySelector('.grizzway-animated-border')) {
                    chatMessage.classList.add('grizzway-highlighted-message');
                    message.classList.add('grizzway-username-bold');

                    const messageTextElement = chatMessage.querySelector('.chat-message-default_body__iFlH4');
                    if (messageTextElement) {
                        messageTextElement.classList.add('grizzway-message-text');
                    }

                    const messageContentElement = chatMessage.querySelector('.chat-message-default_message__milmT');
                    if (messageContentElement) {
                        messageContentElement.classList.add('grizzway-message-content-green');
                    }

                    const borderContainer = document.createElement('div');
                    borderContainer.className = 'grizzway-animated-border';
                    
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

    window.addEventListener('scroll', styleGrizzwayMessages);
    document.addEventListener('visibilitychange', styleGrizzwayMessages);

    styleGrizzwayMessages();
    console.log('[Grizzway Tools] Grizzway special styling active');
}

export function addGrizzwaySpecialCSS() {
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

    const styleElement = document.createElement('style');
    styleElement.id = 'grizzway-special-styling';
    styleElement.textContent = grizzwayCSS;

    const existing = document.getElementById('grizzway-special-styling');
    if (existing) existing.remove();

    document.head.appendChild(styleElement);
    console.log('[Grizzway Tools] Grizzway special styling CSS applied');
}
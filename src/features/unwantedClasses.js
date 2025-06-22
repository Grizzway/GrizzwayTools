const unwantedClasses = [
    'mirror',
    'live-stream-player_blur__7BhBE',
    'live-stream-player_upside-down__YvkE4',
    'chat-message-default_shrink-ray__nGvpr'
];

export function unwantedClassesFeature() {
    function removeUnwantedClasses() {
        const body = document.querySelector('body');
        if (body) {
            unwantedClasses.forEach(className => {
                if (body.classList.contains(className)) {
                    body.classList.remove(className);
                }
            });
        }

        const videoPlayer = document.querySelector('.live-stream-player_live-stream-player__4CHjG');
        if (videoPlayer) {
            unwantedClasses.forEach(className => {
                const elementsWithClass = videoPlayer.querySelectorAll(`.${className}`);
                elementsWithClass.forEach(el => el.classList.remove(className));

                if (videoPlayer.classList.contains(className)) {
                    videoPlayer.classList.remove(className);
                }
            });
        }

        const chatContainer = document.querySelector('#chat-messages.chat-messages_chat-messages__UeL0a');
        if (chatContainer) {
            unwantedClasses.forEach(className => {
                const chatElements = chatContainer.querySelectorAll(`.${className}`);
                chatElements.forEach(el => el.classList.remove(className));
            });
        }
    }

    setInterval(removeUnwantedClasses, 1000);
    
    console.log('[Grizzway Tools] Unwanted classes removal feature initialized');
}
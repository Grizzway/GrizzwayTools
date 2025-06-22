export function chatLinkButtonsFeature() {
    function addLinkButton(messageElement, url) {

      const existingButton = messageElement.querySelector(`.custom-link-button[href="${url}"]`);
      if (existingButton) return;
  
      const button = document.createElement('a');
      button.href = url.startsWith('http') ? url : 'https://' + url;
      button.target = '_blank';
      button.rel = 'noopener noreferrer';
      button.className = 'custom-link-button';
      button.style.marginLeft = '8px';
      button.style.width = '20px';
      button.style.height = '20px';
      button.style.display = 'inline-flex';
      button.style.alignItems = 'center';
      button.style.justifyContent = 'center';
      button.style.backgroundColor = '#4EA1FF';
      button.style.color = 'white';
      button.style.borderRadius = '4px';
      button.style.fontSize = '14px';
      button.style.textDecoration = 'none';
      button.style.verticalAlign = 'middle';
      button.textContent = '🔗';
  
      const messageContent = messageElement.querySelector('.chat-message-default_message__milmT');
      if (messageContent) {
        messageContent.appendChild(button);
      }
    }
  
    function detectLinksAndButton(messageElement) {
      const contentElement = messageElement.querySelector('.chat-message-default_message__milmT');
      if (!contentElement) return;
  
      const textContent = contentElement.innerText || contentElement.textContent || '';
      const urlRegex = /(\b(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?\b)/g;
      const matches = textContent.match(urlRegex);
  
      if (matches) {
        matches.forEach(url => addLinkButton(messageElement, url));
      }
    }
  
    function observeMessages(chatContainer) {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if (
              node.nodeType === 1 &&
              node.classList.contains('chat-message-default_chat-message-default__JtJQL')
            ) {
              detectLinksAndButton(node);
            }
          });
        });
      });
  
      observer.observe(chatContainer, {
        childList: true,
        subtree: true
      });
    }
  
    function waitForChatContainer() {
      const chatContainer = document.querySelector('.chat-messages_chat-messages__UeL0a');
      if (chatContainer) {
        observeMessages(chatContainer);
      } else {
        setTimeout(waitForChatContainer, 1000);
      }
    }
  
    waitForChatContainer();
  }
  
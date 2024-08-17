function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/messenger';
    const sendButton = document.getElementById('submit');
    const responseButton = document.getElementById('refresh');

    const authorInput = document.querySelector('input[name="author"]');
    const contentInput = document.querySelector('input[name="content"]');
    const messages = document.getElementById('messages');

    sendButton.addEventListener('click', sendMessage);
    responseButton.addEventListener('click', getMessages);


    async function sendMessage() {

        const author = authorInput.value;
        const content = contentInput.value;

        if (!author || !content) {
            return;
        }

        const response = await fetch(baseURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author, content })
        });

        authorInput.value = '';
        contentInput.value = '';

        if (!response.ok) {
            const error = await response.json();
            return alert(error.message);
        }

        getMessages();
    }

    async function getMessages() {
        const response = await fetch(baseURL);
        const data = await response.json();

        messages.textContent = '';

        Object.values(data).forEach(message => {
            const { author, content } = message;
            messages.textContent += `${author}: ${content}\n`;
        });
        messages.textContent = messages.textContent.trim();
    }
}

attachEvents();

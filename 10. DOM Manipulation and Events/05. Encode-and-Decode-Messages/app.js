function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    const [encodeButton, decodeButton] = buttons;
    const [encodeTextArea, decodeTextArea] = textAreas;

    encodeButton.addEventListener('click', () => {
        let message = encodeTextArea.value
            .split('')
            .map((char) => char.charCodeAt() + 1)
            .map((charCode) => String.fromCharCode(charCode))
            .join('');

        decodeTextArea.value = message;
        encodeTextArea.value = '';
    });

    decodeButton.addEventListener('click', () => {
        let message = decodeTextArea.value
            .split('')
            .map((char) => char.charCodeAt() - 1)
            .map((charCode) => String.fromCharCode(charCode))
            .join('');

        decodeTextArea.value = message;
    });
}

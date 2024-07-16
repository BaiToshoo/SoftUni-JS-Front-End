function Reveal(words, text) {
    words = words.split(', ');
    words.forEach(word => {
        let hiddenWord = '*'.repeat(word.length);
        text = text.replace(hiddenWord, word);
    });
    console.log(text);
}

Reveal('great, learning', 'softuni is ***** place for ******** new programming languages')
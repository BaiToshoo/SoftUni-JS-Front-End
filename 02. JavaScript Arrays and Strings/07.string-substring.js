function StringSubstring(word, text) {
    word = word.toLowerCase();
    text = text.toLowerCase();
    text = text.split(' ');
    if (text.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

StringSubstring('javascript', 'JavaScript is the best programming language');
StringSubstring('python', 'JavaScript is the best programming language');
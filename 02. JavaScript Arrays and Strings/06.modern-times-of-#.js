function ModernTimes(input){
    let result = [];
    input = input.split(' ');
    input.forEach(word => {
        if (word.startsWith('#') && word.length > 1) {
            let newWord = word.substring(1);
            if (newWord.match(/^[A-Za-z]+$/)) {
                result.push(newWord);
            }
        }
    });
    console.log(result.join('\n'));
}

ModernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')
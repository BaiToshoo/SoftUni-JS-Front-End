function wordTracker(input) {
    let words = input.shift().split(' ');
    let wordObject = {};
    let allWords = [];

    words.forEach((word) => {
        wordObject[word] = {name : word, count : 0};
        allWords.push(wordObject[word]);
    });

    input.forEach((line) => {
        line.split(' ').forEach((word) => {
            if (wordObject.hasOwnProperty(word)) {
                wordObject[word].count++;
            }
        });
    });

    allWords.sort((a, b) => b.count - a.count);

    allWords.forEach((word) => {
        console.log(`${word.name} - ${word.count}`);
    });
}

wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']); // this - 3 sentence - 2 the - 2 is - 1 your - 1 task - 1 because - 1 of - 1 and - 1 words - 1 count - 1 to - 1 have - 1 you - 1 In - 1 occurances - 1

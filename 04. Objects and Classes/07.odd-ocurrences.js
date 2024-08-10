function oddOccurrences(input) {
    let words = input.split(' ');
    let wordsCount = {};
    for (let word of words) {
        word = word.toLowerCase();
        if (!wordsCount.hasOwnProperty(word)) {
            wordsCount[word] = {count: 0};
        }
        wordsCount[word].count++;
    }
    let result = [];
    for (let word in wordsCount) {
        if (wordsCount[word].count % 2 !== 0) {
            result.push(word);
        }
    }
    result.sort((a, b) => wordsCount[b].count - wordsCount[a].count);
    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'); // c# php 1 5

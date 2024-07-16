function PascalCaseSplitter(inputString){
    const regex = /[A-Z][a-z]*/g;
    const result = inputString.matchAll(regex);

    const output = [];
    for (const word of result) {
        output.push(word);
    }
    console.log(output.join(', '));
}

PascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
function inRange(char1, char2) {
    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);
    let result = '';
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    return result;
}

console.log(inRange('a', 'd')); // b c
console.log(inRange('#', ':')); // $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9

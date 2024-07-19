function palindromeIntegers(input) {
    for (let i = 0; i < input.length; i++) {
        let number = input[i];
        let reversed = Number(number.toString().split('').reverse().join(''));
        if (number === reversed) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palindromeIntegers([123, 323, 421, 121]); // false true false true

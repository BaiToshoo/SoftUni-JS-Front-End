function numberModification(number){
    let numberAsString = number.toString();
    let average = 0;
    let sum = 0;
    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }
    average = sum / numberAsString.length;
    while (average <= 5){
        numberAsString += '9';
        sum += 9;
        average = sum / numberAsString.length;
    }
    return numberAsString;
}

console.log(numberModification(101)); // 1019999
console.log(numberModification(5835)); // 5835

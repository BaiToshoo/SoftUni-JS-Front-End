function oddAndEvenSum(number){
    let oddSum = 0;
    let evenSum = 0;
    let numberAsString = number.toString();
    for (let i = 0; i < numberAsString.length; i++) {
        let currentNumber = Number(numberAsString[i]);
        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(1000435)); // Odd sum = 9, Even sum = 4
console.log(oddAndEvenSum(3495892137259234)); // Odd sum = 54, Even sum = 22

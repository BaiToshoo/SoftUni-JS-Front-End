function perfectNumberChecker(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number ? 'We have a perfect number!' : 'It\'s not so perfect.';
}

console.log(perfectNumberChecker(6)); // We have a perfect number!
console.log(perfectNumberChecker(28)); // We have a perfect number!
console.log(perfectNumberChecker(1236498)); // It's not so perfect.

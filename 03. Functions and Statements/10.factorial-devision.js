function factorialDivision(num1, num2) {
    function factorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    let result = factorial(num1) / factorial(num2);
    return result.toFixed(2);
}

console.log(factorialDivision(5, 2)); // 60.00
console.log(factorialDivision(6, 2)); // 360.00

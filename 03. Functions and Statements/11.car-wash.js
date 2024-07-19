function carWash(actions){
    let result = 0;
    for (let action of actions) {
        switch (action) {
            case 'soap':
                result += 10;
                break;
            case 'water':
                result += result * 0.20;
                break;
            case 'vacuum cleaner':
                result += result * 0.25;
                break;
            case 'mud':
                result -= result * 0.10;
                break;
        }
    }
    return `The car is ${result.toFixed(2)}% clean.`;
}

console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])); // The car is 39.00% clean.

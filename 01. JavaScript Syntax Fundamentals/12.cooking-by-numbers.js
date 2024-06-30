function cookingByNumbers(number, ...operations) {
    
    let currentNumber = number;
    
    for (const operation of operations) {
        switch (operation) {
            case 'chop':
                currentNumber /= 2;
                break;
            case 'dice':
                currentNumber = Math.sqrt(currentNumber);
                break;
            case 'spice':
                currentNumber++;
                break;
            case 'bake':
                currentNumber *= 3;
                break;
            case 'fillet':
                currentNumber -= currentNumber * 0.2;
                break;
            default:
                break;
        }
        console.log(currentNumber);
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

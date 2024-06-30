function fruits(fruit, weightInGrams, pricePerKg) {
    const weightInKg = weightInGrams / 1000;
    const totalPrice = weightInKg * pricePerKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruits('orange', 2500, 1.80); // I need $4.50 to buy 2.50 kilograms orange.
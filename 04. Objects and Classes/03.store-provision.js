function storeProvision(currentStock, orderedStock) {
    let storStock = [];

    for (let i = 0; i < currentStock.length; i += 2) {
    let product = {
        name: currentStock[i],
        quantity: Number(currentStock[i + 1])
    };
    storStock.push(product);
    }

    for (let i = 0; i < orderedStock.length; i += 2) {
    let product = {
        name: orderedStock[i],
        quantity: Number(orderedStock[i + 1])
    };
    let index = storStock.findIndex(x => x.name === product.name);
    if (index === -1) {
        storStock.push(product);
    } else {
        storStock[index].quantity += product.quantity;
    }
    }

    for (const product of storStock) {
    console.log(`${product.name} -> ${product.quantity}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']); // Chips -> 5, CocaCola -> 9, Bananas -> 14, Pasta -> 4, Beer -> 2

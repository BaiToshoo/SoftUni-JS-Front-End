function piccolo(input) {
    let parking = new Map();

    input.forEach(line => {
        let [command, carNumber] = line.split(', ');

        if (command === 'IN') {
            parking.set(carNumber, 1);
        } else {
            parking.delete(carNumber);
        }
    });

    let sorted = Array.from(parking.keys()).sort((a, b) => a.localeCompare(b));

    if (sorted.length > 0) {
        console.log(sorted.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']); // CA2822UU CA2844AA CA9999TT CA9876HH

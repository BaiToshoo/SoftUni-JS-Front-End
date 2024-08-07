function towns(input){
    input = input.map(x => x.split(' | '));

    let towns = [];

    for (let i = 0; i < input.length; i++) {
        towns.push(town = {
            town: input[i][0],
            latitude: Number(input[i][1]).toFixed(2),
            longitude: Number(input[i][2]).toFixed(2)
        });
    }

    for (const town of towns) {
        console.log(town);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']); // Name: Sofia -- Latitude: 42.70 -- Longitude: 23.33

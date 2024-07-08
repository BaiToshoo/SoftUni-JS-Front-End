function ArrayRotation(array, nOfRotations) {

    // for (let i = 0; i < nOfRotations; i++) {
    //     let temp = array[0];
    //     for (let j = 0; j < array.length - 1; j++) {
    //         array[j] = array[j + 1];
    //     }
    //     array[array.length - 1] = temp;
    // }

    // return array.join(' ');

    const cutOffIndex = nOfRotations % array.length;
    const firstPart = array.slice(0, cutOffIndex);
    const secondPart = array.slice(cutOffIndex);
    return secondPart.concat(firstPart);
}

console.log(ArrayRotation([51, 47, 32, 61, 21], 2)); // [32, 61, 21, 51, 47]
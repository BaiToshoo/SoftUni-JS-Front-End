function sortNumbers(arr) {

    const sortedArray = arr.sort((a, b) => a - b);

    const outputArr = new Array(sortedArray.length).fill(0).map((_, index) => {
        if (index % 2 === 0) {
            return sortedArray.shift();
        } else {
            return sortedArray.pop();
        }
    })

    return outputArr;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

// input[1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
// expected[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
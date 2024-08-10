function solve() {
    let input = document.getElementById('input');
    let selectToMenu = document.getElementById('selectMenuTo');
    let result = document.getElementById('result');

    let binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';

    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';

    selectToMenu.appendChild(binaryOption);
    selectToMenu.appendChild(hexadecimalOption);

    let convertButton = document.getElementsByTagName('button')[0];
    convertButton.addEventListener('click', () => {
        let number = Number(input.value);
        let resultValue = '';

        if (selectToMenu.value === 'binary') {
            resultValue = number.toString(2);
        } else if (selectToMenu.value === 'hexadecimal') {
            resultValue = number.toString(16).toUpperCase();
        }

        result.value = resultValue;
    });
}

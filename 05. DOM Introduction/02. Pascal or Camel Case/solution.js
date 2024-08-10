function solve() {
  const input = document.getElementById('text').value.toLowerCase().split(' ');
  const currentCase = document.getElementById('naming-convention').value;

  let result = '';

  if (currentCase === 'Camel Case') {
    result += input[0];
    for (let i = 1; i < input.length; i++) {
      result += input[i][0].toUpperCase() + input[i].slice(1);
    }
  } else if (currentCase === 'Pascal Case') {
    for (let word of input) {
      result += word[0].toUpperCase() + word.slice(1);
    }
  } else {
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;
}

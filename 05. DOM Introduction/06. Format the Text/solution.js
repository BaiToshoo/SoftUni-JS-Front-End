function solve() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');
  const sentences = input.split('.').filter(x => x.length > 0);

  for (let i = 0; i < sentences.length; i += 3) {
    const paragraph = sentences.slice(i, i + 3).join('.') + '.';
    const p = document.createElement('p');
    p.textContent = paragraph;
    output.appendChild(p);
  }
}

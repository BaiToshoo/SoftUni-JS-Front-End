function solve() {
    let buttons = Array.from(document.querySelectorAll('button'));
    let textAreas = Array.from(document.querySelectorAll('textarea'));

    buttons[0].addEventListener('click', generate);
    buttons[1].addEventListener('click', buy);

    function generate() {
        let furniture = JSON.parse(textAreas[0].value);
        let table = document.querySelector('tbody');

        furniture.forEach(f => {
            let row = document.createElement('tr');
            let cells = [];
        
            let img = document.createElement('img');
            img.src = f.img;
            let imgCell = document.createElement('td');
            imgCell.appendChild(img);
            cells.push(imgCell);
        
            let name = document.createElement('p');
            name.textContent = f.name;
            let nameCell = document.createElement('td');
            nameCell.appendChild(name);
            cells.push(nameCell);
        
            let price = document.createElement('p');
            price.textContent = f.price;
            let priceCell = document.createElement('td');
            priceCell.appendChild(price);
            cells.push(priceCell);
        
            let decFactor = document.createElement('p');
            decFactor.textContent = f.decFactor;
            let decFactorCell = document.createElement('td');
            decFactorCell.appendChild(decFactor);
            cells.push(decFactorCell);
        
            let check = document.createElement('input');
            check.type = 'checkbox';
            let checkCell = document.createElement('td');
            checkCell.appendChild(check);
            cells.push(checkCell);
        
            row.append(...cells);
            table.appendChild(row);
        });
      }

    function buy() {
        let furniture = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(b => b.parentElement.parentElement)
            .map(r => ({
                name: r.children[1].textContent,
                price: Number(r.children[2].textContent),
                decFactor: Number(r.children[3].textContent)
            }));

        let names = [];
        let total = 0;
        let decFactors = 0;

        furniture.forEach(f => {
            names.push(f.name);
            total += f.price;
            decFactors += f.decFactor;
        });

        textAreas[1].value = `Bought furniture: ${names.join(', ')}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${decFactors / furniture.length}`;
    }
}

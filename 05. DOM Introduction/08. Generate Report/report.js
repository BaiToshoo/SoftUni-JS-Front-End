function generateReport() {
    const checkedBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const data = rows.map(row => {
        const obj = {};
        checkedBoxes.forEach(checkbox => {
            const index = checkbox.parentElement.cellIndex;
            obj[checkbox.name] = row.cells[index].textContent;
        });
        return obj;
    });
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
}

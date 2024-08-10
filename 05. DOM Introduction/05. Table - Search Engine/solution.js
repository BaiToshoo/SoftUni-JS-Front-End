function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.getElementById('searchField');
      const searchValue = searchField.value.toLowerCase();
      searchField.value = '';

      const rows = Array.from(document.querySelectorAll('tbody tr'));
      rows.forEach(row => {
         row.classList.remove('select');
      });

      rows.forEach(row => {
         const cells = Array.from(row.children);
         cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchValue)) {
               row.classList.add('select');
            }
         });
   });
}
}

function search() {
   const towns = Array.from(document.querySelectorAll('ul li'));
   const searchField = document.getElementById('searchText');
   const result = document.getElementById('result');

   let matches = 0;
   towns.forEach(town => {
      if (town.textContent.includes(searchField.value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   });

   result.textContent = `${matches} matches found`;
}

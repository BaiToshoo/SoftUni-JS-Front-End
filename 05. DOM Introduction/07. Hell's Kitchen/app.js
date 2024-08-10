function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = document.querySelector('#inputs textarea').value;
      let arr = JSON.parse(input);
      let restaurants = {};

      arr.forEach((line) => {
         let [restaurantName, workers] = line.split(' - ');
         workers = workers.split(', ').map((worker) => {
            let [name, salary] = worker.split(' ');
            return { name, salary: Number(salary) };
         });

         if (restaurants[restaurantName]) {
            workers = workers.concat(restaurants[restaurantName].workers);
         }

         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
         let bestSalary = workers[0].salary;
         let averageSalary = workers.reduce((acc, worker) => acc + worker.salary, 0) / workers.length;
         restaurants[restaurantName] = {
            workers,
            averageSalary,
            bestSalary
         };
      });

      let bestRestaurant = undefined;
      let bestRestaurantSalary = 0;

      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary) {
            bestRestaurant = name;
            bestRestaurantSalary = restaurants[name].averageSalary;
         }
      }

      let bestRestaurantElement = document.querySelector('#bestRestaurant p');
      bestRestaurantElement.textContent = `Name: ${bestRestaurant} Average Salary: ${restaurants[bestRestaurant].averageSalary.toFixed(2)} Best Salary: ${restaurants[bestRestaurant].bestSalary.toFixed(2)}`;

      let workersElement = document.querySelector('#workers p');
      let workers = restaurants[bestRestaurant].workers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');
      workersElement.textContent = workers;
      
   }
}

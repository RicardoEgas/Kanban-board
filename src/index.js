import './index.css';
// import renderRecipes from './module/displayFood.js';

fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
  .then((response) => response.json())
  .then((data) => {
    const { meals } = data;

    meals.forEach((meal) => {
      const mealCounter = document.getElementById('mealCounter');
      const num = Object.values(meals).length;
      mealCounter.innerHTML = `<p>Meals(${num})</p>`;
      console.log(meal);
    });
  });

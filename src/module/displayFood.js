// let appId;
const mealList = document.getElementById('meal-list');

export default function renderMeal(food) {
  const li = document.createElement('li');
  li.classList.add('card');

  const img = document.createElement('img');
  img.classList.add('meal-img');
  img.src = food.strMealThumb;
  img.alt = 'Image of food';

  const h3 = document.createElement('h3');
  h3.innerText = food.strMeal;

  const likes = document.createElement('span');
  likes.innerHTML = `
    <i class="fa fa-heart-o"></i>
  `;
  likes.classList.add('like-meal');

  const likesValue = document.createElement('span');
  likesValue.classList.add('likes-value');

  const commentBtn = document.createElement('button');
  commentBtn.innerHTML = 'Comments';
  commentBtn.type = 'submit';
  commentBtn.classList.add('comment-btn');

  const reservationsBtn = document.createElement('button');
  reservationsBtn.innerHTML = 'Reservations';
  reservationsBtn.type = 'submit';
  reservationsBtn.classList.add('reserve-btn');

  li.append(img, h3, likes, commentBtn, reservationsBtn);
  mealList.append(li);
}
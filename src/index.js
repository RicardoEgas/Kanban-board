import './index.css';

const dogList = document.getElementById('dogs-list');

function displayDogs() {
  const li = document.createElement('li');

  li.classList.add('card');
  const likes = document.createElement('span');
  likes.innerHTML = `
      <i class="fa fa-heart-o"></i>
    `;
  likes.classList.add('like-dog');

  const commentBtn = document.createElement('button');
  commentBtn.innerHTML = 'Comments';
  commentBtn.type = 'submit';
  commentBtn.classList.add('comment-btn');

  const reservationsBtn = document.createElement('button');
  reservationsBtn.innerHTML = 'Reservations';
  reservationsBtn.type = 'submit';
  reservationsBtn.classList.add('reserve-btn');

  li.append(likes, commentBtn, reservationsBtn);
  dogList.append(li);
}

const fetchDogs = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breed/akita/images/random');
    const data = await response.json();
    return data.message;
  } catch (error) {
    return 'something went wrong';
  }
};
// fetchDogs();
const images = [];
const dogs = document.getElementById('dogs-list');
for (let i = 0; i < 6; i += 1) {
  displayDogs();
  fetchDogs().then((data) => {
    images.push(data);
    dogs.insertAdjacentHTML('afterbegin', `<li><img class="dogs-img" src="${images[i]}"><img></li>`);
  });
}
import './index.css';
import {
  fetchLike, postLike,
} from './modules/likes.js';

const fetchDogs = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breed/akita/images/random');
    const data = await response.json();
    return data.message;
  } catch (error) {
    return 'something went wrong';
  }
};

const images = [];
let counter = 0;
const getLikes = await fetchLike();
const dogs = document.getElementById('dogs-list');
for (let i = 0; i < 6; i += 1) {
  const likes = getLikes.filter((like) => like.item_id === i);
  fetchDogs().then((data) => {
    images.push(data);
    dogs.insertAdjacentHTML('beforeend', `<li class="dogs-items">
    <img class="dogs-img" src="${images[i]}"><img>
    <h2>Dog ${i + 1} <i class="fa fa-heart-o"></i></h2>
    <p id="like">${likes.length > 0 ? likes[0].likes : 0} likes</p>
    <button>Comments</button>
    <button>Reservations</button>
    </li>`);
  });
  counter += 1;
}

// Displaying Counting items;

const dogsCounter = document.getElementById('dogsCounter');
dogsCounter.insertAdjacentHTML('beforeend', `(${counter})`);

// Event Listeners;

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-heart-o')) {
    e.target.style.color = 'red';
    /* eslint-disable max-len */
    const id = [].indexOf.call(e.target.parentNode.parentNode.parentNode.childNodes, e.target.parentNode.parentNode);
    /* eslint-disable max-len */
    const numLikes = Number(e.target.parentElement.nextElementSibling.textContent.match(/\d+/)[0]) + 1;
    e.target.parentElement.nextElementSibling.innerHTML = `${numLikes} Likes`;

    postLike(id);
  }
});

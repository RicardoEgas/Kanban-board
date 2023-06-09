import './index.css';
import { fetchLike, postLike } from './modules/likes.js';
import resPopupImg from './modules/displayItemDetails.js';
import postReserveData from './modules/postReserve.js';
import getReserveData from './modules/getReserve.js';
import fetchDogs from './modules/getDogItems.js';
import { countItems } from './modules/countDogs.js';

// fetch items from API

const container = async () => {
  fetchDogs();
  const images = [];
  const getLikes = await fetchLike();
  const dogs = document.getElementById('dogs-list');
  for (let i = 0; i < 6; i += 1) {
    const itemId = `Dog${i + 1}`;
    const likes = getLikes.filter((like) => like.item_id === i);
    fetchDogs().then((data) => {
      images.push(data);
      dogs.insertAdjacentHTML('beforeend', `<li class="dogs-items">
    <img class="dogs-img" src="${images[i]}"><img>
    <h2> ${itemId} <i class="fa fa-heart-o"></i></h2>
    <p id="like">${likes.length > 0 ? likes[0].likes : 0} likes</p>
    <button>Comments</button>
    <button id ="reserve-btn" class="reserve-btn">Reservations</button>
    </li>`);
      // show popup image
      resPopupImg(images);
    });
  }

  // display total items after 1 second
  setTimeout(() => {
    countItems(images);
    const dogsCounter = document.getElementById('dogsCounter');
    dogsCounter.insertAdjacentHTML('beforeend', `(${countItems(images)})`);
  }, 1000);
}

container();

// Event Listeners;
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-heart-o')) {
    e.target.style.color = 'red';

    const id = [].indexOf.call(e.target.parentNode.parentNode.parentNode.childNodes,
      e.target.parentNode.parentNode);
    const numLikes = Number(e.target.parentElement.nextElementSibling.textContent.match(/\d+/)[0]) + 1;
    e.target.parentElement.nextElementSibling.innerHTML = `${numLikes} Likes`;
    postLike(id);
  }
});

// add a reservation
postReserveData();

// show reservations
getReserveData();

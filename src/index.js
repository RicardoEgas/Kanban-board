import './index.css';
import openPopup from './modules/popup.js';
import { apiUrl } from './modules/saveComments.js';
import { fetchLike, postLike } from './modules/likes.js';
import postReserveData from './modules/postReserve.js';
import fetchDogs from './modules/getDogItems.js';
import { countItems } from './modules/countDogs.js';

// fetch items from API
fetchDogs();

const images = [];
// const counter = 0;
const getLikes = await fetchLike();
const dogs = document.getElementById('dogs-list');
for (let i = 0; i < 6; i += 1) {
  const itemId = `Dog${i + 1}`;
  const likes = getLikes.filter((like) => like.item_id === i);
  fetchDogs().then((data) => {
    images.push(data);
    dogs.insertAdjacentHTML(
      'beforeend',
      `<li class="dogs-items">
    <img class="dogs-img" src="${images[i]}"><img>
    <h2> ${itemId} <i class="fa fa-heart-o"></i></h2>
    <p id="like">${likes.length > 0 ? likes[0].likes : 0} likes</p>
    <button class="commentsBtn">Comments</button>
    <button>Reservations</button>
    </li>`,
    );

    const commentButtons = document.getElementsByClassName('commentsBtn');
    const commentButton = commentButtons[commentButtons.length - 1];
    commentButton.addEventListener('click', async () => {
      const clickedDogIndex = i;
      const dogImage = images[clickedDogIndex];
      const dogName = `Dog ${clickedDogIndex + 1}`;
      const initializeApp = async (callback) => {
        const response = await fetch(`${apiUrl}apps/`, {
          method: 'POST',
        });
        if (!response.ok) {
          throw new Error('Failed to initialize the app');
        }
        const data = await response.text();
        const appId = data.trim();
        if (callback) {
          callback(appId);
        }
      };
      const handleOpenPopup = (appId) => {
        openPopup(appId, dogImage, dogName);
      };
      initializeApp(handleOpenPopup);
    });
  });
}
// display total items after 1 second
setTimeout(() => {
  countItems(images);
  const dogsCounter = document.getElementById('dogsCounter');
  dogsCounter.insertAdjacentHTML('beforeend', `(${countItems(images)})`);
}, 1000);

// Event Listeners;
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-heart-o')) {
    e.target.style.color = 'red';

    const id = [].indexOf.call(
      e.target.parentNode.parentNode.parentNode.childNodes,
      e.target.parentNode.parentNode,
    );
    const numLikes = Number(
      e.target.parentElement.nextElementSibling.textContent.match(/\d+/)[0],
    ) + 1;
    e.target.parentElement.nextElementSibling.innerHTML = `${numLikes} Likes`;
    postLike(id);
  }
});

postReserveData();
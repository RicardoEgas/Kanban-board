import './index.css';

const projectId = 'NXpRpTwwlkHX1mjqefPA';

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
  fetchDogs().then((data) => {
    images.push(data);
    dogs.insertAdjacentHTML('beforeend', `<li>
    <img class="dogs-img" src="${images[i]}"><img>
    <h2>Dog ${i+1} <i class="fa fa-heart-o"></i></h2>
    <button>Comments</button>
    <button>Reservations</button>
    </li>`);
  });
}


reserveDog();

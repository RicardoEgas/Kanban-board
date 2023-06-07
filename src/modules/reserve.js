
const reserveDog = (theimgs) => {
  const imgIndex = Object.keys(theimgs);
  const reserveBtn = document.querySelectorAll('.reserve-btn');
  const reserveModal = document.querySelector('.reserve-modal');  
  reserveBtn.forEach((btn, btnIndex) => {
    imgIndex.forEach((img, imgIndex) => {
      btn.addEventListener('click', () => {
        reserveModal.className = 'reserve-modal';
        reserveModal.style.display = 'flex';
        if (btnIndex === imgIndex) {
          reserveModal.innerHTML = `
          <img src="${theimgs[btnIndex]}" class="dog-image" alt="image of the selected dog"/>
          <h2 class="reserve-data">Reservations (data)</h2>
          <div class="reserve-list">use paragraph here</div>
          <form id="reserve-form" class="reserve-form">
              <input id="username" class="username" value="" placeholder="Your name">
              <input type="date" id="startdate" class="startdate" value="" placeholder="Start date">
              <input type="date" id="enddate" class="enddate" value="" placeholder="End date">
              <button type="button" id="submit" class="submit" value="submit">Reserve</button>
          </form>`
        }
      })
    })
  })
}

export default reserveDog;





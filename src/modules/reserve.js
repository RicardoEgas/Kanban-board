
const reserveDog = (theimgs) => {
  const imgIndex = Object.keys(theimgs);
  const reserveBtn = document.querySelectorAll('.reserve-btn');
  const reserveModal = document.querySelector('.reserve-modal');
  reserveBtn.forEach((btn, btnIndex) => {
    imgIndex.forEach((img, imgIndex) => {
      btn.addEventListener('click', () => {
       // reserveModal.className = 'reserve-modal';
        reserveModal.style.display = 'flex';
        if (btnIndex === imgIndex) {
          reserveModal.innerHTML = `
          <img src="${theimgs[btnIndex]}" class="dog-image" alt="image of the selected dog"/>
          <p class="reserve-data">Reservation data</p>
          <form id="reserveForm" class="reserveForm">
              <input id="username" class="username" value="" placeholder="Your name">
              <input id="startdate" class="startdate" value="" placeholder="Start date">
              <input id="enddate" class="enddate" value="" placeholder="End date">
              <button type="button" id="submit" class="submit" value="submit">Submit</button>
          </form>`
        }
      })
    })
  })
}

export default reserveDog;





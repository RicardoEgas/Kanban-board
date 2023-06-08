import * as resInterface from "./reserveInterface.js";

const resPopupImg = (theimgs) => {
    const imgIndex = Object.keys(theimgs);
    const reserveBtn = document.querySelectorAll('.reserve-btn');
    reserveBtn.forEach((btn, btnIndex) => {
      imgIndex.forEach((img, imgIndex) => {
        btn.addEventListener('click', () => {
            resInterface.reserveModal.className = 'reserve-modal';
            resInterface.reserveModal.style.display = 'flex';
          if (btnIndex === imgIndex) {
            resInterface.resItemImage.src = theimgs[btnIndex];
          }
        })
      })
    })
  }

export default resPopupImg;
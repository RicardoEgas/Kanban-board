import * as resInterface from './reserveInterface.js';
import postReserveData from './postReserve.js';
import getReserveData from './getReserve.js';

const resPopupImg = async (theimgs) => {
  const imgIndex = Object.keys(theimgs);
  const reserveBtn = document.querySelectorAll('.reserve-btn');
  const blurBg = document.querySelectorAll('.blur');
  reserveBtn.forEach((btn, btnIndex) => {
    imgIndex.forEach((img, imgIndex) => {
      btn.addEventListener('click', () => {
        resInterface.reserveModal.className = 'reserve-modal';
        resInterface.reserveModal.style.display = 'flex';
        if (btnIndex === imgIndex) {
          blurBg.forEach((ele) => { ele.className = 'blur-bg'; });
          resInterface.resItemImage.src = theimgs[btnIndex];
          postReserveData(btnIndex);
          getReserveData(btnIndex);
        }
      });
    });
  });
};

export default resPopupImg;
import * as resInterface from './reserveInterface.js';

const closeModalPopup = async () => {
  const closeModalBtn = resInterface.closeBtn;
  const blurBg = document.querySelectorAll('.blur');
  closeModalBtn.innerHTML = '<a href="#"><p class="close-btn">&times</p></a>';
  closeModalBtn.addEventListener('click', () => {
    resInterface.reserveModal.style.display = 'none';
    blurBg.forEach((ele) => { ele.classList.remove('blur-bg'); });
  });
};

export default closeModalPopup;
const showItemId = () => {
  const reserveBtn = document.querySelectorAll('.reserve-btn');
  reserveBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      // if (e.target.classList.contains('fa-heart-o'))
      // const itemId = e.target.parentNode
      // console.log(document.querySelectorAll('.itemid'));
    });
  });
};

export default showItemId;
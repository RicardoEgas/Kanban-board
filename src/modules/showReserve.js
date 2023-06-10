const showReservations = (resdata) => {
  const resListContainer = document.querySelector('.reserve-list-container');
  const resList = document.createElement('p');
  resdata.forEach((res, resIndex) => {
    resList.className = 'reserve-list-content';
    resList.innerHTML = `
    ${resdata[resIndex].date_start} - ${resdata[resIndex].date_end} by ${resdata[resIndex].username}`;
    resListContainer.appendChild(resList);
  });
};

export default showReservations;

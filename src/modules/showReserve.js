import * as resInterface from './reserveInterface.js';

const showReservations = (resdata) => {
  const resList = document.createElement('p');
  resdata.forEach((res, resIndex) => {
    resList.className = 'reserve-list-content';
    resList.innerHTML = `
    ${resdata[resIndex].date_start} - ${resdata[resIndex].date_end} by ${resdata[resIndex].username}`;
    resInterface.resListContainer.appendChild(resList);
  });
};

export default showReservations;

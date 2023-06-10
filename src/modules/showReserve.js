
const showReservations = (resdata) => {
  const resListContainer = document.querySelector('.reserve-list-container');
  resdata.forEach((res, resIndex) => {
    const resList = `
    <p class="reserve-list-content">
    ${resdata[resIndex].date_start} - ${resdata[resIndex].date_end} by ${resdata[resIndex].username}
    </p> `;
    resListContainer.insertAdjacentHTML('beforeend', resList);
import * as resInterface from './reserveInterface.js';

  });
};

export default showReservations;

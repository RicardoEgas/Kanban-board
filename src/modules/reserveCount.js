import * as resInterface from './reserveInterface.js';

const countReservations = (resdata) => {
  const resHeading = resInterface.resTitle;
  resHeading.innerText = `Reservations (${resdata.length})`;
};

export default countReservations;
import * as resInterface from './reserveInterface.js';

const displayCounts = (theid) => {
  const resHeading = resInterface.resTitle;
  const len = theid.length;
  resHeading.innerText = `Reservation (${len})`;
};

export default displayCounts;
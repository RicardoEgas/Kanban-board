import showReservations from './showReserve.js';
import countReservations from './reserveCount.js';
import displayCounts from './displayCount.js'

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/reservations?item_id=';

const getReserveData = async (imgId) => {
  let resultData;
  try {
    const response = await fetch(`${url}${imgId}`);
    resultData = await response.json();
    showReservations(resultData);
    countReservations(resultData);
    displayCounts(resultData)
  } catch (error) {
    error.message = 'No reservations';
  }
  return resultData;
};

export default getReserveData;
import * as resInterface from './reserveInterface.js';

// const projectId = 'HrIKPRrYjrxS00NlIVCD';
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/reservations/';

const postReserveData = (imgId) => {
  const theForm = resInterface.resForm;
  theForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const itemId = imgId;
    const username = resInterface.userInput.value;
    const dateStart = resInterface.startDate.value;
    const dateEnd = resInterface.endDate.value;
    const resInput = {
      itemId, username, dateStart, dateEnd,
    };
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(resInput),
    });
    theForm.reset();
  });
};

export default postReserveData;

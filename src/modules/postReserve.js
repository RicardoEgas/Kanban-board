import * as resInterface from './reserveInterface.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/reservations/';

const postReserveData = (imgId) => {
  let count = 0;
  const theForm = resInterface.resForm;

  theForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    count += 1;

    if (count === (imgId + 1)) {
      const itemid = String(imgId);
      const username = resInterface.userInput.value;
      const dateStart = resInterface.startDate.value;
      const dateEnd = resInterface.endDate.value;

      const resInput = {
        item_id: itemid,
        username,
        dateStart,
        dateEnd,
      };

      await fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(resInput),
      })
        .then((res) => res.json(), // Add the return statement here
        )
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .then(theForm.reset());
    }
  });
};

export default postReserveData;
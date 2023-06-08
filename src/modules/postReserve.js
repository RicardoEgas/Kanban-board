import * as resInterface from "./reserveInterface.js";

const projectId = 'HrIKPRrYjrxS00NlIVCD';
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/reservations/';

const postReserveData = (imgId) => {
    const theForm = resInterface.resForm;
    theForm.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        const item_id = imgId;
        const username = resInterface.userInput.value;
        const date_start = resInterface.startDate.value;
        const date_end = resInterface.endDate.value;
        const resInput = { item_id, username, date_start, date_end };
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(resInput),
        })
        theForm.reset();
    }) 
    
}

export default postReserveData;

import * as resInterface from "./reserveInterface.js";

const projectId = 'NXpRpTwwlkHX1mjqefPA';
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NXpRpTwwlkHX1mjqefPA/reservations/';

const postReserveData = () => {
    const theForm = resInterface.resForm;
    theForm.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        const item_id = '1';
        const username = resInterface.userInput.value;
        const date_start = resInterface.startDate.value;
        const date_end = resInterface.endDate.value;
        const resInput = { item_id, username, date_start, date_end };
        console.log(resInput);
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(resInput),
        })
        console.log('success')
    })
    
    theForm.reset();
}

export default postReserveData;

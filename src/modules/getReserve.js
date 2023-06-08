import * as resInterface from "./reserveInterface.js";

const projectId = 'HrIKPRrYjrxS00NlIVCD';
const url ='https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/reservations?item_id=item1/';

const getReserveData = async (imgId) => {
console.log(imgId)
//     let resultData;
//   try {
//   const response = await fetch(url);
//   const result = await response.json();
//     resultData = result;
//       showList.innerText = "No reservations";
//   } catch (error) {
//     console.log(error.message);
//   }
//  return resultData;
}

export default getReserveData;
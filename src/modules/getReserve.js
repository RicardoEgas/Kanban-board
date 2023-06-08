import * as resInterface from "./reserveInterface.js";

const projectId = 'NXpRpTwwlkHX1mjqefPA';
const url ='https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NXpRpTwwlkHX1mjqefPA/reservations?item_id=item1/';

const getReserveData = async () => {
  const showList = resInterface.resListContent;
    let resultData;
  try {
  const response = await fetch(url);
  const result = await response.json();
    resultData = result;
      showList.innerText = "No reservations";
  } catch (error) {
    console.log(error.message);
  }
 // console.log(resultData);
 return resultData;
}

export default getReserveData;
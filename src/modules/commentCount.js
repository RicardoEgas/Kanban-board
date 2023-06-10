import { apiUrl } from './saveComments.js';

const getCommentCount = async (itemId) => {
  const response = await fetch(
    `${apiUrl}apps/HrIKPRrYjrxS00NlIVCD/comments?item_id=${itemId}`,
  );
  const data = await response.json();
  return data.length;
};

export default getCommentCount;
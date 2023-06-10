const getCommentCount = async (itemId) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/comments?item_id=${itemId}`,
  );
  const data = await response.json();
  return data.length;
};

export default getCommentCount;
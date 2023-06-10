export const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const saveComment = async (itemId, username, comment) => {
  await fetch(`${apiUrl}apps/HrIKPRrYjrxS00NlIVCD/comments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
  });
};

export const handleSaveComment = async (itemId) => {
  const response = await fetch(`${apiUrl}apps/HrIKPRrYjrxS00NlIVCD/comments?item_id=${itemId}`);
  const data = await response.json();
  return data;
};

export default saveComment;
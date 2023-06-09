export const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

let appId;
const saveComment = async (appId, itemId, username, comment) => {
  try {
    const response = await fetch(`${apiUrl}apps/${appId}/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: itemId, username, comment }),
    });
    if (!response.ok) {
      throw new Error('Failed to save a comment');
    }
    const { result } = await response.json();
    console.log('result', result);
    return result;
  } catch (error) {
    return null;
  }
};

const handleSaveComment = () => {
  const commentData = getCommentData();
  if (appId && commentData) {
    const { itemId, username, comment } = commentData;
    saveComment(appId, itemId, username, comment);
  }
};

export default saveComment;
const initializeApp = async () => {
  try {
    const response = await fetch(`${apiUrl}apps/`, {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error('Failed to initialize the app');
    }
    const data = await response.text();
    appId = data.trim();
    handleSaveComment();
  } catch (error) {
    console.error(error);
  }
};
initializeApp();
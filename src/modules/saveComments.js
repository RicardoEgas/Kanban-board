export const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const saveComment = async (itemId, username, comment, creationDate) => {
  await fetch(`${apiUrl}apps/HrIKPRrYjrxS00NlIVCD/comments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
      created_at: creationDate,
    }),
  });
};

export const handleSaveComment = async (itemId) => {
  const response = await fetch(
    `${apiUrl}apps/HrIKPRrYjrxS00NlIVCD/comments?item_id=${itemId}`,
  );
  const data = await response.json();

  const commentsWithDate = data.map((comment) => ({
    ...comment,
    created_at: new Date(comment.creation_date),
  }));

  const commentCount = commentsWithDate.length; // Get the comment count

  return { comments: commentsWithDate, commentCount };
};

export default saveComment;
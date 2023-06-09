import saveComment, { apiUrl } from './saveComments.js';

const modal = document.getElementById('comment-modal');
const overlay = document.createElement('comment-overlay');
overlay.classList.add('popup-overlay');
modal.parentNode.insertBefore(overlay, modal);
function closePopup() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
  document.body.classList.remove('popup-active');
}
export default async function openPopup(appId, dogImage, dogName) {
  modal.style.display = 'block';
  overlay.style.display = 'block';
  document.body.classList.add('popup-active');
  modal.innerHTML = '';
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');
  popupContainer.innerHTML = `
    <div class="wrapper">
      <div class="flex-cont">
        <img class="pop-img" src="${dogImage}" alt="dog">
        <button class="closeBtn"><i class="fa fa-close"></i></button>
      </div>
      <h2 class="pop-name cnt">${dogName}</h2>
      <h3 class="comments cnt">Comments</h3>
      <ul class="comment-list"></ul>
      <h3 class="add-comm cnt">Add a comment</h3>
      <form>
        <input type="text" id="username" placeholder="Your name">
        <textarea placeholder="Your insights" maxlength="50" id="comment"></textarea>
        <button type="submit" class="form-btn">Comment</button>
      </form>
      <p class="comment-count"></p>
    </div>
  `;
  modal.append(popupContainer);
  const closeButton = popupContainer.querySelector('.closeBtn');
  closeButton.addEventListener('click', () => {
    closePopup();
  });
  const formBtn = document.querySelector('.form-btn');
  formBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('username');
    const commentInput = document.getElementById('comment');
    const { value: username } = nameInput;
    const { value: comment } = commentInput;
    const itemId = dogName.replace(/\s/g, '');
    if (username && comment) {
      await saveComment(appId, itemId, username, comment);
      nameInput.value = '';
      commentInput.value = '';
      const commentsResponse = await fetch(
        `${apiUrl}apps/${appId}/comments/?item_id=${encodeURIComponent(itemId)}`,
      );
      const commentsData = await commentsResponse.json();
      // Update the comment list with the new comment
      const commentList = modal.querySelector('.comment-list');
      commentList.innerHTML = '';
      if (
        commentsData
        && commentsData.comments
        && commentsData.comments.length > 0
      ) {
        commentsData.comments.forEach((comment) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${comment.username}: ${comment.comment}`;
          commentList.appendChild(listItem);
        });
      } else {
        const noComments = document.createElement('li');
        noComments.textContent = 'No comments yet.';
        commentList.appendChild(noComments);
      }
      // Update the comment count
      const commentCount = modal.querySelector('.comment-count');
      commentCount.textContent = `Comments (${commentsData.comments.length})`;
    }
  });
  // Fetch comments from the Involvement API
  const commentsResponse = await fetch(`${apiUrl}apps/${appId}/comments/`);
  const commentsData = await commentsResponse.json();
  // Display comments in the comment list
  const commentList = modal.querySelector('.comment-list');
  commentList.innerHTML = '';
  if (commentsData.length > 0) {
    commentsData.forEach((comment) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${comment.username}: ${comment.comment}`;
      commentList.appendChild(listItem);
    });
  } else {
    const noComments = document.createElement('li');
    noComments.textContent = 'No comments yet.';
    commentList.appendChild(noComments);
  }
  // Display the initial comment count
  const commentCount = modal.querySelector('.comment-count');
  commentCount.textContent = `Comments (${commentsData.length})`;
}
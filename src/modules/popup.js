import saveComment, { handleSaveComment } from './saveComments.js';
// import { getCommentCount } from './commentCount.js';

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
      <p class="comment-count"></p>
      <ul class="comment-list"></ul>
      <h3 class="add-comm cnt">Add a comment</h3>
      <form action="">
        <div><input type="text" id="name" placeholder="Your name" required></div>
        <textarea placeholder="Your insights" maxlength="50" id="comment"></textarea>
        <button type="submit" class="form-btn">Comment</button>
      </form>
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
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');

    const itemId = dogName.match(/\d+/)[0];
    await saveComment(itemId, nameInput.value, commentInput.value);
    nameInput.value = '';
    commentInput.value = '';

    // Retrieve the updated comments and comment count
    const { comments: updatedComments, commentCount } = await handleSaveComment(
      itemId,
    );

    // Update the comment list in the popup
    const commentList = modal.querySelector('.comment-list');
    commentList.innerHTML = '';

    if (updatedComments.length > 0) {
      updatedComments.forEach((comment) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${comment.username}: ${comment.comment} - ${comment.creation_date}`;
        commentList.appendChild(listItem);
      });
    } else {
      const noComments = document.createElement('li');
      noComments.textContent = 'No comments yet.';
      commentList.appendChild(noComments);
    }

    // Update the comment count in the popup
    const commentCountElement = modal.querySelector('.comment-count');
    commentCountElement.textContent = `Comments(${commentCount})`;
  });

  // Fetch comments from the Involvement API
  const itemId = dogName.match(/\d+/)[0];
  const { comments: userComments, commentCount } = await handleSaveComment(
    itemId,
  );

  // Display comments in the comment list
  const commentList = modal.querySelector('.comment-list');
  commentList.innerHTML = '';

  if (userComments.length > 0) {
    userComments.forEach((comment) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${comment.username}: ${comment.comment} - ${comment.creation_date}`;
      commentList.appendChild(listItem);
    });
  } else {
    const noComments = document.createElement('li');
    noComments.textContent = 'No comments yet.';
    commentList.appendChild(noComments);
  }

  // Display the comment count
  const commentCountElement = modal.querySelector('.comment-count');
  commentCountElement.textContent = `Comments(${commentCount})`;
}
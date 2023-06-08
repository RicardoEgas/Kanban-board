
// create item image container 
export const resItemImage = document.createElement('img')
resItemImage.className = 'dog-image';
resItemImage.alt = 'image of the selected dog';

// create reservation title
export const resTitle = document.createElement('h2');
resTitle.innerText = 'Reservations (data)'
resTitle.className = 'reserve-data';

// create reservation list container 
export const resListContainer = document.createElement('div');
resListContainer.className = 'reserve-list-container';

// create reservation list item 
export const resListContent = document.createElement('p');
resListContent.className = 'reserve-list-content';
resListContainer.appendChild(resListContent);

// create username input
export const userInput = document.createElement('input');
userInput.className = 'username';
userInput.id = 'username';
userInput.type = 'text';
userInput.value = '';
userInput.placeholder = 'Your name';
userInput.maxLength = '40';
userInput.required = true;

// create start date input
export const startDate = document.createElement('input');
startDate.className = 'startdate';
startDate.id = 'startdate';
startDate.type = 'date';
startDate.value = '';
startDate.required = true;

// create end date input
export const endDate = document.createElement('input');
endDate.className = 'enddate';
endDate.id = 'enddate';
endDate.type = 'date';
endDate.value = '';
endDate.required = true;

// create submit btn
export const submitBtn = document.createElement('input');
submitBtn.className = 'submit';
submitBtn.id = 'submit';
submitBtn.type = 'submit';
submitBtn.innerText = 'Reserve';
// submitBtn.form = 'res-form'

// create reservation form
export const resForm = document.createElement('form');
resForm.className = 'reserve-form';
resForm.appendChild(userInput);
resForm.appendChild(startDate);
resForm.appendChild(endDate);
resForm.appendChild(submitBtn);
// resForm.name = 'res-form';

// add modal elements
export const reserveModal = document.querySelector('.reserve-modal');
reserveModal.appendChild(resItemImage);
reserveModal.appendChild(resTitle);
reserveModal.appendChild(resListContainer);
reserveModal.appendChild(resForm);





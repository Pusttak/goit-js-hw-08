const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', onTextFormInput);
formRef.addEventListener('click', onInputSubmit);

let formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

populateFormData();

function onTextFormInput(evn) {
  formData[evn.target.name] = evn.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onInputSubmit(evn) {
  evn.preventDefault();

  if (evn.target.nodeName === 'BUTTON') {
    const { email, message } = evn.currentTarget.elements;

    console.log(email.value, message.value);
    evn.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    formData = {};
  }
}

function populateFormData() {
  const { email, message } = formData;

  if (email || message) {
    formRef.elements.email.value = email || null;
    formRef.elements.message.value = message || null;
  }
}

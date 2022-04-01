import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onTextFormInput, 500));
formRef.addEventListener('click', onInputSubmit);

const STORAGE_KEY = 'feedback-form-state';

const formDataSaved = localStorage.getItem(STORAGE_KEY);
let formData = {};

populateFormData();

function onTextFormInput(evn) {
  formData[evn.target.name] = evn.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onInputSubmit(evn) {
  evn.preventDefault();

  if (evn.target.nodeName === 'BUTTON') {
    console.log(formData);
    evn.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
  }
}

function populateFormData() {
  if (formDataSaved) {
    const formDataParse = JSON.parse(formDataSaved);
    const { email, message } = formDataParse;

    formRef.elements.email.value = email || null;
    formRef.elements.message.value = message || null;
    formData = formDataParse;
  }
}

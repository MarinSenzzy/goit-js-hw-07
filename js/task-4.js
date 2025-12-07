const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('🚀 ~ form:', form);

  const objEl = form.elements;
  console.log('🚀 ~ objEl:', objEl);

  const emailValue = objEl.email.value.trim();
  const passwordValue = objEl.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    form.reset();
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  form.reset();
});

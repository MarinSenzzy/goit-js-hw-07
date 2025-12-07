const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const objEl = form.elements;

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

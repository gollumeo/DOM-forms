const firstName = document.querySelector('#firstname');
const displayFirstname = document.querySelector('#display-firstname');

firstName.addEventListener('keyup', (event) => {
    displayFirstname.textContent = event.target.value;
});

const age = document.querySelector('#age');
const aHardTruth = document.querySelector('#a-hard-truth');

age.addEventListener('keyup', (event) => {
    if (event.target.value < 18) {
        aHardTruth.style.visibility = 'hidden';
    } else {
        aHardTruth.style.visibility = 'visible';
    }
})

const passwordInput = document.querySelector('#pwd');
const passwordConfirmationInput = document.querySelector('#pwd-confirm');

passwordInput.addEventListener('keyup', (event) => {
  if (event.target.value.length < 6) {
    passwordInput.style.borderColor = 'red';
  } else {
    passwordInput.style.borderColor = 'initial';
  }
});

passwordConfirmationInput.addEventListener('keyup', (event) => {
  if (event.target.value !== passwordInput.value) {
    passwordConfirmationInput.style.borderColor = 'red';
  } else {
    passwordConfirmationInput.style.borderColor = 'green';
  }
});

const select = document.querySelector('select');
const body = document.querySelector('body');

select.addEventListener('change', (event) => {
  if (event.target.value === 'dark') {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  } else {
    body.style.backgroundColor = 'initial';
    body.style.color = 'initial';
  }
});
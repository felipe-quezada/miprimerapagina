const menuNav = document.querySelector('.checkbtn');
const navigateLink = document.querySelectorAll('.navigate-link');
const helperOnClick = () => {
  navBar = document.querySelector('.navMenu-container');
  navBar.classList.toggle('active');
};

menuNav.onclick = helperOnClick;
navigateLink.forEach((item) => {
  item.onclick = helperOnClick;
});

//------------------------------------

const form = document.getElementById('form');
const name = document.getElementById('name');
const warning = document.getElementById('warning');

const validarForm = () => {
  let validator = true;

  if (name.value.length < 4) {
    warning.innerHTML = 'Al menos debe ingresar un nombre';
    validator = false;
  } else {
    warning.innerHTML = '';
  }

  return validator;
};

form.addEventListener('submit', (e) => {
  if (validarForm()) {
    form.submit();
  } else {
    e.preventDefault();
  }
});

const humb = document.querySelector('#header .hamb');
const mobile_menu = document.querySelector('#header .nav-list ul');
const header = document.querySelector('#header .header');

humb.addEventListener('click', () => {
  humb.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    header.style.background = 'rgba(26, 57, 108, 0.85)';
  } else {
    header.style.background = 'rgba(21, 63, 186, 0.3)';
  }
});

const menu_item = document.querySelectorAll('#header .nav-list ul li a');

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    humb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});
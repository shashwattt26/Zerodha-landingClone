function openMenu() {
  const menu = document.querySelector('.navigation');
  const icon = document.querySelector('.menu-btn');
  menu.classList.add('navigation-open');
  const menuItems = document.querySelectorAll('.navigation a');
  menuItems.forEach(item => {
    item.style.display = 'block';
  });
}

const closeMenu = () => {
  const menu = document.querySelector('.navigation');
  const icon = document.querySelector('.menu-btn');
  menu.classList.remove('navigation-open');
  const menuItems = document.querySelectorAll('.navigation a');
  menuItems.forEach(item => {
    item.style.display = 'none';
  });
}

function toggleMenu() {
  const menu = document.querySelector('.navigation');
  if (menu.classList.contains('navigation-open')) {
    closeMenu();
  } else {
    openMenu();
  }
}
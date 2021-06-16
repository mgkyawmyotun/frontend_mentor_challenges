const menu = document.querySelector('.menu');
const menu_list = document.querySelector('.menu_list');
menu.addEventListener('click', () => {
  console.log('HEllo');
  if (menu_list.classList.contains('hidden')) {
    menu_list.classList.toggle('hidden', false);
    console.log('I got hidden');
    return;
  }
  menu_list.classList.toggle('hidden', true);
});

const input_element = document.querySelector('.dl_mode__button > input');
input_element.addEventListener('change', ({ target }) => {
  if (target.checked) {
    document.body.classList.toggle('dark_theme', true);
    return;
  }
  document.body.classList.toggle('dark_theme', false);
});

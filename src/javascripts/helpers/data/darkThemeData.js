const darkThemeTime = () => {
  const myElement = document.getElementById('darkTime');
  myElement.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('black');
  });
};

export default { darkThemeTime };

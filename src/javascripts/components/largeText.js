// function that adjusts the text size of the app
const LargeTextToggle = () => {
  const myElement = document.getElementById('large-Text');
  myElement.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('text');
  });
};
export default { LargeTextToggle };

const LargeTextToggle = () => {
  const myElement = document.getElementById('large-Text');
  myElement.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('text');
  });
};
export default { LargeTextToggle };

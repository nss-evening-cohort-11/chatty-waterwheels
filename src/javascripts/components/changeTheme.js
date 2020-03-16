import utils from '../helpers/utils';

let backgroundClass;
let foregroundClass;
let activeUser;

// function to close the modal for theme selection
const closeThemeModal = () => {
  utils.printToDom('modal-container', '');
  $('#changeThemeModal').modal('hide');
};

// function that selects the background color id from radio button
const getBackgroundRadioVal = () => {
  let val;
  Array.from($('.bg-radio-btns')).forEach((item) => {
    if (item.checked) {
      val = item.id;
    }
  });
  return val;
};

// function that selects the text color id from radio button
const getTextRadioVal = () => {
  let val;
  Array.from($('.text-radio-btns')).forEach((item) => {
    if (item.checked) {
      val = item.id;
    }
  });
  return val;
};

// function that gets the value of the radio button and assigns those values to the background and text variables
const themeClassSetter = () => {
  if (getBackgroundRadioVal()) {
    backgroundClass = getBackgroundRadioVal();
  }
  if (getTextRadioVal()) {
    foregroundClass = getTextRadioVal();
    $('li').removeClass('light-txt').removeClass('dark-txt').removeClass('gray-txt');
  }
  $('body').removeClass();
  $('body').addClass(`${backgroundClass}`);
  $('li').addClass(`${foregroundClass}`);
  $('nav').removeClass('bg-dark');
  closeThemeModal();
  $(`#${activeUser}`).click();
};

// function that dynamically prints the modal to the screen
const openThemeModal = () => {
  activeUser = utils.getRadioVal();
  let domString = '';
  domString += '<div class="row wrap" id="modal-container">';
  domString += '  <div class=col-6>';
  domString += '  <h5>Background Color:</h5>';
  domString += '      <div class="custom-control custom-radio row">';
  domString += '        <input type="radio" id="blue-bg" name="customRadio" class="custom-control-input bg-radio-btns">';
  domString += '          <label class="custom-control-label text-dark pr-2" for="blue-bg">Blue</label>';
  domString += '      </div>';
  domString += '      <div class="custom-control custom-radio row">';
  domString += '        <input type="radio" id="red-bg" name="customRadio" class="custom-control-input bg-radio-btns">';
  domString += '          <label class="custom-control-label text-dark pr-2" for="red-bg">Red</label>';
  domString += '      </div>';
  domString += '      <div class="custom-control custom-radio row">';
  domString += '        <input type="radio" id="green-bg" name="customRadio" class="custom-control-input bg-radio-btns">';
  domString += '          <label class="custom-control-label text-dark pr-2" for="green-bg">Green</label>';
  domString += '      </div>';
  domString += '  </div>';
  domString += '  <div class=col-6>';
  domString += '<h5>Text Color:</h5>';
  domString += '      <div class="custom-control custom-radio row">';
  domString += '        <input type="radio" id="light-txt" name="customRadio2" class="custom-control-input text-radio-btns">';
  domString += '          <label class="custom-control-label text-dark pr-2" for="light-txt">Light</label>';
  domString += '      </div>';
  domString += '      <div class="custom-control custom-radio row">';
  domString += '        <input type="radio" id="dark-txt" name="customRadio2" class="custom-control-input text-radio-btns">';
  domString += '          <label class="custom-control-label text-dark pr-2" for="dark-txt">Dark</label>';
  domString += '      </div>';
  domString += '      <div class="custom-control custom-radio row">';
  domString += '        <input type="radio" id="gray-txt" name="customRadio2" class="custom-control-input text-radio-btns">';
  domString += '          <label class="custom-control-label text-dark pr-2" for="gray-txt">Gray</label>';
  domString += '      </div>';
  domString += '  </div>';
  domString += '  <div class="row-6">';
  domString += '    <button class="btn btn-outline-dark m-2 my-sm-0" id="save-theme-btn">Save</button>';
  domString += '    <button class="btn btn-outline-dark m-2 my-sm-0" id="cancel-theme-btn">Cancel</button>';
  domString += '  </div>';
  domString += '</div>';

  $('#changeThemeModal').modal('show');
  utils.printToDom('modal-inner-container', domString);
  $('#save-theme-btn').on('click', themeClassSetter);
  $('#cancel-theme-btn').on('click', closeThemeModal);
};

// event listener for the button to open the modal
const changeThemeButtonEvent = () => {
  $('#change-theme-btn').click(openThemeModal);
};

export default { changeThemeButtonEvent };

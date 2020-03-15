import utils from '../helpers/utils';

const closeThemeModal = () => {
  utils.printToDom('modal-container', '');
  $('#changeThemeModal').modal('hide');
};

const getBackgroundRadioVal = () => {
  let val;
  Array.from($('.bg-radio-btns')).forEach((item) => {
    if (item.checked) {
      val = item.id;
    }
  });
  return val;
};

const getTextRadioVal = () => {
  let val;
  Array.from($('.text-radio-btns')).forEach((item) => {
    if (item.checked) {
      val = item.id;
    }
  });
  return val;
};

const themeClassSetter = () => {
  $('body').removeClass();
  $('body').addClass(getBackgroundRadioVal);
  $('nav').removeClass('bg-dark');
  $('nav').addClass(getBackgroundRadioVal);
  if ($('li').hasClass()) {
    $('li').removeClass();
    $('li').addClass('list-group-item');
  }
  $('li').addClass(getTextRadioVal);
  closeThemeModal();
};

const openThemeModal = () => {
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


const changeThemeButtonEvent = () => {
  $('#change-theme-btn').click(openThemeModal);
};

export default { changeThemeButtonEvent };

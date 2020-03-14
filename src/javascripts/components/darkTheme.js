import utils from '../helpers/utils';
import dark from '../helpers/data/darkThemeData';

const darkThemeToggle = () => {
  let domstring = '';
  domstring += `<input class='form-check-input' type='checkbox' value='' id='darkness'>
<label class="form-check-label" for='defaultCheck1'>
</label>`;
  utils.printToDom('darkTime', domstring);
  dark.darkThemeTime();
};

export default { darkThemeToggle };

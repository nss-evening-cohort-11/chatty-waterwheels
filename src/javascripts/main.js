import 'bootstrap';
import '../styles/main.scss';
import displayMessages from './components/displayMessages';
import addNewMessage from './components/newMessage';
import clear from './components/clearMessages';
import theme from './components/changeTheme';
import deleteMessage from './components/deleteMessage';
import text from './helpers/data/largeTextdata';

const init = () => {
  displayMessages.displayAllMessages();
  $('body').on('click', '#message-submit-btn', addNewMessage.addNewMessage);
  clear.clearButtonEvent();
  theme.changeThemeButtonEvent();
  $('body').on('click', '.delete-indiv-message', deleteMessage.deleteMessage);
  $('body').on('change', '.user-radio-btns', displayMessages.displayAllMessages);
  text.LargeTextToggle();
};

init();

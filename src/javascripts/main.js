import 'bootstrap';
import '../styles/main.scss';
import displayMessages from './components/displayMessages';
import addNewMessage from './components/newMessage';
import clear from './components/clearMessages';
import deleteMessage from './components/deleteMessage';
import dark from './helpers/data/darkThemeData';

const init = () => {
  displayMessages.displayAllMessages();
  $('body').on('click', '#message-submit-btn', addNewMessage.addNewMessage);
  clear.clearButtonEvent();
  dark.darkThemeTime();
  $('body').on('click', '.delete-indiv-message', deleteMessage.deleteMessage);
  $('body').on('change', '.user-radio-btns', displayMessages.displayAllMessages);
};

init();

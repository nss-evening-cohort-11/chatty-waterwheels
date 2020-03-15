import 'bootstrap';
import '../styles/main.scss';
import displayMessages from './components/displayMessages';
import addNewMessage from './components/newMessage';
import clear from './components/clearMessages';
import events from './helpers/events';
import dark from './helpers/data/darkThemeData';

const init = () => {
  displayMessages.displayAllMessages();
  $('body').on('click', '#message-submit-btn', addNewMessage.addNewMessage);
  clear.clearButtonEvent();
  dark.darkThemeTime();
  $('.delete-indiv-message').on('click', events.deleteDisplayEvent);
};

init();

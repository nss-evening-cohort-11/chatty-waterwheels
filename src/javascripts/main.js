import 'bootstrap';
import '../styles/main.scss';
import displayMessages from './components/displayMessages';
import addNewMessage from './components/newMessage';

const init = () => {
  displayMessages.displayAllMessages();
  $('body').on('click', '#message-submit-btn', addNewMessage.addNewMessage);
};

init();

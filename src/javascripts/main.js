import 'bootstrap';
import '../styles/main.scss';
import displayMessages from './components/displayMessages';
import addNewMessage from './components/newMessage';
import clear from './components/clearMessages';
import theme from './components/changeTheme';

const init = () => {
  displayMessages.displayAllMessages();
  $('body').on('click', '#message-submit-btn', addNewMessage.addNewMessage);
  clear.clearButtonEvent();
  theme.changeThemeButtonEvent();
};

init();

import 'bootstrap';
import '../styles/main.scss';
import displayMessages from './components/displayMessages';
import clear from './components/clearMessages';


const init = () => {
  displayMessages.displayAllMessages();
  clear.clearButtonEvent();
};

init();

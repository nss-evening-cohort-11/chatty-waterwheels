import messageData from '../helpers/data/messageData';
import displayMessages from './displayMessages';

const clearAllMessages = () => {
  messageData.setArray();
  $('#clear-message-btn').addClass('disabled');
  displayMessages.displayAllMessages();
};

const clearButtonEvent = () => {
  $('#clear-message-btn').click(clearAllMessages);
};

export default { clearAllMessages, clearButtonEvent };

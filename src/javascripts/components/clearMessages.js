import messageData from '../helpers/data/messageData';
import displayMessages from './displayMessages';

// function that calls the function to set the message array to an empty array
const clearAllMessages = () => {
  messageData.setArray();
  $('#clear-message-btn').addClass('disabled');
  displayMessages.displayAllMessages();
};

// event listener that executes the above function
const clearButtonEvent = () => {
  $('#clear-message-btn').click(clearAllMessages);
};

export default { clearAllMessages, clearButtonEvent };

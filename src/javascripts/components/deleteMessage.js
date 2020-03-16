import messageData from '../helpers/data/messageData';
import displayMessages from './displayMessages';

// function that removes a message by the active user, then reprints the page without the deleted message
const deleteMessage = (e) => {
  const messageId = e.target.closest('.message-div').id;
  messageData.removeMessages(messageId);
  displayMessages.displayAllMessages();
};

export default { deleteMessage };

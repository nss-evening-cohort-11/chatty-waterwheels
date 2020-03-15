import messageData from '../helpers/data/messageData';
import displayMessages from './displayMessages';

const deleteMessage = (e) => {
  // e.preventDefault();
  const messageId = e.target.closest('.message-div').id;
  messageData.removeMessages(messageId);
  console.error(messageId);
  displayMessages.displayAllMessages();
};

export default { deleteMessage };

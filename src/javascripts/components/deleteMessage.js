import messageData from '../helpers/data/messageData';
import displayMessages from './displayMessages';

const deleteMessage = (e) => {
  const messageId = e.target.closest('.message-div').id;
  messageData.removeMessages(messageId);
  displayMessages.displayAllMessages();
};

export default { deleteMessage };

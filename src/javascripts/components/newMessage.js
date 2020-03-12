import createId from '../helpers/utils';
import displayAllMessages from './displayMessages';
import messageData from '../helpers/messageData';

const addNewMessage = (e) => {
  e.preventDefault();
  const brandNewMessage = {
    userId: 'user0',
    message: $('#message-input').val(),
    messageId: createId.createId(),
  };
  messageData.setMessages(brandNewMessage);
  $('#message-input').val('');
  displayAllMessages.displayAllMessages();
  $('#clear-message-btn').removeClass('disabled');
};

export default { addNewMessage };

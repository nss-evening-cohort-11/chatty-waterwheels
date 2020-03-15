import moment from 'moment';
import utils from '../helpers/utils';
import displayAllMessages from './displayMessages';
import messageData from '../helpers/data/messageData';

const addNewMessage = (e) => {
  e.preventDefault();
  const brandNewMessage = {
    userId: utils.getRadioVal(),
    message: $('#message-input').val(),
    messageId: utils.createId(),
    stamp: moment().format('MMMM Do YYYY, h:mm A'),
  };
  if (brandNewMessage.message.length > 0) {
    messageData.setMessages(brandNewMessage);
    messageData.setLength();
    $('#message-input').val('');
    displayAllMessages.displayAllMessages();
    $('#clear-message-btn').removeClass('disabled');
  }
};

export default { addNewMessage };

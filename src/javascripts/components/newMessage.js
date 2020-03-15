import moment from 'moment';
import createId from '../helpers/utils';
import displayAllMessages from './displayMessages';
import messageData from '../helpers/data/messageData';

const getRadioVal = () => {
  let val;
  Array.from($('.user-radio-btns')).forEach((item) => {
    if (item.checked) {
      val = item.id;
    }
  });
  return val;
};

const addNewMessage = (e) => {
  e.preventDefault();
  const brandNewMessage = {
    userId: getRadioVal(),
    message: $('#message-input').val(),
    messageId: createId.createId(),
    stamp: moment().format('MMMM Do YYYY, h:mm A'),
  };
  messageData.setMessages(brandNewMessage);
  messageData.setLength();
  $('#message-input').val('');
  displayAllMessages.displayAllMessages();
  $('#clear-message-btn').removeClass('disabled');
};

export default { addNewMessage };

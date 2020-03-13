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
  };
  messageData.setMessages(brandNewMessage);
  $('#message-input').val('');
  displayAllMessages.displayAllMessages();
};

export default { addNewMessage };

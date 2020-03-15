import messageData from '../helpers/data/messageData';

const deleteMessage = () => {
  const messages = messageData.getMessages();
  let buttonId = '';
  Array.from($('.delete-indiv-message')).forEach((item) => {
    buttonId = messages.find((x) => x.messageId === item.id); // findIdex method
  });
  messages.splice(buttonId, 1);
  console.error(messages, buttonId);
  $('.delete-indiv-message').on('click', deleteMessage);
};

export default { deleteMessage };

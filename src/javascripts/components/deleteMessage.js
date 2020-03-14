import messageData from '../helpers/data/messageData';

const deleteMessage = () => {
  const messages = messageData.getMessages();
  let buttonId = '';
  Array.from($('.delete-indiv-message')).forEach((item) => {
    buttonId = messages.find((x) => x.messageId === item.id);
  });
  messages.splice(buttonId, 1);
  console.error(messages);
};

export default { deleteMessage };

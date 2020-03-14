import messageData from '../helpers/data/messageData';

const deleteMessage = () => {
  const messages = messageData.getMessages();
  Array.from($('.delete-indiv-message')).forEach((item) => {
    const buttonId = messages.find((x) => x.messageId === item.id);
    console.error(buttonId);
  });
};

export default { deleteMessage };

import displayMessages from '../components/displayMessages';
import deleteMessage from '../components/deleteMessage';

const deleteDisplayEvent = () => {
  deleteMessage.deleteMessage();
  displayMessages.displayAllMessages();
  $('.delete-indiv-message').on('click', deleteDisplayEvent);
};

export default { deleteDisplayEvent };

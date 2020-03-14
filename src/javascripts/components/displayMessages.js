import messageData from '../helpers/data/messageData';
import userData from '../helpers/data/userData';
import deleteMessage from './deleteMessage';
import utils from '../helpers/utils';


const displayAllMessages = () => {
  const users = userData.getUsers();
  let domString = '';
  messageData.getMessages().forEach((m) => {
    const userName = users.find((x) => x.id === m.userId);
    domString += `<div>
      <ul class="list-group">
      <li class="list-group-item"><span class="message-text"> <span class="user-name">${userName.name} </span> : ${m.message} </span>
      <button class="delete-indiv-message btn btn-outline-dark" id="${m.messageId}">X</button> </li>`;
    domString += '</ul> </div>';
  });
  utils.printToDom('message-container', domString);
  $('.delete-indiv-message').on('click', deleteMessage.deleteMessage);
};

export default { displayAllMessages };

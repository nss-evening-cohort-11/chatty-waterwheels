import messageData from '../helpers/data/messageData';
import userData from '../helpers/data/userData';
import utils from '../helpers/utils';


const displayAllMessages = () => {
  const users = userData.getUsers();
  let domString = '';
  messageData.getMessages().forEach((m) => {
    const userName = users.find((x) => x.id === m.userId);
    domString += `<div>
      <ul class="list-group">
      <li class="list-group-item"><span class="message-text"> <span class="user-name">${userName.name} </span> : ${m.message} </span> <span class="timestamp">(${m.stamp})</span>
      <button class="delete-indiv-message btn btn-outline-dark" id="${m.messageId}">X</button> </li>`;
    domString += '</ul> </div>';
  });
  utils.printToDom('message-container', domString);
};

export default { displayAllMessages };

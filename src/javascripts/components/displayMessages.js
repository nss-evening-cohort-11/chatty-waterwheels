import messageData from '../helpers/data/messageData';
import userData from '../helpers/data/userData';
import utils from '../helpers/utils';

// function that prints the delete button next to the message
const printButtons = (authUserId, message) => {
  let domString = '';
  if (message.userId === authUserId) {
    domString += '<button class="delete-indiv-message btn btn-outline-dark"><i class="fas fa-trash-alt fa-xs"></i></button>';
  }
  return domString;
};

// function that loops through the messages array, then dynamically prints to page
const displayAllMessages = () => {
  const authUserId = utils.getRadioVal();
  const users = userData.getUsers();
  let domString = '';
  messageData.getMessages().forEach((m) => {
    const userName = users.find((x) => x.id === m.userId);
    domString += `<div class="message-div" id="${m.messageId}">
      <ul class="list-group">
      <li class="list-group-item"><span class="message-text"><span class="user-name">${userName.name}</span>: ${m.message}</span><br><span class="timestamp">(${m.stamp}) </span>`;
    domString += printButtons(authUserId, m);
    domString += '</li> </ul> </div>';
  });
  utils.printToDom('message-container', domString);
};

export default { displayAllMessages };

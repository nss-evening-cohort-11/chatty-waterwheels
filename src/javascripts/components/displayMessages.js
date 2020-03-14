import messageData from '../helpers/data/messageData';
import userData from '../helpers/data/userData';
import utils from '../helpers/utils';

const displayAllMessages = () => {
  const users = userData.getUsers();
  let domString = '';
  domString += '<ul class="list-group">';
  messageData.getMessages().forEach((m) => {
    const userName = users.find((x) => x.id === m.userId);
    domString += `<li class="list-group-item"><span class="user-name">${userName.name}</span>: ${m.message} (${m.stamp})</li>`;
  });
  domString += '</ul>';
  utils.printToDom('message-container', domString);
};

export default { displayAllMessages };

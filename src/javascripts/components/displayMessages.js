import messageData from '../helpers/data/messageData';
import utils from '../helpers/utils';

const displayAllMessages = () => {
  let domString = '';
  domString += '<ul class="list-group">';
  messageData.getMessages().forEach((m) => {
    domString += `<li class="list-group-item">${m.message}</li>`;
  });
  domString += '</ul>';
  utils.printToDom('message-container', domString);
};

export default { displayAllMessages };

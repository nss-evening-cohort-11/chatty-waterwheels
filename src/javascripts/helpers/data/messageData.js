// seed data for messages that display on page load
let messages = [
  {
    userId: 'user1',
    message: 'Toffee tootsie roll toffee cake cookie brownie. Tootsie roll soufflé wafer chocolate powder candy icing',
    messageId: 'abcedfg',
    stamp: 'March 12, 2020 10:10 PM',
  },
  {
    userId: 'user2',
    message: 'Toffee tootsie roll toffee cake cookie brownie. Tootsie roll soufflé wafer chocolate powder candy icing',
    messageId: 'hijklmo',
    stamp: 'March 12, 2020 11:11 PM',
  },
  {
    userId: 'user3',
    message: 'Toffee tootsie roll toffee cake cookie brownie. Tootsie roll soufflé wafer chocolate powder candy icing',
    messageId: 'pqrst',
    stamp: 'March 12, 2020 12:12 PM',
  },
  {
    userId: 'user4',
    message: 'Toffee tootsie roll toffee cake cookie brownie. Tootsie roll soufflé wafer chocolate powder candy icing',
    messageId: 'uvwxyz',
    stamp: 'March 12, 2020 12:34 PM',
  },
  {
    userId: 'user5',
    message: 'Toffee tootsie roll toffee cake cookie brownie. Tootsie roll soufflé wafer chocolate powder candy icing',
    messageId: 'auyerh',
    stamp: 'March 12, 2020 1:11 AM',
  },
];

// function that returns that array of messages
const getMessages = () => messages;

// function that adds new messages to the message array
const setMessages = (newMessage) => {
  messages.push(newMessage);
};

// function that removes messages from the array based off of the selected user
const removeMessages = (mId) => {
  const messageIndex = messages.findIndex((x) => x.messageId === mId);
  messages.splice(messageIndex, 1);
};

// function that is used to clear the messages from the page
const setArray = () => {
  messages = [];
};

// function that sets max message length to 20 and removes the oldest message from page when messages are > 20
const setLength = () => {
  if (messages.length > 20) {
    messages.shift();
  }
};

export default {
  getMessages, setMessages, setArray, setLength, removeMessages,
};

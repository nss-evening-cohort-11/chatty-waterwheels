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

const getMessages = () => messages;

const setMessages = (newMessage) => {
  messages.push(newMessage);
};

const removeMessages = (mId) => {
  const messageIndex = messages.findIndex((x) => x.messageId === mId);
  messages.splice(messageIndex, 1);
};

const setArray = () => {
  messages = [];
};

const setLength = () => {
  if (messages.length > 20) {
    messages.shift();
  }
};

export default {
  getMessages, setMessages, setArray, setLength, removeMessages,
};

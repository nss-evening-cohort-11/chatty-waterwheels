const messages = [
  {
    userId: 'user1',
    message: 'Toffee tootsie roll toffee cake cookie brownie. Tootsie roll soufflé wafer chocolate powder candy icing',
    messageId: 'abcedfg',
  },
  {
    userId: 'user2',
    message: 'Toffee tootsie roll toffee cake cookie brownie. Tootsie roll soufflé wafer chocolate powder candy icing',
    messageId: 'hijklmo',
  },
  {
    userId: 'user3',
    message: 'Toffee tootsie roll toffee cake cookie brownie. Tootsie roll soufflé wafer chocolate powder candy icing',
    messageId: 'pqrst',
  },
  {
    userId: 'user4',
    message: 'Toffee tootsie roll toffee cake cookie brownie. Tootsie roll soufflé wafer chocolate powder candy icing',
    messageId: 'uvwxyz',
  },
  {
    userId: 'user5',
    message: 'Toffee tootsie roll toffee cake cookie brownie. Tootsie roll soufflé wafer chocolate powder candy icing',
    messageId: 'auyerh',
  },
];

const getMessages = () => messages;

const setMessages = (newMessage) => {
  messages.push(newMessage);
};

export default { getMessages, setMessages };

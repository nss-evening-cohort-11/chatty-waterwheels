// standard printToDom function
const printToDom = (divId, textToPrint) => {
  $(`#${divId}`).html(textToPrint);
};

// function that creates a unique id for the messages
const createId = () => {
  const randomNumber = Math.random().toString(36).substr(2, 16);
  const uniqueId = `id-${randomNumber}`;
  return uniqueId;
};

// function that allows you to select which user is submitting a message
const getRadioVal = () => {
  let val;
  Array.from($('.user-radio-btns')).forEach((item) => {
    if (item.checked) {
      val = item.id;
    }
  });
  return val;
};

export default { printToDom, createId, getRadioVal };

const printToDom = (divId, textToPrint) => {
  $(`#${divId}`).html(textToPrint);
};


const createId = () => {
  const randomNumber = Math.random().toString(36).substr(2, 16);
  const uniqueId = `id-${randomNumber}`;
  return uniqueId;
};

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

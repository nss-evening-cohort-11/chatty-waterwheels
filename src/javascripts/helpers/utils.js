const printToDom = (divId, textToPrint) => {
  $(`#${divId}`).html(textToPrint);
};

const createId = () => {
  const randomNumber = Math.random().toString(36).substr(2, 16);
  const uniqueId = `id-${randomNumber}`;
  return uniqueId;
};

export default { printToDom, createId };

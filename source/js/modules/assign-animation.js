export default (node, {delay = 30}) => {
  const words = node.innerHTML.split(` `);
  node.innerHTML = words
    .map((word) => word.split(``).map(toLetterElements(delay)))
    .map(toWordElements).join(``);
};

function toWordElements(value) {
  return `<span class='word'>${value.join(``)}</span>`;
}

function toLetterElements(delay) {
  return (value, i) => `<span class='letter' style='transition-delay: ${getMsByIndex(i, delay)}ms'>${value}</span>`;
}

function getMsByIndex(index, delay) {
  const indexInTheGroup = index % 3;
  let ratio = index;
  if (indexInTheGroup === 1) {
    ratio = index + 1;
  } else if (indexInTheGroup === 2) {
    ratio = index - 1;
  }

  return ratio * delay;
}

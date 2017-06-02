const mainScreen = document.querySelector(`.central`);

const showNode = (customNode) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(customNode);
};

export default showNode;

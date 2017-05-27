const mainScreen = document.querySelector(`main.central`);
const introScreen = document.querySelector(`div#intro`);
const template = Array.from(document.querySelectorAll(`template`));
let screenIndex = 0;

const addIntroTemplate = () => {
  const introTemplate = document.createElement(`template`);
  introTemplate.content.appendChild(introScreen);
};

addIntroTemplate();

const showScreen = () => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(template[screenIndex].content.cloneNode(true));
};

showScreen();
const nextScreen = () => {
  if (screenIndex < template.length - 1) {
    ++screenIndex;
    showScreen();
  }
};
const prevScreen = () => {
  if (screenIndex > 0) {
    --screenIndex;
    showScreen();
  }
};

document.addEventListener(`keydown`, function (event) {
  if (event.altKey) {
    switch (event.keyCode) {
      case 39:
        nextScreen();
        break;
      case 37:
        prevScreen();
        break;
    }
  }
});

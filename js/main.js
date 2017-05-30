const mainScreen = document.querySelector(`central`);
const introScreen = document.querySelector(`#intro`);
const template = Array.from(document.querySelectorAll(`template`));
const ARROW_RIGHT_KEY_CODE = 37;
const ARROW_LEFT_KEY_CODE = 39;
let screenIndex = 0;

const addIntroTemplate = () => {
  const introTemplate = document.createElement(`template`);
  introTemplate.content.appendChild(introScreen);
};

addIntroTemplate();

const showScreen = (screen) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(template[screen].content.cloneNode(true));
};

showScreen();
const nextScreen = () => {
  if (screenIndex < template.length - 1) {
    screenIndex++;
    showScreen(screenIndex);
  }
};
const prevScreen = () => {
  if (screenIndex > 0) {
    screenIndex--;
    showScreen(screenIndex);
  }
};

document.addEventListener(`keydown`, function (event) {
  if (event.altKey) {
    switch (event.keyCode) {
      case ARROW_RIGHT_KEY_CODE:
        nextScreen();
        break;
      case ARROW_LEFT_KEY_CODE:
        prevScreen();
        break;
    }
  }
});

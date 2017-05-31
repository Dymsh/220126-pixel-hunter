const mainScreen = document.querySelector(`.central`);
const introScreen = document.querySelector(`#intro`);
const templates = Array.from(document.querySelectorAll(`template`));
const ARROW_RIGHT_KEY_CODE = 39;
const ARROW_LEFT_KEY_CODE = 37;
let screenIndex = 0;

const addIntroTemplate = () => {
  const introTemplate = document.createElement(`template`);
  introTemplate.content.appendChild(introScreen);
};

addIntroTemplate();

const showScreen = (screen) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(templates[screen].content.cloneNode(true));
};

showScreen(screenIndex);
const nextScreen = () => {
  if (screenIndex < templates.length - 1) {
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

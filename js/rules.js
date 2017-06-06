import showNode from './modules/showNode.js';
import getNodeFromTemplate from './modules/getNodeFromTemplate.js';
import game1Node from './game1.js';
import greetingNode from './greeting.js';
import {header} from './header.js';
import footer from './footer.js';


const rulesLayout = `
  ${header()}
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  ${footer()}
`;

const rulesNode = getNodeFromTemplate(rulesLayout);

const inputName = rulesNode.querySelector(`.rules__input`);
const btnSubmit = rulesNode.querySelector(`.rules__button`);

inputName.oninput = () => {
  if (inputName.value) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
};
btnSubmit.onclick = () => {
  showNode(game1Node);
};

const backToGreeting = rulesNode.querySelector(`.back`);
backToGreeting.onclick = () => {
  showNode(greetingNode);
};

export default rulesNode;

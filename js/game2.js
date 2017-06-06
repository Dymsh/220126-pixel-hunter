import showNode from './modules/showNode.js';
import getNodeFromTemplate from './modules/getNodeFromTemplate.js';
import game3Node from './game3.js';
import greetingNode from './greeting.js';
import {header, gameBlock} from './header.js';
import footer from './footer.js';

const game2Layout = `
${header(gameBlock)}
<div class="game">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
  <div class="stats">
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </div>
</div>
${footer()}
`;

const game2Node = getNodeFromTemplate(game2Layout);

const formGame2 = game2Node.querySelector(`form`);
formGame2.onclick = () => {
  if (formGame2.elements[0].checked || formGame2.elements[1].checked) {
    showNode(game3Node);
  }
};

const backToGreeting = game2Node.querySelector(`.back`);
backToGreeting.onclick = () => {
  showNode(greetingNode);
};

export default game2Node;

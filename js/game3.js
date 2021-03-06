import showNode from './modules/showNode.js';
import getNodeFromTemplate from './modules/getNodeFromTemplate.js';
import statsNode from './stats.js';
import greetingNode from './greeting.js';
import {header, gameBlock} from './header.js';
import footer from './footer.js';

const game3Layout = `
${header(gameBlock)}
<div class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
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

const game3Node = getNodeFromTemplate(game3Layout);

const game3Screen = game3Node.querySelectorAll(`.game__option`);
game3Screen.forEach(function (el) {
  el.onclick = () => showNode(statsNode);
});

const backToGreeting = game3Node.querySelector(`.back`);
backToGreeting.onclick = () => {
  showNode(greetingNode);
};

export default game3Node;

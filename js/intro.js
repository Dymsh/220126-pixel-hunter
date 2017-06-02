import showNode from './modules/showNode.js';
import getNodeFromTemplate from './modules/getNodeFromTemplate.js';
import greetingNode from './greeting.js';

const introLayout = `
<div id="main" class="central__content">
  <div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>`
;
const introNode = getNodeFromTemplate(introLayout);

const btnAsterisk = introNode.querySelector(`.intro__asterisk`);
btnAsterisk.onclick = () => {
  showNode(greetingNode);
};

export default introNode;

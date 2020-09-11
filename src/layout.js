import domManipulation from './helpers';

import leavesPattern from './images/pattern.png';
import vegPattern from './images/veg-pattern.png';

const renderLayout = () => {
  const content = document.getElementById('content');
  const topPatternImg = domManipulation.createImage(leavesPattern, 'leaves pattern', ['leaves-pattern']);
  const bottomPatternImg = domManipulation.createImage(vegPattern, 'vegetables mix inline', ['veg-pattern']);

  const topPattern = domManipulation.createHtmlElement('div', content, ['top-pattern']);
  const bottomPattern = domManipulation.createHtmlElement('div', content, ['bottom-pattern']);

  topPattern.appendChild(topPatternImg);
  bottomPattern.appendChild(bottomPatternImg);
};

export default renderLayout;
import domManipulation from './helpers';

import leavesPattern from './images/pattern.png';
import vegPattern from './images/veg-pattern.png';
import logo from './images/logo.png';

const renderLayout = () => {
  const content = document.getElementById('content');
  const topPatternImg = domManipulation.createImage(leavesPattern, 'leaves pattern', ['leaves-pattern']);
  const bottomPatternImg = domManipulation.createImage(vegPattern, 'vegetables mix inline', ['veg-pattern']);
  const logoImg = domManipulation.createImage(logo, 'mr. fresco logo', ['logo']);

  const topPattern = domManipulation.createHtmlElement({ tag: 'div', parentElement: content, arrayClassNames: ['top-pattern'] });
  const bottomPattern = domManipulation.createHtmlElement({ tag: 'div', parentElement: content, arrayClassNames: ['bottom-pattern'] });
  const header = domManipulation.createHtmlElement({ tag: 'header', parentElement: content, arrayClassNames: ['d-flex'] });
  const navLeft = domManipulation.createHtmlElement({ tag: 'nav', parentElement: header, arrayClassNames: ['nav-left'] });
  const navRight = domManipulation.createHtmlElement({ tag: 'nav', parentElement: header, arrayClassNames: ['nav-right', 'd-flex'] });
  const uList = domManipulation.createHtmlElement({ tag: 'ul', parentElement: navRight, arrayClassNames: ['d-flex'] });
  domManipulation.createHtmlElement({ tag: 'li', parentElement: uList, newId: 'home', text: 'HOME' });
  domManipulation.createHtmlElement({ tag: 'li', parentElement: uList, newId: 'menu', text: 'MENU' });
  domManipulation.createHtmlElement({ tag: 'li', parentElement: uList, newId: 'contact', text: 'CONTACT' });


  topPattern.appendChild(topPatternImg);
  bottomPattern.appendChild(bottomPatternImg);
  navLeft.appendChild(logoImg);
};

export default renderLayout;
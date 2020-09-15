import domManipulation from './helpers';
import mainDishImg from './images/main-salad_2.png';

const renderHome = () => {
  const content = document.getElementById('content');
  const sectionHero = domManipulation.createHtmlElement({ tag: 'section', parentElement: content, arrayClassNames: ['hero', 'd-flex'] });
  const titleContainer = domManipulation.createHtmlElement({ tag: 'div', parentElement: sectionHero, arrayClassNames: ['title-container'] });
  domManipulation.createHtmlElement({
    tag: 'h1', parentElement: titleContainer, arrayClassNames: ['headline'], text: 'The <strong>TASTIEST</strong> and <strong>HEALTHIEST</strong> <br> dishes you can find!',
  });
  domManipulation.createHtmlElement({
    tag: 'p', parentElement: titleContainer, arrayClassNames: ['slogan'], text: 'We dare you to find fresher food!',
  });
  domManipulation.createHtmlElement({
    tag: 'button', parentElement: titleContainer, newId: 'btn-menu', text: 'Menu',
  });
  const mainImgContainer = domManipulation.createHtmlElement({ tag: 'div', parentElement: sectionHero, arrayClassNames: ['main-img-container'] });
  const heroImg = domManipulation.createImage(mainDishImg, 'main salad dish', ['main-img']);
  mainImgContainer.appendChild(heroImg);
};

export default renderHome;
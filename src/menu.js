import domManipulation from './helpers';
import './styles/style.css';


const renderMenu = () => {
  const content = document.getElementById('content');
  const sectionMenu = domManipulation.createHtmlElement({ tag: 'section', parentElement: content, arrayClassNames: ['menu', 'd-flex'] });
  const cardMenu = domManipulation.createHtmlElement({ tag: 'div', parentElement: sectionMenu, arrayClassNames: ['card', 'd-flex'] });
  domManipulation.createHtmlElement({ tag: 'div', parentElement: cardMenu, arrayClassNames: ['card-pic', 'breakfast-pic'] });
  const infoContainer = domManipulation.createHtmlElement({ tag: 'div', parentElement: cardMenu });
  domManipulation.createHtmlElement({
    tag: 'h3', parentElement: infoContainer, arrayClassNames: ['card-title'], text: 'Açai Bowl',
  });
  domManipulation.createHtmlElement({
    tag: 'p', parentElement: infoContainer, arrayClassNames: ['card-text'], text: 'Delicious bowl with a mix of strawberrys, blueberrys, muesli all covered in a fresh açai smoothie',
  });
};

export default renderMenu;
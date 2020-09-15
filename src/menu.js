import domManipulation from './helpers';
import './styles/style.css';


const renderMenu = () => {
  const content = document.getElementById('content');
  const sectionMenu = domManipulation.createHtmlElement({ tag: 'section', parentElement: content, arrayClassNames: ['menu', 'd-flex'] });
  const cardMenuBreakfast = domManipulation.createHtmlElement({ tag: 'div', parentElement: sectionMenu, arrayClassNames: ['card', 'd-flex'] });
  domManipulation.createHtmlElement({ tag: 'div', parentElement: cardMenuBreakfast, arrayClassNames: ['card-pic', 'breakfast-pic'] });
  const infoContainerBreakfast = domManipulation.createHtmlElement({ tag: 'div', parentElement: cardMenuBreakfast });
  domManipulation.createHtmlElement({
    tag: 'h3', parentElement: infoContainerBreakfast, arrayClassNames: ['card-title'], text: 'Açai Bowl',
  });
  domManipulation.createHtmlElement({
    tag: 'p', parentElement: infoContainerBreakfast, arrayClassNames: ['card-text'], text: 'Delicious bowl with a mix of strawberrys, blueberrys, muesli all covered in a fresh açai smoothie',
  });

  const cardMenuSalmon = domManipulation.createHtmlElement({ tag: 'div', parentElement: sectionMenu, arrayClassNames: ['card', 'd-flex'] });
  domManipulation.createHtmlElement({ tag: 'div', parentElement: cardMenuSalmon, arrayClassNames: ['card-pic', 'salmon-pic'] });
  const infoContainerSalmon = domManipulation.createHtmlElement({ tag: 'div', parentElement: cardMenuSalmon });
  domManipulation.createHtmlElement({
    tag: 'h3', parentElement: infoContainerSalmon, arrayClassNames: ['card-title'], text: 'Quinoa Salmon',
  });
  domManipulation.createHtmlElement({
    tag: 'p', parentElement: infoContainerSalmon, arrayClassNames: ['card-text'], text: 'Grilled Salmon with quinoa and a mix of veggies',
  });

  const cardMenuPasta = domManipulation.createHtmlElement({ tag: 'div', parentElement: sectionMenu, arrayClassNames: ['card', 'd-flex'] });
  domManipulation.createHtmlElement({ tag: 'div', parentElement: cardMenuPasta, arrayClassNames: ['card-pic', 'pasta-pic'] });
  const infoContainerPasta = domManipulation.createHtmlElement({ tag: 'div', parentElement: cardMenuPasta });
  domManipulation.createHtmlElement({
    tag: 'h3', parentElement: infoContainerPasta, arrayClassNames: ['card-title'], text: 'Tuna Pasta Salad',
  });
  domManipulation.createHtmlElement({
    tag: 'p', parentElement: infoContainerPasta, arrayClassNames: ['card-text'], text: 'Pasta with tuna, tomato cut in cubes in a bed of fresh arugula and some dressing',
  });
};

export default renderMenu;
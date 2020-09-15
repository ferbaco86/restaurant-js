import domManipulation from './helpers';

const renderContact = () => {
  const content = document.getElementById('content');
  const sectionContact = domManipulation.createHtmlElement({ tag: 'section', parentElement: content, arrayClassNames: ['contact', 'd-flex'] });
  const contactInfoContainer = domManipulation.createHtmlElement({ tag: 'div', parentElement: sectionContact, arrayClassNames: ['contact-info-container', 'd-flex'] });
  domManipulation.createHtmlElement({
    tag: 'h2', parentElement: contactInfoContainer, arrayClassNames: ['title-contact'], text: 'You can find us in Barrio Italia, Ñuñoa, Santiago',
  });
  const contactInfo = domManipulation.createHtmlElement({ tag: 'div', parentElement: contactInfoContainer, arrayClassNames: ['contact-info'] });
  domManipulation.createHtmlElement({
    tag: 'h3', parentElement: contactInfo, arrayClassNames: ['contact-info-item'], text: '<strong>Phone:</strong> +5699555555',
  });
  domManipulation.createHtmlElement({
    tag: 'h3', parentElement: contactInfo, arrayClassNames: ['contact-info-item'], text: '<strong>Address:</strong> Barrio Italia, Ñuñoa, Santiago',
  });
  const cardContact = domManipulation.createHtmlElement({ tag: 'div', parentElement: sectionContact, arrayClassNames: ['card-contact'] });
  const map = domManipulation.createHtmlElement({ tag: 'iframe', parentElement: cardContact });
  map.setAttribute('src', 'https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Barrio%20Italia+(Mr.%20Fresco)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed');
};

export default renderContact;
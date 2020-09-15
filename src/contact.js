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
  map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6658.138982264216!2d-70.63017712355362!3d-33.447496021034944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c57e771fd0c3%3A0xd53d947cb0d1ec6e!2sBarrio%20Italia%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1600181279058!5m2!1ses-419!2scl');
};

export default renderContact;
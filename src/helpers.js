
const domManipulation = (() => {
  const addClasses = (element, arrayClassNames) => {
    arrayClassNames.forEach(className => {
      element.classList.add(className);
    });
  };

  const addId = (element, newId) => {
    element.id = newId;
  };

  const addInnerHTML = (element, text) => {
    element.innerHTML = text;
  };

  const createImage = (source, alt, arrayClassNames = []) => {
    const img = new Image();
    img.src = source;
    img.alt = alt;

    if (arrayClassNames !== []) {
      addClasses(img, arrayClassNames);
    }

    return img;
  };

  const createHtmlElement = (tag, parentElement, arrayClassNames = [], id = '', text = '') => {
    const newElement = document.createElement(tag);

    if (arrayClassNames !== []) {
      addClasses(newElement, arrayClassNames);
    } else if (id !== '') {
      addId(newElement, id);
    } else if (text !== '') {
      addInnerHTML(newElement, text);
    }
    parentElement.appendChild(newElement);
    return newElement;
  };

  return {
    createHtmlElement, createImage,
  };
})();


export default domManipulation;
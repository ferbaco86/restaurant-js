import renderLayout from './layout';
import renderHome from './home';
import renderMenu from './menu';
import './styles/style.css';

renderLayout();
renderHome();

document.addEventListener('click', (e) => {
  if (e.target.getAttribute('id') === 'home') {
    document.getElementsByTagName('section')[0].remove();
    renderHome();
  }
  if (e.target.getAttribute('id') === 'menu' || e.target.getAttribute('id') === 'btn-menu') {
    document.getElementsByTagName('section')[0].remove();
    renderMenu();
  }
});
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import refs from '../refs';

refs.gallery.addEventListener('click', event => {
  const image = `<img src=${event.target.dataset.source}>`;
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(image);
  instance.show();
  window.addEventListener('keydown', onEscapeClose);
  function onEscapeClose(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscapeClose);
    }
    return;
  }
});

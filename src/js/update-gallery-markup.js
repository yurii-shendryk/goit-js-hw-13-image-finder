import photoCardTpl from '../templates/photo-card-template.hbs';
import refs from './refs';
function updateGalleryMarkup(photos) {
  const markup = photoCardTpl(photos);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateGalleryMarkup;

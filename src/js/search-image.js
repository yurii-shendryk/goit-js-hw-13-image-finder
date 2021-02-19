import refs from './refs';
import apiService from './apiService';
import updateGalleryMarkup from './update-gallery-markup';
import LoadMoreBtn from './components/load-more-button';

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

refs.searchForm.addEventListener('submit', onSubmitSearchForm);

function onSubmitSearchForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  refs.gallery.textContent = '';
  apiService.resetPage();
  fetchPhotos();
  form.reset();
}
loadMoreBtn.refs.node.addEventListener('click', fetchPhotos);

function fetchPhotos() {
  loadMoreBtn.disable();
  apiService.fetchPhotos().then(photos => {
    updateGalleryMarkup(photos);
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
    loadMoreBtn.enable();
  });
}

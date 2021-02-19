import refs from './refs';
import apiService from './apiService';
import fetchPhotos from './fetch-photos';
import creatObserver from './components/infinity-scroll';
// Если нужно подключить дозагрузку контента с помощью кнокпи load-more включи импорт нижней строки
// import LoadMoreBtn from './components/load-more-button';

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

creatObserver(fetchPhotos);

// Догружаем с помощью бесконечного скролла

// Вариант для догрузки контента с помощью кнопки load-more
// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });

// loadMoreBtn.refs.node.addEventListener('click', fetchPhotos);

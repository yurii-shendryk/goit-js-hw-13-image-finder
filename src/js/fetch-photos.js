// Если нужно подключить дозагрузку контента с помощью кнокпи load-more включи импорт нижней строки
// import LoadMoreBtn from './components/load-more-button';
import updateGalleryMarkup from './update-gallery-markup';
import apiService from './apiService';

import refs from './refs';

function fetchPhotos() {
  // для работы кнопки load-more-button раскоментируй следующую строку
  // loadMoreBtn.disable();
  refs.spinner.classList.remove('is-hidden');

  return apiService.fetchPhotos().then(photos => {
    if (photos.length === 0) {
      refs.spinner.classList.add('is-hidden');
      return;
    }
    updateGalleryMarkup(photos);
    refs.spinner.classList.add('is-hidden');

    // window.scrollTo({
    //   top: document.documentElement.offsetHeight,
    //   behavior: 'smooth',
    // });

    // для работы кнопки load-more-button раскоментируй следующую строку
    // loadMoreBtn.enable();
  });
}

export default fetchPhotos;

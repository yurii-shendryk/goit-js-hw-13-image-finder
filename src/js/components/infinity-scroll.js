import refs from '../refs';
import apiService from '../apiService';

function infinityScroll(render) {
  const onEntry = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && apiService.query !== '') {
        render();
      }
    });
  };

  const observer = new IntersectionObserver(onEntry);
  observer.observe(refs.sentinel);
}

export default infinityScroll;

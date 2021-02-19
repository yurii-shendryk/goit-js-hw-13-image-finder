import errorMessage from './components/notifications';
const apiKey = '20301479-c3cd6e26a773a7261d62d0b69';
export default {
  searchQuery: '',
  page: 1,

  fetchPhotos() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}per_page=12&key=${apiKey}`;
    return fetch(url)
      .then(res => res.json())
      .then(({ hits, total }) => {
        if (total === 0) {
          errorMessage();
        }
        this.page += 1;
        return hits;
      })
      .catch(err => console.log(err));
  },
  get query() {
    return this.searchQuery;
  },
  set query(newQuery) {
    this.searchQuery = newQuery;
  },

  resetPage() {
    this.page = 1;
  },
};

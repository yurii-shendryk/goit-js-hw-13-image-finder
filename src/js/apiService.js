const apiKey = '20301479-c3cd6e26a773a7261d62d0b69';
export default {
  searchQuery: '',
  page: 1,

  fetchPhotos() {
    const options = {
      headers: {
        Authorization: apiKey,
      },
    };
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${this.query}&per_page=12&page=${this.page}`;
    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
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

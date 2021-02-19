export default class loadMoreBtn {
  constructor({ selector, hidden }) {
    this.refs = this.getRefs(selector);
    hidden && this.refs.node.classList.add('is-hidden');
  }
  getRefs(selector) {
    const refs = {};
    refs.node = document.querySelector(selector);
    refs.spinner = refs.node.querySelector('.spinner');
    refs.label = refs.node.querySelector('.label');

    return refs;
  }
  enable() {
    this.refs.node.disabled = false;
    this.refs.label.textContent = 'Load more';
    this.refs.spinner.classList.add('is-hidden');
    this.refs.node.classList.remove('is-hidden');
  }
  disable() {
    this.refs.spinner.classList.remove('is-hidden');
    this.refs.label.textContent = 'Loading...';
    this.refs.spinner.classList.remove('is-hidden');
    this.refs.node.disabled = true;
  }
}

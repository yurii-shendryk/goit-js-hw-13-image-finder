(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0qdk":function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,r){var s,l=null!=n?n:e.nullContext||{},o=e.hooks.helperMissing,i="function",c=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="gallery__item">\r\n    <img src="'+c(typeof(s=null!=(s=u(t,"webformatURL")||(null!=n?u(n,"webformatURL"):n))?s:o)===i?s.call(l,{name:"webformatURL",hash:{},data:r,loc:{start:{line:3,column:14},end:{line:3,column:30}}}):s)+'" alt="" class="gallery__image" data-source="'+c(typeof(s=null!=(s=u(t,"largeImageURL")||(null!=n?u(n,"largeImageURL"):n))?s:o)===i?s.call(l,{name:"largeImageURL",hash:{},data:r,loc:{start:{line:3,column:75},end:{line:3,column:92}}}):s)+'" />\r\n\r\n    <div class="stats">\r\n        <p class="stats-item">\r\n            <i class="material-icons">thumb_up</i>\r\n            <span class="stats-text">'+c(typeof(s=null!=(s=u(t,"likes")||(null!=n?u(n,"likes"):n))?s:o)===i?s.call(l,{name:"likes",hash:{},data:r,loc:{start:{line:8,column:37},end:{line:8,column:46}}}):s)+'</span>\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">visibility</i>\r\n            <span class="stats-text">'+c(typeof(s=null!=(s=u(t,"views")||(null!=n?u(n,"views"):n))?s:o)===i?s.call(l,{name:"views",hash:{},data:r,loc:{start:{line:12,column:37},end:{line:12,column:46}}}):s)+'</span>\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">comment</i>\r\n            <span class="stats-text">'+c(typeof(s=null!=(s=u(t,"comments")||(null!=n?u(n,"comments"):n))?s:o)===i?s.call(l,{name:"comments",hash:{},data:r,loc:{start:{line:16,column:37},end:{line:16,column:49}}}):s)+'</span>\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">cloud_download</i>\r\n            <span class="stats-text">'+c(typeof(s=null!=(s=u(t,"downloads")||(null!=n?u(n,"downloads"):n))?s:o)===i?s.call(l,{name:"downloads",hash:{},data:r,loc:{start:{line:20,column:37},end:{line:20,column:50}}}):s)+"</span>\r\n        </p>\r\n    </div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,r){var s;return null!=(s=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:24,column:9}}}))?s:""},useData:!0})},"1DEj":function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("1DEj");var a={gallery:document.querySelector(".gallery__items"),searchForm:document.querySelector("#search-form"),sentinel:document.querySelector("#sentinel"),spinner:document.querySelector(".spinner")},r=(t("JBxO"),t("FdtR"),t("QJ3N"));t("WSJ9"),t("zrP5"),t("bzha");r.defaults.maxTextHeight=null,r.defaults.sticker=!1;var s=function(){return Object(r.notice)({text:"Nothing was found. Please enter a more specific query!"})},l={searchQuery:"",page:1,fetchPhotos:function(){var e=this,n="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+this.query+"&page="+this.page+"per_page=12&key=20301479-c3cd6e26a773a7261d62d0b69";return fetch(n).then((function(e){return e.json()})).then((function(n){var t=n.hits;return 0===n.total&&s(),e.page+=1,t})).catch((function(e){return console.log(e)}))},get query(){return this.searchQuery},set query(e){this.searchQuery=e},resetPage:function(){this.page=1}},o=t("0qdk"),i=t.n(o);var c=function(e){var n=i()(e);return a.gallery.insertAdjacentHTML("beforeend",n),n};var u=function(){return a.spinner.classList.remove("is-hidden"),l.fetchPhotos().then((function(e){0!==e.length?(c(e),a.spinner.classList.add("is-hidden")):a.spinner.classList.add("is-hidden")}))};t("3dw1");var d=function(e){new IntersectionObserver((function(n){n.forEach((function(n){n.isIntersecting&&""!==l.query&&e()}))})).observe(a.sentinel)};a.searchForm.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget;l.query=n.elements.query.value,a.gallery.textContent="",l.resetPage(),u(),n.reset()})),d(u);var m=t("dcBu");t("PzF0");a.gallery.addEventListener("click",(function(e){var n="<img src="+e.target.dataset.source+">";if("IMG"===e.target.nodeName){var t=m.create(n);t.show(),window.addEventListener("keydown",(function e(n){"Escape"===n.code&&(t.close(),window.removeEventListener("keydown",e));return}))}}));var p=t("Ji62");Object(p.addBackToTop)({diameter:56,backgroundColor:"#ea4335",textColor:"#fff"})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.d9cca183e701057e93b9.js.map
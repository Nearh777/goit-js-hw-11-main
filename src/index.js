import './sass/index.scss';
import NewsApiService from './js/api-pixabay';
import { lightbox } from './js/lightbox';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//import { spinnerPlay, spinnerStop } from './js/spinner';

const searchForm = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery');

let isShown = 0;
const newsApiService = new NewsApiService();

searchForm.addEventListener('submit', onSearch);

const options = {
  rootMargin: '50px',
  root: null,
  threshold: 0.3,
};
const observer = new IntersectionObserver(onLoadMore, options);
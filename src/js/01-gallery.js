// Add imports above this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

import { galleryItems } from './gallery-items';

const createGalleryMarkup = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

createGalleryMarkup.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryItems(items) {
    return items
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
        })
    .join('')
};


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    docClose: false
});

lightbox.on('show.simplelightbox', (e) => e.preventDefault());



console.log(galleryItems);

// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line



console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');



const makeGalleryItem = ({preview, original, description} = {}) => {
    return `<div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src='${preview}'
                alt="${description}"
            />
        </a>
    </div>`;
};

const galleryItemsEl = galleryItems.map( (el) => {
    return makeGalleryItem(el);
}).join('');


galleryListEl.insertAdjacentHTML('afterbegin', galleryItemsEl);




galleryListEl.addEventListener('click', onLinkClick);

function onLinkClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    };

};

new SimpleLightbox('.gallery .gallery__item', {captionsData: 'alt', captionDelay: 250});

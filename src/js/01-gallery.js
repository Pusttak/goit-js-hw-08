import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

makeGalleryMarkup(galleryItems);

function makeGalleryMarkup(galleryItems) {
    const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
        const item = document.createElement('li');

        const link = document.createElement('a');
        link.classList.add('gallery__item');
        link.href = original;

        const img = document.createElement('img');
        img.classList.add('gallery__image');
        img.src = preview;
        img.alt = description;

        item.appendChild(link);
        link.appendChild(img);

        return item;
    });

    galleryRef.append(...galleryMarkup);

    let lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionPosition: 'bottom',
        captionsData: 'alt',
        captionDelay: 250,
        showCounter: false,
    });
}

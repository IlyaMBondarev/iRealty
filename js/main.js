
document.querySelector('.wrapper').classList.add('loaded');



//office-slider

let officeSlideCurrent = document.querySelectorAll('.office-slider__current-slide');
let officeSlidesTotal = document.querySelectorAll('.office-slider__total-slides');
let officeSlides = document.querySelectorAll('.office-slider__slide');
let officeSliderFirstSlide = document.querySelectorAll('.office-slider__first-slide');

for (let i = 0; i < officeSlidesTotal.length; i++) {
    officeSlidesTotal[i].textContent = `${officeSlides.length/officeSlidesTotal.length}`;
    officeSlideCurrent[i].textContent = '1';
}


let officeSliderPrev = document.querySelectorAll('.office-slider__arrow-left');
let officeSliderNext = document.querySelectorAll('.office-slider__arrow-right');

for (let i = 0; i < officeSliderNext.length; i++) {
    officeSliderNext[i].addEventListener('click', () => {
        if (officeSlideCurrent[i].textContent === officeSlidesTotal[i].textContent) {
            officeSliderFirstSlide[i].style.marginLeft = '0%';
            officeSlideCurrent[i].textContent = '1';
        } else {
            officeSliderFirstSlide[i].style.marginLeft = `${+(officeSliderFirstSlide[i].style.marginLeft.slice(0, -1)) - 100}%`;
            officeSlideCurrent[i].textContent = `${+officeSlideCurrent[i].textContent + 1}`;
        }
    })
}
for (let i = 0; i < officeSliderPrev.length; i++) {
    officeSliderPrev[i].addEventListener('click', () => {
        if (officeSlideCurrent[i].textContent === '1') {
            officeSliderFirstSlide[i].style.marginLeft = `${(officeSlides.length / officeSlidesTotal.length - 1) * (-100)}%`;
            officeSlideCurrent[i].textContent = officeSlidesTotal[i].textContent;
        } else {
            officeSliderFirstSlide[i].style.marginLeft = `${+(officeSliderFirstSlide[i].style.marginLeft.slice(0, -1)) + 100}%`;
            officeSlideCurrent[i].textContent = `${+officeSlideCurrent[i].textContent - 1}`;
        }
    })
}

//slider

let sliders = document.querySelectorAll('.slider');

for(let i = 0; i < sliders.length; i++) {
    let sliderLength = sliders[i].querySelectorAll('.slider__slide').length;
    let firstSlide = sliders[i].querySelector('.slider__first-slide');
    let currentSlide = sliders[i].querySelector('.slider__current-slide');
    let totalSlides = sliders[i].querySelector('.slider__total-slides');
    let arrowLeft = sliders[i].querySelector('.slider__arrow-left');
    let arrowRight = sliders[i].querySelector('.slider__arrow-right');
    sliders[i].style.maxWidth = `${sliders[i].offsetWidth / sliderLength}px`;
    currentSlide.textContent = '1';
    totalSlides.textContent = `${sliderLength}`;
    arrowLeft.addEventListener('click', () => {
        if (currentSlide.textContent == '1') {
            currentSlide.textContent = `${sliderLength}`;
            firstSlide.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
        } else {
            currentSlide.textContent = `${+(currentSlide.textContent) - 1}`;
            firstSlide.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
        }
    });
    arrowRight.addEventListener('click', () => {
        if (currentSlide.textContent == `${sliderLength}`) {
            currentSlide.textContent = '1';
            firstSlide.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
        } else {
            currentSlide.textContent = `${+(currentSlide.textContent) + 1}`;
            firstSlide.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
        }
    });
}

//search-on-map-btn

let searchOnMapOpenBtns = document.querySelectorAll('.open-search-on-map');
let searchOnMapLines = document.querySelectorAll('.search-on-map');
let officeDescriptions = document.querySelectorAll('.office-desc');

for (let i = 0; i < searchOnMapOpenBtns.length; i++) {
    searchOnMapOpenBtns[i].addEventListener('click', () => {
        searchOnMapLines[i].classList.toggle('hidden');
        officeDescriptions[i].classList.toggle('hidden');
    })
}

document.addEventListener('click', event => {
    let target = event.target;
    for (let i = 0; i < searchOnMapOpenBtns.length; i++) {
        if (!(target === searchOnMapOpenBtns[i]) && !(searchOnMapOpenBtns[i].contains(target)) && !(searchOnMapLines[i].classList.contains('hidden'))) {
            searchOnMapLines[i].classList.toggle('hidden');
            officeDescriptions[i].classList.toggle('hidden');
        }
    }
})

//search-line

let searchOpenBtns = document.querySelectorAll('.search-open-btn');
let searchLines = document.querySelectorAll('.search-line');

for (let i = 0; i < searchOpenBtns.length; i++) {
    searchOpenBtns[i].addEventListener('click', () => {
        if (searchLines[i].style.width == '' || searchLines[i].style.width == '0px') {
            searchLines[i].style.width = '280px';
            searchLines[i].style.padding = '11px 1px';
        } else {
            searchLines[i].style.width = '0px';
            searchLines[i].style.padding = '11px 0';
        }
    })
}

//favorites

let favoritesOpenBtns = document.querySelectorAll('.favorites-drop');
let favoritesBlock = document.querySelectorAll('.favorites');

for (let i = 0; i < favoritesOpenBtns.length; i++) {
    favoritesBlock[i].classList.add('hidden');
    favoritesOpenBtns[i].addEventListener('click', () => {
        favoritesBlock[i].classList.toggle('hidden');
    })
}

document.addEventListener('click', event => {
    let target = event.target;
    for (let i = 0; i < favoritesOpenBtns.length; i++) {
        if (!(target === favoritesOpenBtns[i] || target === favoritesBlock[i]) && !(favoritesOpenBtns[i].contains(target) || favoritesBlock[i].contains(target)) && !(favoritesBlock[i].classList.contains('hidden'))) {
            favoritesBlock[i].classList.toggle('hidden');
        }
    }
})

let footerShowBtns = document.querySelectorAll('.footer__show-btn');
let footerLists = document.querySelectorAll('.footer__lists');
let footerArrowsUp = document.querySelectorAll('.footer__arrow-up');
let footerArrowsDown = document.querySelectorAll('.footer__arrow-down');

let footerShowLinks = document.getElementsByClassName('footer__show-btn');



for( let i = 0; i < footerShowBtns.length; i++) {
    footerShowBtns[i].addEventListener('click', () => {
        footerArrowsUp[i].classList.toggle('hidden');
        footerArrowsDown[i].classList.toggle('hidden');
        if (footerShowBtns[i].getElementsByTagName('span')[0].textContent == 'Показать все') {
            footerShowBtns[i].getElementsByTagName('span')[0].textContent = 'Скрыть';
            footerLists[i].style.maxHeight = '718px';
        } else {
            footerShowBtns[i].getElementsByTagName('span')[0].textContent = 'Показать все';
            footerLists[i].style.maxHeight = '253px';
        }
    })
}

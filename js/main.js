
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

//superoffers-slider

let superoffersSliders = document.querySelectorAll('.superoffers-slider');

for(let i = 0; i < superoffersSliders.length; i++) {
    let sliderItems = superoffersSliders[i].querySelectorAll('.item');
    let sliderLength = sliderItems.length;
    let firstSlide = superoffersSliders[i].querySelector('.first-item');
    let currentSlide = superoffersSliders[i].querySelector('.superoffers-slider__current-slide');
    let totalSlides = superoffersSliders[i].querySelector('.superoffers-slider__total-slides');
    let arrowLeft = superoffersSliders[i].querySelector('.superoffers-slider__arrow-left');
    let arrowRight = superoffersSliders[i].querySelector('.superoffers-slider__arrow-right');
    let sliderImages = superoffersSliders[i].querySelector('.superoffers-slider__right');
    let sliderImagesFirst = sliderImages.querySelector('.first-slider');
    currentSlide.textContent = '5';
    sliderImagesFirst.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
    firstSlide.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
    sliderImages.style.maxWidth = `${sliderImagesFirst.offsetWidth}px`
    totalSlides.textContent = `${sliderLength}`;
    arrowLeft.addEventListener('click', () => {
        if (currentSlide.textContent == '15') {
            arrowRight.style.zIndex = 'inherit';
        }
        if (currentSlide.textContent == '1') {
            currentSlide.textContent = `${sliderLength}`;
            sliderImagesFirst.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
            firstSlide.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
        } else {
            currentSlide.textContent = `${+(currentSlide.textContent) - 1}`;
            sliderImagesFirst.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
            firstSlide.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
        }
        if (currentSlide.textContent == '1') {
            arrowLeft.style.zIndex = '-1';
        }
    });
    arrowRight.addEventListener('click', () => {
        if (currentSlide.textContent == '1') {
            arrowLeft.style.zIndex = 'inherit';
        }
        if (currentSlide.textContent == `${sliderLength}`) {
            currentSlide.textContent = '1';
            sliderImagesFirst.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
            firstSlide.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
        } else {
            currentSlide.textContent = `${+(currentSlide.textContent) + 1}`;
            sliderImagesFirst.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
            firstSlide.style.marginLeft = `${(+(currentSlide.textContent) - 1)*(-100)}%`;
        }
        if (currentSlide.textContent == '15') {
            arrowRight.style.zIndex = '-1';
        }
    });
}

//search-line

let searchBtns = document.querySelectorAll('.search-open-btn');
let searchLines = document.querySelectorAll('.search-line');

for (let i = 0; i < searchBtns.length; i++) {
    searchBtns[i].addEventListener('click', function openSearchLine() {
        searchLines[i].style.width = '280px';
        searchLines[i].style.padding = '11px 1px';
        searchBtns[i].removeEventListener('click', openSearchLine);
        searchBtns[i].addEventListener('click', function searchItems() {
            console.log(searchLines[i].value);
        })
    })
}

//favorites

let favoritesOpenBtns = document.querySelectorAll('.favorites-drop');
let favoritesBlock = document.querySelectorAll('.favorites');

for (let i = 0; i < favoritesOpenBtns.length; i++) {
    favoritesBlock[i].classList.add('hidden');
    favoritesBlock[i].style.zIndex = '100';
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

//нижняя полоса главного меню и фон выпадающих меню


let blackMenus = document.querySelectorAll('.menu-black__menu');

for (let i = 0; i < blackMenus.length; i++) {
    let blackMenuLists = blackMenus[i].querySelectorAll('.menu-black__list');
    let blackMenuLine = blackMenus[i].querySelector('.menu-black__line');
    for (let j = 0; j < blackMenuLists.length; j++) {
        blackMenuLists[j].addEventListener('mouseover', () => {
            blackMenuLine.style.left = `${blackMenuLists[j].offsetLeft - (document.querySelector('.wrapper').offsetWidth - document.querySelector('.container').offsetWidth) / 2}px`;
            if (j === (blackMenuLists.length - 1)) {
                blackMenuLine.style.width = `${blackMenuLists[j].querySelector('img').offsetWidth}px`;
                blackMenuLine.style.left = `${(blackMenuLists[j].offsetLeft - (document.querySelector('.wrapper').offsetWidth - document.querySelector('.container').offsetWidth) / 2) + 4}px`;
            } else if (j === 0) {
                blackMenuLine.style.width = `${blackMenuLists[j].offsetWidth - 15}px`;
                blackMenuLine.style.left = `${blackMenuLists[j].offsetLeft - (document.querySelector('.wrapper').offsetWidth - document.querySelector('.container').offsetWidth) / 2}px`;
            } else {
                blackMenuLine.style.width = `${blackMenuLists[j].offsetWidth - 30}px`;
                blackMenuLine.style.left = `${(blackMenuLists[j].offsetLeft - (document.querySelector('.wrapper').offsetWidth - document.querySelector('.container').offsetWidth) / 2) + 15}px`;
            }
        })
    }
    let blackMenuBackgrounds = blackMenus[i].querySelectorAll('.menu-black__drop-bg');
    for (let j = 0; j < blackMenuBackgrounds.length; j++) {
        blackMenuBackgrounds[j].style.left = `-${blackMenuLists[j].offsetLeft}px`;
        blackMenuBackgrounds[j].querySelector('.drop').addEventListener('mouseout', (event) => {
            let target = event.target;
            if (!(target === blackMenuBackgrounds[j].querySelector('.drop')) && !(blackMenuBackgrounds[j].querySelector('.drop').contains(target))) {
                blackMenuBackgrounds[j].style.zIndex = '-1';
            }
        })
    }
}
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
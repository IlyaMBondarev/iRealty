
document.querySelector('.wrapper').classList.add('loaded');



//office-slider

let officeSlideCurrent = document.querySelector('.office-slider__current-slide');
let officeSlidesTotal = document.querySelector('.office-slider__total-slides');
let officeSlides = document.querySelectorAll('.office-slider__slide');
let officeSliderFirstSlide = document.querySelector('.office-slider__first-slide')

officeSlidesTotal.textContent = `${officeSlides.length}`;

officeSlideCurrent.textContent = '1';

let officeSliderPrev = document.querySelector('.office-slider__arrow-left');
let officeSliderNext = document.querySelector('.office-slider__arrow-right');

officeSliderNext.addEventListener('click', () => {
    if (officeSlideCurrent.textContent === officeSlidesTotal.textContent) {
        officeSliderFirstSlide.style.marginLeft = '0%';
        officeSlideCurrent.textContent = '1';
    } else {
        officeSliderFirstSlide.style.marginLeft = `${+(officeSliderFirstSlide.style.marginLeft.slice(0, -1)) - 100}%`;
        officeSlideCurrent.textContent = `${+officeSlideCurrent.textContent + 1}`;
    }
})

officeSliderPrev.addEventListener('click', () => {
    if (officeSlideCurrent.textContent === '1') {
        officeSliderFirstSlide.style.marginLeft = `${(officeSlides.length - 1)*(-100)}%`;
        officeSlideCurrent.textContent = officeSlidesTotal.textContent;
    } else {
        officeSliderFirstSlide.style.marginLeft = `${+(officeSliderFirstSlide.style.marginLeft.slice(0, -1)) + 100}%`;
        officeSlideCurrent.textContent = `${+officeSlideCurrent.textContent - 1}`;
    }
})

//search-on-map-btn

let searchOnMapOpenBtns = document.querySelectorAll('.open-search-on-map');
let searchOnMapLines = document.querySelectorAll('.search-on-map');
let officeDescriptions = document.querySelectorAll('.office-desc')

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
            searchLines.style.padding = '11px 1px';
        } else {
            searchLines[i].style.width = '0px';
            searchLines[i].style.padding = '11px 0';
        }
    })
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

function preventDef(element) {
    element.preventDefault()
}
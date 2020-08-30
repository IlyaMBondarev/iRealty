
document.querySelector('.wrapper').classList.add('loaded');


//office-slider

let officeSlideCurrent = document.querySelectorAll('.office-slider__current-slide');
let officeSlidesTotal = document.querySelectorAll('.office-slider__total-slides');
let officeSlides = document.querySelectorAll('.office-slider__slide');
let officeSliderFirstSlide = document.querySelectorAll('.office-slider__first-slide');

for (let i = 0; i < officeSlidesTotal.length; i++) {
    officeSlidesTotal[i].textContent = `${officeSlides.length / officeSlidesTotal.length}`;
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

for (let i = 0; i < sliders.length; i++) {
    let sliderLength = sliders[i].querySelectorAll('.slider__slide').length;
    let firstSlide = sliders[i].querySelector('.slider__first-slide');
    let currentSlide = sliders[i].querySelector('.slider__current-slide');
    let totalSlides = sliders[i].querySelector('.slider__total-slides');
    let arrowLeft = sliders[i].querySelector('.slider__arrow-left');
    let arrowRight = sliders[i].querySelector('.slider__arrow-right');
    sliders[i].style.maxWidth = `${sliders[i].scrollWidth / sliderLength}px`;
    currentSlide.textContent = '1';
    totalSlides.textContent = `${sliderLength}`;
    if (sliderLength === 1) {
        arrowLeft.classList.add('hidden');
        arrowRight.classList.add('hidden');
    }
    arrowLeft.addEventListener('click', () => {
        if (currentSlide.textContent == '1') {
            currentSlide.textContent = `${sliderLength}`;
            firstSlide.style.marginLeft = `${(+(currentSlide.textContent) - 1) * (-100)}%`;
        } else {
            currentSlide.textContent = `${+(currentSlide.textContent) - 1}`;
            firstSlide.style.marginLeft = `${(+(currentSlide.textContent) - 1) * (-100)}%`;
        }
    });
    arrowRight.addEventListener('click', () => {
        if (currentSlide.textContent == `${sliderLength}`) {
            currentSlide.textContent = '1';
            firstSlide.style.marginLeft = `${(+(currentSlide.textContent) - 1) * (-100)}%`;
        } else {
            currentSlide.textContent = `${+(currentSlide.textContent) + 1}`;
            firstSlide.style.marginLeft = `${(+(currentSlide.textContent) - 1) * (-100)}%`;
        }
    });
}

//superoffers-slider

let superoffersSliders = document.querySelectorAll('.superoffers-slider');

for (let i = 0; i < superoffersSliders.length; i++) {
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
    sliderImagesFirst.style.marginLeft = `${(+(currentSlide.textContent) - 1) * (-100)}%`;
    sliderItems[currentSlide.textContent - 1].style.opacity = '1';
    sliderItems[currentSlide.textContent - 1].style.visibility = 'visible';
    sliderItems[currentSlide.textContent - 1].style.zIndex = 'inherit';
    sliderImages.style.maxWidth = `${sliderImagesFirst.offsetWidth}px`
    totalSlides.textContent = `${sliderLength}`;
    arrowLeft.addEventListener('click', () => {
        if (currentSlide.textContent == '15') {
            arrowRight.style.zIndex = 'inherit';
        }
        sliderItems[currentSlide.textContent - 1].style.opacity = '0';
        sliderItems[currentSlide.textContent - 1].style.visibility = 'hidden';
        sliderItems[currentSlide.textContent - 1].style.zIndex = '-1';
        currentSlide.textContent = `${+(currentSlide.textContent) - 1}`;
        sliderImagesFirst.style.marginLeft = `${(+(currentSlide.textContent) - 1) * (-100)}%`;
        sliderItems[currentSlide.textContent - 1].style.opacity = '1';
        sliderItems[currentSlide.textContent - 1].style.visibility = 'visible';
        sliderItems[currentSlide.textContent - 1].style.zIndex = 'inherit';
        if (currentSlide.textContent == '1') {
            arrowLeft.style.zIndex = '-1';
        }
    });
    arrowRight.addEventListener('click', () => {
        if (currentSlide.textContent == '1') {
            arrowLeft.style.zIndex = 'inherit';
        }
        sliderItems[currentSlide.textContent - 1].style.opacity = '0';
        sliderItems[currentSlide.textContent - 1].style.visibility = 'hidden';
        sliderItems[currentSlide.textContent - 1].style.zIndex = '-1';
        currentSlide.textContent = `${+(currentSlide.textContent) + 1}`;
        sliderImagesFirst.style.marginLeft = `${(+(currentSlide.textContent) - 1) * (-100)}%`;
        sliderItems[currentSlide.textContent - 1].style.opacity = '1';
        sliderItems[currentSlide.textContent - 1].style.visibility = 'visible';
        sliderItems[currentSlide.textContent - 1].style.zIndex = 'inherit';
        if (currentSlide.textContent == `${sliderLength}`) {
            arrowRight.style.zIndex = '-1';
        }
    });
}

//search-line

let searchBtns = document.querySelectorAll('.search-open-btn');
let searchLines = document.querySelectorAll('.search-line');

// search header

function searchItems() {
    console.log(searchLines[0].value);
}

function openSearchLine() {
    searchLines[0].style.width = '280px';
    searchLines[0].style.padding = '11px 1px';
    searchBtns[0].removeEventListener('click', openSearchLine);
    searchBtns[0].addEventListener('click', searchItems);
}

searchBtns[0].addEventListener('click', openSearchLine)

document.addEventListener('click', (event) => {
    let target = event.target;
    if (target !== searchBtns[0] && target !== searchLines[0] && !(searchBtns[0].contains(target)) && !(searchLines[0].contains(target))) {
        searchLines[0].style.width = '0px';
        searchLines[0].style.padding = '11px 0px';
        searchBtns[0].addEventListener('click', openSearchLine);
        searchBtns[0].removeEventListener('click', searchItems);
    }
})

//search sticky

let stickyBySearchLineClosed = document.querySelector('.sticky-closing-by-search-line')

function searchStickyItems() {
    console.log(searchLines[1].value);
}

function openStickySearchLine() {
    stickyBySearchLineClosed.style.opacity = '0';
    stickyBySearchLineClosed.style.zIndex = '-1';
    stickyBySearchLineClosed.style.visibility = 'hidden';
    searchLines[1].style.width = '145px';
    searchLines[1].style.padding = '11px 1px';
    searchBtns[1].removeEventListener('click', openStickySearchLine);
    searchBtns[1].addEventListener('click', searchStickyItems)
}

searchBtns[1].addEventListener('click', openStickySearchLine)

document.addEventListener('click', (event) => {
    let target = event.target;
    if (target !== searchBtns[1] && target !== searchLines[1] && !(searchBtns[1].contains(target)) && !(searchLines[1].contains(target))) {
        stickyBySearchLineClosed.style.opacity = '1';
        stickyBySearchLineClosed.style.zIndex = 'inherit';
        stickyBySearchLineClosed.style.visibility = 'visible';
        searchLines[1].style.width = '0px';
        searchLines[1].style.padding = '11px 0px';
        searchBtns[1].addEventListener('click', openStickySearchLine);
        searchBtns[1].removeEventListener('click', searchStickyItems);
    }
})

//search footer

let footerBySearchLineClosed = document.querySelector('.closing-by-search-line')

function searchFooterItems() {
    console.log(searchLines[1].value);
}

function openFooterSearchLine() {
    footerBySearchLineClosed.style.opacity = '0';
    footerBySearchLineClosed.style.zIndex = '-1';
    footerBySearchLineClosed.style.visibility = 'visible';
    searchLines[2].style.width = '145px';
    searchLines[2].style.padding = '11px 1px';
    searchBtns[2].removeEventListener('click', openFooterSearchLine);
    searchBtns[2].addEventListener('click', searchFooterItems)
}

searchBtns[2].addEventListener('click', openFooterSearchLine)

document.addEventListener('click', (event) => {
    let target = event.target;
    if (target !== searchBtns[2] && target !== searchLines[2] && !(searchBtns[2].contains(target)) && !(searchLines[2].contains(target))) {
        footerBySearchLineClosed.style.opacity = '1';
        footerBySearchLineClosed.style.zIndex = 'inherit';
        footerBySearchLineClosed.style.visibility = 'visible';
        searchLines[2].style.width = '0px';
        searchLines[2].style.padding = '11px 0px';
        searchBtns[2].addEventListener('click', openFooterSearchLine);
        searchBtns[2].removeEventListener('click', searchFooterItems);
    }
})

//favorites

let favoritesOpenBtns = document.querySelectorAll('.favorites-drop');
let favoritesBlock = document.querySelectorAll('.favorites');

for (let i = 0; i < favoritesOpenBtns.length; i++) {
    favoritesOpenBtns[i].addEventListener('click', () => {
        if (favoritesBlock[i].style.opacity == '0' || favoritesBlock[i].style.opacity == '') {
            favoritesBlock[i].style.zIndex = '100';
            favoritesBlock[i].style.opacity = '1';
            favoritesBlock[i].style.visibility = 'visible';
        } else {
            favoritesBlock[i].style.zIndex = '-1';
            favoritesBlock[i].style.opacity = '0';
            favoritesBlock[i].style.visibility = 'hidden';
        }
    })
}

document.addEventListener('click', event => {
    let target = event.target;
    for (let i = 0; i < favoritesOpenBtns.length; i++) {
        if (!(target === favoritesOpenBtns[i] || target === favoritesBlock[i]) && !(favoritesOpenBtns[i].contains(target) || favoritesBlock[i].contains(target)) && !(favoritesBlock[i].classList.contains('hidden'))) {
            favoritesBlock[i].style.zIndex = '-1';
            favoritesBlock[i].style.opacity = '0';
            favoritesBlock[i].style.visibility = 'hidden';
        }
    }
})

//нижняя полоса главного меню и фон выпадающих меню


let blackMenus = document.querySelectorAll('.menu-black__menu');

for (let i = 0; i < blackMenus.length; i++) {
    let blackMenuLists = blackMenus[i].querySelectorAll('.menu-black__list');
    let blackMenuLine = blackMenus[i].querySelector('.menu-black__line');
    let blackMenuBackgrounds = blackMenus[i].querySelectorAll('.menu-black__drop-bg');
    for (let j = 0; j < blackMenuLists.length; j++) {
        blackMenuLists[j].addEventListener('mouseover', (event) => {
            let target = event.target;
            if (!(target === blackMenuLine)) {
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
            }
        })
        if ((j !== blackMenuLists.length - 1) && (i !== blackMenus.length - 1)) {
            blackMenuLists[j].querySelector('.menu-black__link').addEventListener('mouseover', (event) => {
                let target = event.target;
                if (!(target === blackMenuLine)) {
                    for (let k = 0; k < blackMenuLists.length - 2; k++) {
                        if (blackMenuBackgrounds[k].style.zIndex === '100') {
                            blackMenuBackgrounds[k].style.zIndex = '-1';
                        }
                    }
                    if (j !== blackMenuLists.length - 2) {
                        blackMenuBackgrounds[j].style.zIndex = '100';
                    }
                }
            })
            blackMenuLists[j].addEventListener('mouseout', (event) => {
                let target = event.relatedTarget;
                if ((target !== blackMenuLists[j]) && (target !== blackMenuLine) && !(blackMenuLists[j].contains(target)) && (j !== blackMenuLists.length - 2)) {
                    blackMenuBackgrounds[j].style.zIndex = '-1';
                }
            })
        }
    }
    if (i !== blackMenus.length - 1) {
        for (let j = 0; j < blackMenuBackgrounds.length; j++) {
            blackMenuBackgrounds[j].querySelector('.drop').addEventListener('mouseout', (event) => {
                let target = event.relatedTarget;
                if ((!(target === blackMenuBackgrounds[j].querySelector('.drop')) && !(blackMenuBackgrounds[j].querySelector('.drop').contains(target)))) {
                    blackMenuBackgrounds[j].style.zIndex = '-1';
                }
            })
        }
    }
}


//sticky menu

let menuBlackHeader = document.querySelector(".menu-black-header");
let menuBlackFooter = document.querySelector(".menu-black-footer");
let stickyMenu = document.querySelector(".sticky-menu");

let stickyTop = menuBlackHeader.offsetTop;
let stickyBottom = menuBlackFooter.offsetParent.offsetTop;

if ((window.pageYOffset >= (stickyTop + 550)) && (window.pageYOffset <= (stickyBottom - 550))) {
    stickyMenu.style.top = '0%';
}

window.addEventListener('scroll', () => {
    if ((window.pageYOffset >= (stickyTop + 550)) && (window.pageYOffset <= (stickyBottom - 550))) {
        stickyMenu.style.top = '0%';
    } else {
        stickyMenu.style.top = '-100%';
    }
});
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
//new-items-slider

let newItemsBlocks = document.querySelectorAll('.new-items__items');
let newItemsArrowLeft = document.querySelectorAll('.new-items__arrow-left');
let newItemsArrowRight = document.querySelectorAll('.new-items__arrow-right');
let newItemsLeftItem = document.querySelectorAll('.new-items__item-active');


for(let i = 0; i < newItemsBlocks.length; i++) {
    let newItems = newItemsBlocks[i].querySelectorAll('.new-items__item');
    newItemsArrowLeft[i].addEventListener('click', () => {
        if (!(newItems[0].classList.contains('new-items__item-active'))) {
            newItemsBlocks.style.marginLeft;
        }
    })
}



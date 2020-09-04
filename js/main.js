
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

//map-slider

let mapSliders = document.querySelectorAll('.map-slider');

for (let i = 0; i < mapSliders.length; i++) {
    let sliderLength = mapSliders[i].querySelectorAll('.map-slider__slide').length;
    let firstSlide = mapSliders[i].querySelector('.map-slider__first-slide');
    let line = mapSliders[i].querySelector('.map-slider__line');
    let arrowLeft = mapSliders[i].querySelector('.map-slider__arrow-left');
    let arrowRight = mapSliders[i].querySelector('.map-slider__arrow-right');
    let currentSlide = 1;
    line.style.width = `${((currentSlide - 1) * 100) / (sliderLength - 1)}%`;
    if (sliderLength === 1) {
        arrowLeft.classList.add('hidden');
        arrowRight.classList.add('hidden');
    }
    arrowLeft.addEventListener('click', () => {
        if (currentSlide === 1) {
            currentSlide = sliderLength;
            firstSlide.style.marginLeft = `${(currentSlide - 1) * (-100)}%`;
            line.style.width = `${((currentSlide - 1) * 100) / (sliderLength - 1)}%`;
        } else {
            currentSlide = currentSlide - 1;
            firstSlide.style.marginLeft = `${(currentSlide - 1) * (-100)}%`;
            line.style.width = `${((currentSlide - 1) * 100) / (sliderLength - 1)}%`;
        }
    });
    arrowRight.addEventListener('click', () => {
        if (currentSlide === sliderLength) {
            currentSlide = 1;
            firstSlide.style.marginLeft = `${(currentSlide - 1) * (-100)}%`;
            line.style.width = `${((currentSlide - 1) * 100) / (sliderLength - 1)}%`;
        } else {
            currentSlide = currentSlide + 1;
            firstSlide.style.marginLeft = `${(currentSlide - 1) * (-100)}%`;
            line.style.width = `${((currentSlide - 1) * 100) / (sliderLength - 1)}%`;
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
    totalSlides.textContent = `${sliderLength}`;
    arrowLeft.addEventListener('click', () => {
        if (currentSlide.textContent == `${sliderLength}`) {
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
let checkboxBtns = document.querySelectorAll('.checkbox');

checkboxBtns.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        let check = checkbox.querySelector('.fa-check');
        if (check.style.opacity === '0' || check.style.opacity === '') {
            checkbox.classList.add('checked');
            check.style.opacity = '1';
            check.style.visibility = 'visible';
        } else {
            checkbox.classList.remove('checked');
            check.style.opacity = '0';
            check.style.visibility = 'hidden';
        }
    })
});

let mapCheckboxBtns = document.querySelectorAll('.map-lists__infrastructure-checkbox');

mapCheckboxBtns.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        let check = checkbox.querySelector('.fa-check');
        if (check.style.opacity === '0' || check.style.opacity === '') {
            checkbox.classList.add('checked');
            check.style.opacity = '1';
            check.style.visibility = 'visible';
        } else {
            checkbox.classList.remove('checked');
            check.style.opacity = '0';
            check.style.visibility = 'hidden';
        }
    })
})
// main-slider switches

let mainSlider = document.querySelector('.main-slider');
let mainSliderSwitchesBlock = document.querySelector('.main-slider__switches');
let mainSliderSwitches = document.querySelectorAll('.main-slider__switch');
let activeSlideNumber = 0;

mainSliderSwitchesBlock.style.left = `${document.querySelector('.container').offsetWidth + (document.querySelector('body').offsetWidth - document.querySelector('.container').offsetWidth) / 2}px`;
mainSliderSwitchesBlock.style.opacity = '1';

for (let i = 0; i < mainSliderSwitches.length; i++) {
    mainSliderSwitches[i].addEventListener('click', () => {
        if (i !== activeSlideNumber) {
            mainSliderSwitches[activeSlideNumber].classList.remove('main-slider__switch-active');
            activeSlideNumber = i;
            mainSliderSwitches[activeSlideNumber].classList.add('main-slider__switch-active');
            mainSlider.style.marginLeft = `-${activeSlideNumber * 100}%`;
        }
    })
}

let findPrices = document.querySelectorAll('.find-price');
let findPricesOptions = document.querySelectorAll('.price-options');
let findPricesHideBlocks = document.querySelectorAll('.find-price__hide');

for (let i = 0; i < findPrices.length; i++) {
    let chosenPrices = findPrices[i].querySelectorAll('.chosen-option-price');
    let optionsPrices = findPrices[i].querySelectorAll('.price-option');
    for (let j = 0; j < chosenPrices.length; j++) {
        setInterval(() => {
            if (optionsPrices[j].value) {
                chosenPrices[j].textContent = optionsPrices[j].value;
            } else if (j % 2 === 0) {
                chosenPrices[j].textContent = '1.8';
            } else {
                chosenPrices[j].textContent = '4.5';
            }
        }, 100)
    }
    findPrices[i].addEventListener('click', (event) => {
        let target = event.target;
        if ((findPricesOptions[i].style.maxHeight === '0px' || findPricesOptions[i].style.maxHeight === '') && ((target === findPrices[i]) || (findPrices[i].contains(target)))) {
            findPricesOptions[i].style.maxHeight = '50px';
            findPricesOptions[i].style.overflow = 'auto';
            findPricesHideBlocks[i].classList.add('hidden');
        } else if ((target !== findPricesOptions[i]) && !(findPricesOptions[i].contains(target))) {
            findPricesOptions[i].style.maxHeight = '0px';
            findPricesOptions[i].style.overflow = 'hidden';
        } else {
        }
    })
}

let findConsists = document.querySelectorAll('.find-consist');
let findConsistsOptions = document.querySelectorAll('.consist-options');
let findConsistsHideBlocks = document.querySelectorAll('.find-consist__hide');

for (let i = 0; i < findConsists.length; i++) {
    let chosenConsists = findConsists[i].querySelectorAll('.chosen-option-consist');
    let optionsConsists = findConsists[i].querySelectorAll('.consist-option');
    for (let j = 0; j < chosenConsists.length; j++) {
        setInterval(() => {
            if (optionsConsists[j].textContent) {
                chosenConsists[j].textContent = optionsConsists[j].textContent;
            } else if (j % 2 === 0) {
                chosenConsists[j].textContent = '2';
            } else {
                chosenConsists[j].textContent = '4';
            }
        }, 100)
    }
    findConsists[i].addEventListener('click', (event) => {
        let target = event.target;
        if ((findConsistsOptions[i].style.maxHeight === '0px' || findConsistsOptions[i].style.maxHeight === '') && ((target === findConsists[i]) || (findConsists[i].contains(target)))) {
            findConsistsOptions[i].style.maxHeight = '100px';
            findConsistsOptions[i].style.overflow = 'auto';
            findConsistsHideBlocks[i].classList.add('hidden');
        } else if ((target !== findConsistsOptions[i]) && !(findConsistsOptions[i].contains(target))) {
            findConsistsOptions[i].style.maxHeight = '0px';
            findConsistsOptions[i].style.overflow = 'hidden';
        } else {
        }
    })
}

document.addEventListener('click', (event) => {
    let target = event.target;
    for (let i = 0; i < findConsists.length; i++) {
        if ((!(findConsistsOptions[i].style.maxHeight === '0px' || findConsistsOptions[i].style.maxHeight === '')) && (target !== findConsists[i]) && (!(findConsists[i].contains(target)))) {
            findConsistsOptions[i].style.maxHeight = '0px';
            findConsistsOptions[i].style.overflow = 'hidden';
        }
    }
})

document.addEventListener('click', (event) => {
    let target = event.target;
    for (let i = 0; i < findPrices.length; i++) {
        if ((!(findPricesOptions[i].style.maxHeight === '0px' || findPricesOptions[i].style.maxHeight === '')) && (target !== findPrices[i]) && (!(findPrices[i].contains(target)))) {
            findPricesOptions[i].style.maxHeight = '0px';
            findPricesOptions[i].style.overflow = 'hidden';
        }
    }
})

let findDate = document.querySelector('.find-date');
let findDateCalendar = document.querySelector('.find-date__calendar');

findDate.addEventListener('click', (event) => {
    let target = event.target;
    if ((findDateCalendar.style.opacity === '0' || findDateCalendar.style.opacity === '') && ((target === findDate) || (findDate.contains(target)))) {
        findDateCalendar.style.opacity = '1';
        findDateCalendar.style.visibility = 'visible';
    } else if ((target !== findDateCalendar) && !(findDateCalendar.contains(target))) {
        findDateCalendar.style.opacity = '0';
        findDateCalendar.style.visibility = 'hidden';
    } else {
    }
})

document.addEventListener('click', (event) => {
    let target = event.target;
    if ((!(findDateCalendar.style.opacity === '0' || findDateCalendar.style.opacity === '')) && (target !== findDate) && (!(findDate.contains(target)))) {
        findDateCalendar.style.opacity = '0';
        findDateCalendar.style.visibility = 'hidden';
    }
})

let findDateDays = findDate.querySelectorAll('.find-date__day');
let indexOfToday = 0;
let indexOfChosenBegin = 0;
let indexOfChosenEnd = 0;

for (let i = 0; i < findDateDays.length; i++) {
    if (!(findDateDays[i].classList.contains('find-date__day-today'))) {
        findDateDays[i].style.color = '#e1dede';
        findDateDays[i].style.cursor = 'default';
    } else {
        indexOfToday = i;
        break;
    }
}

for (let i = indexOfToday; i < findDateDays.length; i++) {
    if (findDateDays[i].classList.contains('find-date__day-chosen-begin')) {
        indexOfChosenBegin = i;
    } else if (findDateDays[i].classList.contains('find-date__day-chosen-end')) {
        indexOfChosenEnd = i;
        break;
    }
}

for (let i = indexOfChosenBegin + 1; i < indexOfChosenEnd; i++) {
    findDateDays[i].style.backgroundColor = '#f7fbfe';
}

let findConsistsOptionsLessBtns = document.querySelectorAll('.find-consist__less');
let findConsistsOptionsResults = document.querySelectorAll('.find-consist__result');
let findConsistsOptionsMoreBtns = document.querySelectorAll('.find-consist__more');

for (let i = 0; i < findConsistsOptionsResults.length; i++) {
    findConsistsOptionsLessBtns[i].addEventListener('click', () => {
        if (findConsistsOptionsResults[i].textContent !== '0') {
            findConsistsOptionsResults[i].textContent = `${+(findConsistsOptionsResults[i].textContent) - 1}`;
        }
    })
    findConsistsOptionsMoreBtns[i].addEventListener('click', () => {
        findConsistsOptionsResults[i].textContent = `${+(findConsistsOptionsResults[i].textContent) + 1}`;
    })
}



let mainSliderForms = document.querySelectorAll('.find__form');
let findAreaToHide = mainSliderForms[0].querySelector('.find-area-hide');
let findRoomToHide = mainSliderForms[1].querySelector('.find-room-hide');
let findAreaToShow = mainSliderForms[0].querySelector('.find-area-show');


setInterval(() => {
    if (mainSliderForms[0].querySelector('.type-chosen').textContent === 'участок') {
        findAreaToHide.classList.add('hidden');
        findAreaToShow.classList.remove('hidden');
    } else if (mainSliderForms[0].querySelector('.type-chosen').textContent === 'комната') {
        findAreaToHide.classList.add('hidden');
        findAreaToShow.classList.add('hidden');
    } else {
        findAreaToHide.classList.remove('hidden');
        findAreaToShow.classList.add('hidden');
    }
}, 100)


for (let i = 0; i < mainSliderForms.length - 1; i++) {
    let selectedType = mainSliderForms[i].querySelector('.type-chosen');
    let findCommerces = mainSliderForms[i].querySelectorAll('.find-commerce');
    let findCommerceToHide = mainSliderForms[i].querySelector('.find-commerce-hide');
    setInterval(() => {
        for (let j = 0; j < findCommerces.length; j++) {
            if (selectedType.textContent === findCommerces[j].textContent || selectedType.textContent === 'участок' || selectedType.textContent === 'комната') {
                if (selectedType.textContent === 'комната' && i === 1) {
                    findRoomToHide.classList.add('hidden');
                } else {
                    findRoomToHide.classList.remove('hidden');
                }
                findCommerceToHide.classList.add('hidden');
                j = findCommerces.length;
            } else {
                findCommerceToHide.classList.remove('hidden');
            }
        }
    }, 100)
}

for (let i = 0; i < mainSliderForms.length; i++) {
    let formSubmit = mainSliderForms[i].querySelector('.find__submit');
    let formSubmitParts = formSubmit.querySelectorAll('.find__submit-part');
    let selectedType = mainSliderForms[i].querySelector('.type-chosen');
    let selectedCity = mainSliderForms[i].querySelector('.find__city');
    setInterval(() => {
        if ((selectedType.textContent !== 'Купить студию' && selectedType.textContent !== 'Тип объекта') && selectedCity.value) {
            formSubmitParts[0].textContent = 'Показать ';
            formSubmitParts[0].style.marginRight = '3px';
            formSubmitParts[1].textContent = '123456';
            formSubmitParts[2].textContent = ' объектов';
            formSubmit.style.maxWidth = '270px';
            formSubmit.style.minWidth = '270px';
        } else {
            formSubmit.style.maxWidth = '120px';
            formSubmit.style.minWidth = '120px';
            formSubmitParts[0].textContent = 'Найти';
            formSubmitParts[0].style.marginRight = '0';
            formSubmitParts[1].textContent = '';
            formSubmitParts[2].textContent = '';
        }
    }, 100)
}

let openFormBtns = document.querySelectorAll('.find__button');
let indexOfActiveForm = 0;

for (let i = 0; i < openFormBtns.length; i++) {
    openFormBtns[i].addEventListener('click', () => {
        if (indexOfActiveForm !== i) {
            mainSliderForms[i].classList.remove('hidden');
            openFormBtns[i].classList.add('find__button-active');
            mainSliderForms[indexOfActiveForm].classList.add('hidden');
            openFormBtns[indexOfActiveForm].classList.remove('find__button-active');
            indexOfActiveForm = i;
        }
    })
}

let mainSliderSubSlider = document.querySelector('.main-slide-1-slider');
let mainSliderSubSliderNames = mainSliderSubSlider.querySelectorAll('.main-slide-1-slider__name');
let mainSliderSubSliderFirstSlide = mainSliderSubSlider.querySelector('.main-slide-1-slider__first-slide');
let mainSliderSubSliderLine = mainSliderSubSlider.querySelector('.main-slide-1-slider__line');
let mainSliderSubSliderArrowLeft = mainSliderSubSlider.querySelector('.main-slide-1-slider__arrow-left');
let mainSliderSubSliderArrowRight = mainSliderSubSlider.querySelector('.main-slide-1-slider__arrow-right');

let indexOfActiveSlideSubSlider = 1;
let maxIndexOfActiveSlideSubSlider = mainSliderSubSliderNames.length - 1;

mainSliderSubSliderFirstSlide.style.marginLeft = `${indexOfActiveSlideSubSlider * (-100)}%`;
mainSliderSubSliderLine.style.width = `${indexOfActiveSlideSubSlider*100/(mainSliderSubSliderNames.length - 1)}%`;

mainSliderSubSliderArrowLeft.addEventListener('click', () => {
    if (indexOfActiveSlideSubSlider === maxIndexOfActiveSlideSubSlider) {
        mainSliderSubSliderArrowRight.style.visibility = 'visible';
    }
    mainSliderSubSliderNames[indexOfActiveSlideSubSlider - 1].classList.add('main-slide-1-slider__name-active');
    mainSliderSubSliderNames[indexOfActiveSlideSubSlider].classList.remove('main-slide-1-slider__name-active');
    indexOfActiveSlideSubSlider--;
    mainSliderSubSliderFirstSlide.style.marginLeft = `${indexOfActiveSlideSubSlider * (-100)}%`;
    mainSliderSubSliderLine.style.width = `${indexOfActiveSlideSubSlider*100/(mainSliderSubSliderNames.length - 1)}%`;
    if (indexOfActiveSlideSubSlider === 0) {
        mainSliderSubSliderArrowLeft.style.visibility = 'hidden';
    }
})

mainSliderSubSliderArrowRight.addEventListener('click', () => {
    if (indexOfActiveSlideSubSlider === 0) {
        mainSliderSubSliderArrowLeft.style.visibility = 'visible';
    }
    mainSliderSubSliderNames[indexOfActiveSlideSubSlider + 1].classList.add('main-slide-1-slider__name-active');
    mainSliderSubSliderNames[indexOfActiveSlideSubSlider].classList.remove('main-slide-1-slider__name-active');
    indexOfActiveSlideSubSlider++;
    mainSliderSubSliderFirstSlide.style.marginLeft = `${indexOfActiveSlideSubSlider * (-100)}%`;
    mainSliderSubSliderLine.style.width = `${indexOfActiveSlideSubSlider*100/(mainSliderSubSliderNames.length - 1)}%`;
    if (indexOfActiveSlideSubSlider === maxIndexOfActiveSlideSubSlider) {
        mainSliderSubSliderArrowRight.style.visibility = 'hidden';
    }
})















let openMapButton = document.querySelector('.open-map-btn');
let mapBlock = document.querySelector('.map-block');
let changingPlaceLink = document.querySelector('.changing-place-link');
let mapBackground = document.querySelector('.under-slider__map-bg');
let mapLists = document.querySelector('.map-lists');
let closeMapBtn = document.querySelector('.map-lists__close-btn');

openMapButton.addEventListener('click', () => {
    changingPlaceLink.style.left = '271px';
    changingPlaceLink.style.transform = 'translate(-271px, 227px)';
    changingPlaceLink.style.position = 'absolute';
    mapBlock.style.height = '428px';
    mapBlock.style.maxWidth = '1019px';
    mapBackground.style.display = 'none';
    closeMapBtn.classList.remove('hidden');
    setTimeout(() => {
        mapLists.style.visibility = 'visible';
        mapLists.style.opacity = '1';
    }, 200)
});

closeMapBtn.addEventListener('click', () => {
    closeMapBtn.classList.add('hidden');
    mapLists.style.visibility = 'hidden';
    mapLists.style.opacity = '0';
    changingPlaceLink.style.transform = 'translate(0, 0)';
    setTimeout(() => {
        changingPlaceLink.style.left = '';
        changingPlaceLink.style.position = 'relative';
    }, 200)
    mapBlock.style.height = '201px';
    mapBlock.style.maxWidth = '748px';
    mapBackground.style.display = 'flex';
});

let mapBottomBtnFirst = mapLists.querySelector('.map-lists__to-find-first');
let mapBottomBtnSecond = mapLists.querySelector('.map-lists__to-find-second');

mapBottomBtnFirst.addEventListener('click', () => {
    mapBottomBtnFirst.classList.add('hidden');
    mapBottomBtnSecond.classList.remove('hidden');
})

mapBottomBtnSecond.addEventListener('click', () => {
    mapBottomBtnSecond.classList.add('hidden');
    mapBottomBtnFirst.classList.remove('hidden');
})

let mapInfrastructureBtn = mapLists.querySelector('.map-lists__infrastructure-btn');
let mapInfrastructure = mapLists.querySelector('.map-lists__infrastructure-menu');
let mapInfrastructureBtnArrow = mapInfrastructureBtn.querySelector('.fa-chevron-up');

mapInfrastructureBtn.addEventListener('click', () => {
    if (mapInfrastructure.style.maxHeight === '0px' || mapInfrastructure.style.maxHeight === '') {
        mapInfrastructure.style.maxHeight = '175px';
        mapInfrastructure.style.paddingBottom = '15px';
        mapInfrastructureBtnArrow.style.transform = 'rotate(-180deg)';
    } else {
        mapInfrastructure.style.maxHeight = '0px';
        mapInfrastructure.style.paddingBottom = '0px';
        mapInfrastructureBtnArrow.style.transform = 'rotate(0deg)';
    }
})

let mapDifferentBtns = mapLists.querySelectorAll('.map-lists__different-buttons');
let mapCurrentDifferentButton = -1;

for (let i = 0; i < mapDifferentBtns.length; i++) {
    mapDifferentBtns[i].addEventListener('click', () => {
        if (mapCurrentDifferentButton === -1) {
            mapDifferentBtns[i].classList.add('map-lists__button-active');
            mapCurrentDifferentButton = i;
        } else {
            mapDifferentBtns[i].classList.add('map-lists__button-active');
            mapDifferentBtns[mapCurrentDifferentButton].classList.remove('map-lists__button-active');
            mapCurrentDifferentButton = i;
        }
    })
}

let mapListOpenBtn = mapLists.querySelector('.map-lists__list-btn');
let mapListOpenBtnArrow = mapListOpenBtn.querySelector('.fa-long-arrow-alt-down');

mapListOpenBtn.addEventListener('click', () => {
    let mapActiveList = mapLists.querySelector('.map-lists__list-active');
    if (mapActiveList.style.maxHeight === '0px' || mapActiveList.style.maxHeight === '0%' || mapActiveList.style.maxHeight === '') {
        mapActiveList.style.maxHeight = '100%';
        mapListOpenBtn.style.top = '393px';
        mapListOpenBtnArrow.style.transform = 'rotate(180deg)';
    } else {
        mapActiveList.style.maxHeight = '0%';
        mapListOpenBtn.style.top = '23px';
        mapListOpenBtnArrow.style.transform = 'rotate(0deg)';
    }
})

let indexOfActiveMapList = 0;
let mapListSwitches = mapLists.querySelectorAll('.map-lists-list-switch');
let mapListsLists = mapLists.querySelectorAll('.map-lists__list');

for (let i = 0; i < mapListSwitches.length; i++) {
    mapListSwitches[i].addEventListener('click', () => {
        if (indexOfActiveMapList !== i) {
            mapListsLists[i].classList.add('map-lists__list-active');
            mapListsLists[indexOfActiveMapList].classList.remove('map-lists__list-active');
            if (mapListsLists[indexOfActiveMapList].style.maxHeight ===  '100%') {
                mapListsLists[indexOfActiveMapList].style.maxHeight = '0%';
                mapListOpenBtn.style.top = '23px';
                mapListOpenBtnArrow.style.transform = 'rotate(0deg)';
                mapListsLists[i].style.maxHeight = '100%';
                mapListOpenBtn.style.top = '393px';
                mapListOpenBtnArrow.style.transform = 'rotate(180deg)';
            }
            indexOfActiveMapList = i;
        }
    })
}

let mapOpenSearchBtn = mapLists.querySelector('.map-lists__search-btn');
let mapSearch = mapLists.querySelector('.map-lists__search');

mapOpenSearchBtn.addEventListener('click', () => {
    mapOpenSearchBtn.classList.add('hidden');
    mapSearch.style.maxWidth = '100%';
})


// new-items-slider

let newItemsBlocks = document.querySelectorAll('.new-items__items');
let newItemsArrowLeft = document.querySelectorAll('.new-items__arrow-left');
let newItemsArrowRight = document.querySelectorAll('.new-items__arrow-right');


for(let i = 0; i < newItemsBlocks.length; i++) {
    let newItems = newItemsBlocks[i].querySelectorAll('.new-items__item');
    let firstItemIndex = 0;
    let marginLeft = 0;
    newItemsArrowRight[i].addEventListener('click', () => {
        if (firstItemIndex !== (newItems.length - 3)) {
            marginLeft = marginLeft - newItems[firstItemIndex].scrollWidth - 28;
            newItemsBlocks[i].style.marginLeft = `${marginLeft}px`;
            firstItemIndex++;
        }
    });
    newItemsArrowLeft[i].addEventListener('click', () => {
        if (firstItemIndex !== (0)) {
            firstItemIndex--;
            marginLeft = marginLeft + newItems[firstItemIndex].scrollWidth + 28;
            newItemsBlocks[i].style.marginLeft = `${marginLeft}px`;
        }
    })
}

// new-items-filter

let newItemsButtonBlocks = document.querySelectorAll('.new-items__buttons');
let newItemsMenus = document.querySelectorAll('.new-items__menu');

for (let i = 0; i < newItemsButtonBlocks.length; i++) {
    let newItemsActiveButton = newItemsButtonBlocks[i].querySelector('.new-items__button-active');
    let newItemsButtons = newItemsButtonBlocks[i].querySelectorAll('.new-items__button');
    let newItemsToSell = newItemsMenus[i].querySelector('.new-items__sell');
    let newItemsToRent = newItemsMenus[i].querySelector('.new-items__rent');
    let newItemsFilters = newItemsMenus[i].querySelectorAll('.new-items__filter');
    newItemsFilters.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('maincolor')) {
                button.classList.remove('maincolor');
            } else {
                button.classList.add('maincolor');
            }
        })
    });
    newItemsButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!(button.classList.contains('new-items__button-active'))) {
                newItemsFilters.forEach(button => {
                    button.classList.remove('maincolor');
                });
                button.classList.add('new-items__button-active');
                newItemsActiveButton.classList.remove('new-items__button-active');
                newItemsActiveButton = newItemsButtonBlocks[i].querySelector('.new-items__button-active');
                if (button.textContent === 'Все') {
                    newItemsToSell.classList.remove('hidden');
                    newItemsToRent.classList.remove('hidden');
                } else if (button.textContent === 'Продать') {
                    newItemsToSell.classList.remove('hidden');
                    newItemsToRent.classList.add('hidden');
                } else if (button.textContent === 'Сдать') {
                    newItemsToSell.classList.add('hidden');
                    newItemsToRent.classList.remove('hidden');
                }
            }
        })
    })
}





//buyout switches

let buyoutSwitches = document.querySelectorAll('.buyout-left__switch');
let buyoutInnerBlocks = document.querySelectorAll('.buyout-left__inner-block');

let buyoutSwitchChosen = 0;
buyoutInnerBlocks[buyoutSwitchChosen].style.maxHeight = '800px';

let buyoutButtonsToWork = document.querySelectorAll('.buyout-left__block-choice');
let indexOfChosenButton = -1;

for (let i = 0; i < buyoutButtonsToWork.length; i++) {
    buyoutButtonsToWork[i].addEventListener('click', () => {
        if (!(indexOfChosenButton === -1)) {
            buyoutButtonsToWork[i].classList.add('buyout-left__block-choice-chosen');
            buyoutButtonsToWork[indexOfChosenButton].classList.remove('buyout-left__block-choice-chosen');
            indexOfChosenButton = i;
        } else {
            buyoutButtonsToWork[i].classList.add('buyout-left__block-choice-chosen');
            indexOfChosenButton = i;
        }
    })
}

for (let i = 0; i < buyoutSwitches.length; i++) {
    buyoutSwitches[i].addEventListener('click', () => {
        if (i !== buyoutSwitchChosen) {
            buyoutSwitches[buyoutSwitchChosen].classList.remove('buyout-left__switch-active');
            buyoutSwitches[i].classList.add('buyout-left__switch-active');
            buyoutInnerBlocks[buyoutSwitchChosen].style.maxHeight = '0px';
            buyoutSwitchChosen = i;
            setTimeout(() => {
                buyoutInnerBlocks[buyoutSwitchChosen].style.maxHeight = '800px';
                buyoutButtonsToWork[indexOfChosenButton].classList.remove('buyout-left__block-choice-chosen');
                indexOfChosenButton = -1;
            }, 500)
        }
    })
}


// select

let selects = document.querySelectorAll('.select');
let chosenOptions = document.querySelectorAll('.chosen-option');
let optionsBlocks = document.querySelectorAll('.options');

for (let i = 0; i < selects.length; i++) {
    selects[i].addEventListener('click', () => {
        let arrowDown = selects[i].querySelector('.fa-chevron-down');
        if (optionsBlocks[i].style.maxHeight === '0px' || optionsBlocks[i].style.maxHeight === '') {
            optionsBlocks[i].style.maxHeight = '194px';
            optionsBlocks[i].style.overflow = 'auto';
            arrowDown.style.color = '#acadad';
            arrowDown.style.transform = 'translateY(-50%) rotate(180deg)';
            if (selects[i].classList.contains('find__select')) {
                selects[i].classList.add('find__select-active');
            }
        } else {
            optionsBlocks[i].style.maxHeight = '0px';
            optionsBlocks[i].style.overflow = 'hidden';
            arrowDown.style.color = '#4abef7';
            arrowDown.style.transform = 'translateY(-50%) rotate(0deg)';
            if (selects[i].classList.contains('find__select')) {
                selects[i].classList.remove('find__select-active');
            }
        }
        let options = optionsBlocks[i].querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                chosenOptions[i].textContent = option.textContent;
            })
        })
    })
}

document.addEventListener('click', (event) => {
    let target = event.target;
    for (let i = 0; i < selects.length; i++) {
        let arrowDown = selects[i].querySelector('.fa-chevron-down');
        if ((!(optionsBlocks[i].style.maxHeight === '0px' || optionsBlocks[i].style.maxHeight === '')) && (target !== selects[i]) && (!(selects[i].contains(target)))) {
            optionsBlocks[i].style.maxHeight = '0px';
            optionsBlocks[i].style.overflow = 'hidden';
            arrowDown.style.color = '#4abef7';
            arrowDown.style.transform = 'translateY(-50%) rotate(0deg)';
            if (selects[i].classList.contains('find__select-active')) {
                selects[i].classList.remove('find__select-active');
            }
        }
    }
})

// request

let openRequestBtns = document.querySelectorAll('.open-request');
let closeRequestBtns = document.querySelectorAll('.close-request');
let requestBlocks = document.querySelectorAll('.buyout-request');

for (let i = 0; i < openRequestBtns.length; i++) {
    openRequestBtns[i].addEventListener('click', () => {
        requestBlocks[i].style.maxHeight = '280px';
        requestBlocks[i].style.marginTop = '34px';
        setTimeout(() => {
            requestBlocks[i].style.overflow = 'visible';
        }, 400)
    })
}

for (let i = 0; i < closeRequestBtns.length; i++) {
    closeRequestBtns[i].addEventListener('click', () => {
        requestBlocks[i].style.maxHeight = '0px';
        requestBlocks[i].style.marginTop = '0px';
        requestBlocks[i].style.overflow = 'hidden';
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
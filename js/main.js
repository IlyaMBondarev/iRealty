!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.querySelector(".wrapper").classList.add("loaded");let n=document.querySelectorAll(".office-slider__current-slide"),o=document.querySelectorAll(".office-slider__total-slides"),l=document.querySelectorAll(".office-slider__slide"),r=document.querySelectorAll(".office-slider__first-slide");for(let e=0;e<o.length;e++)o[e].textContent=""+l.length/o.length,n[e].textContent="1";let s=document.querySelectorAll(".office-slider__arrow-left"),i=document.querySelectorAll(".office-slider__arrow-right");for(let e=0;e<i.length;e++)i[e].addEventListener("click",()=>{n[e].textContent===o[e].textContent?(r[e].style.marginLeft="0%",n[e].textContent="1"):(r[e].style.marginLeft=+r[e].style.marginLeft.slice(0,-1)-100+"%",n[e].textContent=""+(+n[e].textContent+1))});for(let e=0;e<s.length;e++)s[e].addEventListener("click",()=>{"1"===n[e].textContent?(r[e].style.marginLeft=-100*(l.length/o.length-1)+"%",n[e].textContent=o[e].textContent):(r[e].style.marginLeft=+r[e].style.marginLeft.slice(0,-1)+100+"%",n[e].textContent=""+(+n[e].textContent-1))});let d=document.querySelectorAll(".slider");for(let e=0;e<d.length;e++){let t=d[e].querySelectorAll(".slider__slide").length,n=d[e].querySelector(".slider__first-slide"),o=d[e].querySelector(".slider__current-slide"),l=d[e].querySelector(".slider__total-slides"),r=d[e].querySelector(".slider__arrow-left"),s=d[e].querySelector(".slider__arrow-right");d[e].style.maxWidth=d[e].offsetWidth/t+"px",o.textContent="1",l.textContent=""+t,r.addEventListener("click",()=>{"1"==o.textContent?(o.textContent=""+t,n.style.marginLeft=-100*(+o.textContent-1)+"%"):(o.textContent=""+(+o.textContent-1),n.style.marginLeft=-100*(+o.textContent-1)+"%")}),s.addEventListener("click",()=>{o.textContent==""+t?(o.textContent="1",n.style.marginLeft=-100*(+o.textContent-1)+"%"):(o.textContent=""+(+o.textContent+1),n.style.marginLeft=-100*(+o.textContent-1)+"%")})}let c=document.querySelectorAll(".superoffers-slider");for(let e=0;e<c.length;e++){let t=c[e].querySelectorAll(".item").length,n=c[e].querySelector(".first-item"),o=c[e].querySelector(".superoffers-slider__current-slide"),l=c[e].querySelector(".superoffers-slider__total-slides"),r=c[e].querySelector(".superoffers-slider__arrow-left"),s=c[e].querySelector(".superoffers-slider__arrow-right"),i=c[e].querySelector(".superoffers-slider__right"),d=i.querySelector(".first-slider");o.textContent="5",d.style.marginLeft=-100*(+o.textContent-1)+"%",n.style.marginLeft=-100*(+o.textContent-1)+"%",i.style.maxWidth=d.offsetWidth+"px",l.textContent=""+t,r.addEventListener("click",()=>{"15"==o.textContent&&(s.style.zIndex="inherit"),"1"==o.textContent?(o.textContent=""+t,d.style.marginLeft=-100*(+o.textContent-1)+"%",n.style.marginLeft=-100*(+o.textContent-1)+"%"):(o.textContent=""+(+o.textContent-1),d.style.marginLeft=-100*(+o.textContent-1)+"%",n.style.marginLeft=-100*(+o.textContent-1)+"%"),"1"==o.textContent&&(r.style.zIndex="-1")}),s.addEventListener("click",()=>{"1"==o.textContent&&(r.style.zIndex="inherit"),o.textContent==""+t?(o.textContent="1",d.style.marginLeft=-100*(+o.textContent-1)+"%",n.style.marginLeft=-100*(+o.textContent-1)+"%"):(o.textContent=""+(+o.textContent+1),d.style.marginLeft=-100*(+o.textContent-1)+"%",n.style.marginLeft=-100*(+o.textContent-1)+"%"),"15"==o.textContent&&(s.style.zIndex="-1")})}let f=document.querySelectorAll(".search-open-btn"),u=document.querySelectorAll(".search-line");f[0].addEventListener("click",(function e(){u[0].style.width="280px",u[0].style.padding="11px 1px",f[0].removeEventListener("click",e),f[0].addEventListener("click",(function(){console.log(u[0].value)}))}));let a=document.querySelector(".sticky-closing-by-search-line");f[1].addEventListener("click",(function e(){a.style.opacity="0",a.style.zIndex="-1",u[1].style.width="145px",u[1].style.padding="11px 1px",f[1].removeEventListener("click",e),f[1].addEventListener("click",(function(){console.log(u[1].value)}))}));let y=document.querySelector(".closing-by-search-line");f[2].addEventListener("click",(function e(){y.style.opacity="0",y.style.zIndex="-1",u[2].style.width="145px",u[2].style.padding="11px 1px",f[2].removeEventListener("click",e),f[2].addEventListener("click",(function(){console.log(u[1].value)}))}));let g=document.querySelectorAll(".favorites-drop"),x=document.querySelectorAll(".favorites");for(let e=0;e<g.length;e++)x[e].classList.add("hidden"),x[e].style.zIndex="100",g[e].addEventListener("click",()=>{x[e].classList.toggle("hidden")});document.addEventListener("click",e=>{let t=e.target;for(let e=0;e<g.length;e++)t===g[e]||t===x[e]||g[e].contains(t)||x[e].contains(t)||x[e].classList.contains("hidden")||x[e].classList.toggle("hidden")});let m=document.querySelectorAll(".menu-black__menu");for(let e=0;e<m.length;e++){let t=m[e].querySelectorAll(".menu-black__list"),n=m[e].querySelector(".menu-black__line"),o=m[e].querySelectorAll(".menu-black__drop-bg");for(let e=0;e<t.length;e++){t[e].addEventListener("mouseover",()=>{n.style.left=t[e].offsetLeft-(document.querySelector(".wrapper").offsetWidth-document.querySelector(".container").offsetWidth)/2+"px",e===t.length-1?(n.style.width=t[e].querySelector("img").offsetWidth+"px",n.style.left=t[e].offsetLeft-(document.querySelector(".wrapper").offsetWidth-document.querySelector(".container").offsetWidth)/2+4+"px"):0===e?(n.style.width=t[e].offsetWidth-15+"px",n.style.left=t[e].offsetLeft-(document.querySelector(".wrapper").offsetWidth-document.querySelector(".container").offsetWidth)/2+"px"):(n.style.width=t[e].offsetWidth-30+"px",n.style.left=t[e].offsetLeft-(document.querySelector(".wrapper").offsetWidth-document.querySelector(".container").offsetWidth)/2+15+"px")}),e!==t.length-1&&(t[e].querySelector(".menu-black__link").addEventListener("mouseover",()=>{for(let e=0;e<t.length-2;e++)"100"===o[e].style.zIndex&&(o[e].style.zIndex="-1");e!==t.length-2&&(o[e].style.zIndex="100")}),t[e].addEventListener("mouseout",n=>{let l=n.relatedTarget;l===t[e]||t[e].contains(l)||(o[e].style.zIndex="-1")}));let l={attributes:!0,attributeFilter:["offsetLeft"]};new(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver)((function(t){t.forEach((function(t){o[e].style.left=-t.target.offsetLeft+"px"}))})).observe(t[e],l)}for(let e=0;e<o.length;e++)o[e].style.left=`-${t[e].offsetLeft}px`,o[e].querySelector(".drop").addEventListener("mouseout",t=>{let n=t.relatedTarget;n===o[e].querySelector(".drop")||o[e].querySelector(".drop").contains(n)||(o[e].style.zIndex="-1")})}let p=document.querySelector(".menu-black-header"),h=document.querySelector(".menu-black-footer"),L=document.querySelector(".sticky-menu"),_=document.querySelector(".content"),S=p.offsetTop,q=h.offsetTop;window.pageYOffset>=S&&window.pageYOffset>=L.offsetTop&&window.pageYOffset+L.offsetHeight<=q&&window.pageYOffset+p.offsetHeight<=q&&(p.classList.add("hidden"),L.classList.remove("hidden"),_.style.paddingTop=L.offsetHeight+"px"),window.addEventListener("scroll",()=>{window.pageYOffset>=S&&window.pageYOffset>=L.offsetTop&&window.pageYOffset+L.offsetHeight<=q&&window.pageYOffset+p.offsetHeight<=q?(p.classList.add("hidden"),L.classList.remove("hidden"),_.style.paddingTop=L.offsetHeight+"px"):(p.classList.remove("hidden"),L.classList.add("hidden"),_.style.paddingTop="0")});let C=document.querySelectorAll(".footer__show-btn"),v=document.querySelectorAll(".footer__lists"),w=document.querySelectorAll(".footer__arrow-up"),b=document.querySelectorAll(".footer__arrow-down");document.getElementsByClassName("footer__show-btn");for(let e=0;e<C.length;e++)C[e].addEventListener("click",()=>{w[e].classList.toggle("hidden"),b[e].classList.toggle("hidden"),"Показать все"==C[e].getElementsByTagName("span")[0].textContent?(C[e].getElementsByTagName("span")[0].textContent="Скрыть",v[e].style.maxHeight="718px"):(C[e].getElementsByTagName("span")[0].textContent="Показать все",v[e].style.maxHeight="253px")})}]);
!function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),n=document.querySelector(".js-close-menu2"),o=document.querySelector(".js-close-menu3"),d=document.querySelector(".js-close-menu4"),r=document.querySelector(".js-close-menu5"),l=document.querySelector(".js-close-menu6"),i=function(){var c="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open"),bodyScrollLock[c?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",i),c.addEventListener("click",i),n.addEventListener("click",i),o.addEventListener("click",i),d.addEventListener("click",i),r.addEventListener("click",i),l.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(c){c.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.892c6396.js.map
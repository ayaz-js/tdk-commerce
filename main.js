(()=>{"use strict";var e=document.querySelector(".menu__mobile"),n=document.querySelector(".menu__container"),t=document.querySelector(".menu__list"),c=document.querySelector(".menu__overlay");function i(){n.classList.remove("menu__container_opened")}e.addEventListener("click",(function(){n.classList.add("menu__container_opened")})),t.addEventListener("click",(function(e){var n=e.target;n&&n.classList.contains("menu__link")&&i()})),c.addEventListener("click",i)})();
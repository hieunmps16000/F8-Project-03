const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const menuPC = $("#menu-pc");
const menuMobile = $("#menu-mobile");

// Handle copy menu content from menuPC to menuMobile
menuMobile.innerHTML = menuPC.innerHTML;

// Handle add `.navbar__link--active`
const navbarLinks = $$(".navbar__link");
navbarLinks.forEach(item => {
    item.onclick = function () {
        $$(".navbar__link--active").forEach(item => {
            item.classList.remove("navbar__link--active");
        })
        item.classList.add("navbar__link--active");
    };
});
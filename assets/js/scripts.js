const menuMobile = document.querySelector(".header .header__menu-mobile");

if (menuMobile){
    const menu = document.querySelector(".header .header__menu");
    const overlay = menu.querySelector(".header__overlay");
    menuMobile.onclick = () => {
        menu.setAttribute("show", "yes");       
    }
    overlay.onclick = () => {
        menu.setAttribute("show","");
    }
}
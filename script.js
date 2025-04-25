let menu_icon = document.querySelector('.header-options-mobile')
let menu_icon_item1 = document.querySelector('.header-options-mobile-item.a')
let menu_icon_item2 = document.querySelector('.header-options-mobile-item.b')
let menu_icon_item3 = document.querySelector('.header-options-mobile-item.c')

menu_icon.addEventListener ('click', () => {
    const opacidade = window.getComputedStyle(menu_icon_item3).opacity;
    if (opacidade == 1 ) {
        menu_icon_item1.style.transform = 'rotate(40deg) translate(6px, 6px)'
        menu_icon_item2.style.transform = 'rotate(-40deg)'
        menu_icon_item3.style.opacity = 0
    } else {
        menu_icon_item1.style.transform = 'none'
        menu_icon_item2.style.transform = 'none'
        menu_icon_item3.style.opacity = 1
    }
    
})
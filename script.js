let menu_icon = document.querySelector('.header-options-icon')
let menu_icon_item1 = document.querySelector('.header-options-icon-item.a')
let menu_icon_item2 = document.querySelector('.header-options-icon-item.b')
let menu_icon_item3 = document.querySelector('.header-options-icon-item.c')
let menu_mobile_options = document.querySelectorAll('.option-mobile')
let menu_mobile_option1 = document.querySelector('.option-mobile.a')
let menu_mobile_option2 = document.querySelector('.option-mobile.b')
let menu_mobile_option3 = document.querySelector('.option-mobile.c')
let menu_mobile_option4 = document.querySelector('.option-mobile.d')
let menu_mobile_itens_text = document.querySelectorAll('.option-mobile a')

menu_icon.addEventListener ('click', () => {
    const opacidade = window.getComputedStyle(menu_icon_item3).opacity;
    if (opacidade == 1 ) {
        menu_icon_item1.style.transform = 'rotate(40deg) translate(6px, 6px)'
        menu_icon_item2.style.transform = 'rotate(-40deg)'
        menu_icon_item3.style.opacity = 0
        
        menu_mobile_options.forEach(option => {
            option.style.opacity = 1
            option.style.border = '1px solid #9675d4'
            option.style.borderRadius = '10px 0 0 10px'
            option.style.backgroundColor = '#765ca565'
        })
        
        menu_mobile_option1.style.width = '77px'
        menu_mobile_option2.style.width = '52px'
        menu_mobile_option3.style.width = '50px'
        menu_mobile_option4.style.width = '37px'

        menu_mobile_itens_text.forEach(option => {
            option.style.fontSize = '13px'
        })
        
    } else {
        menu_icon_item1.style.transform = 'none'
        menu_icon_item2.style.transform = 'none'
        menu_icon_item3.style.opacity = 1

        menu_mobile_options.forEach(option => {
            option.style.opacity = 0
            option.style.border = '1px solid rgba(150, 117, 212, 0)'
            option.style.borderRadius = '10px 0 0 10px'
            option.style.backgroundColor = '#765ca565'
        })

        menu_mobile_option1.style.width = '0px'
        menu_mobile_option2.style.width = '0px'
        menu_mobile_option3.style.width = '0px'
        menu_mobile_option4.style.width = '0px'

        menu_mobile_itens_text.forEach(option => {
            option.style.fontSize = '0px'
        })
    }
})
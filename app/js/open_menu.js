let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let closeMenu  = document.querySelector('.close')

burger.onclick = () => {
    menuToggle()
}

closeMenu.onclick = () => {
    menuToggle()
}

function menuToggle() {
    menu.classList.toggle('active')
    if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
        menu.classList.add('scroll')
    }
}
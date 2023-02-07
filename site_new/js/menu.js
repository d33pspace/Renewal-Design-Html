let menuToggle = document.querySelector('.menu-toggle')

menuToggle.onclick = () => {
    menuToggle.classList.toggle('active')
    document.body.classList.toggle('noScroll')
}
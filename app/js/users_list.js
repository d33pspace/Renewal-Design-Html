let link = document.querySelector('.copy_link')
let overlay = document.querySelector('.overlay')

link.onclick = () => {
    overlay.classList.add('active')
    overlay.firstElementChild.classList.add('active')
}


overlay.onclick = (i) => {
    if (i.target == overlay) {
        overlay.classList.remove('active')
        overlay.firstElementChild.classList.remove('active')
    }
}


let overlay = document.querySelectorAll('.overlay')

overlay.forEach(e => {
    e.onclick = (i) => {
        if (i.target == e) {
            e.classList.remove('active')
        }
        if (i.target == disOverlay) {
            disOverlay.firstElementChild.classList.remove('active')
            document.documentElement.classList.remove('no-scroll')
        }
    }
})

// menu 

let proceed = document.querySelector('.proceed')

proceed.onclick = (e) => {
    e.preventDefault()
    proceed.classList.toggle('opened')
    document.querySelector('.overlay.menu').classList.toggle('active')
}

let action = document.querySelectorAll('.subheader .action')

action.forEach((e) => {
    e.onclick = () => {
        e.classList.toggle('active')
    }
})
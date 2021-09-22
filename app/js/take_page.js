// overlay 

let overlay = document.querySelector('.overlay')
let proceed = document.querySelector('.proceed')

overlay.onclick = (i) => {
    if (i.target == overlay) {
        overlay.classList.remove('active')
        proceed.classList.remove('opened')
    }
}

// menu 


proceed.onclick = (e) => {
    e.preventDefault()
    proceed.classList.toggle('opened')
    overlay.classList.toggle('active')
}
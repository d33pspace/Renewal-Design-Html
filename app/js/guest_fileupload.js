let icon = document.querySelector('.file_upload')
let overlay = document.querySelector('.overlay.photo')
let cancel = document.querySelector('.cancel')
let done = document.querySelector('.done')

icon.onclick = (e) => {
    e.preventDefault()
    overlay.classList.add('active')
}

overlay.onclick = (e) => {
    if (e.target == overlay || e.target == cancel || e.target == done) {
        overlay.classList.remove('active')
    }
}
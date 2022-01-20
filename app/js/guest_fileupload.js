let icon = document.querySelector('.file_upload')
let overlayPhoto = document.querySelector('.overlay.photo')
let cancelPhoto = document.querySelector('.overlay.photo .cancel')
let donePhoto = document.querySelector('.overlay.photo .done')

icon.onclick = (e) => {
    e.preventDefault()
    overlayPhoto.classList.add('active')
}

overlayPhoto.onclick = (e) => {
    if (e.target == overlayPhoto || e.target == cancelPhoto || e.target == donePhoto) {
        overlayPhoto.classList.remove('active')
    }
}
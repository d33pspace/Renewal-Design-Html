let clear_button = document.querySelector('#clear_guest_list')
let overlay = document.querySelector('.overlay')
let close_overlay = document.querySelector('#close_overlay')
let clear_proceed = document.querySelector('#clear_proceed')
let message = document.querySelector('.message')

clear_button.onclick = () => {
    toggleOverlay()
}

close_overlay.onclick = () => {
    toggleOverlay()
}

clear_proceed.onclick = () => {
    toggleOverlay()
    message.classList.add('active')
    setInterval(() =>  message.classList.remove('active') , 5000)
}

function toggleOverlay () {
    overlay.classList.toggle('active')
    if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
        overlay.classList.add('scroll')
    }
}
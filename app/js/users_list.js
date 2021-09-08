let link = document.querySelector('.copy_link')
let overlay = document.querySelector('.overlay')

link.onclick = () => {
    overlay.classList.add('active')
    overlay.firstElementChild.classList.add('active')
    if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
        overlay.classList.add('scroll')
    }
}


overlay.onclick = (i) => {
    if (i.target == overlay) {
        overlay.classList.remove('active')
        overlay.firstElementChild.classList.remove('active')
    }
}

let copyText = document.querySelector('.copy input')
let copyButton = document.querySelector('.copy button')
let message = document.querySelector('.copy_message')

copyButton.onclick = () => {
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    message.classList.add('active')
    setInterval(() =>  message.classList.remove('active') , 5000)
}


let cardHeading = document.querySelectorAll('.card-heading')
let disOverlay = document.querySelector('.overlay.distribution')

cardHeading.forEach((item) => {
    item.onclick = (e) => {
        if (e.target == item.querySelector('.arrow')) {
            item.classList.toggle('active')
        } else {
            disOverlay.classList.add('active')
            disOverlay.firstElementChild.classList.add('active')
            if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
                disOverlay.classList.add('scroll')
            }
        }
        
    }
})

let buttons = document.querySelectorAll('.buttons .tab')
let content = document.querySelectorAll('.content .tab')

if(buttons) {
    buttons.forEach((item) => {
        item.onclick = () => {
            buttons.forEach((e) => { 
                e.classList.remove('active')
            })
            content.forEach((e) => { 
                e.classList.remove('active')
                if (e.getAttribute('tab') == item.getAttribute('tab')) {
                    e.classList.add('active')
                }
            })
            item.classList.add('active')
        }
    })
}


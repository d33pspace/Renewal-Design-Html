let cardHeading = document.querySelectorAll('.card-heading')

cardHeading.forEach((item) => {
    item.onclick = () => {
        item.classList.toggle('active')
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


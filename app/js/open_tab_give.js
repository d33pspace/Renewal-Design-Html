let cardHeading = document.querySelectorAll('.card-heading .card-title')
let disOverlay = document.querySelector('.overlay.distribution')

cardHeading.forEach((item) => {
    item.onclick = (e) => {
        disOverlay.classList.add('active')
        disOverlay.firstElementChild.classList.add('active')
        document.documentElement.classList.add('no-scroll')
        if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
            disOverlay.classList.add('scroll')
        }
        // Set popup image and title 
        let imgSrc = item.querySelector('.category-icon').getAttribute('src')
        disOverlay.querySelector('.item .item-icon').setAttribute('src', imgSrc)
        let title = item.querySelector('.category-name').innerHTML
        disOverlay.querySelector('.item .item-title').innerHTML = title
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

let arrow = document.querySelectorAll('.arrow')

arrow.forEach(item => {
    item.onclick = () => {
        item.closest('.card-heading').classList.toggle('active')
    }
})

let cardItem = document.querySelectorAll('.card>.item')

cardItem.forEach((item) => {
    item.onclick = (e) => {
        disOverlay.classList.add('active')
        disOverlay.firstElementChild.classList.add('active')
        if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
            disOverlay.classList.add('scroll')
        }
        // Set popup image and title 
        let imgSrc = item.querySelector('.category-icon').getAttribute('src')
        disOverlay.querySelector('.item .item-icon').setAttribute('src', imgSrc)
        let title = item.querySelector('.title').innerHTML
        disOverlay.querySelector('.item .item-title').innerHTML = title
    }
})

let counter = document.querySelectorAll('.card .counter')

counter.forEach((item) => {
    item.onclick = () => {
        if (item.closest('.card').querySelector('.card-heading .card-title')) {
            item.closest('.card').querySelector('.card-heading .card-title').click()
        } else if (item.closest('.card').querySelector('.item')) {
            item.closest('.card').querySelector('.item').click()
        }
        
    }
})
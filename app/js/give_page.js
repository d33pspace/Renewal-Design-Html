let item = document.querySelectorAll('.card-content .item')
let disOverlay = document.querySelector('.overlay.distribution')

item.forEach(e => {
    e.onclick = (i) => {
        if(i.target !== e.querySelector('.add')) {
            disOverlay.classList.add('active')
            disOverlay.firstElementChild.classList.add('active')
            if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
                disOverlay.classList.add('scroll')
            }
        }
        
    }
})

let overlay = document.querySelectorAll('.overlay')

overlay.forEach(e => {
    e.onclick = (i) => {
        if (i.target == e) {
            e.classList.remove('active')
        }
        if (i.target == disOverlay) {
            disOverlay.firstElementChild.classList.remove('active')
        }
    }
})


// giving list logic

let add = document.querySelectorAll('.add')

add.forEach(item => {
    item.onclick = () => {
        document.querySelector('.giving_list').classList.add('active')
        let cardData = item.parentElement.parentElement.parentElement.getAttribute('card-data')
        let card = document.querySelector('.giving_list').querySelector('*[card-data="' + cardData + '"]')
        card.classList.add('active')
        card.querySelector('.counter').innerHTML++
        // alert button
        let alert = document.querySelectorAll('.alert')
        alert.forEach(i => {
            i.onclick = () => {
                i.classList.toggle('active')
            }
        })
        // remove
        let rmv = document.querySelectorAll('.rmv')
        rmv.forEach(i => {
            i.onclick = () => {
                let counter = i.parentElement.parentElement.querySelector('.counter')
                counter.innerHTML--
                if (counter.innerHTML < 1) {
                    i.parentElement.parentElement.parentElement.classList.remove('active')
                    if( i.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.card.active').length == 0) {
                        document.querySelector('.giving_list').classList.remove('active')
                    }
                }
            }
        })
    }
})

// menu 

let proceed = document.querySelector('.proceed')

proceed.onclick = (e) => {
    e.preventDefault()
    proceed.classList.toggle('opened')
    document.querySelector('.overlay.menu').classList.toggle('active')
}
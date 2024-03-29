// list logic

let add = document.querySelectorAll('.add')

function addCard(item) {
    
    let cardData = item.closest('.card').getAttribute('card-data')
    let card = document.querySelector('.add_list').querySelector('*[card-data="' + cardData + '"]')
    let newCard = card.cloneNode(true)
    newCard.classList.add('active')
    card.parentElement.appendChild(newCard)
    setTimeout(() =>  newCard.classList.add('animation') , 1)

    newCard.parentElement.querySelector('.blank').classList.remove('animation')

        if(item.closest('.item')) {
            let flash = item.closest('.item')
            flash.classList.add('flash')
            setTimeout(() =>  flash.classList.remove('flash') , 1000)
        } else if(item.closest('.card')) {
            let flash = item.closest('.card')
            flash.classList.add('flash')
            setTimeout(() =>  flash.classList.remove('flash') , 1000)
        } 
    

    // alert button
    let toggle = document.querySelectorAll('.toggle')
    toggle.forEach(i => {
        i.closest('.button-wrapper').onclick = () => {
            i.classList.toggle('active')
        }
    })
    // remove
    let rmv = document.querySelectorAll('.rmv')
    rmv.forEach(i => {
        i.onclick = () => {
            let card = i.closest('.card')
            if( i.closest('.cards').querySelectorAll('.card.animation').length == 1) {
                setTimeout(() =>  document.querySelector('.blank').classList.add('animation') , 300)
            }
            card.classList.remove('animation')
            setTimeout(() =>  card.remove() , 300)
        }
    })

    let cardHeading = document.querySelectorAll('.card-heading .card-title')
    let disOverlay = document.querySelector('.overlay.distribution')
    if (disOverlay) {
        cardHeading.forEach((item) => {
            item.onclick = (e) => {
                disOverlay.classList.add('active')
                disOverlay.firstElementChild.classList.add('active')
                if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
                    disOverlay.classList.add('scroll')
                }
            }
        })
    }
    
}

add.forEach(item => {
    item.onclick = () => {
        if (!item.closest('.card').classList.contains('forbidden')) {
            addCard(item)
        } else {
            let overlay = document.querySelector('.overlay.forbidden')
            overlay.classList.add('active')
            overlay.querySelector('.details').onclick = () => {
                if (item.closest('.card').querySelector('.card-heading .card-title')) {
                    detailsOverlay(item.closest('.card').querySelector('.card-heading .card-title'))
                } else if (item.closest('.card').querySelector('.item')) {
                    detailsOverlay(item.closest('.card').querySelector('.item'))
                }
                overlay.classList.remove('active')
            }
            overlay.querySelector('.add').onclick = () => {
                addCard(item)
                overlay.classList.remove('active')
            }
        }
        
    }
})


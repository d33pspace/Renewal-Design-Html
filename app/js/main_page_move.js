let serve_icon = document.querySelectorAll('.time')

serve_icon.forEach((item => {
    item.onclick = () => {
        item.querySelector('.img_wrapper_serve').classList.toggle('active')
    }
}))

let serviceCards = document.querySelectorAll('.service_list .card')

serviceCards.forEach((item => {
    item.onclick = (e) => {
        if (e.target !== item.querySelector('.serve_icon') & e.target !== item.querySelector('.remain_time') & e.target !== item.querySelector('.time') & e.target !== item.querySelector('.img_wrapper_serve') & e.target !== item.querySelector('.shower_icon')) {
            location.href='./return_page.html'
        }
    }
}))

let finishedCards = document.querySelectorAll('.finished_list .card')

finishedCards.forEach((item => {
    item.onclick = (e) => {
        if (e.target !== item.querySelector('.serve_icon') & e.target !== item.querySelector('.remain_time') & e.target !== item.querySelector('.time') & e.target !== item.querySelector('.img_wrapper_serve') & e.target !== item.querySelector('.shower_icon')) {
            location.href='./guest_profile.html'
        }
    }
}))

let waitingCards = document.querySelectorAll('.waiting_list .card')


waitingCards.forEach((item => {
    item.onclick = (e) => {
        if (e.target !== item.querySelector('.serve_icon') & e.target !== item.querySelector('.remain_time') & e.target !== item.querySelector('.time') & e.target !== item.querySelector('.img_wrapper_serve') & e.target !== item.querySelector('.shower_icon')) {
            let newCard = item.cloneNode(true)
            newCard.onclick = (i) => {
                if (i.target !== newCard.querySelector('.serve_icon') & i.target !== newCard.querySelector('.remain_time') & i.target !== newCard.querySelector('.time') & i.target !== newCard.querySelector('.img_wrapper_serve') & i.target !== newCard.querySelector('.shower_icon')) {
                    location.href='./return_page.html'
                }
            }
            document.querySelector('.service_list').appendChild(newCard)
            item.remove()
            let serve_icon = document.querySelectorAll('.time')

            serve_icon.forEach((item => {
                item.onclick = () => {
                    item.querySelector('.serve_icon').classList.toggle('active')
                }
            }))
        }

    }
}))


let serve_all = document.querySelector('.serve_button')

serve_all.onclick = (e) => {
    e.preventDefault()
    serve_icon.forEach((item => {
            item.querySelector('.serve_icon').classList.add('active')
    }))
}
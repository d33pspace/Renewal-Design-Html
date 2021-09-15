let serve_icon = document.querySelectorAll('.serve_icon')

serve_icon.forEach((item => {
    item.onclick = () => {
        item.classList.toggle('active')
    }
}))

let serviceCards = document.querySelectorAll('.service_list .card')

serviceCards.forEach((item => {
    item.onclick = () => {
        location.href='./return_page.html'
    }
}))

let finishedCards = document.querySelectorAll('.finished_list .card')

finishedCards.forEach((item => {
    item.onclick = () => {
        location.href='./guest_profile.html'
    }
}))

let waitingCards = document.querySelectorAll('.waiting_list .card')


waitingCards.forEach((item => {
    item.onclick = (e) => {
        if (e.target !== item.querySelector('.serve_icon')) {
            let newCard = item.cloneNode(true)
            newCard.onclick = () => {
                location.href='./return_page.html'
            }
            document.querySelector('.service_list').appendChild(newCard)
            item.remove()
            let serve_icon = document.querySelectorAll('.serve_icon')

            serve_icon.forEach((item => {
                item.onclick = () => {
                    item.classList.toggle('active')
                }
            }))
        }

    }
}))
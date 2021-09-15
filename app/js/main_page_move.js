let serve_icon = document.querySelectorAll('.serve_icon')

serve_icon.forEach((item => {
    item.onclick = () => {
        item.classList.toggle('active')
    }
}))


let waitingCards = document.querySelectorAll('.waiting_list .card')
let waitingCards = document.querySelectorAll('.waiting_list .card')


waitingCards.forEach((item => {
    item.onclick = (e) => {
        if (e.target !== item.querySelector('.serve_icon')) {
            let newCard = item.cloneNode(true)
            document.querySelector('.service_list').appendChild(newCard)
            item.remove()
        }
    }
}))
let icons = document.querySelectorAll('.img_wrapper')

icons.forEach((item => {
    item.onclick = () => {
        item.classList.toggle('active')
    }
}))

let serviceCards = document.querySelectorAll('.service_list .card')

serviceCards.forEach((item => {
    item.onclick = (e) => {
        console.log(e.target == item.querySelector('.avatar'))
        if (e.target == item.querySelector('.name_english') || e.target == item.querySelector('.name_english') || e.target == item.querySelector('.avatar') || e.target == item) {
            location.href='./return_page.html'
        }
    }
}))

let finishedCards = document.querySelectorAll('.finished_list .card')

finishedCards.forEach((item => {
    item.onclick = (e) => {
        if (e.target == item.querySelector('.name_english') || e.target == item.querySelector('.name_english') || e.target == item.querySelector('.avatar') || e.target == item) {
            location.href='./guest_profile.html'
        }
    }
}))

let waitingCards = document.querySelectorAll('.waiting_list .card')


waitingCards.forEach((item => {
    item.onclick = (e) => {
        if (e.target == item.querySelector('.name_english') || e.target == item.querySelector('.name_english') || e.target == item.querySelector('.avatar') || e.target == item) {
            let newCard = item.cloneNode(true)
            newCard.onclick = (i) => {
                if (i.target == item.querySelector('.name_english') || i.target == item.querySelector('.name_english') || i.target == item.querySelector('.avatar') || i.target == item) {
                    location.href='./return_page.html'
                }
            }
            document.querySelector('.service_list').appendChild(newCard)
            item.remove()
        }

    }
}))


let serve_all = document.querySelector('.serve_button')

serve_all.onclick = (e) => {
    e.preventDefault()
    document.querySelectorAll('.img_wrapper_serve').forEach((item => {
            item.classList.add('active')
    }))
}
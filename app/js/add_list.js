// list logic

let add = document.querySelectorAll('.add')

add.forEach(item => {
    item.onclick = () => {
        document.querySelector('.add_list').classList.add('active')
        let cardData = item.closest('.card').getAttribute('card-data')
        let card = document.querySelector('.add_list').querySelector('*[card-data="' + cardData + '"]')
        card.classList.add('active')
        card.querySelector('.counter').innerHTML++
        // alert button
        let toggle = document.querySelectorAll('.toggle')
        toggle.forEach(i => {
            i.onclick = () => {
                i.classList.toggle('active')
            }
        })
        // remove
        let rmv = document.querySelectorAll('.rmv')
        rmv.forEach(i => {
            i.onclick = () => {
                let counter = i.closest('.card').querySelector('.counter')
                counter.innerHTML--
                if (counter.innerHTML < 1) {
                    i.closest('.card').classList.remove('active')
                    if( i.closest('.cards').querySelectorAll('.card.active').length == 0) {
                        document.querySelector('.add_list').classList.remove('active')
                    }
                }
            }
        })
    }
})
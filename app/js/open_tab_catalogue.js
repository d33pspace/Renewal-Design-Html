let card = document.querySelectorAll('.card')

card.forEach((item => {
    if (!item.querySelector('.card-extend').hasChildNodes()) {
        item.classList.add('no-extend')
    }
    item.onclick = () => {
        if(item.querySelector('.arrow')) {
            item.classList.toggle('active')
        }
    }
}))
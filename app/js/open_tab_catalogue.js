let card = document.querySelectorAll('.card')

card.forEach((item => {
    if (!item.querySelector('.card-extend').hasChildNodes()) {
        item.classList.add('no-extend')
        item.onclick = () => {
            location.href='./edit_item.html'
        }
    } else {
        item.onclick = (e) => {
            if (e.target !== item.querySelector('.card-extend .item') & e.target !== item.querySelector('.card-extend .count') & e.target !== item.querySelector('.card-extend .title')) {
                item.classList.toggle('active')
            } else {
                location.href='./edit_item.html'
            }
        }
    }
}))
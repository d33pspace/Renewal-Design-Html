let card = document.querySelectorAll('.card.active .card-title')

card.forEach((item => {
    item.onclick = () => {
        item.nextElementSibling.classList.toggle('active')
    }
}))
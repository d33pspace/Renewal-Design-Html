let more = document.querySelectorAll('.more')

more.forEach(item => {
    item.onclick = () => {
        item.nextElementSibling.classList.add('active')
        item.classList.add('unactive')
    }
})

let dots = document.querySelectorAll('.dots')

dots.forEach(item => {
    item.onclick = () => {
        item.nextElementSibling.classList.toggle('active')
    }
})
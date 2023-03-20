let dropdown = document.querySelectorAll('.dropdown')

dropdown.forEach(item => {
    item.querySelector('p').onclick = () => {
        item.classList.toggle('active')
    }
})
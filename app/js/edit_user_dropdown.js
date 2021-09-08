let dropdown = document.querySelectorAll('.dropdown')

dropdown.forEach((item) => {
    item.firstElementChild.onclick = () => {
        item.classList.toggle('active')
        item.lastElementChild.classList.toggle('active')
    }
    item.lastElementChild.childNodes.forEach((e) => {
        e.onclick = () => {
            item.classList.remove('active')
            item.firstElementChild.classList.add('filled')
            item.lastElementChild.classList.remove('active')
            item.firstElementChild.innerHTML = e.innerHTML
        }
    })
})
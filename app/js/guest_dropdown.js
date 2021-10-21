let dropdown = document.querySelectorAll('.dropdown')

dropdown.forEach((item) => {
    item.firstElementChild.onclick = () => {
        if (item.classList.contains('active')) {
            dropdown.forEach((i) => {
                i.classList.remove('active')
                i.lastElementChild.classList.remove('active')
            })
        } else {
            dropdown.forEach((i) => {
                i.classList.remove('active')
                i.lastElementChild.classList.remove('active')
            })
            item.classList.add('active')
            item.lastElementChild.classList.add('active')
        }
    }
    item.lastElementChild.childNodes.forEach((e) => {
        e.onclick = () => {
            item.classList.remove('active')
            item.firstElementChild.classList.add('filled')
            item.lastElementChild.classList.remove('active')
            item.firstElementChild.firstElementChild.innerHTML = e.innerHTML
            proceed.classList.add('active')
            dropCount = true
        }
    })
})
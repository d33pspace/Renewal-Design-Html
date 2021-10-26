let dropdown = document.querySelectorAll('.dropdown')

dropdown.forEach((item) => {
    if (item.querySelectorAll('.list>*').length > 3) {
        item.querySelector('.list').classList.add('long_list')
    }
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
        let search = item.querySelector('.search')
        let list = item.querySelectorAll('.option')
        if(search) {
            search.focus()
            search.oninput = () => {
                list.forEach(e => {
                    console.log(e.innerHTML.toLowerCase(), search.value)
                    if (!e.innerHTML.toLowerCase().includes(search.value.toLowerCase()) ) {
                        e.classList.add('disable')
                    } else {
                        e.classList.remove('disable')
                    }
                })
            }
            search.onblur = () => {
                list.forEach(e => {
                    e.classList.remove('disable')
                })
                search.value = ''
            }
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

let arrow = document.querySelectorAll('.arrow')

arrow.forEach((item) => {
    item.onclick = () => { 
        if (item.parentElement.classList.contains('active')) {
            dropdown.forEach((i) => {
                i.classList.remove('active')
                i.lastElementChild.classList.remove('active')
            })
        } else {
            dropdown.forEach((i) => {
                i.classList.remove('active')
                i.lastElementChild.classList.remove('active')
            })
            item.parentElement.classList.add('active')
            item.parentElement.lastElementChild.classList.add('active')
        }
        let search = item.parentElement.querySelector('.search')
        let list = item.parentElement.querySelectorAll('.option')
        if(search) {
            search.focus()
            search.oninput = () => {
                list.forEach(e => {
                    console.log(e.innerHTML.toLowerCase(), search.value)
                    if (!e.innerHTML.toLowerCase().includes(search.value.toLowerCase()) ) {
                        e.classList.add('disable')
                    } else {
                        e.classList.remove('disable')
                    }
                })
            }
            search.onblur = () => {
                list.forEach(e => {
                    e.classList.remove('disable')
                })
                search.value = ''
            }
        }
    }
})
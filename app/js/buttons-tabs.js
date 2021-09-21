let tab = document.querySelectorAll('.profile .tab')

tab.forEach(item => {
    item.onclick = () => {
        tab.forEach(i => {
            i.classList.remove('active')
        })
        item.classList.add('active')
    }
})
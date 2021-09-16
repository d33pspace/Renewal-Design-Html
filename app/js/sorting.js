let sort = document.querySelectorAll('.sort')

sort.forEach(item => {
    item.onclick = () => {
        sort.forEach(e => {
            e.classList.toggle('active')
        })
    }
})
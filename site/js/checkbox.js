let checkbox = document.querySelectorAll('.checkbox')

checkbox.forEach(item => {
    item.onclick = () => {
        checkbox.forEach(i => { 
            i.classList.remove('active')
        })
        item.classList.add('active')
    }
})
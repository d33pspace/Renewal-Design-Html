let options = document.querySelectorAll('.option')

options.forEach((item) => {
    item.onclick = () => {
        options.forEach((e) => { 
            e.classList.remove('active')
        })
        item.classList.add('active')
    }
})
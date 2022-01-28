let toggle = document.querySelectorAll('.toggle')
    toggle.forEach(i => {
        i.closest('.button-wrapper').onclick = () => {
            i.classList.toggle('active')
        }
    })
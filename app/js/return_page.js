let toggle = document.querySelectorAll('.toggle')
let fab = document.querySelector('.proceed')
let buttons = document.querySelectorAll('.buttons')
let fabCheck

toggle.forEach(i => {
    i.closest('.button-wrapper').onclick = () => {
        i.closest('.buttons').classList.add('active')
        i.closest('.buttons').querySelectorAll('.button-wrapper .toggle').forEach(item => {
            item.classList.remove('active')
        })
        i.classList.add('active')
        fabCheck = 0
        buttons.forEach(item => {
            if (item.classList.contains('active')) {
                fabCheck++
            }
        })
        if (fabCheck == buttons.length) {
            fab.classList.add('active')
        }
    }
})
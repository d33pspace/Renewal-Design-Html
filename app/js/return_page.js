let toggle = document.querySelectorAll('.toggle')
let fab = document.querySelector('.proceed')
let buttons = document.querySelectorAll('.buttons')
let fabCheck
let checkAll = document.querySelector('.check_all')

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
        if (i == checkAll) {
            toggle.forEach(e => { 
                e.classList.remove('active')
                if (e.classList.contains('check')) {
                    e.classList.add('active')
                    e.closest('.buttons').classList.add('active')
                }
            })
            fabCheck = buttons.length
        }

        if (fabCheck == buttons.length || fabCheck == buttons.length - 1) {
            document.querySelectorAll('.menu-icon').forEach(i => {
                i.classList.add('active')
            })
        } 

    }
})
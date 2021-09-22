
let checkboxAll = document.querySelector('.checkbox-all')
let proceed = document.querySelector('.proceed')
let checkButton = document.querySelectorAll('.check')


let checkCounter = 0


checkButton.forEach(item => {
    item.onclick = () => {
        if(item.classList.contains('active')) {
            item.classList.remove('active')
            checkCounter--
            proceed.classList.remove('active')
        } else {
            item.closest('.card').querySelectorAll('.check').forEach(i => {
                if(i.classList.contains('active')) {
                    i.classList.remove('active')
                    checkCounter--
                }
            })
            item.classList.add('active')
            checkCounter++
            if(item.classList.contains('checkbox')) {
                checkboxAll.classList.add('active')
            }
        }
        if (checkCounter == document.querySelectorAll('.checkbox').length) {
            proceed.classList.add('active')
        }
        console.log(checkCounter)
    }
})

checkboxAll.onclick = () => {
    if (checkboxAll.classList.contains('active')) {
        document.querySelectorAll('.check').forEach(i => {
            i.classList.remove('active')
        })
        checkboxAll.classList.remove('active')
        proceed.classList.remove('active')
        checkCounter = 0
    } else {
        document.querySelectorAll('.checkbox').forEach(i => {
            i.click()
        })
        checkboxAll.classList.add('active')
        proceed.classList.add('active')
        checkCounter = document.querySelectorAll('.checkbox').length
    }
    console.log(checkCounter)
}

let overlay = document.querySelector('.overlay')
let menuIcon = document.querySelectorAll('.menu-icon')

proceed.onclick = (e) => {
    e.preventDefault()
    overlay.classList.toggle('active')
    menuIcon.forEach((item) => {
        item.classList.toggle('active')
    })
    proceed.classList.toggle('opened')
    if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
        overlay.classList.add('scroll')
    }
}

overlay.onclick = (e) => {
    if (e.target == overlay) {
        overlay.classList.toggle('active')
        menuIcon.forEach((item) => {
            item.classList.toggle('active')
        })
        proceed.classList.toggle('opened')
    }
}


let cards = document.querySelectorAll('.laundry .card')

cards.forEach((item => {
    item.onclick = (e) => {
        if (e.target !== item.querySelector('.delete') && e.target !== item.querySelector('.lost') && e.target !== item.querySelector('.checkbox') && e.target !== item.querySelector('.delete img') && e.target !== item.querySelector('.lost img')) {
            item.querySelector('.checkbox').click()
        }
    }
}))


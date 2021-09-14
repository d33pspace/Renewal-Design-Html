let checkbox = document.querySelectorAll('.checkbox')
let checkboxAll = document.querySelector('.checkbox-all')
let proceed = document.querySelector('.proceed')

checkbox.forEach((item) => {
    item.onclick = () => {
        let checked = false
        item.classList.toggle('active')
        checkboxAll.classList.add('active')
        proceed.classList.add('active')
        checkbox.forEach((e) => {
            if(e.classList.contains('active')) {
                checked = true
            } 
        })
        if (!checked) {
            checkboxAll.classList.remove('active') 
            proceed.classList.remove('active')
        }
    }
})

checkboxAll.onclick = () => {
    if (checkboxAll.classList.contains('active')) {
        checkboxAll.classList.remove('active')
        proceed.classList.remove('active')
        checkbox.forEach((item) => {
            item.classList.remove('active')
        })
    } else {
        checkboxAll.classList.add('active')
        proceed.classList.add('active')
        checkbox.forEach((item) => {
            item.classList.add('active')
        })
    }
}

let button = document.querySelectorAll('.button')

button.forEach((item) => {
    item.onclick = () => {
        item.classList.toggle('active')
    }
})

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


let cards = document.querySelectorAll('.laundry .card')

cards.forEach((item => {
    item.onclick = (e) => {
        if (e.target !== item.querySelector('.delete') && e.target !== item.querySelector('.lost') && e.target !== item.querySelector('.checkbox')) {
            item.querySelector('.checkbox').click()
        }
    }
}))
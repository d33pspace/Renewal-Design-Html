let buttons = document.querySelectorAll('.buttons .tab')
let content = document.querySelectorAll('.content .tab')

if(buttons) {
    buttons.forEach((item) => {
        item.onclick = () => {
            buttons.forEach((e) => { 
                e.classList.remove('active')
            })
            content.forEach((e) => { 
                e.classList.remove('active')
                if (e.getAttribute('tab') == item.getAttribute('tab')) {
                    e.classList.add('active')
                }
            })
            item.classList.add('active')
        }
    })
}

let arrow = document.querySelectorAll('.arrow')

arrow.forEach(item => {
    item.onclick = () => {
        item.closest('.card-heading').classList.toggle('active')
    }
})

let cardItem = document.querySelectorAll('.card>.item')

cardItem.forEach((item) => {
    item.onclick = (e) => {
        disOverlay.classList.add('active')
        disOverlay.firstElementChild.classList.add('active')
        if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
            disOverlay.classList.add('scroll')
        }
    }
})

let editTag = document.querySelectorAll('.head .edit-button') 
let inputTag = document.querySelector('.tag-wrapper input') 
let inputPlaceholder = 336

editTag.forEach(item => {
    item.onclick = () => {
        if (inputTag.hasAttribute('readonly')) {
            inputTag.removeAttribute('readonly')
            inputTag.setAttribute('placeholder', '')
            inputTag.focus()
        } else {
            inputTag.setAttribute('readonly', 'readonly')
        }
        editTag.forEach(e => { 
            e.classList.toggle('active')
        })
        
    }
})



inputTag.onblur = (e) => {
    if (e.target.value == '' || e.target.value == null) {
        e.target.setAttribute('placeholder', inputPlaceholder)
    }
}

inputTag.oninput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
}
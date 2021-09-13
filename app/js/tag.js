let edit = document.querySelector('#tag_form .edit')
let check = document.querySelector('#tag_form .check')
let input = document.querySelector('#tag_form input')

edit.onclick = () => {
    inputState()
}

check.onclick = () => {
    inputState()
}

function inputState () { 
    if(input.getAttribute('tabindex') == '-1') {
        input.setAttribute('tabindex', '')
        input.focus()
    } else {
        input.setAttribute('tabindex', '-1')
    }
    input.classList.toggle('active')
    edit.classList.toggle('active')
    check.classList.toggle('active')
}

let trash = document.querySelectorAll('.card .trash')

trash.forEach(item => {
    item.onclick = () => {
        item.classList.toggle('active')
    }
})
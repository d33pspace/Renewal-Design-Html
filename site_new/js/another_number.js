let options = document.querySelectorAll('.another_number input:not([type="checkbox"])')
let buttons = document.querySelectorAll('.button.inactive')

options.forEach(item => {
    item.oninput = (e) => {
        if (fieldValid(options)) {
            buttons.forEach(i => i.classList.remove('inactive'))
        } else {
            buttons.forEach(i => i.classList.add('inactive'))
        }
        if (item.nextElementSibling.nextElementSibling) {
            if (e.target.value !== '') {
                item.nextElementSibling.nextElementSibling.querySelector('input').removeAttribute('disabled')
            } else {
                item.nextElementSibling.nextElementSibling.querySelector('input').setAttribute('disabled', 'disabled')
                item.nextElementSibling.nextElementSibling.querySelector('input').checked = false
            }
        } 
    }
})

function fieldValid(inputs) {
    let allFilled = false
    for (let i = 0; i < inputs.length; i++) { // выведет 0, затем 1, затем 2
        if (inputs[i].value == '') {
            allFilled = false
            return allFilled
        } else {
            allFilled = true
        }
    }
    return allFilled
}
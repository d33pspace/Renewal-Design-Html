let options = document.querySelectorAll('.another_number input:not([type="checkbox"])')
let buttons = document.querySelectorAll('.button.inactive')

options.forEach(item => {
    item.oninput = (e) => {
        if (fieldValid(options)) {
            buttons.forEach(i => i.classList.remove('inactive'))
            document.querySelector('.buttons-message').classList.add('active')
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
    inputs.forEach(i => {
        if (i.value == '') {
            allFilled = false
            return allFilled
        } else {
            allFilled = true
        }
    })
    return allFilled
}
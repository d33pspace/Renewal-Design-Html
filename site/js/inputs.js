let input = document.querySelectorAll('.input-wrap .input')

// let email = document.querySelector('#email')
// let emailCheckbox = document.querySelector('#emailcheckbox')

// let address = document.querySelector('#address')
// let addressCheckbox = document.querySelector('#pmailcheckbox')

let textarea = document.querySelector('.input-wrap textarea')

input.forEach(item => {
    item.onfocus = () => {
        item.classList.add('active')
        if (item.classList.contains('textarea')) {
            item.classList.add('filled')
            if (item.classList.contains('desc')) {
                item.setAttribute('placeholder', 'This will appear in the description of the gift on your receipt exactly as you enter it.')
            }
        }
    }
    // item.onblur = () => {
    //     if (item.value == '' && item == email) {
    //         item.classList.remove('active')
    //         emailCheckbox.setAttribute('disabled', 'disabled')
    //         emailCheckbox.checked = false
    //     }  else if (item == email) {
    //         emailCheckbox.removeAttribute('disabled')
    //     } else if (item.value == '' && item == address) {
    //         item.classList.remove('filled')
    //         item.classList.remove('active')
    //         addressCheckbox.setAttribute('disabled', 'disabled')
    //         addressCheckbox.checked = false
    //     } else if (item == address) {
    //         item.classList.remove('filled')
    //         addressCheckbox.removeAttribute('disabled')
    //     } else if (item.value == '') {
    //         item.classList.remove('active')
    //     }
    // }
    item.onblur = () => {
         if (item.classList.contains('textarea')) {
            item.classList.remove('filled')
            item.removeAttribute('placeholder')
        }
        if (item.value == '') {
            item.classList.remove('active')
        }
    }
})
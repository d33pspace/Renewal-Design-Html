let input = document.querySelectorAll('.input-wrap .input')
let submit = document.querySelector('#contact_us_form .button[type="submit"]')

input.forEach(item => {
    item.onfocus = () => {
        item.classList.add('active')
        item.nodeName == 'TEXTAREA' ? item.classList.add('filled') : ''
    }

    item.onblur = (e) => {
        if (submit) {
            item.nodeName == 'TEXTAREA' && e.relatedTarget === submit ? submit.click() : ''
        }
        item.nodeName == 'TEXTAREA' ? item.classList.remove('filled') : ''
        if (item.value == '') {
            item.classList.remove('active')
        }

    }
})
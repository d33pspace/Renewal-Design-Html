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

        if (e.target.id == 'email-another') {
            if (e.target.value !== '') {
                document.querySelector('#send_notification').removeAttribute('disabled')
            } else {
                document.querySelector('#send_notification').setAttribute('disabled', 'disabled')
                document.querySelector('#send_notification').checked = false
            }
        }

        if (e.target.id == 'postal') {
            if (e.target.value !== '') {
                document.querySelector('#remember').removeAttribute('disabled')
            } else {
                document.querySelector('#remember').setAttribute('disabled', 'disabled')
                document.querySelector('#remember').checked = false
            }
        }
    }
})
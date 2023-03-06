let input = document.querySelectorAll('.input-wrap .input')
let allFilled = false

input.forEach(item => {
    item.onfocus = () => {
        item.classList.add('active')
        item.nodeName == 'TEXTAREA' ? item.classList.add('filled') : ''
    }

    item.onblur = () => {
        item.nodeName == 'TEXTAREA' && allFilled ? document.querySelector('#contact_us_form').submit() : 
        item.nodeName == 'TEXTAREA' ? item.classList.remove('filled') : ''
        if (item.value == '') {
            item.classList.remove('active')
        }
        for (var i = 0; i < input.length; i++) {
            if(input[i].value == '') {
                allFilled = false
                break
            } else {
                allFilled = true
            }
        }
    }
})
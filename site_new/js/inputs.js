let input = document.querySelectorAll('.input-wrap .input')

input.forEach(item => {
    item.onfocus = () => {
        item.classList.add('active')
        item.nodeName == 'TEXTAREA' ? item.classList.add('filled') : ''
    }

    item.onblur = () => {
        item.nodeName == 'TEXTAREA' ? item.classList.remove('filled') : ''
        if (item.value == '') {
            item.classList.remove('active')
        }
    }
})
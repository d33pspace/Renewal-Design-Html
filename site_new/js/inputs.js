let input = document.querySelectorAll('.input-wrap .input')

input.forEach(item => {
    item.onfocus = () => {
        item.classList.add('active')
        // if (item.classList.contains('textarea')) {
        //     item.classList.add('filled')
        // }
    }

    item.onblur = () => {
        //  if (item.classList.contains('textarea')) {
        //     item.classList.remove('filled')
        //     item.removeAttribute('placeholder')
        // }
        if (item.value == '') {
            item.classList.remove('active')
        }
    }
})
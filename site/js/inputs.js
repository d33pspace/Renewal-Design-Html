let input = document.querySelectorAll('.input-wrap input')

input.forEach(item => {
    item.onfocus = () => {
        item.classList.add('active')
    }
    item.onblur = () => {
        if (item.value == '') {
            item.classList.remove('active')
        }
    }
})
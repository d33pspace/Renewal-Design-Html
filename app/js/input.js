
let input = document.querySelectorAll('input')

input.forEach(item => {
    item.onfocus = () => {
        item.parentElement.classList.add('active')
    }
    item.onblur = () => {
        if (item.value == null || item.value == '' && !item.classList.contains('datepicker')) {
            item.parentElement.classList.remove('active')
        } 
    }
});
let inputs = document.querySelectorAll('input')
let proceed = document.querySelector('.proceed')
let count = 0
let dropCount

inputs.forEach(item => {
    item.oninput = () => {
        if (item.value !== '' && item.value !== null) {
            proceed.classList.add('active')
        } else  {
            count = 0
            inputs.forEach(e => {
                if (e.value !== '' && e.value !== null) {
                    count = 1
                } 
            })
            if (count == 0 && dropCount !== true) {
                proceed.classList.remove('active')
            }
        }
    }
    item.onblur = () => {
        if (item.value !== '' && item.value !== null) {
            count = 1;
        }
    }
})

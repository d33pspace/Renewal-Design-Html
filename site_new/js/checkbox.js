let checkbox = document.querySelectorAll('.checkbox')

checkbox.forEach(item => {
    item.onclick = () => {
        item.closest('.checkbox-wrap').querySelectorAll('.checkbox').forEach(i => { 
            i.classList.remove('active')
        })
        item.classList.add('active')
    }
})

document.querySelector('#email-another').onblur = (e) => {
    if (e.target.value !== '') {
        document.querySelector('#send_notification').removeAttribute('disabled')
    } else {
        document.querySelector('#send_notification').setAttribute('disabled', 'disabled')
        document.querySelector('#send_notification').checked = false
    }
}

document.querySelector('#postal').onblur = (e) => {
    if (e.target.value !== '') {
        document.querySelector('#remember').removeAttribute('disabled')
    } else {
        document.querySelector('#remember').setAttribute('disabled', 'disabled')
        document.querySelector('#remember').checked = false
    }
}
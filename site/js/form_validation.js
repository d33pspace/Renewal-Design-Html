let form = document.querySelector('#donate-form')
let overlay = document.querySelector('.overlay')

form.onsubmit = (e) => {
    
    if (document.querySelector('#wechatcheckbox').checked && document.querySelector('#wechat').value == '') {
        e.preventDefault()
        overlay.classList.add('active')
        overlay.querySelector('.error').innerHTML = 'You selected to have communications delivered by [WeChat] but you did not provide the necessary information.'
    } else if (document.querySelector('#emailcheckbox').checked && document.querySelector('#email').value == '') {
        e.preventDefault()
        overlay.classList.add('active')
        overlay.querySelector('.error').innerHTML = 'You selected to have communications delivered by [E-mail] but you did not provide the necessary information.'
    } else if (document.querySelector('#pmailcheckbox').checked && document.querySelector('#address').value == '') {
        e.preventDefault()
        overlay.classList.add('active')
        overlay.querySelector('.error').innerHTML = 'You selected to have communications delivered by [Postal mail] but you did not provide the necessary information.'
    }
}

overlay.querySelector('.close').onclick = () => {
    overlay.classList.remove('active')
}
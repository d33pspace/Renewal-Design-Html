let form = document.querySelector('#donate-form')
let overlay = document.querySelector('.overlay')

form.onsubmit = (e) => {
    
    if (document.querySelector('#wechatcheckbox').checked && document.querySelector('#wechat').value == '') {
        e.preventDefault()
        overlay.classList.add('active')
        overlay.querySelector('.error').innerHTML = 'You selected to have communications delivered by WeChat but you did not provide your WeChat ID or linked phone.'
    } else if (document.querySelector('#pmailcheckbox').checked && document.querySelector('#address').value == '') {
        e.preventDefault()
        overlay.classList.add('active')
        overlay.querySelector('.error').innerHTML = 'You selected to have communications delivered by postal mail but you did not provide an address.'
    } else if (document.querySelector('#weChatContactYes').checked && document.querySelector('#wechat').value == '') {
        e.preventDefault()
        overlay.classList.add('active')
        overlay.querySelector('.error').innerHTML = 'You selected to have a director contact you by WeChat but you did not provide your WeChat ID or linked phone.'
    }
}

overlay.querySelector('.close').onclick = () => {
    overlay.classList.remove('active')
}
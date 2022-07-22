let weChatCheckbox = document.querySelector('#useWeChat')
let weChat = document.querySelector('#wechat')
let phone = document.querySelector('#phone')

weChatCheckbox.onchange = () => {
    if (weChatCheckbox.checked && phone.value !== '' && phone.value !== null) {
        weChat.classList.add('active')
        weChat.value = phone.value
    } else {
        weChatCheckbox.checked = false;
        weChat.classList.remove('active')
        weChat.value = ''
    }
}

weChat.oninput = () => {
    weChatCheckbox.checked = false;
}
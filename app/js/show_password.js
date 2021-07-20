let showPass = document.querySelectorAll('.showPassword')
let pass = document.querySelectorAll('.password')

showPass.forEach((item) => {
    item.onclick = (e) => {
        if (item.previousElementSibling.type == 'password') {
            item.previousElementSibling.type = 'text'
        } else if (item.previousElementSibling.type == 'text') {
            item.previousElementSibling.type = 'password'
        }
    }
})


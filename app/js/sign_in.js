let showPass = document.querySelector('#showPassword')
let pass = document.querySelector('.password')

showPass.onclick = (e) => {

    if (pass.type == 'password') {
        pass.type = 'text'
    } else if (pass.type == 'text') {
        pass.type = 'password'
    }
}
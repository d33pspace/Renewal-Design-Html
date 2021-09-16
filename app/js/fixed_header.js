
if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
    document.querySelector('.fixed_header').classList.add('scroll')
}

window.onresize = () => {
    if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
        document.querySelector('.fixed_header').classList.add('scroll')
    } else {
        document.querySelector('.fixed_header').classList.remove('scroll')
    }
}

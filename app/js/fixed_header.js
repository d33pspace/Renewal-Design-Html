
window.onscroll = function (){
    if (window.pageYOffset > 0) {
            document.querySelector('.fixed_header').classList.add('scrolled')
        } else {
            document.querySelector('.fixed_header').classList.remove('scrolled')
        }
}


if (document.body.clientHeight !== window.innerHeight) {
    document.querySelector('.desktop-wrapper').classList.add('scroll')
    document.body.style.cssText="--scroll-width: " + (window.innerWidth - document.body.offsetWidth) + "px;"
}

window.onresize = () => {
    document.body.style.cssText="--scroll-width: " + (window.innerWidth - document.body.offsetWidth) + "px;"
    if (document.body.clientHeight !== window.innerHeight) {
        document.querySelector('.desktop-wrapper').classList.add('scroll')
    } else {
        document.querySelector('.desktop-wrapper').classList.remove('scroll')
    }
}


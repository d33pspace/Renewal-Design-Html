
window.onscroll = function (){
    if (window.pageYOffset > 0) {
            document.querySelector('.fixed_header').classList.add('scrolled')
        } else {
            document.querySelector('.fixed_header').classList.remove('scrolled')
        }
}


// if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
//     document.querySelector('.fixed_header').classList.add('scroll')
// }

// window.onresize = () => {
//     if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
//         document.querySelector('.fixed_header').classList.add('scroll')
//     } else {
//         document.querySelector('.fixed_header').classList.remove('scroll')
//     }
// }


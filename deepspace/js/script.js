import {translateStrings} from './translateStrings.js'

// nav active item 

let nav = document.querySelectorAll('.menu a')
let currentPage = window.location.href

nav.forEach(item => {
    if (item.href == currentPage) {
        item.classList.add('active')
    }
})

// translation 

let translateButton = document.querySelector('.translate-button')
let strings = document.querySelectorAll('.trsl')

translateButton.onclick = () => changeLang()

function changeLang() {
    let lang = document.documentElement.getAttribute('lang')
    strings.forEach(item => {
        let obj = translateStrings.find(o => o[lang] === item.innerHTML);
        if (lang == 'en') {
            document.documentElement.setAttribute('lang', 'ch')
            item.innerHTML = obj.ch
        } else {
            document.documentElement.setAttribute('lang', 'en')
            item.innerHTML = obj.en
        }
    })
}

// mobile menu 

let menuButton = document.querySelector('header .menu .button')

menuButton.onclick = () => {
    menuButton.classList.toggle('active')
    document.body.classList.toggle('noScroll')
}
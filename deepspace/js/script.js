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
let inputs = document.querySelectorAll('input')

let userLang = window.localStorage.getItem('ds-lang') || navigator.language || navigator.userLanguage
if (userLang == 'zh' || userLang == 'zh-HK' || userLang == 'zh-CN' || userLang == 'zh-SG' || userLang == 'zh-TW'){
    changeLang()
}


translateButton.onclick = () => changeLang()

function changeLang() {
    let lang = document.documentElement.getAttribute('lang')
    lang == 'en' ? document.title = '深空' : document.title = 'Deep Space'
    strings.forEach(item => {
        let obj = translateStrings.find(o => o[lang] === item.innerHTML);
        if (lang == 'en') {
            document.documentElement.setAttribute('lang', 'zh')
            document.body.classList.add('zh')
            window.localStorage.setItem('ds-lang', 'zh')
            item.innerHTML = obj.zh
        } else {
            document.documentElement.setAttribute('lang', 'en')
            document.body.classList.remove('zh')
            window.localStorage.setItem('ds-lang', 'en')
            item.innerHTML = obj.en
        }
    })
    if (inputs) {
        inputs.forEach(item => {
            let obj = translateStrings.find(o => o[lang] === item.placeholder);
            if (lang == 'en') {
                item.placeholder = obj.zh
            } else {
                item.placeholder = obj.en
            }
        })
    }
}

// mobile menu 

let menuButton = document.querySelector('header .menu .button')

menuButton.onclick = () => {
    menuButton.classList.toggle('active')
    document.body.classList.toggle('noScroll')
}


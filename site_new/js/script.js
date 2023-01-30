import {translateStrings} from './translateStrings.js'

// translation 

let translateButton = document.querySelector('.translate-button')
let strings = document.querySelectorAll('.trsl')
let inputs = document.querySelectorAll('input')

let userLang = window.localStorage.getItem('ds-lang') || navigator.language || navigator.userLanguage
if (userLang == 'zh' || userLang == 'zh-HK' || userLang == 'zh-CN' || userLang == 'zh-SG' || userLang == 'zh-TW'){
    changeLang()
    console.log('test')
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
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

window.onload = () => {
    let userLang = navigator.language || navigator.userLanguage
    if (userLang == 'zh' || userLang == 'zh-hk' || userLang == 'zh-cn' || userLang == 'zh-sg' || userLang == 'zh-tw'){
        changeLang()
    }
}

translateButton.onclick = () => changeLang()

function changeLang() {
    let lang = document.documentElement.getAttribute('lang')
    strings.forEach(item => {
        let obj = translateStrings.find(o => o[lang] === item.innerHTML);
        if (lang == 'en') {
            document.documentElement.setAttribute('lang', 'zh')
            item.innerHTML = obj.zh
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

// Contact Form Handler

let submit = document.querySelector('#contact-form button')
let data = document.querySelectorAll('.form-row input')
let form = document.querySelector('#contact-form')
let dataForm = new Array(4)
	data.forEach((item, id) => { 
        item.onchange = function (e) {
            dataForm[id] = e.target.value
        }
    })

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    console.log(dataForm)
    
    let request = new XMLHttpRequest();
    
    request.addEventListener('load', function() {
        console.log(request.response);
        alert('Your message has been send!');
        form.reset();
    });
    
    request.open('POST', '/mail.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send('name=' + encodeURIComponent(dataForm[0]) + '&phone=' + encodeURIComponent(dataForm[1]) + '&email=' + encodeURIComponent(dataForm[2]) + '&userMessage=' + encodeURIComponent(dataForm[3]));
    });

let minus = document.querySelectorAll('.minus')
let plus = document.querySelectorAll('.plus')

minus.forEach(item => {
    item.onclick = () => {
        if(item.nextElementSibling.innerHTML > 1) {
            item.nextElementSibling.innerHTML = --item.nextElementSibling.innerHTML
        }
    }
});

plus.forEach(item => {
    item.onclick = () => {
        if(item.previousElementSibling.innerHTML < 60) {
            item.previousElementSibling.innerHTML = ++item.previousElementSibling.innerHTML
        }
    }
});
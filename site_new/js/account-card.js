let cardNumber = document.querySelector('#card')
let cardExp = document.querySelector('#card-date')
let cardCVV = document.querySelector('#card-cvv')

function val(i, regExpIn, regExpOut) {
    console.log(i)
    if (!validate(i)) {
        i = i.slice(0, i.length - 1)
    }
    let foo = i.split(" ").join(""); 
    if (foo.length > 0) {
        foo = foo.match(new RegExp(regExpIn, 'g')).join(regExpOut);
    }
    return foo
}

cardNumber.oninput = (e) => e.target.value = val(e.target.value, '.{1,4}', ' ')
cardExp.oninput = (e) => {
    if (!validateExp(e.target.value)) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
    }
}
cardCVV.oninput = (e) => {
    if (!validateCVV(e.target.value)) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
    }
}

function validate(value) {
    return /^(?=.*\d)[\d ]+$/.test(value) 
}

function validateExp(value) {
    return /^(?=.*\d)[\d/]+$/.test(value) 
}

function validateCVV(value) {
    return /^-?\d*$/.test(value) 
}


let edit = document.querySelector('.edit')
let deleteB = document.querySelector('.delete')
let cancel = document.querySelector('.cancel')
let inputs = document.querySelectorAll('input')
let inputWrap = document.querySelector('.input-card-wrap')

let oldVal = ['2212 4565 5645 6765', '06/24', '345']

edit.onclick = () => {
    if (!edit.classList.contains('save')) {
        inputs.forEach((item, i) => {
            oldVal[i] = item.value
            item.removeAttribute('disabled')
        })
        inputWrap.classList.add('active')
        edit.classList.add('save')
        edit.innerHTML = 'Save'
        deleteB.style='display: none'
        cancel.style='display: block'
        inputs[0].focus()
    } else {
        inputs.forEach(item => {
            item.setAttribute('disabled', '')
        })
        inputWrap.classList.remove('active')
        edit.classList.remove('save')
        edit.innerHTML = 'Edit'
        deleteB.style='display: block'
        cancel.style='display: none'
    }
}

cancel.onclick = () => {
    inputs.forEach((item, i) => {
        item.value = oldVal[i]
        item.setAttribute('disabled', '')
    })
    inputWrap.classList.remove('active')
        edit.classList.remove('save')
        edit.innerHTML = 'Edit'
        deleteB.style='display: block'
        cancel.style='display: none'
}

deleteB.onclick = () => {
    document.querySelector('.input-wrap').remove()
    document.querySelector('.buttons-row').remove()
    document.querySelector('.card-message').innerHTML = 'You have no card on file.'
}


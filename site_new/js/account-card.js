let cardNumber = document.querySelector('#card')
let cardExp = document.querySelector('#card-date')
let cardCVV = document.querySelector('#card-cvv')

function val(i, regExpIn, regExpOut) {
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


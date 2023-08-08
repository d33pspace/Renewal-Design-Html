function validate(value) {
    return /^-?\d*$/.test(value) 
}


let nextButton = document.querySelector('.next')

let phone = document.querySelector('#phone')
if (phone) {
    phone.addEventListener('input', function(e) {
        e.target.value.length < 4 ? e.target.value = '+86 ' : ''
        if (!validate(e.target.value.slice(4))) {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1)
        }
        if (nextButton) {
            e.target.value.length === 15 ? nextButton.classList.remove('inactive') : nextButton.classList.add('inactive')
        }

    })
    
    phone.onblur = (e) => {
        document.querySelector('.phone-filled') ?  document.querySelector('.phone-filled').innerHTML = e.target.value : ''
    }
}

let verification = document.querySelector('#verification')

if (verification) {
    verification.addEventListener('input', function(e) {
        if (!validate(e.target.value)) {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1)
        }
        e.target.value.length === 6 ? nextButton.classList.remove('inactive') : nextButton.classList.add('inactive')
    })
}



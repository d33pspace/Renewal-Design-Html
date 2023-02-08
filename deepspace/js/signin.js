let nextStep = document.querySelector('.next-step')
let verification = document.querySelector('#verification')
let phone = document.querySelector('#phone')
openNextStep()

function openNextStep() {
    let steps = document.querySelectorAll('.step')
    steps.forEach((item, i )=> {
        if (item.classList.contains('active')) {
            nextStep.onclick = () => {
                if (!nextStep.hasAttribute('disabled')) {
                    if( i == 0 ) {
                        document.querySelector('#phone').setAttribute('disabled', '')
                        document.querySelector('.start-over').setAttribute('disabled', '')
                        nextStep.classList.remove('active')
                        timer()
                    } else if (i == 1) {
                        verification.setAttribute('disabled', '')
                        document.querySelector('#code_checkbox').setAttribute('disabled', '')
                    }
                    item.nextElementSibling.classList.add('active')
                    nextStep.setAttribute('disabled', '')
                    openNextStep()
                }
            }
        }
    })
    function timer() {
        let numb = 5
        document.querySelector('.timer').innerHTML = '(' + numb + 's)'
        let interval = setInterval(() => {
            if (numb > 1) {
                numb --
                document.querySelector('.timer').innerHTML = '(' + numb + 's)'
            } else {
                clearInterval(interval)
                document.querySelector('.start-over').removeAttribute('disabled')
                document.querySelector('.timer').innerHTML = ''
                let steps = document.querySelectorAll('.step.active')
                document.querySelector('.start-over').onclick = () => {
                    phone.removeAttribute('disabled')
                    steps[steps.length - 1].classList.remove('active')
                    openNextStep()
                    phone.value.length == 15 ? nextStep.removeAttribute('disabled') : ''
                }
            }
        }, 1000)
    }
}

verification.oninput = (e) => {
    if (!validate(e.target.value)) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
    }
    e.target.value.length == 6 ? nextStep.removeAttribute('disabled') : nextStep.setAttribute('disabled', '')
}


phone.oninput = (e) => {
    e.target.value.length < 4 ? e.target.value = '+86 ' : ''
    document.querySelector('.phone-filled').innerHTML = e.target.value
    if (!validate(e.target.value.slice(4))) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
    }
    e.target.value.length == 15 ? nextStep.removeAttribute('disabled') : nextStep.setAttribute('disabled', '')
}

function validate(value) {
    return /^-?\d*$/.test(value) 
}

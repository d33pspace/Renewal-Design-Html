openNextStep()

function openNextStep() {
    let steps = document.querySelectorAll('.step')
    let nextStep = document.querySelector('.next-step')
    steps.forEach((item, i )=> {
        if (item.classList.contains('active')) {
            nextStep.onclick = () => {
                if( i == 0 ) {
                    document.querySelector('#phone').setAttribute('disabled', '')
                    document.querySelector('.start-over').setAttribute('disabled', '')
                    timer()
                } else if (i == 1) {
                    document.querySelector('#verification').setAttribute('disabled', '')
                    document.querySelector('#code_checkbox').setAttribute('disabled', '')
                }
                item.nextElementSibling.classList.add('active')
                openNextStep()
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
                    document.querySelector('#phone').removeAttribute('disabled')
                    steps[steps.length - 1].classList.remove('active')
                    openNextStep()
                }
            }
        }, 1000)
    }
}



let phone = document.querySelector('#phone')

phone.oninput = (e) => {
    e.target.value.length < 3 ? e.target.value = '+86' : ''
    document.querySelector('.phone-filled').innerHTML = e.target.value
}
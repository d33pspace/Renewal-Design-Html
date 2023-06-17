let steps = document.querySelectorAll('.step')
let startOver = document.querySelector('.start-over')
let stepCount = 0

nextButton.onclick = () => {
    if (!nextButton.classList.contains('inactive')) {
        nextStep()
    }
}


function nextStep() {
    if (stepCount !== steps.length - 1) {
        stepCount++
        steps[stepCount].classList.add('active')
        startOver.classList.add('active')
        nextButton.classList.add('inactive')
    } else {
        console.log('do submit function here')
    }
}

startOver.onclick = () => {
    stepCount = 0
    steps.forEach(item => item.classList.remove('active'))
    document.querySelectorAll('.phone-verification-form input').forEach(item => {
        if (item.id == 'phone') {
            item.value = '+86 '
        } else {
            item.value = ''
        }
    })
    startOver.classList.remove('active')
    nextButton.classList.add('inactive')
}
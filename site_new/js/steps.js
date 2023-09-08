let steps = document.querySelectorAll('.step')
let startOver = document.querySelector('.start-over')
let stepCount = 0
let counter = document.querySelector('.counter')

nextButton.onclick = () => {
    if (!nextButton.classList.contains('inactive')) {
        nextStep()
        timerStartOver(counter)
    }
}


function nextStep() {
    if (stepCount !== steps.length - 1) {
        stepCount++
        steps[stepCount].classList.add('active')
        console.log('i did it active', stepCount, steps.length)
        startOver.classList.add('visible')
        counter.classList.remove('inactive');
        nextButton.classList.add('inactive')
    } else {
        console.log('do submit function here')
    }
}

startOver.onclick = () => {
    if (!startOver.classList.contains('inactive')) {
        stepCount = 0
        steps.forEach(item => item.classList.remove('active'))
        document.querySelectorAll('.phone-verification-form input').forEach(item => {
            if (item.id == 'phone' ) {
                item.value = '+86 '
            } else {
                item.value = ''
            }
        })
        startOver.classList.remove('visible')
        startOver.classList.add('inactive')
        nextButton.classList.add('inactive')
    }

}

function timerStartOver(counter) {
    let timer = counter.querySelector('span')
    let timeLeft = 60;
    timer.innerHTML = timeLeft;
    let startOverInterval = setInterval(interval, 1000);

    function interval() {
        timeLeft--
        timer.innerHTML = timeLeft;

        if (timeLeft <= 0) {
            startOver.classList.remove('inactive');
            counter.classList.add('inactive');
            clearInterval(startOverInterval);
        }
    }
}
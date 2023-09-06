let steps = document.querySelectorAll('.step')
let startOver = document.querySelector('.start-over')
let stepCount = 0
let initialText = startOver.innerHTML

nextButton.onclick = () => {
    if (!nextButton.classList.contains('inactive')) {
        nextStep()
        timerStartOver(startOver)
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
        startOver.classList.remove('active')
        nextButton.classList.add('inactive')
        startOver.innerHTML = initialText
    }

}

function timerStartOver(btn) {
    const startOverContent = btn.innerHTML;
    let timeLeft = 60;
    interval();
    let startOverInterval = setInterval(interval, 1000);

    function interval() {
        timeLeft--
        btn.innerHTML = startOverContent + " (" + (timeLeft) + "s)";
        if (timeLeft <= 0) {
            btn.classList.remove('inactive');
            clearInterval(startOverInterval);
        }
    }
}
let steps = document.querySelectorAll('.step')
let nextStep = document.querySelector('.next-step')

function openNextStep() {
    steps.forEach(item => {
        if (item.classList.contains('active')) {
            nextStep.onclick = () => {
                item.nextElementSibling.classList.add('active')
                openNextStep()
            }
        }
    })
}

openNextStep()
let review_button = document.querySelector('#make_review')
let overlay = document.querySelector('.daily_review.overlay')
let wrapper = document.querySelector('.daily_review.overlay .wrapper')
let form = document.querySelector('#review_form')
let submitButton = document.querySelector('.send_review')
let input= document.querySelector('.review_input')

review_button.onclick = (e) => {
    e.preventDefault()
    toggleReview ()
}

submitButton.onclick = (e) => {
    if (input.value == null || input.value == '') {
        input.classList.add('invalid')
    }
}

input.onkeypress = (e) => {
    if (e.keyCode == 13 && (input.value == null || input.value == '')) {
        input.classList.add('invalid')
    }
}

form.onsubmit = (e) => {
    toggleReview ()
}

overlay.onclick = (e) => {
    if (e.target == overlay) {
        toggleReview()
    }
}

function toggleReview () {
    overlay.classList.toggle('active')
    wrapper.classList.toggle('active')
    form.reset()
    input.classList.remove('invalid')
}

let review_type = document.querySelectorAll('.review-type img')

review_type.forEach((item) => {
    item.onclick = () => {
        review_type.forEach((e) => {
            e.classList.remove("active")
        })
        item.classList.add('active')
    }
})
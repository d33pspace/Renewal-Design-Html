let form = document.querySelector('#tag')

form.onsubmit = (e) => {
    e.preventDefault()
    form.classList.add('submit')
}
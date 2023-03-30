let deleteB = document.querySelector('.delete')

deleteB.onclick = () => {
    document.querySelector('.input-card-exist').remove()
    document.querySelector('.buttons-row').remove()
    document.querySelector('.card-message').innerHTML = 'You have no card on file.'
}
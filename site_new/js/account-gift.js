document.querySelector('.cancel-gift').onclick = (e) => {
    if (e.target.classList.contains('error')) {
        return false
    }
    document.querySelector('.input-wrap').classList.add('success')
    document.querySelector('.monthly-gift').innerHTML = 'You have no recurring gifts.'
}
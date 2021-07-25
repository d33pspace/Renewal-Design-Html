let loadmore = document.querySelectorAll('.loadmore')

loadmore.forEach((item) => {
    item.onclick = (e) => {
        e.preventDefault()
        item.parentElement.classList.toggle('opened')
        if (item.innerHTML == 'more') {
            item.innerHTML = 'less'
        } else {
            item.innerHTML = 'more'
        }
    }
})
let expand = document.querySelectorAll('.card .body')

expand.forEach(item => {
    item.onclick = () => {
        item.parentElement.classList.toggle('active')
    }
});
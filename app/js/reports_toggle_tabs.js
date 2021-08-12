let expand = document.querySelectorAll('.expand')

expand.forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('active')
    }
});
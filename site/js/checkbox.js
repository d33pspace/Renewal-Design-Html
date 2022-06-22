let checkbox = document.querySelectorAll('.checkbox')

checkbox.forEach(item => {
    item.onclick = () => {
        item.closest('.checkbox-wrap').querySelectorAll('.checkbox').forEach(i => { 
            i.classList.remove('active')
        })
        item.classList.add('active')
    }
})
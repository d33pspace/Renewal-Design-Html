let input = document.querySelectorAll('input[type="text"]')
let done = document.querySelector('.done')
let overlay = document.querySelector('.overlay')
let cancelChange = document.querySelector('.overlay .cancel')
let changeProceed = document.querySelector('.overlay .delete')
let message = document.querySelector('.change_message')

input.forEach(item => {
    item.onfocus = () => {
        item.parentElement.classList.add('active')
    }
    item.onblur = () => {
        if (item.value == null || item.value == '') {
            item.parentElement.classList.remove('active')
        } else {
            done.classList.add('active')
        }
        
    }
});

let dropdown = document.querySelectorAll('.dropdown')

dropdown.forEach((item) => {
    item.firstElementChild.onclick = () => {
        item.classList.toggle('active')
        item.lastElementChild.classList.toggle('active')
    }
    item.lastElementChild.childNodes.forEach((e) => {
        e.onclick = () => {
            item.classList.remove('active')
            item.firstElementChild.classList.add('filled')
            item.lastElementChild.classList.remove('active')
            item.firstElementChild.innerHTML = e.innerHTML
            done.classList.add('active')
        }
    })
})

document.querySelector('.checkbox').onclick = () => {
    done.classList.add('active')
}
document.querySelector('.switch').onclick = () => {
    done.classList.add('active')
}

function toggleOverlay () {
    overlay.classList.toggle('active');
}


done.onclick = (e) => {
    e.preventDefault()
    toggleOverlay ()
}

overlay.onclick = (e) => {
    if (e.target == overlay) {
        toggleOverlay ()
    }
}

cancelChange.onclick = () => {
    toggleOverlay ()
}

changeProceed.onclick = () => {
    toggleOverlay ()
    message.classList.add('active')
}
let back = document.querySelector('.back')
let overlayGoback = document.querySelector('.overlay.goback')
let cancelGoback = document.querySelector('.overlay.goback .cancel')
let doneGoback = document.querySelector('.overlay.goback .done')


back.onclick = (e) => {
    let changed = false 
    inputs.forEach((e) => {
        if (e.value !== null && e.value !== '') {
            changed = true
        }
    })
    document.querySelectorAll('.dropdown .current').forEach((e) => {
        if (e.classList.contains('filled')) {
            changed = true
        }
    })

    if (changed == true) {
        e.preventDefault()
        overlayGoback.classList.add('active')
    }
}

overlayGoback.onclick = (e) => {
    if (e.target == overlayGoback || e.target == cancelGoback || e.target == doneGoback) {
        overlayGoback.classList.remove('active')
    }
}

cancelGoback.onclick = () => {
    overlayGoback.classList.remove('active')
}

doneGoback.onclick = () => {
    location.href = back.href 
}

let del = document.querySelector('.delete_button')
let overlayDel = document.querySelector('.overlay.delete_profile')
let cancelDel = document.querySelector('.overlay.delete_profile .cancel')
let proceedDel = document.querySelector('.overlay.delete_profile .delete')

del.onclick = () => {
    overlayDel.classList.add('active')
}

overlayDel.onclick = (e) => {
    if (e.target == overlayDel || e.target == cancelDel || e.target == proceedDel) {
        overlayDel.classList.remove('active')
    }
}
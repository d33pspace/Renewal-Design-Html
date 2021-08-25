let change_button = document.querySelector('#password_change')
let change_block = document.querySelector('.password_change')
let wrapper = document.querySelector('.password_change .wrapper')
let cancelChange = document.querySelector('.password_change .cancel')
let submit = document.querySelector('.password_change .submit')
let doneIcon = document.querySelector('.done')
let delete_button = document.querySelector('#delete_profile')
let delete_block = document.querySelector('.delete_profile.overlay')
let cancelDelete = document.querySelector('.delete_profile.overlay .cancel')
let deleteProceed = document.querySelector('.delete_profile.overlay .delete')


change_button.onclick = (e) => {
    e.preventDefault()
    toggleChange()
}

cancelChange.onclick = (e) => {
    e.preventDefault()
    toggleChange()
}

change_block.onclick = (e) => {
    if (e.target == change_block) {
        toggleChange()
    }
}

submit.onclick = (e) => {
    // e.preventDefault()
    // toggleChange()
    doneIcon.classList.add('active')
}

function toggleChange () {
    change_block.classList.toggle('active');
    wrapper.classList.toggle('active');
}


delete_button.onclick = (e) => {
    e.preventDefault()
    toggleDelete()
}

function toggleDelete () {
    delete_block.classList.toggle('active');
}

delete_block.onclick = (e) => {
    if (e.target == delete_block) {
        toggleDelete()
    }
}

cancelDelete.onclick = (e) => {
    e.preventDefault()
    toggleDelete()
}

deleteProceed.onclick = (e) => {
    e.preventDefault()
    toggleDelete()
    doneIcon.classList.add('active')
}
let search = document.querySelector('.search-block .search')
let closeSearch = document.querySelector('.search-block .close_search')

search.oninput = (e) => {
    if (e.target.value !== null && e.target.value !== undefined && e.target.value !== '') {
        closeSearch.classList.add('active')
    } else {
        closeSearch.classList.remove('active')
    }
}

closeSearch.onclick = () => {
    search.value = ''
    closeSearch.classList.remove('active')
}
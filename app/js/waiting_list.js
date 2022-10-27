let screenHeight = screen.height - 72
let cardsHeight = document.querySelector('.service_list').clientHeight
console.log(screenHeight, cardsHeight)
if (cardsHeight > screenHeight) {
    createLastCards()
}

function createLastCards() {
    let lastCards = document.createElement('div')
    lastCards.className = 'lastCards'
    let cards = Array.from(
        document.querySelectorAll('.service_list .card')
    ).slice(-3)
    lastCards.innerHTML = cards.map(e => e.outerHTML).join('')
    document.querySelector('main').appendChild(lastCards)
}
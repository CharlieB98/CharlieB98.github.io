 const cardArray = [{
         name: 'me',
         img: 'images/me.png'
     },
     {
         name: 'art fund',
         img: 'images/art.png'
     },
     {
         name: 'Bucks uni',
         img: 'images/bucks.png'
     },
     {
         name: 'The Perfume Shop',
         img: 'images/tps.png'
     },
     {
         name: 'Stress',
         img: 'images/stress.png'
     },
     {
         name: 'Wheat',
         img: 'images/wheat.png'
     },
     {
         name: 'me',
         img: 'images/me.png'
     },
     {
         name: 'art fund',
         img: 'images/art.png'
     },
     {
         name: 'Bucks uni',
         img: 'images/bucks.png'
     },
     {
         name: 'The Perfume Shop',
         img: 'images/tps.png'
     },
     {
         name: 'Stress',
         img: 'images/stress.png'
     },
     {
         name: 'Wheat',
         img: 'images/wheat.png'
     }
 ]

 cardArray.sort(() => 0.5 - Math.random())

 const gridDisplay = document.querySelector('#grid')
 const MemoryResultDisplay = document.querySelector('#memoryResult')
 const finalDisplay = document.querySelector('#final-message')

 let cardsChosen = []
 let cardsChosenIds = []
 const cardsWon = []

 function createBoard() {
     for (let i = 0; i < cardArray.length; i++) {
         const card = document.createElement('img')
         card.setAttribute('src', 'images/blank.png')
         card.setAttribute('data-id', i)
         card.addEventListener('click', flipCard)
         gridDisplay.appendChild(card)
     }
 }
 createBoard()

 function checkMatch() {
     const cards = document.querySelectorAll('#grid img')
     const optionOneId = cardsChosenIds[0]
     const optionTwoId = cardsChosenIds[1]
     console.log(cards)
     if (optionOneId == optionTwoId) {
         alert('You have clicked the same image!')
     }
     if (cardsChosen[0] == cardsChosen[1]) {
         alert('You found a match!')
         cards[optionOneId].setAttribute('src', 'images/white.png')
         cards[optionTwoId].setAttribute('src', 'images/white.png')
         cards[optionOneId].removeEventListener('click', flipCard)
         cards[optionTwoId].removeEventListener('click', flipCard)

         cardsWon.push(cardsChosen)
     } else {
         cards[optionOneId].setAttribute('src', 'images/blank.png')
         cards[optionTwoId].setAttribute('src', 'images/blank.png')
         alert('Sorry Try Again!')
     }
     MemoryResultDisplay.textContent = cardsWon.length
     cardsChosen = []
     cardsChosenIds = []

     if (cardsWon.length == cardArray.length / 2) {
         finalDisplay.textContent = 'Congratulations you found them all!'
     }
 }

 function flipCard() {
     const cardId = this.getAttribute('data-id')
     cardsChosen.push(cardArray[cardId].name)
     cardsChosenIds.push(cardId)
     console.log(cardsChosen)
     console.log(cardsChosenIds)
     this.setAttribute('src', cardArray[cardId].img)
     if (cardsChosen.length === 2) {
         setTimeout(checkMatch, 500)
     }
 }

 console.log(gridDisplay)
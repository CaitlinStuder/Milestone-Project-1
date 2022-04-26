const holesDiv = document.querySelector('.holes')
const score = document.querySelector('#score')
const time = document.querySelector('#time-left')
const startButton = document.querySelector('#start-button')



for (let i=1; i<=16; i++) {
    let hole = document.createElement('div')
    hole.classList.add('hole')
    holesDiv.appendChild(hole)
 
    let pile = document.createElement('img')
    pile.classList.add('pile')
    pile.src='./assets/dirtpile.png'
    hole.appendChild(pile)
 
}

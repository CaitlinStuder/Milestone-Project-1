const holesDiv = document.querySelector('.holes')
const score = document.querySelector('#score')
const time = document.querySelector('#time-left')
const startButton = document.querySelector('#start-button')

let timeLeft
let pScore = 0

for (let i=1; i<=16; i++) {
    let hole = document.createElement('div')
    hole.classList.add('hole')
    holesDiv.appendChild(hole)
 
    let pile = document.createElement('img')
    pile.classList.add('pile')
    pile.src='./assets/dirtpile.png'
    hole.appendChild(pile)
 
    let mole = document.createElement('img')
    mole.classList.add('mole')
    mole.src='./assets/mole.png'
    mole.setAttribute('name', 'mole')
    hole.appendChild(mole)
}

window.addEventListener('click', (e) => {
    if(e.target.name === 'mole') {
        pScore = pScore + 5
        score.textContent = pScore
    }
})


startButton.addEventListener('click',() => {
 
    timeLeft = 30
    pScore = 0
    score.textContent = pScore
    time.textContent = timeLeft
   
    let timer = setInterval(() => {
 
        time.textContent = timeLeft
        if(timeLeft === 0) {
            clearInterval(timer)
            alert(`Game Over. Your final score is ${pScore}. Refresh browser to play again.`)
        } else {
            timeLeft--
        }

        const allMoles = document.querySelectorAll('.mole')
        let chooseMole = Math.floor(Math.random() * allMoles.length)
        allMoles[chooseMole].style.pointerEvents = 'all'
        allMoles[chooseMole].style.animation = 'faceup 1s ease'
        allMoles[chooseMole].addEventListener('animationEnd', () => {
            allMoles[chooseMole].style.pointerEvents = 'all'
            allMoles[chooseMole].addEventListener('animationEnd', () => {
                allMoles[chooseMole].style.pointerEvents = 'none'
            })
        })

 
    }, 1500)

})

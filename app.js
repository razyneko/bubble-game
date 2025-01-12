var hit = 0;
var score = 0;
var timer = 60;

function makeBubbles() {
var clutter = "";

let numOfBubbles = 126;

for (let i = 0; i < numOfBubbles; i++){
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10) + 1}</div>`;
}


const panelBottom = document.querySelector('#panel-bottom');

panelBottom.innerHTML = clutter;

}
makeBubbles();

function startTimer() {
    const decrementTimer = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer').innerText = timer;
        } else {
            const panelBottom =  document.querySelector('#panel-bottom');
            panelBottom.innerHTML = `<div class="result"><h1>Game Over</h1>
            <h2>Your score is ${score}</h2>
            <button class="play-again-btn">Play Again</button>
            <div>`
            panelBottom.removeAttribute('style')
            panelBottom.classList.add('game-over')
            document.querySelector('.play-again-btn').addEventListener('click', () => {
                location.reload();
            })
            clearInterval(decrementTimer)
        }
    },1000)
}
startTimer();

function increaseScore() {
    score += 10;
    document.querySelector('#score').innerText = score;
}

function getNewHit() {
    hit = Math.floor(Math.random() * 10) + 1
    document.querySelector('#hit').innerText = `${hit}`
}
getNewHit();

document.querySelector('#panel-bottom').addEventListener('click', (dets) => {
    let bubbleValue = Number(dets.target.innerText);
    if (bubbleValue === hit) {
        increaseScore();
        getNewHit();
        makeBubbles();
    }
})
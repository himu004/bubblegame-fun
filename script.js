var timer =100;
var score = 0;
var hitScore = 0;

function makeBubble(){
    var clutter = ''

for (var i = 1; i <201; i++) {
    rn = Math.floor(Math.random() * 15);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector('#pbtm').innerHTML = clutter;
}

function getNewHit(){
    hitScore = Math.floor(Math.random() * 15);
    document.querySelector('#hitval').textContent = hitScore;
}

function runTimer(){

    var intTimer = setInterval(function(){

        if (timer > 0) {
            timer --;
            document.querySelector('#timeval').textContent = timer;
            // logic for timer warning
            if (timer === 10){
            const element =  document.getElementById('timeval');
            element.style.color = 'red';
            element.style.backgroundColor = 'yellow';
        }   
    }
    else{
        clearInterval(timer);
        document.querySelector('#pbtm').innerHTML = `<h2>Game Over <br/>Your Score: ${score}</h2>`
    }
        
    }, 1000);
}

function increaseScore(){
    score += 10;
    document.querySelector('#scroreval').textContent = score;
}

// Main Logic for the game
document.querySelector('#pbtm').addEventListener('click', function(details){
    var clickthenumber = Number(details.target.textContent);
    // console.log(clickthenumber);
    if(clickthenumber === hitScore){
        increaseScore();
        getNewHit();
        makeBubble();
    }
});






getNewHit();
runTimer();
makeBubble();
let askQuestion = confirm('Do you want to play a game?');
let min = 0,
    max = 8;
let attempt = 3;
let possiblePrize = 100, totalPrize = 0, CongratulationPrize = 0;
let gameOver = true;

if (!askQuestion) {
    alert('You did not become a billionaire, but can');
} else {    
    while(gameOver){
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
    for (let i = attempt; i > 0; i--) {
        let playForm = prompt(`
            Choose a roulette pocket number from ${min} to ${max}
            Attempts left: ${i}
            Total prize: ${totalPrize}$
            Possible prize on current attempt: ${possiblePrize}$            
        `, '');
        possiblePrize = possiblePrize / 2;
        if (playForm === null || playForm === '') {
            alert('You forgot write number');
            gameOver = false;
            break;            
        }else{
            playForm = +playForm;
        }
        if (playForm === randomNum) {
            totalPrize += possiblePrize*2;
            let continueGame = confirm(`
                    Congratulation, you won! Your prize is: ${totalPrize}$.
                    Do you want to continue?
                `);
            if(continueGame){
                i=0;
                max = 8;
                possiblePrize = 200;
            }else{
                gameOver = false;
            }    
            break;
        }
        if(i === 1){
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            let playAgain = confirm('Do you want to play again?');
            if (playAgain) {
                max = 8;
                possiblePrize = 100;
                totalPrize = 0;
                
            }else{
                gameOver = false;
            }
            break;    
        }
    }
    }


}

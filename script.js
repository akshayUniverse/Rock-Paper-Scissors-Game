let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorPara = document.querySelector("#user-score");
const compScorPara = document.querySelector("#comp-score");

const genComChoice = () =>{
    const option = ["rock","paper","scissors"];
    const idx = Math.floor(Math.random() *3);
    return option[idx];
};

const drawGame = () =>{
    
    msg.innerText = "Game was Draw.Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice, compChoice) => {

    if(userWin){
        userScore++;
        userScorPara.innerText = userScore;
        
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
       
        compScore++;
        compScorPara.innerText = compScore;
        msg.innerText = `You lose!. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{

    console.log("user choice = ",userChoice);
    const compChoice = genComChoice();
    console.log("chomp choice = ",compChoice)

    if(userChoice === compChoice){
 
        drawGame();
    } else{
        let userWin = true;
        if(userChoice==="rock"){
           userWin  = compChoice === "paper" ? false : true ;
        } else if (userChoice === "paper"){
                userWin = compChoice === "scissors" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    const userChoice  = choice.getAttribute("id");
    choice.addEventListener("click",()=>{
    playGame(userChoice);
    })
});


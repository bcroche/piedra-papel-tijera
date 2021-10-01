
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getCompChoice() {
    const choices = ["r", "p", "s"];
    const  compChoice= Math.floor((Math.random() * 1000) % 3);
    console.log("compChoice=" + compChoice);
    return choices[compChoice];
}

function win(uc, cc) {
    userScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML= compScore;
    const user= "user".fontsize(3).sub();
    const comp= "comp".fontsize(3).sub();
    //result_div.innerHTML= convertToWord(uc) + " gana a " + convertToWord(cc) +  "!!!";
    result_div.innerHTML= `${convertToWord(uc)}${user} gana a ${convertToWord(cc)}${comp} !!! 💪`;
    document.getElementById(uc).classList.add("green_glow");
    document.getElementById(cc).classList.add("red_glow");
    setTimeout(() =>document.getElementById(uc).classList.remove("green_glow") , 1000);
    setTimeout(() =>document.getElementById(cc).classList.remove("red_glow") , 1000);
}

function lose(uc, cc) {
    compScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML= compScore;
    const user= "user".fontsize(3).sub();
    const comp= "comp".fontsize(3).sub();
    result_div.innerHTML= `${convertToWord(cc)}${comp} gana a ${convertToWord(uc)}${user}  !!! 😣`;
    document.getElementById(uc).classList.add("green_glow");
    document.getElementById(cc).classList.add("red_glow");
    setTimeout(() =>document.getElementById(uc).classList.remove("green_glow") , 1000);
    setTimeout(() =>document.getElementById(cc).classList.remove("red_glow") , 1000);
}
function draw(uc, cc) {
    userScore++;
    compScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML= compScore;
    result_div.innerHTML= convertToWord(cc) + " contra " + convertToWord(uc) +  ". Empate";
}
function game(userChoice) {
    
    const computerChoice=  getCompChoice();
    console.log("User "+ userChoice + " computer " + computerChoice);
    const ronda = userChoice + computerChoice;
    console.log(ronda);
    switch (ronda) {
        case "pr":
        case "rs":
        case "sp":
            console.log("User wins!!!");
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            console.log("Comp wins!!!");
            lose(userChoice, computerChoice);
            break;        
        default:
            console.log("Empate");
            draw(userChoice, computerChoice);
            break;
    }
    
}
function convertToWord(choice) {
    switch (choice){
        case "r": return "Piedra";
        case "p": return "Papel";
        case "s": return "Tijeras";
    }
}

function main(){    
    rock_div.addEventListener('click', function() {
        game("r");
        console.log("Piedra!!");
    })
    paper_div.addEventListener('click', function() {
        game("p");
        console.log("Papel!!");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
        console.log("Tijeras!!");
    })
}

main();
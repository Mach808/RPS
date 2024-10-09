let user_score = 0;
let comp_score = 0;

let choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const CompScorePara = document.querySelector("#computer-score");

const genCompChoice = () =>{
    const option = ["rock","paper","scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return option[randIndx];
}
const showWinner = (userWin,user_choice,computer_choice) =>{
    if(userWin==true){
        user_score++;
        userScorePara.innerText = user_score;
        msg.innerText = `You Win,${user_choice} beats ${computer_choice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        msg.innerText = ` You loose,${computer_choice} beats ${user_choice}`;
        msg.style.backgroundColor = "red";
        comp_score++;
        CompScorePara.innerText = comp_score;
    }
     
}
const playGame = (user_choice) =>{
    const computer_choice = genCompChoice();
    console.log("user choice = ",user_choice);
    console.log("computer choice = ",computer_choice);


    if(user_choice==computer_choice){
        drawGame(user_choice);
        msg.style.backgroundColor = "yellow";
    }
    else{
        let userWin = true;
        if(user_choice == "rock"){
           userWin = computer_choice === "paper" ? false:true;
        }else if (user_choice == "paper") {
            userWin = computer_choice === "scissor" ? false:true;
        }else{
            userWin = computer_choice === "rock" ? false:true;
        }
        showWinner(userWin,user_choice,computer_choice);
    }
}

const drawGame = () => {
        console.log("Game Draw");
        msg.innerText = "Game Draw";

}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        playGame(user_choice);
    })
})
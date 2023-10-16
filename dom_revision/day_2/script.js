// console.log("hello");
let buttons = document.querySelectorAll("button");
let userScore = document.getElementById("user_score");

let computerScore = document.getElementById("computer_score")
// console.log(buttons.length);
// console.log(buttons);
let result1 = document.getElementById("result");

let userPoints = 0;
let computerPoints = 0;

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        // console.log(button.id);
        let result = matchTheConditons(button.id, computerRandomvalue());
        result1.innerText = result
        // console.log(result);
    })
})

function computerRandomvalue(){
    let array = ['rock', 'paper', 'scissors'];
    let randomValue = Math.floor(Math.random() * array.length);
    // console.log('computer value' + array[randomValue]);
    return array[randomValue];
}

function matchTheConditons(userValue, computerValue){
    if(userValue == computerValue){
        return "Its a tie";
    }else if(userValue=="rock"&&computerValue=="scissors" || userValue=="paper"&&computerValue=="rock" || userValue=="scissors"&&computerValue=="paper"){
        userPoints++;
        userScore.innerText = userPoints;
        return "You win! " + userValue + " beats " + computerValue;
    }else{
        computerPoints++;
        computerScore.innerText = computerPoints;
        return "You win! " + computerValue + " beats " + userValue;
    }
}
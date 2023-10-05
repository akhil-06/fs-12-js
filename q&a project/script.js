let questions = document.querySelectorAll(".question");
// console.log(questions);


let button = document.querySelectorAll(".question-btn");
console.log(button);
questions.forEach(function(q){
    // console.log(q);
    let button = document.querySelector(".question-btn");
    // console.log(button);
    button.addEventListener("click", function(){
            q.classList.toggle('show-text');
    })
})
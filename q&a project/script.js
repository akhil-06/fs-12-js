let questions = document.querySelectorAll(".question");
questions.forEach(function(q){
    let button = q.querySelector(".question-btn");
    button.addEventListener("click", function(){
            q.classList.toggle('show-text');
    })
})
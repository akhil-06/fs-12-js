document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let firstName = e.target.children[0].value,
    lastName = e.target.children[1].value,
    country = e.target.children[2].value,
    score = e.target.children[3].value;
  errorMessage = document.querySelector(".main_error-prompter");

  errorMessage.style.display = "none";

  if (firstName == "" || lastName == "" || country == "" || score == "") {
    return (errorMessage.style.display = "block");
  }

  let scoreBoardMainContiner = document.querySelector(
    ".main_scoreboard-wrapper"
  );
  let scoreBoardElement = document.createElement("div");
  scoreBoardElement.classList.add("main_scoreboard");

  scoreBoardElement.innerHTML = `
  <div>
  <p class="main_player-name">${firstName} ${lastName}</p>
  <p class="main_time-stamp">${new Date()}</p>
</div>
<p class="main_player-country">${country}</p>
<p class="main_player-score">${score}</p>
<div class="main_scoreboard-btn-container">
  <button>&#x1f5d1;</button>
  <button>+5</button>
  <button>-5</button>
</div>
        `;
  // console.log(scoreBoardElement);
  scoreBoardMainContiner.appendChild(scoreBoardElement);
  activateButtons();
    sortCards();
});



function activateButtons() {
  document.querySelectorAll(".main_scoreboard-btn-container").forEach((el)=>{
    el.addEventListener("click", (e)=>{
        let buttonClicked=  e.target.textContent;
        console.log(buttonClicked);
        let scoreOfPlayer = e.target.parentElement.parentElement.children[2];
        console.log(scoreOfPlayer);
        if(buttonClicked === "🗑"){
            e.target.parentElement.parentElement.remove();
        }else if(buttonClicked == "+5"){
            // +5
            scoreOfPlayer.innerText = parseInt(scoreOfPlayer.innerText) + 5;
        }else{
            // -5  
            scoreOfPlayer.innerText = parseInt(scoreOfPlayer.innerText) - 5;
        }

        sortCards();
    })
  });
}


activateButtons();
let buttons = document.querySelectorAll("button");
let result = document.getElementById("result");
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", ()=>{
        let buttonValue = buttons[i].textContent;
        if(buttonValue === "C"){
            clearResult();
        }else if(buttonValue === "="){
            displayResult();
        }else{
            appendValue(buttonValue)
        }
    })
}
function clearResult(){
    result.value = "";
}
function displayResult(){
    result.value = eval(result.value);
}
function appendValue(buttonValue){
    result.value = result.value + buttonValue;
}
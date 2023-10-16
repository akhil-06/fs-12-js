let container = document.querySelector(".container");

for(let i=0; i<30; i++){
    const div1 = document.createElement('div');
    div1.classList.add("container_div");
    // div1.innerText = "Hello World!!"
    // div1.innerHTML = "<h1>COLOR</h1>"
    container.appendChild(div1);
    // console.log(div1);
}



let color_divs = document.querySelectorAll(".container_div");
// console.log(color_div);

generateColorsForDiv()

function generateColorsForDiv(){
    color_divs.forEach((color_div)=>{
        // console.log(color_div);
        let new_color = generateRandomColor();
        console.log(new_color);
        color_div.style.backgroundColor = "#" + new_color;
        color_div.innerText = "#" + new_color
    })
}


function generateRandomColor(){
    let hexChars = "0123456789abcdef";
    let colorCodeString = "";
    let colorCodeStringLength = 6;

    for(let i=0; i<colorCodeStringLength;i++){
        let randomIndex = Math.floor(Math.random() * 16);
        // console.log(randomIndex);
        colorCodeString = colorCodeString + hexChars[randomIndex];
        // console.log(colorCodeString);
    }

    return colorCodeString;
}
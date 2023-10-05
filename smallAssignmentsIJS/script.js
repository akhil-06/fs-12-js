let ball = document.getElementById("ball");
document.addEventListener('keydown', moveBall);
let t = 0
let left = 0;

function moveBall(event){
    // console.log(event);

    let browserHeight = document.documentElement.clientHeight;
    let browserWidth = document.documentElement.clientWidth;
    let elementWidth = ball.offsetWidth;
    console.log(elementWidth);
    console.log(browserHeight, browserWidth);

    console.log(event);
    let key = event.keyCode;
    console.log(key);

    //move with d & >
    if(key == 68 || key == 39){
        if(left + elementWidth + 10 <= browserWidth){
            ball.style.left = left+10+"px";
            left += 10;
        }else{
            ball.style.left = 1+"px";
            left = 0;
        }
    }

    //for the s and 
    if(key == 83 || key == 40){
        if(t + elementWidth + 10 <= browserHeight){
            ball.style.top = t+10+"px";
            t+=10;
        }
    }

    //for the w and ^ 
    if(key == 87 || key == 38){
        if(t - 10 >= 0){
            ball.style.top = t-10+"px";
            t-=10;
        }
    }


    //move with a & >
    if(key == 65 || key == 37){
        if(left - 10 >= 0){
            ball.style.left = left-10+"px";
            left -= 10;
        }
    }
}
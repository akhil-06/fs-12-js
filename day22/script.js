function myThrottle(call, delay){
    return function(){
        document.getElementById('btn').disabled = true;
        setTimeout(()=>{
            call();
        }, delay)
    }
}


let fun = myThrottle(()=>{
    document.getElementById('btn').disabled = false;
    console.log("btn is click");
}, 2000)
















// let counter = 0;
// function getData(){
//     console.log("fetching data" + counter++);
// }

// function myDebounce(call, delay){
//     let timer;
//     // console.log(delay);
//     return function(a,b){
//         if(timer) clearTimeout(timer);
//         // console.log(timer);
//         timer = setTimeout(()=>{
//             call(a,b)
//         }, delay)
//     };
// }


// let betterFunction = myDebounce(getData, 300);






























// let i = 10;
// function outer(){
//     let j = 20;
//     j++;
//     let inner = function(){
//         let k = 30;
//         console.log(j,k);
//     }
//     return inner;
// }

// let inner = outer();
// let inner2 = outer();
// inner();
// inner2();












// let sum = function(a,b,c){
//     return{
//         getTwoSum:function(){
//             return a+b;
//         },
//         getThreesSum:function(){
//             return a+b+c;
//         }
//     }
// }

// let store = sum(10,20,30);
// console.log("two sum is "+store.getTwoSum());
// console.log("two sum is "+store.getThreesSum());









// console.log("sdf");
// let c = 300;
// let sum = function(a){
//     console.log("view users are:- ", a);
//     let c = 300;
//     return function(b){
//         return a+b+c;
//     }
// }

// // console.log(sum(100));

// let ans = sum(200);
// console.log(ans);
// console.log(ans(200));
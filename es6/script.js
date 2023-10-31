// function greet(name="Guest"){
//     console.log(`${name} has joined the meeting`);
// }

// greet();
// greet("Akhil")


// Destuctring 
// let arr = [1,2,3,4,5,6,7,8];
// // let firstNumber = arr[0];
// // console.log(firstNumber);

// let [a,b,c,,,d] = arr;
// console.log(a,b,c,d);
// console.log(arr);

let person = {
    firstName:"Akhil",
    lastName:"Sharma",
    age:20,
    qualification:"Btech + Mtech + PHD pursuing"
};


let {qualification, age} = person;
console.log(qualification, age);








// const mySet = new Set();
// mySet.add(1)
// mySet.add(2)
// mySet.add(3)
// mySet.add(4)
// mySet.add(4)
// mySet.add(3)
// mySet.add(2)

// // console.log(mySet);
// mySet.forEach((num)=>{
//     console.log(num);
// })

// console.log(mySet.delete(3));
// console.log(mySet);



// let numbers = [1,2,3,4,5,6,7,8,9];
// let foundNumber = numbers.findIndex((number)=>{
//     return number < 4;
// })

// console.log(foundNumber);






//rest and spread opeartors
// let user = require("./module.js"){}
// import {printName, age} from "./module.js";
// // import user from "./module.js";
// console.log(user);

// console.log(age(34));
// console.log(printName("jsdfg"));
// console.log(a);

// let arr1 = [1,2,3,4,5,6,7,8,9];

// let arr2 = [...arr1, 11,12,13,14,15];
// // console.log(arr2);


// function sumAll(a,b,...args){
//     // console.log(a*b);
//     let sum  = 0;
//     // console.log(args);
//     for(let arg of args){
//         sum = sum + arg
//     }
//     // console.log(sum);
// }
// sumAll(2,3,4,5,6,7,8,9,1,13);
// sumAll(2,3,4,5,6)
// sumAll(2,3,4);
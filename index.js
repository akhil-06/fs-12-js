// console.log("Hello World");
// console.log(9,"Akhil",true);

// var a = 90;

// console.log(a);
// function hello(){
//     var a1 = 70;
//     console.log(a);
// }

// hello()
// // console.log(a1);

// {
//     let a = 90;
//     console.log(a);
// }

// console.log(a);

// if(){

// }

// for(){

// }

// var a = 90;
// var a = 80;
// console.log(a);

// let b = 100;
// b = 200;

// const c = 300;
// c = 400;
// console.log(c);

// var a;
// a = 90;
// console.log(a);

// let a;
// a = 90;
// console.log(a);

// const a;
// a = 90;
// console.log(a);

// const c = 100;
// const c = 200;

// let num = 40;
// let geek = "Geekster JS";
// let bool = true;
// let n = null;
// let un = undefined;
// let big = BigInt(8239649123649012364192863412836421384);

// console.log(typeof num, typeof geek, typeof bool, typeof n, typeof un, typeof big);

// let sum = 5+9;
// let sub = 5-9;
// let mul = 5*9;
// let div = 5/9;
// let mod = 5%9;
// let expo = 5**2;
// console.log(sum,sub,mul,div,mod,expo);

// please do the comparision operator by yourelf
// console.log(5 == "5");
// console.log(5 === 50);

// if(5 > 7){
//     console.log("Yes 5 > 7");
// }else{
//     console.log('No');
// }

// console.log((7 > 5) ? console.log("Yes") : console.log("No"));

// for(var i=0;i<10;i++){
//     console.log(i);
// }

// let i = 0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let str = "";
// for(let i=1;i<=10;i++){
//     str = str + i + " ";
// }
// console.log(str);

// do{
//     console.log(i);
//     i++;
// }while(i<=10);

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

// function sum(a, b){
//     // console.log(a);
//     // console.log(b);
//     // console.log(a + b);
//     return a + b;
// }

// // let a = 4;
// // let b = 5;
// let ans = sum(3, 9);
// console.log(ans);

// // hoisting
// console.log(akhil);
// const akhil = 330;
// let a;
// console.log(a);
// a = 50;

// sum();

// function sum() {
//     console.log(8+9);
// }
// sum();

// let arr = [1,2,3,4,5,"true","akhil","false",1,2,3,4,56];

// function isEven(num){
//     return num% 2 == 0;
// }
// console.log(arr.some(isEven));
// console.log(arr.every(isEven));
// console.log(delete arr[3]);
// console.log(arr);
// let arrString = arr.toString();
// let arrrSlice = arr.slice(0, 5);
// let arrString = arr.join(" is ");
// arr.push(1,2,3,4);
// arr.pop();
// console.log(arrString);
// arr.unshift(1,2,3,45);
// arr.shift();
// arr.splice(3,6,"jsdhf","sakejhf",true);
// console.log(arrrSlice);
// console.log(arr.reverse());
// console.log(typeof arrString);

//strings

// let str = "Hello World!!!";
// str = str.replace("Hello", "Geeskter");
// console.log(str);
// let str2 = "Helzo World"
// str[2] = 'z';
// console.log(str);
// str = "Yadnika";
// console.log(str);
// console.log(str[9]);
// console.log(str.charAt(3));
// console.log(str.length);

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str.replace("Hello", "Geekster"));
// console.log(str2);

// let str = "Hello World!!!";
// console.log(str);
// let str2 = "I am MR.Akhil Sharma";
// let str3 = "from gurugram"
// let str5 = "SDE";
// let str6 = `My story ${str} ${str2} ${str3} ${str5}`;
// console.log(str6);
// console.log(str.concat(str2));
// console.log(str + str2);
// console.log("1" + 2);
// console.log(str.trim());
// console.log(str.includes("     Hello"));
// console.log(str.search("kjhfjake"));
// console.log(str.substring(2));
// console.log(str.slice(-3, -1));

// let str = "Hello World!!!";
// console.log(str);
// let arr = str.split(" ");
// console.log(arr);
// let str2 =  null;
// let str3 = String(str2);
// console.log(str3);
// console.log(typeof str3);
// console.log(str.substr(3, 1));

// objects
//little hearts
// let company = {
//     name:"Akhil",
//     GSTNo:2121212,
//     profit:20,
//     loss:100,
//     noOfemployyess:1,
//     "little hearts":[123231211212],
//     // 1:"jsdf",
//     color:["cyan"]
// };
// let keys = Object.keys(company);
// console.log(keys);

// for( let i in company){
//     // console.log(prop);
//     console.log(company[i]);
// }

// company["name"] = "AS tech solutions";
// company.color.push("green");
// console.log(company);
// delete company["GSTNo"];
// console.log(company);
// company["color"] = "Cyan";
// company["color"] = "red";
// company.color[0] = "yellow";
// console.log(company);
// console.log(company["1"]);
// console.log(company["little hearts"]);
// console.log(company["profit"]);

// function sum(){
//     // console.log(3 + 5);
//     var a = 9;
//     return 3+5;
// }
// console.log(a);

// let ans = sum();
// console.log(ans);

// var name = "Akhil Sharma";

// function global(){
//     var a = 23;
//     function innerGlobal(){
//         console.log(name);
//     }
//     innerGlobal();
// }

// global();

// function c(){
//     console.log("c");
// }

// function b(){
//     c();
//     console.log("b");
// }

// function a(){
//     b();
//     console.log("a");
// }
// a();
// console.log("global");




// var name = "sldk";
// function sum(){
//     console.log(name);
// }
// sum();


// var a = 30;
// let b = 10;
// function outer() {
//   var out = 10;
//   function inner() {
//     function innerInner() {
//       var b = 100;
//       console.log(a, out);
//     }
//     innerInner();
//   }
//   inner();
//   console.log(b);
// }
// outer();



// function sum(a,b){
//     console.log(a+b);
// }
// sum(2,4,5,6,6);

// let a = 30;


//function expression
// let ans = functions sum(a,b){
//     console.log(a+b);
// };

//anonymous function expression
// let ans = function(a,b){
//     console.log(a+b);
// };

// ans(2,4);

//passing function as a argument

// let factorial = function fact(n){
//     let ans = 1;
//     for(let i=1;i<=n;i++){
//         ans = ans * i;
//     }
//     return ans;
// }

// function nCr(n,r,npiun){
//     return npiun(n)/ (npiun(r) * npiun(n-r));
// }

// console.log(nCr(5,2,factorial));


//callback functions

// function sayName(){
//     console.log("call back is exceuted");
// }

// setTimeout(sayName, 2000);









// const square = (x)=>x*x;
// let ans = square(10);
// console.log(ans);


// let ans = (function (x, y){
//     console.log(x+y);
// })(4,9);

// console.log(ans);

// var a = "geekster";
// (function(){

//    var a = "sdfaew"
//     function sum(){
//         console.log("inside IIFE, becomes private cant acces this");
//     }

//     console.log(a);
//     sum();
// })();

// console.log(a);
// sum();



// (function (x){
//     console.log(x*10 + 50);
// })(5);








// let arr = ['4red', '1000green', '3brown', '32yellow'];
// let arr = [4,1,1000,32,3]
// // console.log(arr.sort());
// function comaprator(a,b){
//     return a-b;
// }
// arr.sort(comaprator)

// console.log(arr);



// let arr = [43,12,234];

// arr.forEach((val)=>{
    
// })

// console.log(arr);

// let ans = arr.map((val, index, arr)=>{
//     console.log("val", val);
//     console.log("index", index);
//     console.log("arr", arr);
//     return val * 10;
// });

// console.log(ans);
// console.log(arr);


// for(let numbers of arr){
//     console.log(numbers);
// }


// let arr = [1,6,32,4,54,32,43,21];

// let ans = arr.reduce((val1,val2)=>{
//     return (val1+val2);
// })

// console.log(ans);

// let ans = arr.filter((val, index, arr)=>{
//     // console.log("val", val);
//     // console.log("index", index);
//     // console.log("arr", arr);
//     return (val > 10 && val % 2 == 0);
// });
// console.log(ans);


// let arr=[5,3,9,10,2];
// let ans=arr.filter((val)=>{
//     return val%2==0;
// } )
// let square=ans.map((val)=>{
//     return val*val;
// })

// let sum=square.reduce((val1,val2)=>{
//     return val1+val2;
// })

// console.log(ans);
// console.log(square);
// console.log(sum);






// function repeatString(str, num){
//     if(num < 0){
//         return "";
//     };

//     let repeatedString1 = "";
//     for(let i=0;i<num;i++){
//         repeatedString1 = repeatedString1 + str;
//     }
//     return repeatedString1;
// }

// let ans = repeatString("akhil",4);
// console.log(ans);


// function largest(arr){
//     let result = [];
//     for(let i=0; i<arr.length;i++){
//         let largestNumberinRow = arr[i][0];
//         for(let j=1;j<arr[i].length;j++){
//             if(arr[i][j] > largestNumberinRow){
//                 largestNumberinRow = arr[i][j];
//             }
//         }
//         result.push(largestNumberinRow);
//     }
//     return result;
// }
// let arr = [[1,2,3,4],[4,5,6,7],[1,7,8,9,10],[43,32,34,345,54]];
// console.log(largest(arr));





// let num = true;
// let ans = String(num);
// console.log(typeof ans);




function falyvalue(arr){
    return arr.filter(Boolean);
};
let arr = ["",7,undefined, 83249238,"ksjdhf", NaN];
console.log(falyvalue(arr));






























































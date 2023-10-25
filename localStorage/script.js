
function validateForm(){
    var name = document.forms["RegForm"]["Name"].value;
    var email = document.forms["RegForm"]["EMail"].value;
    var password = document.forms["RegForm"]["Password"].value;
    var confirmPassword = document.forms["RegForm"]["Confirm"].value;

    if(name ==""){
        alert("Name must be filled out");
        return false;
    }
    if(email ==""){
        alert("email must be filled out");
        return false;
    }
    if(password ==""){
        alert("password must be filled out");
        return false;
    }
    if(confirmPassword ==""){
        alert("confirm password must be filled out");
        return false;
    }
    if(password === confirmPassword){
        if(storeInLocalStorage()){
            alert("registration is done successfully")
            return true;
        }else{
            return false;
        }
    }else{
        alert("Passwords do not match");
        return false;
    }

return true;
}


var arr = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) :[];

console.log(arr);
function storeInLocalStorage(){
    var name = document.forms["RegForm"]["Name"].value;
    var email = document.forms["RegForm"]["EMail"].value;
    var password = document.forms["RegForm"]["Password"].value;
    var confirmPassword = document.forms["RegForm"]["Confirm"].value;

    let obj = {
        Name: name,
        Email: email,
        Password: password,
        ConfirmPassword:confirmPassword
    }
    // console.log(obj);
    var userExists = arr.some(user => user.email === obj.Email);
    console.log(userExists);

    if(userExists){
        return new Error({error:'user exixts'})
    }else{
        arr.push(obj);
    }

    localStorage.setItem('user', JSON.stringify(arr));
}










// // let likecount = 0;
// // let dislikecount = 0;
// function likeBtn() {
//   likecount++;
//   document.querySelector("#likes").innerText = likecount;

//   localStorage.setItem("dogLike", likecount);
// }

// function dilikeBtn() {
//   dislikecount++;
//   document.querySelector("#dislikes").innerText = dislikecount;
//   localStorage.setItem("dogdisLike", dislikecount);
// }

// document.getElementById("likeBtn").addEventListener("click", likeBtn);
// var likecount;
// if (localStorage.getItem("dogLike") === null) {
//   likecount = 0;
// } else {
//   likecount = localStorage.getItem("dogLike");
// }
// document.querySelector("#likes").innerText = likecount;

// document.getElementById("dislikeBtn").addEventListener("click", dilikeBtn);
// var dislikecount = localStorage.getItem("dogdisLike");
// document.querySelector("#dislikes").innerText = dislikecount;

// // let arr = [1,2,3,4,5];
// // let stringArr = JSON.stringify(arr);
// // localStorage.setItem("myArr", stringArr);

// // let myArr = JSON.parse(localStorage.getItem("myArr"));
// // console.log(myArr);

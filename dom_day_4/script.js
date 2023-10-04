
// let createMenu = (name)=>{
//     let liElement = document.createElement("li");
//     console.log(liElement);
//     liElement.innerText = name;
//     liElement.style.color = "cyan";
//     return liElement;
// }


// let menu = document.querySelector(".menu");
// menu.appendChild(createMenu("Contact"))
// menu.appendChild(createMenu("About US"))
// menu.appendChild(createMenu("Carrer"))
// menu.appendChild(createMenu("Map"))
// menu.appendChild(createMenu("Phone Number"))
// menu.appendChild(createMenu("Location"))
// menu.appendChild(createMenu("Reviews"))





// let parent = document.getElementById("parent");
// let child = document.getElementById("child");
// console.log(parent, child);

// parent.removeChild(child);

// console.log(parent);


function filterList(){
    let gender = document.querySelector('input[name="gender"]:checked').value;
    console.log(gender);

    let genderList = document.querySelectorAll("#mylist li");
    var arr = Array.from(genderList);
    console.log(arr);

    genderList.forEach((item)=>{
        console.log(item.dataset.gender);
        if(item.dataset.gender === gender){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
}














// console.log("hello world!!!");

// let div1 = document.createElement("div");
// // console.log(div1);
// let div2 = document.getElementById("div2")
// div1.style.height = '300px'
// div1.style.width = '300px'
// div1.style.backgroundColor = 'cyan'
// div1.style.color = 'red'
// div1.style.textAlign = 'center'
// div1.style.fontSize = '30px';

// // console.log(document.body.div2);
// div1.innerText = "Welcome to Geejkster with Akhil Sharma";
// div1.innerHTML = "<p> Welcome to Geejkster with Akhil Sharma </p> <p>jsdfkcjae</p>";


// div2.appendChild(div1);
// document.body.div.appendChild(div1);
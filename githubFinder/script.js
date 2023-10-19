let searchForm = document.querySelector(".search-form");
let userCardContainer = document.querySelector(".user-card");
let loader = document.querySelector(".loader");




let showUser = (data) =>{
    console.log(data);
    if(data.message == 'Not Found'){
        loader.innerText = 'User Not Found';
        // userCardContainer.innerHTML = loader.innerHTML
    }else{
        let userCardHtml = 
    `
    <p>${data.public_repos}</p>
    `
    userCardContainer.innerHTML = userCardHtml
    }
}


let getUser =async () => {
    let keyword = document.querySelector(".keyword");
    console.log(keyword.value);
    if(keyword.value.length <= 0){
        userCardContainer.innerHTML = loader.innerHTML;
    }else{
        let response = await fetch(`https://api.github.com/users/${keyword.value}`);
        let result = await response.json();
        // console.log(result);
        showUser(result);
    }
}

searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    getUser();
})
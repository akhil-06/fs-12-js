const autoSuggestion = (e)=>{
    console.log(e);
    displayResults(e.target.value)
}



const displayResults = (searchQuery) => {
  let parent = document.getElementById("search_result_container");
//   console.log(parent);

const filterEmojiList = emojiList.filter(e=>{
    
})

  emojiList.forEach((e) => {
    // console.log(e);
    let new_row = document.createElement("tr");
    let new_emoji = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_description = document.createElement("td");

    new_emoji.innerText = e.emoji;
    new_aliases.innerText = e.aliases.join(", ");
    new_description.innerText = e.description;

    new_emoji.classList.add("emoji");
    new_aliases.classList.add("aliases");
    new_description.classList.add("desc");

    new_row.appendChild(new_emoji)
    new_row.appendChild(new_aliases)
    new_row.appendChild(new_description)

    parent.appendChild(new_row);
  });
};


document.getElementById("search_field").addEventListener("keyup",autoSuggestion)
window.onload = () => displayResults();

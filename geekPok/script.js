// console.log("sj");
// 1st step is fetch the pokemons

let fetchPokemons = () => {
    let pokeArray = [];
    for(let i=1;i<=151;i++){
        let pokeURL = `https://pokeapi.co/api/v2/pokemon/${i}`;
        // console.log(pokeURL);

        // pokeArray.push(fetch(pokeURL)
        // .then(res=> res.json()))

        // fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     pokeArray.push(data)
        //     console.log(pokeArray);
        //     // console.log(data);
        // })

        pokeArray.push(fetch(pokeURL).then(res=>res.json()));

    }
    Promise.all(pokeArray)
    .then(singlepokemon=>{
        // console.log(singlepokemon);
        let updatedPokeArray = singlepokemon.map(pokemon=>{
            return {
            id: pokemon.id,
            image: pokemon.species.url,
            name: pokemon.name,
            type: pokemon.types[0].type.name
            }
        })
        createpokeonCards(updatedPokeArray);
        // pokeArray = updatedPokeArray
        // console.log(pokeArray);
    })
    console.log(pokeArray);
    // craetecards(updatedPokeArray)
    // let updatedPokeArray = pokeArray.map()
}

fetchPokemons()





















// let p1 = Promise.resolve(3);
// let p2 = Promise.resolve("Resolved");
// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res("p3 os done now");
//     }, 1000)
// });
// let p4 = Promise.resolve("sjdhckaefc")


// Promise.all([p1, p2, p3, p4])
// .then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(`Error: ${error}`);
// })
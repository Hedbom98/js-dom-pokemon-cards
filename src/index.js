
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
const pokemonListUL = document.querySelector(".cards")


function getImages(object){
    let pokemonImages = []
    pokemonImages.push(object.other["official-artwork"].front_default)
        
    for(let key in object){
        if(object.hasOwnProperty(key)){
            if(object[key] != null){
                if(typeof object[key] === 'string'){
                    pokemonImages.push(object[key])
                }
            }
        }
    }
    console.log(pokemonImages)
    return pokemonImages
}
   




let i = 1;

function toggleImage2(cardIMG, object){
    const images = getImages(object)
    if(i === images.length - 1 || i >= images.length){
        i = 0;
    }
    cardIMG.src = images[i]
    i++;
    
}





function renderTasks(){
    pokemonListUL.innerHTML = ""

    for(let i = 0; i < data.length; i++){
        const pokemon = data[i]
        const pokemonLi = document.createElement('li')
        
        pokemonLi.setAttribute('class', 'card')

        const cardTitle = document.createElement('h2')
        cardTitle.setAttribute('class', 'card--title')
        cardTitle.innerHTML = pokemon.name
        pokemonLi.appendChild(cardTitle)

        const cardIMG = document.createElement('img')
        cardIMG.setAttribute('class', 'card--img')
        cardIMG.setAttribute('width', '256')
        cardIMG.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)
        
        
        cardIMG.addEventListener('click', () => {toggleImage2(cardIMG, pokemon.sprites)})
        pokemonLi.appendChild(cardIMG)

        const cardText = document.createElement('ul')
        cardText.setAttribute('class', 'card--text')
        pokemonLi.appendChild(cardText)
        
        const cardHP = document.createElement('li')
        cardHP.setAttribute('class', 'card--attribute-text');
        cardHP.innerHTML = 'HP: ' + pokemon.stats[0].base_stat
        cardText.appendChild(cardHP)

        const cardAttack = document.createElement('li')
        cardAttack.setAttribute('class', 'card--attribute-text');
        cardAttack.innerHTML = 'ATTACK: ' + pokemon.stats[1].base_stat
        cardText.appendChild(cardAttack)

        const cardDefense = document.createElement('li')
        cardDefense.setAttribute('class', 'card--attribute-text');
        cardDefense.innerHTML = 'DEFENSE: ' + pokemon.stats[2].base_stat
        cardText.appendChild(cardDefense)

        const cardSpecialAttack = document.createElement('li')
        cardSpecialAttack.setAttribute('class', 'card--attribute-text');
        cardSpecialAttack.innerHTML = 'SPECIAL-ATTACK: ' + pokemon.stats[3].base_stat
        cardText.appendChild(cardSpecialAttack)

        const cardSpecialDefense = document.createElement('li')
        cardSpecialDefense.setAttribute('class', 'card--attribute-text');
        cardSpecialDefense.innerHTML = 'DEFENSE: ' + pokemon.stats[4].base_stat
        cardText.appendChild(cardSpecialDefense)

        const cardSpeed = document.createElement('li')
        cardSpeed.setAttribute('class', 'card--attribute-text');
        cardSpeed.innerHTML = 'SPEED: ' + pokemon.stats[5].base_stat
        cardText.appendChild(cardSpeed)


        //Extension
        const cardGamesDescription = document.createElement('h3')
        cardGamesDescription.innerHTML = 'Appears in these games: '
        pokemonLi.appendChild(cardGamesDescription)

        const cardGames = document.createElement('p')
        for(let e = 0; e < pokemon.game_indices.length; e++){
        
            if(e === pokemon.game_indices.length-1){
                cardGames.innerHTML += pokemon.game_indices[e].version.name + '.'
            } else{
                cardGames.innerHTML += pokemon.game_indices[e].version.name + ', '
            }
        }
        pokemonLi.appendChild(cardGames)

        pokemonListUL.appendChild(pokemonLi)
    }
}

function main(){
    renderTasks()
}

main()
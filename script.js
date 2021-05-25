// Create a request variable and assign a new XMLHttpRequest object to it.
var num = ""

function poke_all(link){  

  var poke_data_request = new XMLHttpRequest()

  poke_data_request.open('GET', link, true)

  poke_data_request.onload = function () {

    var data = JSON.parse(this.response)
    poke_name = data.forms[0].name
    //console.log(`Name: ${poke_name}`)
    document.getElementById("name").innerHTML = `Name: ${poke_name}`;

    poke_sprite = data.sprites.front_default
    //console.log(`Sprite Link: ${poke_sprite}`)
    document.getElementById("sprite").src = poke_sprite;

    poke_hp = data.stats[0].base_stat
    //console.log(`HP: ${poke_hp}`)
    document.getElementById("hp").innerHTML = `HP: ${poke_hp}`;

    poke_atk = data.stats[1].base_stat
    //console.log(`Attack: ${poke_atk}`)
    document.getElementById("atk").innerHTML = `Attack: ${poke_atk}`;

    poke_def = data.stats[2].base_stat
    //console.log(`Defense: ${poke_def}`)
    document.getElementById("def").innerHTML = `Defense: ${poke_def}`;

    poke_sp_atk = data.stats[3].base_stat
    //console.log(`Special Attack: ${poke_sp_atk}`)
    document.getElementById("sp-atk").innerHTML = `Special Attack: ${poke_sp_atk}`;

    poke_sp_def = data.stats[4].base_stat
    //console.log(`Special Defense: ${poke_def}`)
    document.getElementById("sp-def").innerHTML = `Special Defense: ${poke_sp_def}`;

    poke_spd = data.stats[5].base_stat
    //console.log(`Speed: ${poke_spd}`)
    document.getElementById("spd").innerHTML = `Speed: ${poke_spd}`;

    poke_species = data.species.url
    num = data.id

    /*var evo_page =  new XMLHttpRequest()
    evo_page.open('GET', poke_species, true)
    evo_page.onload = function (){
      var data = JSON.parse(this.response)
      poke_evo = data.evolution_chain.url
      
      var evolutions_request = new XMLHttpRequest()
      evolutions_request.open('GET', poke_evo,true)

    }
    evo_page.send()*/    
  }
  //Get the final stage to function
  var species_page = new XMLHttpRequest()
  species_page.open('GET', link, true)
  species_page.onload = function () {
    var data = JSON.parse(this.response)
    poke_species = data.species.url
    //console.log('poke_species',poke_species)
    var evo_page =  new XMLHttpRequest()
    evo_page.open('GET', poke_species, true)
    evo_page.onload = function (){
      var data = JSON.parse(this.response)
      poke_evo = data.evolution_chain.url
      //console.log('poke_evo',poke_evo)
      var evolution_data_request = new XMLHttpRequest()
      evolution_data_request.open('GET', poke_evo, )
      evolution_data_request.onload = function() {
        var data = JSON.parse(this.response)  
        evo_chain_names = []
        current_poke =  data.chain

          while (current_poke.evolves_to.length > 0){
            evo_chain_names.push(current_poke.species.name)
            current_poke = current_poke.evolves_to[0]
          } 
          
        evo_chain_names.push(current_poke.species.name);

       /* else {
          evo_chain_names.push(current_poke.species.name)
        }*/
        
        //evo_chain_names.push(current_poke[0].species.name)
        console.log(evo_chain_names)
      }
      evolution_data_request.send()
      
    }
    evo_page.send()
  } 
  species_page.send()
  

  

  poke_data_request.send()
}


function poke_random() {
  num = Math.floor(Math.random()*898)

  var poke_link = `https://pokeapi.co/api/v2/pokemon/${num}`
  //console.log(`Link: ${poke_link}`)

  poke_all(poke_link)
}

poke_random()

function poke_next(){
  num = num+1
  var poke_link_next = `https://pokeapi.co/api/v2/pokemon/${num}`
  poke_all(poke_link_next)
}

function poke_prev(){
  num = num-1
  var poke_link_prev = `https://pokeapi.co/api/v2/pokemon/${num}`
  poke_all(poke_link_prev)
}


function search(term_parameter){
  var poke_link = `https://pokeapi.co/api/v2/pokemon/${term_parameter}`
  poke_all(poke_link)
}


var input = document.getElementById("searchBar");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode !== 13) {

    event.preventDefault();

  }
  else {
    var search_term = document.getElementById("searchBar").value;
    search(search_term)
  }
});

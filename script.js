// Create a request variable and assign a new XMLHttpRequest object to it.
function poke_random() {
  var num = Math.floor(Math.random()*898)

  var poke_link = `https://pokeapi.co/api/v2/pokemon/${num}`
  //console.log(`Link: ${poke_link}`)


  var sprite = new XMLHttpRequest()

  sprite.open('GET', poke_link, true)

  sprite.onload = function () {

    var data = JSON.parse(this.response)
    poke_sprite = data.sprites.front_default
    //console.log(`Sprite Link: ${poke_sprite}`)
    document.getElementById("sprite").src = poke_sprite;
  }

  sprite.send()


  var poke_data_request = new XMLHttpRequest()

  poke_data_request.open('GET', poke_link, true)

  poke_data_request.onload = function () {

    var data = JSON.parse(this.response)
    poke_name = data.forms[0].name
    //console.log(`Name: ${poke_name}`)
    document.getElementById("name").innerHTML = `Name: ${poke_name}`;

    var data = JSON.parse(this.response)
    poke_hp = data.stats[0].base_stat
    //console.log(`HP: ${poke_hp}`)
    document.getElementById("hp").innerHTML = `HP: ${poke_hp}`;

    var data = JSON.parse(this.response)
    poke_atk = data.stats[1].base_stat
    //console.log(`Attack: ${poke_atk}`)
    document.getElementById("atk").innerHTML = `Attack: ${poke_atk}`;

    var data = JSON.parse(this.response)
    poke_def = data.stats[2].base_stat
    //console.log(`Defense: ${poke_def}`)
    document.getElementById("def").innerHTML = `Defense: ${poke_def}`;

    var data = JSON.parse(this.response)
    poke_sp_atk = data.stats[3].base_stat
    //console.log(`Special Attack: ${poke_sp_atk}`)
    document.getElementById("sp-atk").innerHTML = `Special Attack: ${poke_sp_atk}`;

    var data = JSON.parse(this.response)
    poke_sp_def = data.stats[4].base_stat
    //console.log(`Special Defense: ${poke_def}`)
    document.getElementById("sp-def").innerHTML = `Special Defense: ${poke_sp_def}`;

    var data = JSON.parse(this.response)
    poke_spd = data.stats[5].base_stat
    //console.log(`Speed: ${poke_spd}`)
    document.getElementById("spd").innerHTML = `Speed: ${poke_spd}`;
  }

 var species_page = new XMLHttpRequest()

  species_page.open('GET', poke_link, true)

  species_page.onload = function () {

    var data = JSON.parse(this.response)
    poke_species = data.species.url
    console.log(`Species Link: ${poke_species}`)
  }

  species_page.send()


  poke_data_request.send()
}
poke_random()
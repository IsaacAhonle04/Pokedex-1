// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://pokeapi.co/api/v2/pokemon', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  data.forEach((pokemon) => {
   // Log each pokemon's name
    console.log("name")
})

// Send request

console.log(request)

/* Basic Code for requesting API data
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://pokeapi.co/api/v2/pokemon', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  data.forEach((pokemon) => {
   // Log each pokemon's name
    console.log("name")
})

// Send request

console.log(request)

*/

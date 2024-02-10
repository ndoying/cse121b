// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
// Function to fetch and process list data
async function getPokemonList(url) {
    try {
      const response = await fetch(url);
  
      // Check if the fetch was successful
      if (response.ok) {
        const data = await response.json();
        doStuffList(data);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred during the fetch:", error);
    }
  }

function doStuff(data) {
  const outputElement = document.querySelector("#output");
//   const outputListElement = document.querySelector("#outputList");
  results = data;
  const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt = "Image of ${results.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}
function doStuffList(data) {
    console.log("Data structure:", data); // Log the structure of the received data
  
    const pokeList = data.results;
    const outputListElement = document.querySelector("#outputList");
  
    // Iterate through the list of Pokémon and create HTML for each
    pokeList.forEach(pokemon => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${pokemon.name}</strong>`;
      outputListElement.appendChild(listItem);
    });
  }
  
  



getPokemon(url);
console.log("second: ", results);
getPokemonList(urlList);
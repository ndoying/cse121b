myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
//   // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
//   // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);

//   function createListFromArray(array, targetElementId) {
//     // Get the target <ul> element by its ID
//     const targetElement = document.querySelector(`#${targetElementId}`);
  
//     // Loop over the array using forEach
//     array.forEach((item) => {
//       // Create an <li> element for each item in the array
//       let listItem = document.createElement("li");
//       listItem.textContent = item;
  
//       // Append the <li> element to the target <ul>
//       targetElement.appendChild(listItem);
//     });
//   }
  
//   // Example usage for the favorite foods array
//   createListFromArray(myInfo.favoriteFoods, "favorite-foods");

//   function createListFromArrayWithMap(array, targetElementId) {
//     // Get the target <ul> element by its ID
//     const targetElement = document.querySelector(`#${targetElementId}`);
  
//     // Use the map method to create an array of <li> elements
//     const listItems = array.map((item) => {
//       let listItem = document.createElement("li");
//       listItem.textContent = item;
//       return listItem;
//     });
  
//     // Append the array of <li> elements to the target <ul>
//     listItems.forEach((item) => {
//       targetElement.appendChild(item);
//     });
//   }
  
//   // Example usage for the favorite foods array
//   createListFromArrayWithMap(myInfo.favoriteFoods, "favorite-foods");

const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");
// requires a list, and a callback that will produce an html string for each item in the list
// returns a string of html
function generateListMarkup(list, templateCallback) {
  const htmlList = list.map(templateCallback);
  return htmlList.join("");
}
// requires an food string
// returns that string embedded in HTML markup
function foodsTemplate(food) {
  return `<li>${food}</li>`;
}

// requires an place string
// returns that string embedded in HTML markup
function placesTemplate(place) {
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(
  myInfo.favoriteFoods,
  foodsTemplate
);
placesElement.innerHTML = generateListMarkup(
  myInfo.placesLived,
  placesTemplate
);
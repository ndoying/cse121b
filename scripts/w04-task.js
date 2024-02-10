/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Neal Doying",
    photo: "images/nealdoying.jpeg",
    favoriteFoods: ["Tacos", "Lasagna", "Baked Mac & Cheese", "Cheese Burgers", "Root Beer Floats"],
    hobbies: ["Reading", "Playing the guitar", "Cycling"],
    placesLived: [],

};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Fontana, CA",
        length: "10 years"
    },
    {
        place: "San Jose, CA",
        length: "9 years"
    },
    {
        place: "Berkeley, CA",
        length: "2 years"
    },
    {
        place: "Tokyo, Japan",
        length: "10 years"
    },
    {
        place: "Darien, CT",
        length: "25 years"
    }
    
);


/* DOM Manipulation - Output */

/* Name */

document.getElementById("name").innerHTML = myProfile.name;

/* Photo with attributes */

document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(function(food) {
    var liElement = document.createElement("li");
    liElement.textContent = food;
    document.getElementById("favorite-foods").appendChild(liElement);
});

/* Hobbies List */

myProfile.hobbies.forEach(function(hobby) {
    var liElement = document.createElement("li");
    liElement.textContent = hobby;
    document.getElementById("hobbies").appendChild(liElement);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(function(place) {
    var dtElement = document.createElement("dt");
    dtElement.textContent = place.place;
    var ddElement = document.createElement("dd");
    ddElement.textContent = place.length;
    var placesLivedDL = document.getElementById("places-lived");
    placesLivedDL.appendChild(dtElement);
    placesLivedDL.appendChild(ddElement);
});

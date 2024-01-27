/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
    let fullName = "Neal Doying";
    let currentYear = 2024;
    let profilePicture = "images/nealdoying.jpeg";

/* Step 3 - Element Variables */
    const nameElement = document.getElementById("name");
    const foodElement = document.getElementById("food");
    const yearElement = document.querySelector("#year");
    const imageElement = document.getElementsByTagName("img")[0];

/* Step 4 - Adding Content */
    nameElement.innerHTML = `<strong>${fullName}</strong>`;
    yearElement.textContent = currentYear;

    imageElement.setAttribute("src", profilePicture);
    imageElement.setAttribute("alt", `Profle image of ${fullName}`);




/* Step 5 - Array */
let favoriteFoods = ["Tacos", "Lasagna", "Baked Mac & Cheese", "Cheese Burgers", "Root Beer Floats"];
foodElement.innerHTML = `${favoriteFoods}`;
let oneMoreItem = "Yakitori";
favoriteFoods.push(oneMoreItem);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;







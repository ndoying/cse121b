/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");

const templeList = [];

/* async displayTemples Function */
const displayTemples = (templesArray) => {
    templesArray.forEach(temple => {
        
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        const imgElement = document.createElement("img");
    
        h3Element.textContent = temple.templeName; 
        imgElement.src = temple.imageUrl; 
        imgElement.alt = temple.location; 
    
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
    
        templesElement.appendChild(articleElement);
      });
    };


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {

      const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
      
      const data = await response.json();
  
      templeList.push(...data); 
  
      displayTemples(templeList);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

/* reset Function */
const reset = () => {
    while (templesElement.firstChild) {
      templesElement.removeChild(templesElement.firstChild);
    }
  };

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
  
    const filter = document.getElementById("filtered");
  
    switch (filter.value) {
      case "utah":
        displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
        break;
      case "notutah":
        displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
        break;
      case "older":
        const olderTemples = temples.filter((temple) => {
            const templeYear = getYearFromDateString(temple.dedicated);
            if (!isNaN(templeYear)) {
                return templeYear < 1950;
            } else {
                return false;
            }
        });
        displayTemples(olderTemples);
        break;
    //   case "all":
       default:
        displayTemples(temples);
        break;
      
    }
  };

  function getYearFromDateString(dateString) {
    const dateParts = dateString.split(", ");
    const yearIndex = dateParts.findIndex(part => part.match(/^\d{4}$/));
    if (yearIndex !== -1) {
        return parseInt(dateParts[yearIndex], 10);
    } else {
        return NaN;
    }
}
  getTemples();

/* Event Listener */

  document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});




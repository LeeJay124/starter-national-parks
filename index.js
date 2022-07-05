//console.log(document);
// const heading = document.querySelector("h1");
// console.log(heading);
// const value = document.querySelector(".value");
// console.log(value);
// const button = document.querySelector("button");
// console.log(button);
// const area = document.querySelector(".area");
// console.log(value);
// const div = document.querySelector(".stat>div");
// console.log(div);
// const hello = document.querySelector(".hello");
// console.log(hello);
// Find all the buttons on the page
// const buttons = document.querySelectorAll("button");
// console.log(buttons);
// Get a list of all `<h3>` elements
// const heading3List = document.querySelectorAll("h3");

// // Iterate over the list and print each one
// for (let element of heading3List.values()) {
//   console.log(element);
// }
// for (let i = 0; i < heading3List.length; i++) {
//     const element = heading3List[i];
//     console.log(element);
//   }

// const divRatings = document.querySelectorAll("div.rating-display");
// for(let element of divRatings.values()){
//     console.log(element);
// }

// const divAreas = document.querySelectorAll("div.area-display");
// for(let i=0;i<divAreas.length;i++){
//     const element = divAreas[i];
//     console.log(element);
// }
const descriptions = document.querySelectorAll(".description-display");
// for (let desc of descriptions.values()) {
//     let content = desc.innerText;
//     console.log(content);
//   }
for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }
  // console.log(content);
  //desc.innerText = content;
  desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");
for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    //   rating.style.fontWeight = "bold";
    //   rating.style.color = "#3ba17c";
    rating.classList.add("high-rating");
    //rating.classList.remove("value");
  }
}

//get parks to create element with number of parks
const parks = document.querySelectorAll(".park-display");

//get number of parks
const numberParks = parks.length;

//create the new element
const newElement = document.createElement("div");

//add content to the new element
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);

// // Get the parent element of all parks
// const main = document.querySelector("main");

// // Select a single park
// const park = main.querySelector(".park-display");

// // Remove that park
// main.removeChild(park);

// const firstBtn = document.querySelector("button");
// firstBtn.addEventListener("click", (event) => {
//     console.log("You clicked the button", event);
//   });
//   firstBtn.addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
// allBtns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// });
// allBtns.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//       console.log(event.target.parentNode);
//     });
//   });
  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const park = event.target.parentNode;
      park.style.backgroundColor = "#c8e6c9";
    });
  });
  // Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
  console.log("You clicked the name sorter");
});
nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main element
    main.innerHTML = "";
    // 4. Create an array
const parksArray = Array.from(parksList);
// 5. Sort the array
parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});
 // Function for sorting by name
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };
  
  const sortByRating = (parkA, parkB)=>{
    const parkAValue = parkA.querySelector(".rating-display.stat .value").innerText;
    const parkBValue = parkB.querySelector(".rating-display.stat .value").innerText;
    const parkAFloat = parseFloat(parkAValue);
    const parkBFloat = parseFloat(parkBValue);
    return parkBFloat - parkAFloat;
  }
  // Function for handling the `ratingSorter` click
  const ratingSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByRating);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
  // Select the `nameSorter` link
  const ratingSorter = document.querySelector("#rating-sorter");
  
  // Add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);
  console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");

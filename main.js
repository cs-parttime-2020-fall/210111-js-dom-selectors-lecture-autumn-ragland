// console.log(`21 01 11 JS DOM Selectors Lecture`);

// select all elements with the class "parent"
let parents = document.querySelectorAll(".parent");

// console.log(parents);
// console.log(parents[0]);
// console.log(parents[1]);
// parents.forEach(parent => console.log(parent));

// iterate through all elements with the class "parent" to update the text color
parents.forEach(parent => parent.style.color = "red");
// iterate through all elements with the class "parent" to update the border styling
parents.forEach(parent => parent.style.border = "4px solid purple");

// select the element with the id "childOne"
let childOne = document.querySelector("#childOne");
// console.log(childOne); // check that correct element is selected
// output the content of the selected element
console.log(childOne.innerHTML);
// update the HTML of the selected element - able to use tags!
childOne.innerHTML = `<h1>This is the first child of the first parent</h1>`;

// select the element with the id "childThree"
let childThree = document.querySelector("#childThree");
// add the "class" attribute equal to "highlightedText" : `class = "highlighted text"`
childThree.setAttribute("class", "highlightedText");

// select the element with the id "childFour"
let childFour = document.querySelector("#childFour");
// update the HTML of the selected element - able to use tags!
childFour.innerHTML = "<a>Click Here!</a>";

// select the added link in the selected element
let childFourLink = childFour.querySelector("a");
// console.log(childFourLink); // check that correct element is selected
// add the href property equal to the code crew website
childFourLink.setAttribute("href", "http://www.code-crew.org");

// prompt the user for a value
let userValue = prompt("enter anything!");
// select the element with the id "childTwo"
let childTwo = document.querySelector("#childTwo");
// update the HTML of the selected element
childTwo.innerHTML = userValue;

// prompt the user to update text color
let updateColor = confirm("Do you want to update the text color?");
// if they choose "okay"
if(updateColor){
    // update the text color of the selected element
    childTwo.style.color = "white"
}

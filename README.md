# 21 01 11 JS DOM Selectors Lecture

## Set Up
1. Create an html file with an `h1` rendering the assignment title
1. Create a CSS file
1. Link the CSS file in the head of the HTML file using the `link` tag
1. Change the background color of the body 
1. Create a JS file to be sure that files are linked correctly
1. Link the JS file before the closing `body` tag using the `script` tag
1. Print the assignment title in the browser from the JS file to be sure that files are linked correctly
1. Open the HTML file in the browser

## Lecture

HTML
1. Create a div with a class `container`
1. Add an h1 element with the text Container
1. Add two divs with the class `parent`
1. In the first `parent` div add two more divs with the id `childOne` and `childTwo` respectively
1.  In the second `parent` div add two more divs with the id `childThree` and `childFour` respectively

CSS
1. Center align the text in the body
1. Give all div elements that are children of the container class element a thick white border with 1% margin and padding
1. Give the container a light blue background and 1% padding
1. Give all divs that are children of parent class elements a thick green border and 1% padding


JS
1. Select all elements with the class parent using `querySelectorAll` and save the returned array in the variable `parents`
1. Output the parents array to the console.
1. Output each element in the parent array by index position.
1. Update the text color of each element in the parent array using a for each.
1. Update the border of each element in the parent array using a for each.
1. Select the first child element in the first parent element using `querySelector` and save the returned element in the variable `childOne`
1. Log the content of childOne using `innerHTML`
1. Update the innerHTML and innerText of childOne
1. Select the first child element in the second parent element using `querySelector` and save the returned element in the variable `childThree`
1. Add the CSS class highlightedText to childThree using `setAttribute`
1. Select the second child element in the second parent element using `querySelector` and save the returned element in the variable `childFour`
1. Update the content of childFour to a link with the text Click Here using innerHTML
1. Select the link in childFour using querySelector
1. Set the hyperlink reference of the added link to the codecrew website
1. Prompt the user to enter anything and save the returned value
1. Select the second child element in the first parent element using `querySelector` and save the returned element in the variable `childTwo` then update the content to the user entered text
1. Ask the user to confirm updating the text color. If they choose `ok` update the text color to white.


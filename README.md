Question no 1 ans:

getElementById = It selects a specific element from the HTML file using the id attribute. It is used when a specific element is required.

getElementByClassName = It selects all the classes with the same name from the html file and brings them together. It is used when many classes have the same name and all elements are needed together.

querySelector = It uses CSS selectors to find only the first element.

querySelectorAll = It uses a CSS selector to extract all elements with the same name. It returns the elements as a node list.


Question no 2 ans:

The parent element of the DOM where the element will be added must first be called, then a new element must be created using the "document.createElement()" method. After creation, the new element must be appended to that parent using the "appendChild()" mathod.


Question no 3 ans:

Event bubbling is when a button is clicked, it goes to its parent, and from there, its parent moves all the way up to the top. It gradually rises up to the top of the HTML document.


Question no 4 ans:

Event Delegation means that instead of setting event listeners on child elements separately, the event listeners are directly set to their parents by selecting the children with the event dot target. This is done by bubbling the event from the element to its parent and so on to the document.

Question no 5 ans:

preventDefault() =
Prevent default is that it stops the browser's default page from reloading. But it cannot stop event bubbling. If you use it, the page will not automatically reload when you click on any button.

stopPropagation() =
Stop propagation is used to stop the event from bubbling when it is being propagated. It prevents the bubbling element from reaching its parent element.

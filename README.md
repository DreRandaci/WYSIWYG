# WYSIWYG
- [x] Create an array of objects that represents famous people (see structure below).
- [x] Create a text input in your DOM.
- [x] Beneath that, create a container, block element in your DOM.
- [x] Create a DOM element for each of the objects inside the container. Style your person elements however you like.
- [x] For every even numbered element, have a light yellow background.
- [x] For every odd numbered element, have a light blue background.
### Each element's DOM structure should be as shown below
- [] When you click on one of the person elements, a dotted border should appear around it.
- [x] When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
- [] When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
- [] When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

//correct
var counter = 0;
var outputEl = document.getElementById("outputEl");
for (; counter < 5; counter++) {
  // Give each person element a unique identifier
  outputEl.innerHTML += `<div class="person__container" id="person-${counter}"></div>`;
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
  });
});

//incorrect 
// containerEl will be an empty array
var containerEl = document.getElementsByClassName("person__container");

// Nothing will happen here since there is nothing in the array
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
  });
}

var counter = 0;
var outputEl = document.getElementById("outputEl");
for (; counter < 5; counter++) {
  // Give each person element a unique identifier
  outputEl.innerHTML += `<div class="person__container" id="person-${counter}"></div>`;
}
///////////////////////////
//html
<person>
  <header>Name and title go here</header>
  <section>Bio and image go here</section>
  <footer>Lifespan info goes here</footer>
</person>

//////////////////////////
//object structure
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}

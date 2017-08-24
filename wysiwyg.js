
//Create an array of objects that represents famous people (see structure below).
let famousRushHourStarsArray = 
[{
	  title: "Star of Rush Hour 1 and 2",
	  name: "Jackie Chan",
	  bio: "Hong Kong's cheeky, lovable and best known film star, Jackie Chan endured many years of long, hard work and multiple injuries to establish international success via his early beginnings in Hong Kong's manic martial arts cinema industry.",
	  image: "http://www.toptenz.net/wp-content/uploads/2015/04/chan2.gif"
		},
	  {lifespan: {
	    birth: 1954,
	    death: 3017
	  },
	  title: "Co-Star of Rush Hour 1 and 2",
	  name: "Chris Tucker",
	  bio: "At one point in time, Chris Tucker was the highest paid actor in Hollywood.",
	  image: "https://i.ytimg.com/vi/KPbeRsOGU3U/maxresdefault.jpg",
	  lifespan: {
	    birth: 1971,
	    death: 2020
	  }
	},
	{
	  title: "Versace Salesman in Rush Hour 2",
	  name: "Jeremy Piven",
	  bio: "He starred in the Travel Channel special Jeremy Piven's Journey of a Lifetime detailing his journey across India.",
	  image: "http://r.fod4.com/c=sq/s=w1000,pd1/o=80/http://p.fod4.com/p/channels/legacy/profile/1149646/jeremy_piven_bracelet.jpg",
	  lifespan: {
	    birth: 1965,
	    death: 2018
	  }
	}];

let personContainer = document.getElementById('personContainer');
let textInput = document.getElementById('textInput');
	
//Create a DOM element for each of the objects inside the container. Style your person elements however you like.
function addPersonToDom() {
	let person = '';
	for (let i = 0; i < famousRushHourStarsArray.length; i++) {
						//parent
	person += `<div id='personCardContainer' class='cardContainer'>`;
							//child
	person += 	`<person id='person' class ='child'>`;
								//grand child
	person += 		`<header class='grandChild'>${famousRushHourStarsArray[i].name}, ${famousRushHourStarsArray[i].title}`
	person +=		`</header>`;
								//grand child
	person += 		`<section class='grandChild'>${famousRushHourStarsArray[i].bio}`;
	person += 		`</section>`;
								//grand child
	person += 		`<div class='grandChild'>`;
									//great grand child
	person += 			`<img src='${famousRushHourStarsArray[i].image}' class='childOfGrandChild'>`;
	person += 		`</div>`;
	person += 	`</person>`;
	person += `</div>`;
	personContainer.innerHTML = person;
	};
};

addPersonToDom();

//declared here because the function has to fire first
let personCardContainer = document.getElementById('personCardContainer');
let selectedPerson;

//When you click on one of the person elements, a dotted border should appear around it.
for (let i = 0; i < personContainer.childNodes.length; i++) {
	// Event listeners are created
  personContainer.childNodes[i].addEventListener("click", function(e) {
    // Logic to execute when the element is clicked
    changeBorder(e);
    replaceBio();
  });
};

function changeBorder(e) {
	//for main card container
 if (e.target.classList.contains('cardContainer')) {
    selectedPerson = e.target;
    //for <person> element
  } else if (e.target.classList.contains('child')) {
    selectedPerson = e.target.parentNode;
    //for <header> and <section> and <div> wrapper elements
  } else if (e.target.classList.contains('grandChild')) {
    selectedPerson = e.target.parentNode.parentNode;
    //for image 
  } else if (e.target.classList.contains('childOfGrandChild')) {
    selectedPerson = e.target.parentNode.parentNode.parentNode; 
  };
  selectedPerson.classList.add('dottedBorder'); 
};

// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
function replaceBio() {
	textInput.focus();
	textInput.addEventListener('keyup', function(e) { 
		if (e.key === 'Enter') {
  		textInput.value = '';
		} else {
		let currentBio = selectedPerson.childNodes[0].childNodes[1].innerHTML = textInput.value;
		};
	});
};


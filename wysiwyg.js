
//Create an array of objects that represents famous people (see structure below).
let famousRushHourStarsArray = [
	{
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
	
//Create a DOM element for each of the objects inside the container. Style your person elements however you like.
function addPersonToDom() {
	let person = '';
	for (let i = 0; i < famousRushHourStarsArray.length; i++) {
	person += `<div id='personCardContainer'>`;
	person += 	`<person>`;
	person += 		`<header>${famousRushHourStarsArray[i].name}, ${famousRushHourStarsArray[i].title}</header>`;
	person += 		`<section>${famousRushHourStarsArray[i].bio}<div><img src='${famousRushHourStarsArray[i].image}'></div></section>`;
	person += 	`</person>`;
	person += `</div>`;
	personContainer.innerHTML = person;
	};
};
addPersonToDom();
let personCardContainer = document.getElementById('personCardContainer');
// console.log(personCardContainer)

//When you click on one of the person elements, a dotted border should appear around it.
personCardContainer.addEventListener('click', function(e) {
	if (e.target.id === 'personCardContainer' || e.target.localName === 'person') {
		personCardContainer.classList.add('dottedBorder');
	}
});







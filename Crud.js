// console.log("Crud");

//ID selectors 

// const headingElement = document.getElementById("heading");
// console.dir(headingElement); // prints key value pain

// Tag selectors

// const headingElementList  = document.getElementsByTagName("h1");
// console.log(headingElementList);

// class selectors

// const cricketClassElements = document.getElementsByClassName("cricket");
// console.log(cricketClassElements);

//-----------------css selector

// //querySelector
// const dirContainerElement = document.querySelector("h1");
// console.dir(dirContainerElement);


//querySelectorAll

// const dirContainerElement = document.querySelectorAll("h1");
// console.log(dirContainerElement);

//--------------------Editing Uddate---------

// const dirContainerElement = document.getElementById("container");
// console.dir(dirContainerElement);
// console.log(dirContainerElement);


// ----- Text
//1 innerHTML 

// dirContainerElement.innerHTML = `<h1> Thsi is from inner html</>`


//2 innerText

// dirContainerElement.innerText = `Hi there i am from inner text 
// and new line
// 3 rd line`

// textContent 
// dirContainerElement.textContent=`Hello there 
// next line `


// handle styles

// dirContainerElement.style.backgroundColor = "yellow"

// // divContainerElement.classList.add("red");
// divContainerElement.className = "cricket green"


//Deleting 

// const headingElement= document.getElementById("heading2");
// headingElement.remove();


// Create an Element



// const divContainerNewElement = document.createElement("div");

// divContainerNewElement.innerText = `Hey There i am created`
// divContainerNewElement.classList.add("red");

// const dirContainerElement =document.getElementById("container")



// const divContainerNewElement = document.createElement("div");

// // step 2
// divContainerNewElement.innerText = `Hey there I am Created`
// divContainerNewElement.classList.add("red")

// // step 3

// const bodyElement = document.body;
// bodyElement.append(divContainerNewElement)

// const divContianer = document.getElementById("container")
// divContianer.append(divContainerNewElement);
// divContianer.before(divContainerNewElement);
// divContianer.after(divContainerNewElement);

// const headingdiv = document.querySelector(".headingdiv");

// const parent = headingdiv.parentNode;

// console.log(parent);


// const parent = document.querySelector(".parent");


// console.log(parent.childNodes);

// const headingdiv = document.querySelector(".headingdiv");

// console.log(headingdiv.nextElementSibling);


// const heading = document.querySelector("#heading");
// heading.innerHTML = "web dev is osm...";
// heading.style.color = 'red';
// heading.style.fontSize = "100";

// const paregraph = document.createElement("p");
// paregraph.innerHTML = "I am from javascript";

// const parent = document.querySelector(".parent");
// parent.appendChild(paregraph);
// console.log(paregraph); 


// const subheading= document.createElement("h1");
// subheading.innerHTML = "I am there.......";
// parent.insertAdjacentElement("afterbegin" , subheading)

// console.log(parent); 

const button = document.getElementsByClassName(".btn");
const heding1 = document.getElementsByClassName(".heding1");

console.log(button)

button.addEventListener('click', function(){
    console.log("button Clicked");
});


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



const divContainerNewElement = document.createElement("div");

// step 2
divContainerNewElement.innerText = `Hey there I am Created`
divContainerNewElement.classList.add("red")

// step 3

const bodyElement = document.body;
bodyElement.append(divContainerNewElement)

// const divContianer = document.getElementById("container")
// divContianer.append(divContainerNewElement);
// divContianer.before(divContainerNewElement);
// divContianer.after(divContainerNewElement);


// console.log('Hello....');
// let school = null;
// console.log(typeof school,"school");


// const shashikant = {
//     name: "Shashikant",
//     age: 16,
//     isAdult: false,
//     rollnumber: 49,
//     address:{
//         pincode:40067,
//         road:'link',
//         district:'Mumbai'
//     },
//     subject:["maths","physics","english"],
// };

// const array =[1,2,23,5,6,7,8,];

// console.log(typeof shashikant);
// console.log(typeof array);


// const array = [1,2,3,4,5];
// console.log(typeof array, "Array");  // object


// const array = [1,2,3,4,5,'shashi',{name:'shashikant'}];

// console.log( array, "Array"); 

// const str = "12";
// const name = "12a"
// console.log(+str);
// console.log(Number(str));

// console.log(+name);
// console.log(Number(name));


// const person = {
//     name : "king",
//     age : 12,
//     "cur std" : 2,
//     schoolName : "Dayanad memorial foundation",
 
// };

// console.log(person);
// console.log(person["cur std"]);
// console.log(person.schoolName);
// delete person["cur std"];

// console.log(person);

// console.log(person["cur std"]);


// const arrays = [1,2,3,4,5,6];
// console.log(arrays.length);
// console.log(arrays);

// console.log(arrays[1]);

// console.log(arrays.length-1);

// arrays[2] =45;

// console.log(arrays);


// const arr = [1,2,3,4,6,];

// console.log(arr.length);

// const newLengthOfArr = arr.push(100);

// console.log(arr, newLengthOfArr);



// function sum(a, b) {
//     let sum = a + b;
  
//     return sum;
//   }
//   sum(5,5);

//   // IMPURE FUNCTION
//   function sum2(a, b) {
//     console.log("abcd"); // side effect
  
//     return a + b;
//   }
//   const addtion = sum2(1,2);
// console.log(addtion);

//   let count = 99;
  
//   // IMpure FUNCTION
//   function sum3(a, b) {
//     count = 1; // side effect
//     return a + b;
//   }
  
// function greet(name = "kk") {
    
//     console.log(`Hello, ${name}!`);
    
//   }
//   greet(undefined);


//   function greet(name = "Nathan") {
    
//     console.log(`Hello, ${name}!`);
    
//   }
//   greet(undefined);


// console.log(5%3);
// console.log(10%3);


// const obj = {
// //     name: "shashi",
// //     age:16,
// //     addresss:"Mumbai"
// // };

// // for (const key in obj){
// //     console.log(key + ":" +obj);
// // }


// Array

// const arrays =[1,2,3,4,5,100];

// console.log(arrays.length); //6

// // arrays.length=0;

// // console.log(arrays);

// console.log(arrays[1]); //2

// console.log(arrays[arrays.length-1]); //100

//edit

// arrays[2]=30;
// console.log(arrays); // [1, 2, 30, 4, 5, 100]

// push -> adding the element in the last

// const arr = [1,2,3,55,66,777,88];
 
// console.log(arr);

// const newLengthOfArr= arr.push(1000);

// console.log( newLengthOfArr);

// console.log(arr);

// const abhi = {
//     name : "abhijit",
//     class : 17,
//     rollNumber : 10,
// };

// console.log(abhi.name);


//pop -> removing the element from last 

// const arr = [1,2,3,55,66,777,88];

// console.log(arr, "Original array"); //1, 2, 3, 55, 66, 777, 88

// const popedValue = arr.pop();

// console.log(popedValue, "PopedValue"); //88

// console.log(arr,"after popping");//1, 2, 3, 55, 66, 777

// We are not creating a new array



// shift -> removing the element from the start


// const arr = [10,20,30,40,50,60];
// console.log(arr,"before shifting Array");

// const shiftedValue = arr.shift();

// console.log(shiftedValue, "shifted value");

// console.log(arr, "after shift");


// Unshift -. adding element in the start of the array


// const arr = [10,20,30,40,50,60];

// console.log(arr,"before unshifting Array");

// const newLengthOfArr = arr.unshift(1000);
// const newLengthOfArr1 = arr.unshift(2000);


// console.log(newLengthOfArr, "un-shifted value");//7
// console.log(newLengthOfArr1, "un-shifted value");//8

// console.log(arr, "after un-shift");


// console.log(a, "xample 2"); //undefined

// var a = 100; 


//-------------------Funtion -----------

// function sum(a,b){
//     const sum1=a+b;

//     return sum1;

// }
// //  console.log(sum(1,2));

//function declared a function named sum

// function sum(a,b){
//     let c =  a+b;
//     return c;

// }

// ------------ Function Expression ------------

// const abj = {};

// console(typeof abj);

// const sum = function(a,b){
//     return a+b;
// };

// console.log(sum(1,2)); //3
// console.log(sum(10,2));//12



//  ---------------- Function with CALL SITE ------


// function sum(a, b){
//     return a+b;
// }

// console.log(sum() , "sum()");
// console.log(sum(1),"sum(1)");
// console.log(sum(1,2),"sum(1,2)");
// console.log(sum(1,2,3,45,6),"sum(1,2,3,45,6)");


// ----------------- WHAT A FUNCTION  RETURNS -------------

// function sum(a, b){
//     let c = a + b;
// }

// console.log(sum()); // js function will return undefined


// function abc(){
//     return 1;

// }
// console.log(abc(), "abc()"); //1
 
// function abc2(){
//     return 1;

//     return 2;

// }
// console.log(abc2(), "abc2"); //1


// function sum(a = 0, b = 0) {
//     return a + b;
//   }
  
//   const result = sum(); // 0
//   const result2 = sum(100); // 100
//   const result3 = sum(100, 10); // 110
  
//   console.log(result, "result");
//   console.log(result2, "result 2");
//   console.log(result3, "result 3");
  
//   const res4 = sum(100, "20"); // "10020"
//   console.log(res4, "res 4");


// ------------Rest operator-----------

// function admissionToSchool(name, standard, ...info){
//     const student = {
//         name : name,
//         std: standard,
//         address : info[0],

//     };
//     console.log("abcd---------");
//     console.log(info, "rest info operator");
//     return student;
// }

// const arunObject = admissionToSchool("arun", 9);
// console.log(arunObject, "arun obj");

// const Shashikantobj = admissionToSchool(
//     'shashikant',
//     10,

//     "mumbai",
//     "father",
//     "mother",
//     "main huu",
//     122

// );

// console.log(Shashikantobj);




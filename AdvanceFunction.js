//console.log("Higher order function");

//function statement 
// function a(){
//     console.log("From a function");
// }
// a();


//Function expression
// let b = function(){
//     console.log("From function B");
// }
// b();

//Function Declaration  aka function statement 
// function b(){
//     console.log("function declaration");
// }
// b();

//Annnymous function

// (function (){
//     console.log("Annnymous function");
// }())



//Function expression
// var b = function (param1 , param2){
//     console.log(" call b");
   
// }
// b(1, 2);
//a();
    

//---------------------
// Arrow function

// let sum = (a, b) => {
//     return a+b;
// }

// const sum1 = sum(10,20);
// console.log(sum1);

// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }
// sum(10,20);

// Arguments -> 10, 20
// parameters -> a,b

// const sum = (a,b)=>{
//     //console.log(arguments, "arguments in array ");  // this is illegal
//     return a+b;
// }
// sum(10,20);




//--------------------try catch-------

// function sum(a, b){
//     try {
//         let c =a+b;
//         throw new Error("Not reachable");
//         return c;
//     }catch (error){
//         alert("Hey user there are some erroe");
//     }finally{
//         console.log("finally")
//     }
// }

// const result = sum(10,20);
// console.log(result, "Result");


// function abc(a, b){
//     console.log(a);
//     console.log(b);

// }
// abc(1, 2);
// abc("1","shashikant");
// abc([1,2,3,45,], {name : "shashi"});

// abc(
//     ()=>{
//         console.log("a");
//     },
//     function (){
//         console.log("b");
//     }

// );

// function abc(){
//     const obj = {
//         name : "Shashikant"
//     };
//     console.log(obj);
//     function sum(){
//         console.log("I am a function and not result");

//     }
//     return sum;
// }
// const result = abc();
// console.log(result);


// function greet(){
//     console.log("Hello function");

// }
// greet();    


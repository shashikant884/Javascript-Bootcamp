// ------------------------- SCOPING (SCOPE) ------------------------
// console.log("from Scoping");

// the js file is a global itself.
// Scop of var is global and functional 

// var a =10;
// console.log(a,"in global"); //10
// if(true){
//     console.log(a,"inside if block"); //10

// }

// console.log(a,"....");//10

// var a =12;
// console.log(a,"in global");
// if(true){
//     var a=1223;
//     console.log(a , "inside the if block");
// }
// console.log(a);
 
// 12, 1223, 1223

// js code cant be executed without an (EC )execution context -> GEC
// when there is function execution there is creation of new EC (Function execution context).

// when a new box is created 2 phases (parsing and execution ) follows.
// paring in js has 2 phase
// 1. Pharsing phase
// 2. execution phase.

// Return keywod
// 1. return the value to the BELOW BOX (BELOW EC)
// 2. DESTORY THE top most BOX (EC).

// var a = 12;
// console.log(a,"1");

// function abc() {
//   console.log(a,"2");
// }

// abc();

// console.log(a,"3");
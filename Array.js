// console.log("Hello.....");

// const arr = [1,2,3,4,5];
// console.log(arr);

// const arrCopy = arr;

// console.log(arrCopy);

// if(arr===arrCopy){
//     console.log("copying array");
// }else{
//     console.log(" not copying array");

// }

// console.log(arr === arrCopy);// True


// const arr = [1,2,3,4,5]; //abc@123
// const arr1 = [1,2,3,4,5]; //abc@122

// console.log(arr === arr1); //false


// const arr = [10,20,30,40,50]; 

 
// const newArray = [];  //abc@098

// for(let i = 0; i < arr[i]; i++){
//     const item = arr[i];
//     newArray.push(item);
// }

// console.log(arr, "Original Array"); //10,20,30,40,50
// console.log(newArray, "New Array"); //10,20,30,40,50
// console.log(newArray ===arr); // false


// const arr = [10,20,30,40,50]; 
// const arrCopy = [...arr];
// console.log(arrCopy, "Copy Array"); ////10,20,30,40,50
// console.log(arr, "original Array"); //10,20,30,40,50
// console.log(arrCopy === arr); // false


//Rest parameter

// function extractingArgs(...args){
//     return args[1];
// }


// function addAllArgs(...args){
//     let sumOfArgs = 0;
    
//     for(let i = 0; i<args.length; i++){
//         sumOfArgs = sumOfArgs+args[i];

//     }
//     console.log(sumOfArgs);  //45

//     return;
// }

// addAllArgs(1,2,3,4,5,6,7,8,9); 


// to do
// function arr(...info){
//     let information ;
//     for(let i = 0; i<info.length ; i++){
//         information = info[i];
//         console.log(information); //1,2,3,4,5,6
//     }
    
    
//     // console.log(information);
//     return;
// } 
// arr(1,2,3,4,5,6);   

// Slice method

// const arr = [10,20,30,40,50]; 
// const arr1 = arr.slice(1,2);
// const arr2 = arr.slice(2,4);
// console.log(arr1);//20
// console.log(arr2, "2-4");//30 , 40


//splice method
// const arr = [10,20,30,40,50]; 
// const arr1 = arr.splice(2,5);
// console.log( arr1); // 30,40,50
// console.log( arr); // 10,20


//reverse an array

// const arr = [0,9,8,7,6,5,4,3,2,1];
// let reversArr =[];
// for(let i=arr.length-1; i>=0; i--){
//     reversArr.push(arr[i]); 
     

// }
// console.log(reversArr); 

// const arr = [0,9,8,7,6,5,4,3,2,1];
// const arrReverse = arr.reverse();
// console.log(arrReverse);


// const originalArr = [10,20,30,40,50]; 
// console.log(originalArr);

// let reversArr = [];

// originalArr.forEach((element)=> {
//     reversArr.unshift(element);

// });

// console.log(reversArr,"Revers Array");



// const  arr= Array();
// console.log(arr);

// const arr = [1,2,3,5,6,7,8,9];
// console.log( arr.length);


console.log("Start...")

setTimeout (function ab() {
    console.log("ab...");
},5000);

console.log("End");

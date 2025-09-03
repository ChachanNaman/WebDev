//Variable declaring or hoisting
console.log(age); 
var age = 25;
//will show undefined coz called earlier before declaration

//Function declaring or hoisting
saymyname("naman");
function saymyname(name){
    console.log(name);
}

//using let and cons keyword
// console.log(age1);
// var age1 = 29;
//will give error, not undefined thing
//i will use this coz it will throw error 

//Creating class and defining its object
class employe{

}
const object1 = new employe();

//defining object1 after the class will works , but before will throw error means class-object hoisting is not possible

let greet = function() {
    console.log("hello my name is chachan");
}
greet();

//passing one function in another function
function greet1(){
    console.log("hello ji i am greet 1");
}

function greet2(greet1 , fullname){
    console.log("Hello ji i am greet 2" , fullname);
    greet1();
}

greet2(greet1 , "and my name is naman");


//function is returning
function solve(number1){
    return function(number1){
        return number1*number1;
    }
}
let ans = solve(20);
let finalans = ans(10);
console.log(finalans);

//creating functions as data types in an array
const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
];
let first = arr[0];
let anss = first(10,5);
console.log(anss);

//using function in a object
let obj = {
    age : 20,
    wt : 60,
    greet() {
        console.log("hello ji naman here");
    }
};

obj.greet();
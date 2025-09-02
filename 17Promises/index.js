//Promise code :

//Pending state ->
// let firstpromise = new Promise((resolve, reject) => {
//         console.log("Hello Naman");
        
// }); //this will give output as pending when i will type firstpromise in console 
//output -> Promise {<pending>}

//Fulfilled state-> 
// let firstpromise = new Promise((resolve, reject) => {
//         console.log("Hello Naman");
//         resolve(1001);
        
// });//will give output -> Promise {<fulfilled>: 1001} as i wrote resolve

//Rejected state ->
// let firstpromise = new Promise((resolve, reject) => {
//         console.log("Hello Naman");
//         reject(new Error("Internal server error bro !"));
        
// });
//will print error -> index.js:20 Uncaught (in promise) Error: Internal server error bro !

//I can write Asynchronous code in the promise code to make it run in background
// let firstpromise = new Promise((resolve, reject) => {
//         //setTimeout(function , timer)
//         setTimeout(function saymyname(){
//             console.log("My name is Naman !");
//         }, 10000);//this promise will print after 10 second but status of promise will be pending
//         //to make promise show Fulfill , i have to write Resolve()
//         resolve(1001);// Promise {<fulfilled>: 1001} will show fulfilled 
// });

//Then and Catch code -> 
// let promise1 = new Promise((resolve, reject) => {
//     //normal promise code if sucess then pass resolve statement and if false then pass reject statement
//     let sucess = false;
//     if(sucess){
//         resolve("Promise Fulfilled");
//     }
//     else{
//         reject("Promise Rejected");
//     }
// })
// promise1.then((statement) => {
//     console.log("Then ka message hai : " + statement);
// }).catch((statement) => {
//     console.log("Error hai : " + statement);
// }).finally((statement) =>{
//     console.log("Mein toh final hu chalunga he : " + statement);
// })
//this code will run accordingly then or catch
//finally code will always run 
//I can use multiple then() statements , have to use return statement in each then() for the next then to print message

//Promise.all([]) -> it creates a new promise of all the promises in the array and will marked resolve if all promises 
//in array are resolved , otherwise if one fail then new promise will also fail

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First"); //1 second and resolved and after 1 second print "First"
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second"); 
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Third"); 
});

Promise.all([promise1, promise2, promise3])
.then((values) => {
    console.log(values);
});
//wil print all first second third after their timer and then return all these to new promise and will then run -> then() statement
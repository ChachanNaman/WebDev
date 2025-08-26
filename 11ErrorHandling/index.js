//complite time error
// console.log(8; //this red line denotes the compile time error , told us before exection

//runtime error
// console.log(x)     //as its not defined it will throw error in terminal

//Try-Catch block
try{
    console.log("i am running peacefully");
    console.log(x); //will throw error as not declared x 
    console.log("i will not execute as error there in upper line of code");
}
catch(error){
    console.log("Error caught ! i am running "); //will run coz after console.log(x) 

    console.log("error found at :", error); //will give where error is 
}

//Finally-block
try{
    console.log("i am running peacefully");
    console.log(x); //will throw error as not declared x 
    console.log("i will not execute as error there in upper line of code");
}
catch(error){
    console.log("Error caught ! i am running "); //will run coz after console.log(x) 

    console.log("Error found at :", error); //will give where error is 
}
finally{
    console.log("I am in finally block , will run anyway");
}

//Lets create custom error
let errorcode = 100;
if(errorcode == 100){
    throw new Error("invalid json !");   // from here i am printing my own error 
}
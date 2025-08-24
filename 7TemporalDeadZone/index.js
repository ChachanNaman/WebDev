//Global Scope
var age = 16;
console.log(age);
if(true){
    console.log(age);
}
for(let i = 0 ; i <2 ; i++){
    console.log(age);
}
//soo globally described variable will work everywhere

//Function Scope
function greet(){
    var name = "naman";
    console.log("hello ji my name is ", name);
}
greet();
// console.log(name); //will not as it is out of function called

//Block Scope 
// var -> is not blocked scope  -> means i can that var outside of the block
//let -> is blocked scope -> means i cant use that let var outside of the block
{
    let agee = 10;
    console.log(agee);
}
// console.log(agee); //will throw an error

{
    var ageee = 29;
}
console.log(ageee); //will run as var is not blocked scope variable 


//TEMPORAL DEAD ZONES
console.log(age1);
console.log("naman"); //will come under Temp dead zone
console.log("chachan"); //will come under Temp dead zone
let age1 = 89;
console.log(age1);
//will create Temporal Dead Zone -> naman and chachan will also not get print coz of this
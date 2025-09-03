class human{
     age = 19;   //nothing used soo public
     #height = 5; //now private -> to mark private we use "#"
     //to use private , but pvt used only in class -> to use pvt i use "this (->)" -> this.#height
     weight = 70;
     iq;
     marks; 

     running(){
        console.log("i am running" , this.#height );
     }

     walking(){
        console.log("i am walking");
     }

     constructor(newiq , newmarks , newheight){
        this.iq = newiq;
        this.marks = newmarks;
        this.#height = newheight;
     }
     //using get to print pvt value outside the class
     get fetchheight(){
        return this.#height;
     }

     //using set to change the pvt value outside the class
     set changeheight(val){
        this.#height = val;
     }
}

let obj = new human(1, 80, 10);
console.log(obj.age);
obj.running();

console.log(obj.fetchheight);
// obj.changeheight = 9;
// console.log(obj.fetchheight);

//printing contructor passed values
console.log(obj.iq);
console.log(obj.marks);


//Default Functions 

function sayname(fname = "swapnil" , lname = "neeraj"){
    console.log("my name is : ", fname , "",lname);
}

sayname(); //will show undefined for both when i dont pass value soo i set default values already
//will print swapnil neeraj as i didnt pass anything

sayname("naman", "chachan"); //will print naman chachan as i passed values
sayname("naman")

//When one paremeter is dependent on first variable 
function helloji(fname = "swapnil" , lname =fname.toUpperCase()){
    console.log("my name is : ", fname , "",lname);
}
helloji()
helloji("naman")

//I can insert objects also in function 
function solve(fname = "Naman" , lname = {wt:90 ,ht:6 , marks:80}){
    console.log("my name is : ", fname ,"", lname);
}
solve();
solve("satwik", "singh")

//I can send arrays also
function solve1(fname = "Naman" , lname = ["naman" , " satwik" , "swapnil"]){
    console.log("my name is : ", fname ,"", lname);
}
solve1();
solve1("satwik", "singh")

//if i send null in parameter -> will print null
//if i send undefined in parameter -> will print values not 'udefined'


//Sending function itself in default parameter
function getage(){
    return 40;
}

function solve2(fname = "naman" , age = getage()){
    console.log(fname , age);
}
solve2()

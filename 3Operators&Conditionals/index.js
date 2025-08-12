// console.log("hello naman");

// //for loop
// for(let i = 1; i<=10; i++){
//     console.log("hello naman");
// }

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

// for(let i = 5; i>0 ; i--){
//     console.log(i);
// }

// for(let i = 1 ; i<=6 ; i++){
//     if(i==4){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }
//will print -> 1,2,3 -> 4 aate he break the loop and exit
// console.log("\n");

// for(let i = 1 ; i<=6 ; i++){
//     if(i==4){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }
//skipped 4 and continued

//While : 
// let age = 1;
// while(age <= 10){
//     console.log(age);
//     age++;
// }

// let my = 1;
// while(my<=6){
//     if(my==3){
//         break;
//     }
//     else{
//         console.log(my);
//         my++;
//     }
// }
//break will stop and execute at 3 and print upto 2 only

// let my = 1;
// while(my<=6){
//     if(my==3){
//         my++;
//         continue;
//     }
//     else{
//         console.log(my);
//         my++;
//     }
// }
//necessary to to my++ before continue

//Do while
// let age =1;
// do{
//     console.log(age);
//     age++;
// }while(age<=10);

//Strings : 

// let firstname = "naman";
// let lastname = "chachan";

// console.log(firstname +lastname);
// console.log(typeof(firstname));

//this is used to print also in different line 
// let name = `my
// name
// is 
// naman
// hello this side`
// console.log(name);

// let myname = new String("naman chachan");
// console.log(myname);

//the diff bw is new string and normal declaration is 
//new string treats string as object and normal is just line

//Concatenation String :
// let opt1 = "hindi ";
// let opt2 = "english ";
// let ans = opt1 + opt2;
// console.log(ans);

//printing using backtricks
let str1 = "hindi ";
let str2 = "ENGlish ";
let ans = `${str1}${str2}`;
console.log(ans);

//lenght
console.log(str1.length);
console.log(str2.length);

console.log("\n");
//converting to uppercase and lowercase
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

//Printing Substrings
let cast = "Christian";
console.log(cast.substring(2));
console.log(cast.substring(2,7));

//Splitting Words
// let intro = "hello my name is naman";
// console.log(intro.split(" "));
//[ 'hello', 'my', 'name', 'is', 'naman' ]

//to insert "" in between strings we use \\ in bw
// let newintro = "hello my \"name\" is naman";
// console.log(newintro);

// let intro1 = "hello \\my \\name \\is \\naman";
// console.log(intro1.split("\\"));

//using join -> used by joining through separators
let intro12 = "hello \\my \\name \\is \\naman";
let anss = intro12.split("\\");

console.log(anss);
// [ 'hello ', 'my ', 'name ', 'is ', 'naman' ]

console.log(anss.join(","));
// hello ,my ,name ,is ,naman


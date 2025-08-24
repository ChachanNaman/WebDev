// Object :
// let obj = {
//     name : "naman",
//     "full name" : "naman chachan", //when there is space bw in key then we use double inverted commas
//     age : 19,
//     weight : 66,
//     height : "6ft 1 inch", 
//     greet : function(c,d){
//     return c*d;
//     }
// };

// console.log(obj);
// console.log(obj.greet(3,4));
// console.log(typeof(obj));

// console.log("\n");

// //Arrays :
// let array = [1,2,3,4,5];
// console.log(array);

// //array contructor
// let brr = new Array("naman",19, true);
// console.log(brr);

// //accessing index
// console.log(array[1]);
// console.log(brr[2]);

// //functions on array
// let crr = new Array("naman", 20, true);
// crr.push("chachan")
// crr.pop();
// crr.shift();
// crr.unshift("hello");
// crr.push(10);
// crr.push(20);
// crr.push(30);
// console.log(crr);
// // console.log(crr.slice(2,4)); //will not include 4th index part
// crr.splice(1,2,"palak");  //1 index se 2 value remove kar and add palak in place of that (removed 20,true)
// console.log(crr);

//Mapping :
let drr = [10,20,30];
let ansarray = drr.map((number) => {  //created map on drr array of mine and return an array of multiplication
    return number*number;
})
console.log(ansarray);

let err = [40,50,60];
err.map((number, index) => {
    console.log(number + " " + index);
    
})

//Filtering :
let frr = [10,20,30,45,67,90,44];
let ans = frr.filter((number) => {
    if(number%2 == 0){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans);

let grr = ["naman", "kunal" , 19 , null];
let ans1 = grr.filter((number) => {
    if(typeof(number) == 'string'){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans1);

//Reduce : 
let hrr = [10,20,30,40];
let ans2 = hrr.reduce((acc, curr) => {
    return acc + curr;
},);    //acc initialised with 0 here 

console.log(ans2);

//sorting : 
let irr = [89,12,67,11];
irr.sort();//ascending order
console.log(irr);
irr.sort((a, b) => b - a);//descending order
console.log(irr);

//get index :
console.log(irr.indexOf(11));

//looping -> 

//foreach
let jrr = [10,20,30];
jrr.forEach((value , index) => {
    console.log("Number :" , value , "Index :", index);
})

//for in 
let obj = {
    name : "naman",
    "full name" : "naman chachan", //when there is space bw in key then we use double inverted commas
    age : 19,
    weight : 66,
    height : "6ft 1 inch", 
    greet : function(c,d){
    return c*d;
    }
};

for(let hello in obj){
    console.log(hello , " " , obj[hello]);
}

//for-of 
let krr = [90,38,24,42];
for(let vals of krr){
    console.log(vals);
}

let namee = "naman";
for(let vals of namee){
    console.log(vals);
}

//Arrays with functions
// let lrr = [10,20,30,40];
// function getsum(lrr){
//     let len = lrr.length;
//     let sum =0;
//     for(let index = 0; index <len ; index++){
//         sum = sum + lrr[index];
//     }
//     return sum;
// }
// let ans3= getsum(lrr);
// console.log(ans3);

let mrr = [10,20,30,40];
function getsumm(mrr){
    let sum =0;
    mrr.forEach((value) => {
        sum = sum + value;
    })
    return sum;
}

let ans4= getsumm(mrr);
console.log(ans4);

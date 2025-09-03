// let obj = {
//     ht : 6,
//     wt : 56,
//     age : 17
// }

// console.log(obj)

// as object is dynamic , i can add thing later also
// obj.color = "yellow"
// console.log(obj)

//Object clonning : 

//1)Spread operator (...)
let src = {
    ht : 6,
    wt : 56,
    age : 17
}
let dest = {...src};

console.log(src)
console.log(dest)
//changing things in src will not affect in dest now , as its clonned not referenced
src.age = 19; //will change in src only , not in dest
console.log(src)
console.log(dest)

console.log("\n")
//2)Assign method [ Object.assign({}, src) ]
let src1 = {
    ht : 9,
    wt : 80,
    age : 20
}
let dest1 = Object.assign({}, src1)
console.log(src1)
console.log(dest1)
//changing things in src will not affect in dest now , as its clonned not referenced
src1.age = 22; //will change in src only , not in dest
console.log(src1)
console.log(dest1)

console.log("\n")
//3)Itteration method [  ]
let src2 = {
    ht : 6,
    wt : 90,
    age : 11
};
let dest2 = {};
for(let key in src2){
    let newKey = key;
    let newValue = src2[key];
    dest2[newKey] = newValue;
}
console.log(src2)
console.log(dest2)
//changing things in src will not affect in dest now , as its clonned not referenced
// src1.age = 22; //will change in src only , not in dest
// console.log(src1)
// console.log(dest1)

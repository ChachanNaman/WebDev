console.log("naman");

function saymyname(){
    console.log("hello naman");
}
saymyname();

function printno(num){
    console.log("printing number :",num);
}
printno(6);

function avgno(num1 , num2){
    let avg = (num1+num2)/2;
    console.log("Average :", avg);
}
avgno(10, 20);

//Return Function
function getsum(a ,b, c){
    let sum = a+b+c;
    return sum;
}
let ans = getsum(5,7,8);
console.log("Sum :", ans);

function getmyname(firstname , lastname){
    let name = `${firstname} ${lastname}`;
    let fullname = firstname + " " + lastname;
    return name;
}
let nameans = getmyname("naman","chachan");
console.log("My name is :", nameans);

//Using function in variable straight
let getmul = function(c,d){
    return c*d;
};
console.log("multiply is :",getmul(5,6));

let getsq = function (e){
    if(e==0){
        return 1;
    }

    let small = getsq(e-1);
    let big = 2*small;
    return big;
};

console.log(getsq(4));


//Arrow Function
let expno = (x,y) => {
    return x**y;
}
console.log(expno(2,10));
let curr = new Date();

console.log(curr)

let date = new Date('April 26 2005 7:34')
console.log(date)

let date1 =  new Date(2005, 3, 26, 8.23); //month indexing starts from 0 -> 0=january , 3 = april , 4=may
console.log(date1)

console.log(date.getDay())
console.log(date.getFullYear())

date.setFullYear(2001);
console.log(date.getFullYear())


//Code 1 -> just adding para to my body straight
//calculating time taken to compare my code1 and code2
const t1 = performance.now();
for(let i = 0 ; i <=100 ; i++){
    let para = document.createElement('p');
    para.textContent = "this is para " + i;
    document.body.appendChild(para); 
}
const t2 = performance.now();
console.log("Total time taken by code 1 : " + (t2-t1));


//Code 2 -> creating div first then appending para in that div then appending div in my body
const t3 = performance.now();
let divv = document.createElement('div');
for(let i =0 ; i<= 100 ; i++){
    let para = document.createElement('p');
    para.textContent = "this is div text : " + i;
    divv.appendChild(para);
}
document.body.appendChild(divv);
const t4 = performance.now();
console.log("Total time taken by code 2 : " + (t4-t3));

//From this i can see code2 is taking less time than code1


//Best Code -> Document Fragment
const t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i = 0; i <= 100 ; i++){
    let para = document.createElement('p');
    para.textContent = "This is para : " + i+1 ;
    //below line will take no reflow and repaint
    fragment.appendChild(para);
}//below line will take 1 reflow 1 repaint
document.body.appendChild(fragment);
const t6 = performance.now();
console.log("Total time taken by code 3 : " + (t6-t5));


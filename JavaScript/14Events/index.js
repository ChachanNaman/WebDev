
// //making the change in text after clicking on it
// function changetext(){
//     let funcpara = document.getElementById('fpara');
//     funcpara.textContent = "Hello Swapnil !"
// }
// let funcpara = document.getElementById('fpara');
// funcpara.addEventListener('click', changetext); //will change the text 
// to remove -> funcpara.removeEventListener('click', changetext);

//committtttjsjsksk
// //changing default behaviour of Anchor tag (link)
// let anchorelement = document.getElementById('fanchor');
// function defaultbeh(event){
//     event.preventDefault();
//     anchorelement.textContent = " DONT CLICK HERE !"
// }

// anchorelement.addEventListener('click', defaultbeh);

//attaching all para with only one listener
// let paraele = document.querySelectorAll('p');
// function alertpara(event){
//     alert("You have clicked on para : " + event.target.textContent);
// }
// for(let i = 0; i<paraele.length; i++){
//     let para = paraele[i];
//     para.addEventListener('click', alertpara);
// }

//direcrt adding with div -> most optimal
// let paraele = document.getElementById('dwrap');
// function alertpara(event){
//     alert("You have clicked on para : " + event.target.textContent);
// }
// document.addEventListener('click', alertpara);
//it will give for both separate span and whole para

//but if i want to get only of span warning then have to add if
let paraele = document.getElementById('dwrap');
function alertpara(event){
    if(event.target.nodeName === 'SPAN'){
        alert("You have clicked on para : " + event.target.textContent);
    }
}
document.addEventListener('click', alertpara);


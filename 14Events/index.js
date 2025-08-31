
//making the change in text after clicking on it
function changetext(){
    let funcpara = document.getElementById('fpara');
    funcpara.textContent = "Hello Swapnil !"
}
let funcpara = document.getElementById('fpara');
funcpara.addEventListener('click', changetext); //will change the text 
// to remove -> funcpara.removeEventListener('click', changetext);
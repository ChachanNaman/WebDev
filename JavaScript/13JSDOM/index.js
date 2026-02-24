//changing the colour of second para
//one line one change (.style) hshssss
let secpara = document.getElementById('spara');
secpara;
console.log(secpara.style);
secpara.style.backgroundColor = 'blue';
secpara.style.color = 'white';


//one line multiple changes(.cssText)
let secdiv = document.getElementById('sdiv');
secdiv;
secdiv.style.cssText;
secdiv.style.cssText =  "background-color : black; color : white; padding : 0.5rem;";

//to add new attributes -> .setAttribute() -> it will set the value like the class , id 
// ex : class has value 'sdiv' , set or change to 'fdiv'
//it will reset the attribute , if i added the new attribute
let firstelement = document.getElementById('fdiv');
firstelement.setAttribute("class", "firstdivclass");//will add class 
//currently fdiv style have bg color , padding -> now adding attribute will reset and add updated only
firstelement.setAttribute("style", "padding : 0.3rem") //will remove bg color and add only padding


//to add mutliple classes or add class name -> .className()
//get -> fdiv.className
//set -> 
let firpara = document.getElementById('fpara')
firpara.className;  //getclassname
firpara.className = 'naman chachan'; //added 2 classes naman and chachan


//.classlist() -> can get and set class array or lists
//get -> array/list of class i have 
//set -> add, remove ,toggle(if have then remove , if not then add), contains(check in the element class present or not)
firpara.classList; //get the class names 
firpara.classList.add('thirdclass');
firpara.classList.remove('naman'); //will remove the naman class 
firpara.classList.toggle('chachan'); //if chachan class present then remove the chachan class
firpara.classList.toggle('fourtclass'); //fourthclass was not there soo it will add that 
firpara.classList.contains('chachan'); //will return false as chachan class was not there 
firpara.classList.contains('thirdclass'); //will return true coz thirdclass is there 












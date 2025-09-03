function outerfunc(){
    let name = "naman";
    
    function innerfunc(){
        console.log(name);
    }

    return innerfunc;  //referenced the innerfunc to outerfunc
}

let inner = outerfunc();
inner();

//what we thought is once name is called its memory gonna erase but its not true 
//name is now bonded with innerfunc or referenced permanenlty thats what CLOSURE is.
//it will print innerfunc 

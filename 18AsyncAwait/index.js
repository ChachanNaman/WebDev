//ASYNC FUNCTION
async function getdata(){
    setTimeout(() => {
        console.log("hello all !");
    }, 3000);
}

let output = getdata(); //output -> Promise {<fulfilled>: undefined}
//async function always returns a promise
//await-await -> use only when i have to handle promise statements


//Fetch api
// async function getapi(){
//     //Async code of fetching
//     //make it in await
//     let response = await fetch('https://jsonplaceholder.typicode.com//comments?postId=1')

//     //parse json to make it readable 
//     let data = await response.json();
//     //Synch code of printing
//     console.log(data);
//     //output -> {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
//     //api called
// }
// getapi();
//Scenario :
// 1-> prepare url or endpoint api -> Sync Process
// 2-> fetch api -> Async Process 
// 3-> Process Data/print data ->  Sync Process
// main catch here is that i cant process or print data without getting 
// fetched before , soo have mark fetch line in await to make it execute first then process
// soo 'await' makes async code to sync code


//Post request 
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

async function getdata(){
    const url = 'https://dummyjson.com/posts';
    let respo = await fetch(url);
    let answer = await respo.json();
    console.log("get answer is : " , answer);
}

async function postdata() {
    let respo = await fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Naman is my name ! ',
    userId: 5,
  })
})
    let answer = await respo.json();
    console.log("post data response : ", answer);
}

async function processdata(){
    await postdata();
    await getdata("after post");  // to get the after pushed data i have to put both in await statement 
}
processdata();
//will give that in my post code i have successfully inserted naman is my name , and after that get function to show what all inserted 


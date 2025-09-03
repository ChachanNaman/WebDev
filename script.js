//Doing JS Dom things now , like nothing will happen until i click on search button
document.addEventListener("DOMContentLoaded", function () {


    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");

    //return true or false based on a regex
    //regex -> i am matching username here that does it exist in leet code
    function validateUsername(username) {
        if (username.trim() === "") {//checks if the username string is non-empty
            //username.trim() removes extra spaces at start/end.
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username); //.test() checks if the given string matches the regex.
        if (!isMatching) { //Returns true if valid, false if not.
            alert("Invalid Username");
        }
        return isMatching;
    }

    async function fetchUserDetails(username) {
        try{
        searchButton.textContent = "Searching..."
        searchButton.disabled = true;

        //Post request 
        //1st thing
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const targetUrl = 'https://leetcode.com/graphql/'
        const myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");

        //2nd thing 0 -> graphql thing
        const graphql = JSON.stringify({
            query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
            variables: { "username": `${username}` }
        })

        //3rd thing create options for querry
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: graphql,
        };

        //also i have to setup demo proxy server to fulfill request on leetcode server of my local server : local -> dummy -> leetcode
        const response = await fetch(proxyUrl + targetUrl, requestOptions);
        if (!response.ok) {//if response not ok
            throw new Error("Unable to fetch user details !");
        }
        const parsedData = await response.json();
        console.log("Logging data: ", parsedData);

        displayUserData(parsedData);
    }
    catch (error) {
        statsContainer.innerHTML = '<p>No data found</p>';

    } finally {
        searchButton.textContent = "Search";
        searchButton.disabled = false;
    }
}

    function displayUserData(parsedData){
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;

        const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedEasyTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedMediumTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedHardTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;
        
    
    }

    searchButton.addEventListener('click', function () {
    const username = usernameInput.value; //fetching username first
    console.log("username : ", username);
    //now check if username valid or not , if valid then call fetch api asyn function
    if (validateUsername(username)) {
        fetchUserDetails(username);
    }
})


})
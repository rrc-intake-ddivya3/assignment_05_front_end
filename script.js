// script.js

const treeName = ''; // input from user
const apiUrl = `https://data.winnipeg.ca/api/v3/views/hfwk-jp4h/query.json?$where=commonname='${treeName}%'&$order=diametre_at_breast_height DESC&$limit=100`;

async function fetchTreeData(treeName){
    const apiUrl = `https://data.winnipeg.ca/api/v3/views/hfwk-jp4h/query.json?$where=commonname='${treeName}%'&$order=diametre_at_breast_height DESC&$limit=100`;
    try{
        // GET request to the API
        const response = await fetch(apiUrl);

        // Check if the response is ok
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // Clear previous results
    }

} 
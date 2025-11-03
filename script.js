// script.js
document.addEventListener('DOMContentLoaded', () => {
console.log("Script loaded successfully.");

async function fetchTreeData(treeName){
    const apiUrl = `https://data.winnipeg.ca/resource/hfwk-jp4h/query.json?$where=lower(common_name) like lower('%${treeName}%')&$order=diametre_at_breast_height DESC&$limit=100`;
    try{
        // GET request to the API
        const response = await fetch(apiUrl);

        // Check if the response is ok
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data);

        // Parse and display the data
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // Clear previous results

        if (data.length === 0){
            resultsDiv.innerText = 'No results found.';
            return;
        }

        data.forEach(tree => {
            const p = document.createElement('p');
            p.textContent = `${tree.common_name || 'Unknown'} - Diameter at Breast Height: ${tree.diametre_at_breast_height || 'N/A'} cm`;
            resultsDiv.appendChild(p);
        });
    }

    catch(error){
        console.error("Error fetching data:", error);
        document.getElementById('results').innerText = 'An error occurred while fetching data.';
    
    }
} 

// Event listener for search button
document.getElementById('searchButton').addEventListener('click', () => {
    const treeNameInput = document.getElementById('treeInput').value.trim();
    if(treeNameInput){
        fetchTreeData(treeNameInput);
    } else {
        document.getElementById('results').innerText = 'Please enter a tree name.';
    }
});
});
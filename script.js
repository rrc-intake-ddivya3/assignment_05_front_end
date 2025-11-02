// script.js

const treeName = ''; // input from user
const apiUrl = `https://data.winnipeg.ca/api/v3/views/hfwk-jp4h/query.json?$where=commonname='${treeName}%'&$order=diametre_at_breast_height DESC&$limit=100`;

async function fetchTreeData(treeName){
    const apiUrl = `https://data.winnipeg.ca/api/v3/views/hfwk-jp4h/query.json?$where=commonname='${treeName}%'&$order=diametre_at_breast_height DESC&$limit=100`;
    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }

} 
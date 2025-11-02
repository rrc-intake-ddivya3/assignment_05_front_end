// Divya Sharma

let commonName = '';
const apiUrl = 'https://data.winnipeg.ca/api/v3/views/hfwk.json' + 
    `$where = commonname='${commonName}%'` + '&$order=diametre_at_breast_height DESC' + '&$limit=100';

const encodedURL = encodeURI(apiUrl);
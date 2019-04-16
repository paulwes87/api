const fs = require('fs');

let sampleJson = fs.readFileSync('./api/copyRepo/jsonTest.json');
let companyDetails = JSON.parse(sampleJson);
console.log(companyDetails);
console.log('Successfully read JSON file');


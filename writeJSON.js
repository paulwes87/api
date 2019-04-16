const fs = require('fs');

let company = {  
    company: 'Lloyds',
    location: 'London', 
    building: '125 London wall', 
    floor: 15,
    wing: 'Left' 
};

let data = JSON.stringify(company, null, 2);

fs.writeFile('./api/result/newFile.json', data, (err) => {  
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');  
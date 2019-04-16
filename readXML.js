const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser({attrkey: "ATTR"});

var xmlString = fs.readFileSync('./api/copyRepo/test.xml');
parser.parseString(xmlString, function(error, result){
    if (error === null) {
        console.log(result);
        console.log('Read xml file');
        console.log("To json -> Successful");
    }else{
        console.log("error : "+ error);
    }
});
       

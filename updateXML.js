const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser({attrkey: "ATTR"});
var json;

let xmlString = fs.readFileSync('./api/copyRepo/test.xml');
parser.parseString(xmlString, function(error, result){
    if (error === null) {
        console.log(result);
        console.log('Read xml file');
        console.log("To json -> Successful");
        json = result;
    }else{
        console.log("error : "+ error);
    }
});

json.company.name = 'WiproTech';
let builder = new xml2js.Builder();
let xml = builder.buildObject(json);
console.log('After update: '+xml);
fs.writeFileSync('./api/result/updatedtest.xml',xml, function(err,data){
    if(err){
        console.log(err);
    } else {
        console.log("Successfully written our updated xml to file.");
    }
})
       
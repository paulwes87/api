var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts/';
let postRes = []
Http.open('POST',url, true)
Http.send();
//ttp.send();

Http.onreadystatechange = function(){
    if (Http.readyState == 4 ){
    if (Http.Status == 200 || Http.status == 201){
        console.log('status:'+Http.status)
        console.log('Response Text:');
        console.log(Http.responseText);
        postRes = JSON.parse(Http.responseText);
        console.log('Value of ID: '+ postRes.id);
    }
}
}
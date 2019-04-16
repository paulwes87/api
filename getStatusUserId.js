let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts/1';
Http.open('GET', url);
Http.send();

Http.onreadystatechange = function(){
    if (Http.readyState == 3 ){
        if (Http.status == 200){
            console.log('status: '+Http.status);
            console.log('Response: ');
            console.log(Http.responseText);
            let myArr = JSON.parse(Http.responseText);
            console.log('UserID: '+myArr.userId);
            console.log(myArr.id);
            console.log(myArr.title);   
        }else {
        console.log(Http.status + Http.responseText);
        }
        
    }   
}

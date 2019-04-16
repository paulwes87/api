# api
sample api and  automation of an assignment with html report


#assignment

1.Read a xml file, change some values and write the xml in to new file.
EG:<name>Wipro</name> to <name>Wipro Ltd<name>

#To Execute - node updateXML

2. Read a JSON file, change some values and write the json in to new file.
EG: name : 'Wipro' to name : 'Wipro Ltd'

#To Execute - node updateJSON
      

3. Make a GET call. Assert the response status code and userId
Test data - https://jsonplaceholder.typicode.com/posts/1  
jsonplaceholder.typicode.com
jsonplaceholder.typicode.com
{ "userId": 1, "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipit\nsuscipit recusandae ...

#To Execute - mocha

4. Make a POST call. Assert the response status code and id
Test data - https://jsonplaceholder.typicode.com/posts 

body: { title: 'foo', body: 'bar', userId: 1 } headers:"Content-type": "application/json; charset=UTF-8" 

#To Execute - mocha

5. Create a simple API framework with questions 3 and 4. Framework should create a > report.html

#To Execute - npm test

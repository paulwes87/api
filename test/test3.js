const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);
describe('Test3', function () {
chai.request('https://jsonplaceholder.typicode.com/posts/1')
  .get('/')
  .end(function(err, res){
    expect(res).to.have.status(200);
  });

  
  it('Test in GET req if the status is 200 and also the userID is present', function() {  
    chai.request('https://jsonplaceholder.typicode.com/posts/1')
    .get('/')
    .end(function(err, res) {
      expect('Content-type',/json/)
      expect(res).to.have.status;
      expect(res).to.have.status(200);
      if(expect(res.body).to.have.property('userId') && expect(res.body['userId']).to.equal(1)){
        console.log('Validated that the userId is present in response and its value is asserted');
        console.log('Response - UserID: '+ res.body['userId']);
      } else {
        console.log('Response - UserID did not exist');
      }
    });
  });  

});


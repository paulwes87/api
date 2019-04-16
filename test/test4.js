const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);
describe('Test4', function () {
it('Test in a POST req if the status is 200 and also the ID', function() {  
    chai.request('https://jsonplaceholder.typicode.com/posts')
    .post('/')
    .end(function(err, res) {
      expect("Content-type",/json/)
      expect(res).to.have.status;  
      expect(res).to.have.status(201);
      if(expect(res.body).to.have.property('id') && expect(res.body['id']).to.equal(101)){
        console.log('Validated that the id is present in response and its value is asserted');
        console.log('Response - ID: '+ res.body['id']);
      } else {
        console.log('Response - id did not exist');
      }
    });

});
});
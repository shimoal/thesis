var chai = require('chai');
var expect = chai.expect;
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
var server = require('./../server/app.js');


describe('The test itself!', function() {
  it ('should test something simple', function() {
    expect(1).to.equal(1);
  });
});


//pending tests
describe('basic routes', function() {
  it ('should make a get request', function (done) {
    chai.request(server)
      .get('/user')
      .end(function(err, result) {
        if(err) {
          console.log('there was an error:');
          console.log('err');
          done();
        }
        expect(result.status).to.equal(900);
        done();
      });
  });
});

xdescribe('Pending routing test 2', function() {
  it ('should test routing 2');
});

xdescribe('Pending routing test 3', function() {
  it ('should test routing 3');
});
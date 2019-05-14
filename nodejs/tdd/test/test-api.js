const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../request');
const should = chai.should();

chai.use(chaiHttp);

describe('test api', function () {
    it('should not found', (done) => {
        chai.request(server)
            .get('/users/toto')
            .end((err, res) => {
                  res.should.have.status(404);
                  res.error.text.should.be.equal('Not Found');
              done();
            });
      });
});
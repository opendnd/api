const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../index');
chai.use(chaiHttp);

describe('names', () => {
  it('POST https://api.opendnd.org/v1/names', (done) => {
    chai
    .request(server)
    .post('/')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.name.should.be.a('string');
      done();
    });
  });

  it('GET https://api.opendnd.org/v1/names/themes', (done) => {
    chai
    .request(server)
    .get('/themes')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

  it('POST https://api.opendnd.org/v1/names/themes', (done) => {
    chai
    .request(server)
    .post('/themes')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

  it('GET https://api.opendnd.org/v1/names/themes/:theme_id', (done) => {
    chai
    .request(server)
    .get('/themes/1')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

  it('PUT https://api.opendnd.org/v1/names/themes/:theme_id', (done) => {
    chai
    .request(server)
    .put('/themes/1')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

  it('DELETE https://api.opendnd.org/v1/names/themes/:theme_id', (done) => {
    chai
    .request(server)
    .delete('/themes/1')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });
});

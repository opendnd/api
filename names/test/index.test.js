const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../index');
chai.use(chaiHttp);

describe('Names', () => {
  describe('POST https://api.opendnd.org/v1/names', () => {
    it('responds w/out options', (done) => {
      chai
      .request(server)
      .post('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.name).to.be.a('string');
        done();
      });
    });

    it('responds w/ options', (done) => {
      chai
      .request(server)
      .post('/')
      .send({
        theme: 'medieval',
        type: 'female',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.name).to.be.a('string');
        done();
      });
    });

    it('responds w/ array', (done) => {
      chai
      .request(server)
      .post('/')
      .send({
        theme: 'medieval',
        type: 'female',
        number: 5,
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.names).to.be.an('array');
        done();
      });
    });
  });

  describe('GET https://api.opendnd.org/v1/names/themes', () => {
    it('responds with coming soon', (done) => {
      chai
      .request(server)
      .get('/themes')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('Coming soon:');
        done();
      });
    });
  });

  describe('POST https://api.opendnd.org/v1/names/themes', () => {
    it('responds with coming soon', (done) => {
      chai
      .request(server)
      .post('/themes')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('Coming soon:');
        done();
      });
    });
  });

  describe('GET https://api.opendnd.org/v1/names/themes/:theme_id', () => {
    it('responds with coming soon', (done) => {
      chai
      .request(server)
      .get('/themes/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('Coming soon:');
        done();
      });
    });
  });

  describe('PUT https://api.opendnd.org/v1/names/themes/:theme_id', () => {
    it('responds with coming soon', (done) => {
      chai
      .request(server)
      .put('/themes/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('Coming soon:');
        done();
      });
    });
  });

  describe('DELETE https://api.opendnd.org/v1/names/themes/:theme_id', () => {
    it('responds with coming soon', (done) => {
      chai
      .request(server)
      .delete('/themes/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('Coming soon:');
        done();
      });
    });
  });
});

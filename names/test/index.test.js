const sinon = require('sinon');
const proxyquire = require('proxyquire').noCallThru();
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
require('sinon-mongoose');
chai.use(chaiHttp);

// mocks
const userID = 'test12345@tests';
const themeID = 'xxx-xx-xxx';
const jwtCheckMock = (req, res, next) => next();
const addUserIDMock = (req, res, next) => { 
  req.userID = 'test12345@tests';
  next();
}
const uuidMock = () => themeID;
const Theme = require('../lib/models/Theme');
const ThemeMock = sinon.mock(Theme)
ThemeMock.expects('find').withArgs({ userID }).yields(null, []);
ThemeMock.expects('create').withArgs({ userID, themeID, male: [], female: [], dominia: [] }).yields(null, {});
ThemeMock.expects('findOne').withArgs({ userID, themeID }).yields(null, {});
ThemeMock.expects('findOneAndUpdate').withArgs({ userID, themeID }, { male: [], female: [], dominia: [] }, { upsert: true, new: true }).yields(null, {});
ThemeMock.expects('deleteOne').withArgs({ userID, themeID }).yields(null);
const dbMock = {
  Theme,
};

// proxies
const routes = proxyquire('../lib/routes', {
  './db': dbMock,
  './jwtCheck': jwtCheckMock,
  './addUserID': addUserIDMock,
  'uuid/v4': uuidMock,
});
const server = proxyquire('../lib/index', {
  './routes': routes,
});


// Names
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
        expect(res.body).to.be.an('array');
        done();
      });
    });
  });

  describe('POST https://api.opendnd.org/v1/names/themes', () => {
    it('responds with coming soon', (done) => {
      chai
      .request(server)
      .post('/themes')
      .send({ test: true })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
    });
  });

  describe('GET https://api.opendnd.org/v1/names/themes/:theme_id', () => {
    it('responds with coming soon', (done) => {
      chai
      .request(server)
      .get(`/themes/${themeID}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
    });
  });

  describe('PUT https://api.opendnd.org/v1/names/themes/:theme_id', () => {
    it('responds with coming soon', (done) => {
      chai
      .request(server)
      .put(`/themes/${themeID}`)
      .send({ test: false })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
    });
  });

  describe('DELETE https://api.opendnd.org/v1/names/themes/:theme_id', () => {
    it('responds with coming soon', (done) => {
      chai
      .request(server)
      .delete(`/themes/${themeID}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('ok');
        done();
      });
    });
  });
});

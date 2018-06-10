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
const groupID = 'test';
const jwtCheckMock = (req, res, next) => next();
const addUserMetaMock = (req, res, next) => { 
  req.userID = userID;
  req.permissions = ['read:names', 'write:names'];
  req.groups = [groupID];
  req.roles = ['admin'];
  req.groupID = groupID;
  next();
};
const optAuthMock = (middleware) => {
  return (req, res, next) => {
    middleware(req, res, next);
  };
};
const uuidMock = () => themeID;
const Theme = require('../lib/models/Theme');
const ThemeMock = sinon.mock(Theme);
ThemeMock.expects('find').withArgs({ groupID }).yields(null, []).atLeast(1);
ThemeMock.expects('create').withArgs({ groupID, themeID, male: [], female: [], dominia: [], name: 'foo' }).yields(null, {});
ThemeMock.expects('findOne').withArgs({ groupID, themeID }).yields(null, {});
ThemeMock.expects('findOneAndUpdate').withArgs({ groupID, themeID }, { male: [], female: [], dominia: [], name: 'bar' }, { upsert: true, new: true }).yields(null, {});
ThemeMock.expects('deleteOne').withArgs({ groupID, themeID }).yields(null);
const DefaultsNomina = require('../lib/models/DefaultsNomina');
const DefaultsNominaMock = sinon.mock(DefaultsNomina);
DefaultsNominaMock.expects('find').withArgs({ groupID }).yields(null, {
  themes: {
    test: {
      male: ['Bob', 'David'],
      female: ['Bob', 'David'],
      dominia: ['Atlanta', 'Chicago'],
    },
  },
}).atLeast(1);
DefaultsNominaMock.expects('findOneAndUpdate').withArgs({ groupID }, {}, { upsert: true, new: true }).yields(null, {}).atLeast(1);
const dbMock = {
  Theme,
  DefaultsNomina,
};

// proxies
const routes = proxyquire('../lib/routes', {
  './db': dbMock,
  './jwtCheck': jwtCheckMock,
  './addUserMeta': addUserMetaMock,
  './optAuth': optAuthMock,
  'uuid/v4': uuidMock,
});
const server = proxyquire('../lib/index', {
  './routes': routes,
});

// Names
describe('Names', () => {
  describe('GET https://api.opendnd.org/v1/names', () => {
    it('responds with a list of themes', (done) => {
      chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.include('test');
        done();
      });
    });
  });

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
        theme: 'test',
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
        theme: 'test',
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
    it('responds with a list of themes', (done) => {
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
    it('responds with the created theme', (done) => {
      chai
      .request(server)
      .post('/themes')
      .send({ name: 'foo' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
    });
  });

  describe('GET https://api.opendnd.org/v1/names/themes/:theme_id', () => {
    it('responds with the theme', (done) => {
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
    it('responds with the updated theme', (done) => {
      chai
      .request(server)
      .put(`/themes/${themeID}`)
      .send({ name: 'bar' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
    });
  });

  describe('DELETE https://api.opendnd.org/v1/names/themes/:theme_id', () => {
    it('responds with ok', (done) => {
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

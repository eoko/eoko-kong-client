const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

const Kong = require('./../index');
const kong = new Kong('http://localhost:8000/admin', {
  apiKey: 'c76e37b300e44654b92b38d57942f3a5',
  apiKeyName: 'apikey',
});

describe('Kong Secure API', () => {
  describe('Call Secure API', () => {
    it('Should create a user', () => kong
      .post('/consumers', { username: 'merlin' })
      .should
      .eventually
      .be
      .a('object')
    );

    it('Should list user', () => kong
      .get('/consumers')
      .should
      .eventually
      .be
      .a('object')
    );

    it('Should remove a user', () => kong
      .delete('/consumers/merlin')
      .should
      .eventually
      .be
      .equal(undefined)
    );
  });
});

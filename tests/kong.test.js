const chai           = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

const Kong = require('./../index');
const kong = new Kong('http://localhost:8001');

describe('Kong API', () => {
  describe('Call API', () => {
    it('Should create a user', () => kong
      .post('/consumers', { username: 'merlin' })
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

const assert = require('assert');
const Customer = require('../customer.js');

describe('Customer', function () {

  let customer;

  beforeEach(function () {
    customer = new Customer('Finn')
  });

  it('should have a name', function () {
    assert.strictEqual(customer.name, 'Finn');
  });

  xit('should have cash');

  xit('should start with an empty record collection');
});

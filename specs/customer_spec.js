const assert = require('assert');
const Customer = require('../customer.js');

describe('Customer', function () {

  let customer;

  beforeEach(function () {
    customer = new Customer('Finn', 10.00)
  });

  it('should have a name', function () {
    assert.strictEqual(customer.name, 'Finn');
  });

  it('should have cash', function () {
    assert.strictEqual(customer.cash, 10.00);
  });

  it('should start with an empty record collection', function () {
    assert.deepStrictEqual(customer.recordCollection, []);
  });
});

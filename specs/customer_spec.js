const assert = require('assert');
const Customer = require('../customer.js');
const Record = require('../record.js')

describe('Customer', function () {

  let customer;
  let record;

  beforeEach(function () {
    customer = new Customer('Finn', 10.00)
    record = new Record("John's Merry Band", "CodeClan United", 'death metal', 5.50);
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

  it('should have their money decrease when buying a record', function () {
    customer.buyRecord(record);
    assert.strictEqual(customer.cash, 4.50);
  });

  it('should have their money increase when selling a record', function () {
    customer.sellRecord(record);
    assert.strictEqual(customer.cash, 15.50);
  });

  it('should be able to buy a record (having enough money)', function () {
    customer.buyRecord(record);
    assert.strictEqual(customer.cash, 4.50);
  });

  it('should not be able to buy a record (having not enough money)', function () {
    record.price = 11.00;
    customer.buyRecord(record);
    assert.strictEqual(customer.cash, 10.00);
  });
});

const assert = require('assert');
const Customer = require('../customer.js');
const Record = require('../record.js')

describe('Customer', function () {

  let customer;
  let record1;
  let record2;

  beforeEach(function () {
    customer = new Customer('Finn', 12.00)
    record1 = new Record("John's Merry Band", "CodeClan United", 'death metal', 5.50);
    record2 = new Record("E19 Crew", "Cheese and Wine", 'easy listening', 15.00);
  });

  it('should have a name', function () {
    assert.strictEqual(customer.name, 'Finn');
  });

  it('should have cash', function () {
    assert.strictEqual(customer.cash, 12.00);
  });

  it('should start with an empty record collection', function () {
    assert.deepStrictEqual(customer.recordCollection, []);
  });

  it('should have their money decrease when buying a record', function () {
    customer.buyRecord(record1);
    assert.strictEqual(customer.cash, 6.50);
  });

  it('should have their money increase when selling a record', function () {
    customer.sellRecord(record1);
    assert.strictEqual(customer.cash, 17.50);
  });

  it('should be able to buy a record (having enough money)', function () {
    customer.buyRecord(record1);
    assert.strictEqual(customer.cash, 6.50);
    assert.deepStrictEqual(customer.recordCollection, [record1]);
  });

  it('should not be able to buy a record (having not enough money)', function () {
    customer.buyRecord(record2);
    assert.strictEqual(customer.cash, 12.00);
    assert.deepStrictEqual(customer.recordCollection, []);
  });

  it('should be able to get the value of their collection', function () {
    customer.buyRecord(record1);
    customer.buyRecord(record1);
    assert.strictEqual(customer.getValueOfCollection(), 11.00);
  })
});

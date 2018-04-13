const assert = require('assert');
const Customer = require('../customer.js');
const Record = require('../record.js')

describe('Customer', function () {

  let customer1;
  let customer2;
  let record1;
  let record2;

  beforeEach(function () {
    customer1 = new Customer('Finn', 12.00)
    customer2 = new Customer('Tony', 200.00)
    record1 = new Record("John's Merry Band", "CodeClan United", 'death metal', 5.50);
    record2 = new Record("E19 Crew", "Cheese and Wine", 'easy listening', 15.00);
  });

  it('should have a name', function () {
    assert.strictEqual(customer1.name, 'Finn');
  });

  it('should have cash', function () {
    assert.strictEqual(customer1.cash, 12.00);
  });

  it('should start with an empty record collection', function () {
    assert.deepStrictEqual(customer1.recordCollection, []);
  });

  it('should have their money decrease when buying a record', function () {
    customer1.buyRecord(record1);
    assert.strictEqual(customer1.cash, 6.50);
  });

  it('should have their money increase when selling a record', function () {
    customer1.sellRecord(record1);
    assert.strictEqual(customer1.cash, 17.50);
  });

  it('should be able to buy a record (having enough money)', function () {
    customer1.buyRecord(record1);
    assert.strictEqual(customer1.cash, 6.50);
    assert.deepStrictEqual(customer1.recordCollection, [record1]);
  });

  it('should not be able to buy a record (having not enough money)', function () {
    customer1.buyRecord(record2);
    assert.strictEqual(customer1.cash, 12.00);
    assert.deepStrictEqual(customer1.recordCollection, []);
  });

  it('should be able to get the value of their collection', function () {
    customer1.buyRecord(record1);
    customer1.buyRecord(record1);
    assert.strictEqual(customer1.getValueOfCollection(), 11.00);
  });

  it('should be able to get get the total value of a given genre in their collection', function () {
    customer2.buyRecord(record1);
    customer2.buyRecord(record2);
    customer2.buyRecord(record2);
    assert.strictEqual(customer2.getValueOfGenre('easy listening'), 30.00);
  });
});

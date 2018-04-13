const assert = require('assert');
const RecordStore = require('../record_store.js');
const Record = require('../record.js');


describe('Record Store', function () {

  let recordStore;
  let record1;
  let record2;

  beforeEach(function () {
    recordStore = new RecordStore('Rabbit Hole Records', 'Edinburgh', 19);
    record1 = new Record('Papa Darren', 'Down the rabbit hole', 'hip-hop', 4.99);
    record2 = new Record('Jarrod and Craig','JS crew', 'metal', 3.99);
  });

  it('should have a name', function () {
    assert.strictEqual(recordStore.name, 'Rabbit Hole Records');
  });

  it('should have a city', function () {
    assert.strictEqual(recordStore.city, 'Edinburgh');
  });

  it('should start with an empty inventory', function () {
    assert.deepStrictEqual(recordStore.inventory, []);
  });

  it('should have a balance', function () {
    assert.strictEqual(recordStore.balance, 19);
  });

  it('can add records', function () {
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.deepStrictEqual(recordStore.inventory, [record1, record2])
  })

  it('can sell a record', function(){
    recordStore.sellRecord(record1);
    assert.deepStrictEqual(recordStore.inventory, []);
    assert.strictEqual(Math.round(recordStore.balance*100)/100, 23.99);
  })
});

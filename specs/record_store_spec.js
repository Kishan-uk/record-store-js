const assert = require('assert');
const RecordStore = require('../record_store.js');



describe('Record Store', function () {

  let recordStore;

  beforeEach(function () {
    recordStore = new RecordStore('Rabbit Hole Records', 'Edinburgh', 19);
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
});

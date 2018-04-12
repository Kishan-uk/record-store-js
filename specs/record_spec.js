const assert = require('assert');
const Record = require('../record.js');

describe('Record', function() {

  let record

  beforeEach(function() {

    record = new Record('Papa Darren', 'Down the rabbit hole', 'hip-hop', 4.99)

  });

  it('should have a Artist', function() {
      assert.strictEqual(record.artist, 'Papa Darren')
  });

  it('should have a Title', function() {
    assert.strictEqual(record.title, 'Down the rabbit hole')
  });

  it('should have a Genre', function() {
    assert.strictEqual(record.genre, 'hip-hop')
  });

  it('should have a Price', function() {
    assert.strictEqual(record.price, 4.99)
  });
});

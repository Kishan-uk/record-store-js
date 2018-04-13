const RecordStore = function (name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
}

RecordStore.prototype.addRecord = function(record) {
  this.inventory.push(record);
}

RecordStore.prototype.sellRecord = function(record) {
  this.inventory.splice(this.inventory.indexOf(record), 1);
  this.balance += record.price;
}

module.exports = RecordStore;

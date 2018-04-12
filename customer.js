const Customer = function (name, cash) {
  this.name = name;
  this.cash = cash;
  this.recordCollection = [];
};


Customer.prototype.buyRecord = function (record) {
  if (this.cash >= record.price) {
    this.cash -= record.price;
    this.recordCollection.push(record);
  }
};

Customer.prototype.sellRecord = function (record) {
  this.cash += record.price;
};

Customer.prototype.getValueOfCollection = function () {
  const reducer = (runningTotal, record) => {
    return runningTotal + record.price;
  }
  return this.recordCollection.reduce(reducer, 0);
};

module.exports = Customer;

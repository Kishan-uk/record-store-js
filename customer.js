const Customer = function (name, cash) {
  this.name = name;
  this.cash = cash;
  this.recordCollection = [];
};


Customer.prototype.buyRecord = function (record) {
  if (this.cash >= record.price) {
    this.cash -= record.price;
  }
};

Customer.prototype.sellRecord = function (record) {
  this.cash += record.price;
};

module.exports = Customer;

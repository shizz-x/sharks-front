module.exports = class WalletDto {
  address;
  energy;
  bandswith;
  balance;
  tokenBalance;
  tokenDecimal;
  constructor(model) {
    this.address = model.address;
    this.accessTkn = model.accessTkn;
    this.id = model.user.id;
    this.isActivated = model.user.isActivated;
    this.privateKey = model.user.privateKey;
  }
};

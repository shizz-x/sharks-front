module.exports = class WalletDto {
  email;
  id;
  isActivated;
  accessTkn;
  privateKey;
  constructor(model) {
    this.accessTkn = model.accessTkn;
    this.email = model.user.email;
    this.id = model.user.id;
    this.isActivated = model.user.isActivated;
    this.privateKey = model.user.privateKey;
  }
};

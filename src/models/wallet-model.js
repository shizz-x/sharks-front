export class WalletModel {
  energy;
  balance;
  tokens;
  address;
  addressHex;
  transactions;
  constructor(model) {
    this.address = model.address;
    this.energy = model.energy;
    this.balance = model.balance;
    this.addressHex = model.addressHex;
    this.tokens = model.tokens;
    this.transactions = model.transactions;
  }
}

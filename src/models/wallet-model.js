export class WalletModel {
  energy;
  balance;
  tokens;
  address;
  transactions;
  constructor(model) {
    this.address = model.address;
    this.energy = model.energy;
    this.balance = model.balance;
    this.tokens = model.tokens;
    this.transactions = model.transactions;
  }
}

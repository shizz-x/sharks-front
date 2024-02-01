module.exports = class TokenDto {
  ticker;
  name;
  logo;
  contractAddress;
  decimals;
  constructor(model) {
    this.ticker = model.ticker;
    this.name = model.name;
    this.logo = model.logo;
    this.contractAddress = model.contractAddress;
    this.decimals = model.decimals;
  }
  static createArray(response) {
    let result = [];
    response.data.avaliableTokens.forEach((token) => {
      result.push(new TokenDto(token));
    });

    return result;
  }
};

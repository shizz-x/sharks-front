const crypto = require("crypto-browserify");
console.log(crypto);
class PasswordSecurity {
  static decode(password, encodedData) {
    const decipher = crypto.createDecipher("aes-256-cbc", password);
    let decoded = decipher.update(encodedData, "hex", "utf8");
    decoded += decipher.final("utf8");

    return decoded;
  }
}

module.exports = {
  decode: PasswordSecurity.decode,
};

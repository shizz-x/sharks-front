module.exports = class UserDto {
  email;
  id;
  isActivated;
  accessTkn;
  constructor(model) {
    this.accessTkn = model.accessTkn;
    this.email = model.user.email;
    this.id = model.user.id;
    this.isActivated = model.user.isActivated;
  }
};

module.exports = class ClientError extends Error {
  status;
  errors;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static Unauthorized() {
    return new ClientError(401, "Unauthorized");
  }
  static BadRequest(message, errors = []) {
    return new ClientError(400, message, errors);
  }
};

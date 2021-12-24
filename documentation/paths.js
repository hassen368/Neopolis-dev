const compteBancaires = require("./CompteBancaire");
const transactions = require("./Transaction");
const auth = require("./auth")
const user = require("./User");

module.exports = {
  paths: {
    ...compteBancaires,
    ...transactions,
    ...user,
    ...auth
  },
};

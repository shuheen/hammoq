const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateUpdateUser(data) {
  let errors = {};
  let { street, city, state, country } = data.address;
  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  street = !isEmpty(street) ? street : "";
  city = !isEmpty(city) ? city : "";
  state = !isEmpty(state) ? state : "";
  country = !isEmpty(country) ? country : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Please select a gender";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

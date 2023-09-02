const {body, check} = require('express-validator');

const validators = [
  check("email")
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email"),
    body("password")
    .isString()
    .isLength({ min: 6 })
    .withMessage("Password should be atleast 6 letters.")
]

module.exports = validators;
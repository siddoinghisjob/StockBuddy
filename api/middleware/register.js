const { validationResult, body } = require("express-validator");

const validators = require("./validators");

const register = [
  ...validators,
  body("name")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Name must be atleast 1 letter."),
  body("username")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Username must be atleast 1 letter."),
  body("terms")
    .equals("true")
    .withMessage("Please select our terms and condition."),
  (req, res, next) => {
    const errors = validationResult(req)?.errors;
    const message = errors?.map((error) => error.msg);

    if (errors?.length > 0) {
      return res.status(422).json({
        success: false,
        msg: message,
      });
    }
    next();
  },
];

module.exports = register;

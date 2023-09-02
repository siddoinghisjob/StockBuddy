const { validationResult, param } = require("express-validator");

const validators = require("./validators");

const id = [
  param("id")
    .isInt()
    .withMessage("ID not valid."),
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

module.exports = id;
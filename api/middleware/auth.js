const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  jwt.verify(req.cookies.token, process.env.secret, (err, suc) => {
    if (err)
      return res.status(500).json({ success: false, msg: "Server error." });
    if (suc) {
      req.jwtid = suc.key;
      next();
    } else
      return res
        .status(401)
        .json({ success: false, msg: "Invalid credentials." });
  });
};

module.exports = auth;

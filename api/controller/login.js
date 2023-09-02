const login = require("../model/login");
const jwt = require("jsonwebtoken");

const log = async (req, res) => {
  try {
    const {email, password} = req.body;
    const query = await login(email, password);
    if (query.success) {
      jwt.sign(JSON.stringify({key : query.id}), process.env.secret, (err, token) => {
        if (err) {
          res
            .status(401)
            .json({
              success: false
            });
        } else {
          res
            .status(200)
            .cookie("token", token, {
              httpOnly: true
            })
            .json({ success: true, msg: "Logged in successfully" });
        }
      });
    } else res.status(401).json({success  : false});
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false});
  }
};

module.exports = log;

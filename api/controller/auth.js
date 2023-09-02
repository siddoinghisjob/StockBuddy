const getDataById = require("../model/userData");

const auth = async (req, res) => {
  try {
    const results = await getDataById(req.jwtid);
    if (!results.success)
      return res
        .status(results.code)
        .json({ success: false});
    const data = {
      name: results.data.name,
      email: results.data.email,
    };
    res.status(results.code).json(data);
  } catch (err) {
    res.status(500).json({success : false});
  }
};

module.exports = auth;

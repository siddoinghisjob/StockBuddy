const pool = require("./pool");

const getUser = async (id) => {
  try {
    const query = await pool.query("select balance from coins where uid = $1", [
      id,
    ]);
    if (query.rowCount != 1) return { success: false, code: 400 };
    return { success: true, code: 200, data: query.rows[0].balance };
  } catch (err) {
    return { success: false, code: 500 };
  }
};

const get = async () => {
  try {
    const query = await pool.query(
      "select username, email, balance from coins inner join users on coins.uid = users.id order by balance desc limit 7"
    );
    return { success: true, code: 200, data: query.rows };
  } catch (err) {
    return { success : false , code : 500 };
  }
};

module.exports = {get, getUser};
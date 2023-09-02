const pool = require('./pool');
const bcrypt = require('bcrypt');

const login = async (email, password) => {
    try{
        const compare = (password, db_password) => {
            return new Promise(function (resolve) {
              bcrypt.compare(password, db_password, (err, res) => {
                if (err) resolve(false);
                if(res) resolve(true);
                else resolve(false);
              });
            });
          };
        const query = await pool.query('select * from users where email = $1', [email]);
        if(query.rowCount == 0) return {success : false, msg : "Email or Password wrong."};
        const cmp = await compare(password, query.rows[0].password);
        console.log(cmp)
        if(!cmp) return {success : false, msg : "Email or Password wrong."};
        return {success : true, msg : "Logged in successfully",id : query.rows[0].id};
    }
    catch(err){
        console.log(err);
        return {success : false, msg : "Some technical problem occured."};
    }
}

module.exports = login
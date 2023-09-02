const pool = require('./pool');
const bcrypt = require('bcrypt');

const register = async(email, username, name, password) => {
    try{
        const isExist = await pool.query('select * from users where email = $1', [email]);
        if(isExist.rowCount > 0) return {success : false, code : 400};
        const hashedPassword = bcrypt.hashSync(password, 10);
        const insert = await pool.query('insert into users (name, email, username, password) values($1, $2, $3, $4)',
        [name, email, username, hashedPassword]);
        const id = (await pool.query("select id from users where email = $1", [email])).rows[0].id;
        const balance = await pool.query("insert into coins (uid, balance) values ($1, $2)",[id, 100]);
        return {success : true, code : 200}; 
    }
    catch(err){
        console.log(err);
        return {success : false, code : 500};
    }
};

module.exports = register;
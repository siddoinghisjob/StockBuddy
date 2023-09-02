const pool = require("./pool");

const userData = async (id) => {
    try{
        const query = await pool.query("select * from users where id = $1", [id]);
        if(query.rowCount==1){
            return {success : true, code : 200, data : query.rows[0]};
        } 
        else{
            return {success : false, code : 400};
        }
    }
    catch(err){
        return {success : false, code : 500};
    }
}  

module.exports = userData;
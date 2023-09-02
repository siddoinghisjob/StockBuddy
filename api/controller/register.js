const register = require('../model/register');

const reg = async (req, res) => {
    try{
        console.log(req.body);
        const {email, username, name, password} = req.body;
        const query = await register(email, username, name, password);
        res.status(query.code).json({success : query.success});
    }   
    catch(err){
        console.log(err)
        res.status(500).json({success : false});
    } 
}
module.exports = reg;
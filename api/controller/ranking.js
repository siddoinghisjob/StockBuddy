const model = require("../model/rankings");

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const query = await model.getUser(id);
    if (query.success) {
      return res.status(query.code).json(query.data);
    }
    return res.status(query.code).json({success : false});
  } catch (err) {
    res.status(500).json({success : false});
  }
};

const get = async (req, res) => {
  try{
    const query = await model.get();
    if(query.success){
      return res.status(query.code).json(query.data);
    }
    return res.status(query.code).json(query.data);
  }catch(err){
    res.status(500).json({success : false});
  }
};

module.exports = {get, getUser};
let Message = require('../models/message');

let get = (req, res, next) =>{
    Message.find({}, (err, docs) => {
        res.json({
            "status": "success",
            "data": {
                "messages": docs
            }
        });
    });
};

module.exports.get = get;
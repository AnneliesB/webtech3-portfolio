// GET: /api/v1/messages
let get = (req, res, next) =>{
    res.json({
        "status": "success",
        "message": "GETTING messages"
    });
};

// GET: /api/v1/messages/:id
let getid = (req, res, next) =>{
    res.json({
        "status": "success",
        "message": "GETTING messages with ID id"
    });
};

// POST: /api/v1/messages
let post = (req, res, next) =>{
    res.json({
        "status": "success",
        "message": "POSTING a new message for user Pikachu"
    });
};

// PUT: /api/v1/messages/:id
let putid = (req, res, next) =>{
    res.json({
        "status": "success",
        "message": "UPDATING a message with ID id"
    });
};

// DELETE: /api/v1/messages/:id
let del = (req, res, next) =>{
    res.json({
        "status": "success",
        "message": "DELETING a message with ID id"
    });
};

// GET: /api/v1/messages/?user=username
let getuser = (req, res, next) =>{
    res.json({
        "status": "success",
        "message": "GETTING message from username username"
    });
};

module.exports.get = get;
module.exports.getid = getid;
module.exports.post = post;
module.exports.putid = putid;
module.exports.del = del;
module.exports.getuser = getuser;
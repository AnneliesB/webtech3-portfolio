// GET: /api/v1/messages OR /api/v1/messages?user=username
let get = (req, res) => {
    if (req.query.user) {
        let username = req.query.user;
        res.json({
            "status": "success",
            "message": "GETTING message for username: " + username
        });
    } else {
        res.json({
            "status": "success",
            "message": "GETTING messages"
        });
    }
};

// GET: /api/v1/messages/:id
let getid = (req, res) => {
    let id = req.params.id;
    res.json({
        "status": "success",
        "message": "GETTING messages with ID: " + id
    });
};

// POST: /api/v1/messages
let post = (req, res) => {
    res.json({
        "status": "success",
        "message": "POSTING a new message for user Pikachu"
    });
};

// PUT: /api/v1/messages/:id
let putid = (req, res) => {
    let id = req.params.id;
    res.json({
        "status": "success",
        "message": "UPDATING a message with ID: " + id
    });
};

// DELETE: /api/v1/messages/:id
let del = (req, res)=> {
    let id = req.params.id;
    res.json({
        "status": "success",
        "message": "DELETING a message with ID: " + id
    });
};



module.exports.get = get;
module.exports.getid = getid;
module.exports.post = post;
module.exports.putid = putid;
module.exports.del = del;
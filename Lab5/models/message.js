let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let messageSchema = new Schema({
    text: String,
    user: String
});

let Message = mongoose.model("Message", messageSchema);

module.exports = Message;
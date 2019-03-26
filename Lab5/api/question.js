const { validate } = require('Lab5/middleware');
const MessagesController = require('Lab5/controllers/messages');

module.exports = (app) => {
    app.route('/messages').post(
        validate,
        MessagesController.add,
    );
};
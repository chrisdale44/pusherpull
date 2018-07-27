const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const VoteSchema = new Schema({
    os: {
        type: String,
        required: true
    },
    points:{
        type: String,
        required: true
    }
})

const Vote = Mongoose.model('Vote', VoteSchema);

module.exports = Vote;
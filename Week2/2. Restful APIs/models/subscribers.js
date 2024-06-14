const mongoose = require('mongoose')

const subscribersSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subscriberToChannel: {
        type: String,
        required: true
    },
    subscribeData: {
        type: Date,
        requierd: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscribersSchema)
var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
})

let User = model('User', UserSchema)

export default User
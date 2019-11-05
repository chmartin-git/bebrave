import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        max: 256
    },
    password: {
        type: String,
        required: true,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default new mongoose.model('User', userSchema);

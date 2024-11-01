import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: {
        type: String
    },
    forgotPasswordExpire: {
        type: Date
    },
    verifyToken: {
        type: String
    },
    verifyExpire: {
        type: Date
    }
});

const userModel = mongoose.models.User || mongoose.model('User', userSchema);

export default userModel;
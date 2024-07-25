import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    verificationString: {
        type: String,
        default:null
    },
    expiryTime: {
        type: Number,
        default:null
    }
})

const Users = mongoose.model("Users", userSchema);

export default Users;
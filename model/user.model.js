import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

// Option 1 (let mongoose decide the collection name: "users")
const User = mongoose.model("User", UserSchema);

// Option 2 (explicitly specify collection name as "user")
// const User = mongoose.model("User", UserSchema, "user");

export default User;

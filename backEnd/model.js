import mongoose from "mongoose";
const { Schema, model } = mongoose;
const UserSchema = new Schema({
  userName: {
    type: String,
    required: [true, "Username is required"],
    minlength: [3, "Username must be at least 3 characters long"],
    maxlength: [20, "Username cannot be longer than 20 characters"],
  },
  emailId: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
  },
});

const users = model("users", UserSchema);
export default users;

import mongoose , { Schema } from "mongoose"

const userSchema = new Schema({
  username: {
    type: String,
    required : true
  },
  fullName: {
    type: String,
    required: true,
    maxLength: 20,
    minLength: 6
  },
  email: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required : false
  }
})

export const User = mongoose.model("User", userSchema)
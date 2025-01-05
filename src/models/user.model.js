// abb hum yaha par ek mongoose aur Schema kon upload karenge
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  // abb hum email ka liye schema built karenge
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  //   this is the schema for fullname and name
  fullname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    index: true,
  },
  avatar: {
    // cloudinary url
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  refreshToken: {
    type: String,
  },
  timestamps: true,
});

export const user = mongoose.model("User", userSchema);

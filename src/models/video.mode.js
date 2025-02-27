import mongoose, { Schema } from "mongoose";

const videoSchema = new mongoose(
  {
    videoFile: {
      type: String, // cloudinary file
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Video = mongoose.model("video", videoSchema);

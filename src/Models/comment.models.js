import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    content: {
      type: String,
      required: true,
    },
    owner: {
      type: SchemaType.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export const Comment = mongoose.model("Comment", commentSchema);

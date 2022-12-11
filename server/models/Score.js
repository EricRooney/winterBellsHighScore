import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Score = new Schema(
  {
    user: { type: String, required: true, maxlength: 25 },
    score: { type: Number, min: 0, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Score;

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Score = new Schema(
  {
    make: { type: String, required: true, maxlength: 20 },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    year: { type: Number, max: 2040, min: 1800 },
    imgUrls: [{ type: String }],
    description: { type: String, maxlength: 250 },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Score;

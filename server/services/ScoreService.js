import mongoose from "mongoose";
import Score from "../models/Score";

const _repository = mongoose.model("Score", Score);

class ScoreService {
  async getAll() {
    return await _repository.find({});
  }
  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
}

const scoreService = new ScoreService();
export default scoreService;

// models/Slot.js
import mongoose from "mongoose";

const SlotSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  doctor: { type: String, required: true },
  gender: { type: String, required: true },
});

export const SlotModel =
  mongoose.models.Slots ?? mongoose.model("Slots", SlotSchema);

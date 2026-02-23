import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  watt: {
    type: Number,
    required: true
  },
  hours: {
    type: Number,
    required: true
  }
}, { timestamps: true });

export default mongoose.model("Device", DeviceSchema);

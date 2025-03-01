import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    company: {
      type: String,
      trim: true,
    },
    findMore: {
      type: String,
      trim: true,
    },
    services: {
      type: String,
      trim: true,
    },
    features: {
      type: String,
      trim: true,
    },
    budget: {
      type: Number,
      trim: true,
    },
    projectGoal: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// Prevent re-registering the model in Next.js hot-reloading
const FormModel = mongoose.models.Form || mongoose.model("Form", FormSchema);

export default FormModel;

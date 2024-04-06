import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  name: String,
  email: String,
  message: String,
});

const contact =
  mongoose.models.contact || mongoose.model("contact", contactSchema);

export default contact;

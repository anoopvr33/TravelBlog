import { model, Schema } from "mongoose";
// import { type } from "os";

const PackageSchema = Schema({
  location: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  specification: {
    type: String,
    required: true,
    trim: true,
  },
});

const Package = model("Package", PackageSchema);

export default Package;

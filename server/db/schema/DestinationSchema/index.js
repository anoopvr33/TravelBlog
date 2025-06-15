import { model, Schema } from "mongoose";
// import { type } from "os";

const DestinationSchema = Schema({
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
  price: {
    type: String,
    required: true,
    trim: true,
  },
});

const Destination = model("Destination", DestinationSchema);

export default Destination;

import mongoose from "mongoose";

const trackingSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    foodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foods",
      required: true,
    },
    details:{
       
      calories:Number,
      protein:Number,
      carbohydrates:Number,
      fat:Number,
      fibre:Number,
     
  },
  eatenDate: {
    type: Date, // Change the type to Date
    default: Date.now, // Use default value of current date and time
  },
    quantity: {
      type: Number,
      min: 1,
      required: true,
    },
  },
  { timestamps: true }
);

const trackingModel = mongoose.model("trackings", trackingSchema);

export { trackingModel };

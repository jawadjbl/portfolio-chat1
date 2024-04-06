// import mongoose from "mongoose";

// const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Connected to MongoDB.");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectMongoDB;

import mongoose, { ConnectOptions } from "mongoose";

const connectMongoDB = async (): Promise<void> => {
  try {
    const options: ConnectOptions = {
      // other options can be added as needed
    };

    await mongoose.connect(process.env.MONGODB_URI!, options);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error(error);
  }
};

export default connectMongoDB;

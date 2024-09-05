import mongoose from "mongoose";

const connectDb = async () => {
  try {
    // Use connection options object for clarity (optional)
    const options = {
      dbName: 'Ecommerce',
    };

    // Connect to MongoDB using the recommended options
    await mongoose.connect(process.env.MONGO_URL, options);
    console.log(`Connected to MongoDb Database`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
  }
};

export default connectDb;

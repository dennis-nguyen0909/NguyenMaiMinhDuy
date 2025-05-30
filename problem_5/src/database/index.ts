import mongoose from 'mongoose';

const dbConfig = {
  url: process.env.MONGODB_URI || 'mongodb://localhost:27017/express_app',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: true,
    maxPoolSize: 10
  }
};

export const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.url, dbConfig.options);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

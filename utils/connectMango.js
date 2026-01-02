import mongoose from "mongoose";

const connectMongo =  async () => mongoose.connect(process.env.MANGO_URL)

export default connectMongo
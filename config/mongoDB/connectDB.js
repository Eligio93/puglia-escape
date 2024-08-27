import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to Database MongoDB')
    } catch (error) {
        console.log('Database Connection Error :', error)
        throw new Error('Error with connection in DB')
    }
}
export default connectDB;

import mongoose from 'mongoose';
const dbConfig = async () => {
    try {
        const connection =  await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected' , connection.connection.host);
    } catch (error) {
        console.error('DB connection error:', error);
    }
}
export default dbConfig;
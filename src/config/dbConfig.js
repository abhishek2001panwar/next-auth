
import mongoose from 'mongoose';
const dbConfig = async () => {
    try {
        const connection =  await mongoose.connect('mongodb+srv://abhishekpanwarcseiot2022:4NH89EoK2euKRmNi@cluster0.9rgjk9h.mongodb.net/');
        console.log('DB connected' , connection.connection.host);
    } catch (error) {
        console.error('DB connection error:', error);
    }
}
export default dbConfig;
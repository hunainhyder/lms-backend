import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const db_conn = async () => {
    try {
        const conn_instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected successfully! DB Host: ${conn_instance.connection.host}`)
    } catch (error) {
        console.log(`MongoDB connection error ${error}`)
        process.exit(1)
    }
}

export default db_conn
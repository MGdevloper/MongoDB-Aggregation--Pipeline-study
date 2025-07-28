import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv()


async function connectdb() {
    try {

        await mongoose.connect(process.env.DB_URI)
    }
    catch (err) {
        console.log("err",err);

    }
}

export default connectdb
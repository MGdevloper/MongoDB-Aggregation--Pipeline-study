import { carmodel } from "../models/car.model.js";
import connectdb from "../utils/dbconnect.js";

await connectdb()

let result =await carmodel.aggregate([

    {
        $match:{
            $or:[
                {"carname":"bmw"},{"carname":"audi"}
            ]
        }
    }
])

console.log(result);

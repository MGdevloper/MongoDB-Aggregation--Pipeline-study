//5. List each car model and
//  how many persons own it.
import { personmodel } from "../models/person.model.js";
import connectdb from "../utils/dbconnect.js";

await connectdb()

let result = await personmodel.aggregate([

    {
        $lookup: {
            from: "cars",
            localField: "carsname",
            foreignField: "_id",
            as: "cardetails"
        },
    },
    {
        $unwind: "$cardetails"
    },


    {
        $project: {
            name: 1,
            cardetails: "$cardetails.carname"

        }
    },
    {
        $group:{
            _id:"$cardetails",
            names:{
                $push:"$name"
            }
            
        }
    },
    {
        $project:{
            carname:"$cardetails",
            cars:"$names",
            total:{$size:"$names"}
        }
    }
])

console.log(result);


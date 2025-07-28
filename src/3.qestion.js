import { personmodel } from "../models/person.model.js";
import connectdb from "../utils/dbconnect.js";

await connectdb()

let result = await personmodel.aggregate([

    {
        $unwind: "$carsname",


    },
    {
        $lookup: {
            from: "cars",
            localField: "carsname",
            foreignField: "_id",
            as: "cardetails"
        }
    },
    {
        $unwind: "$cardetails"
    },
    {
        $group:{
            _id:"$name",
            cars:{
                $push:{
                    carname:"$cardetails.carname"
                    
                }
            }
        
        }
    },
    {
        $project:{
            name:"$name",
            cars:"$cars",
            total:{$size:"$cars"}
        
        }
    }

])

console.dir(result,{depth:null} );

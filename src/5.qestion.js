//2. Find all persons who either
//  live in 'mumbai' or own a 'honda' car.

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
        }


    },
    {
        $lookup: {
            from: "cities",
            localField: "cityname",
            foreignField: "_id",
            as: "citydetails"
        }
    },
    {
        $project: {
            name: "$name",
            cardetails: "$cardetails.carname",
            citydetails: "$citydetails.cityname"
        }
    },
    {
        $unwind: "$cardetails"
    }


    , {
        $match: {
            $and: [
                {

                    "cardetails": "honda"
                },
                {

                    "citydetails": "mumbai"
                }
            ]


        }
    }

])


console.log(result);

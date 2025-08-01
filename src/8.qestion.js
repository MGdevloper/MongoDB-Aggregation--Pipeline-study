/*group person by city and list the name of pepole in each city */

import { personmodel } from "../models/person.model.js";
import connectdb from "../utils/dbconnect.js";

await connectdb()
let result = await personmodel.aggregate([

    {
        $lookup: {
            from: "cities",
            localField: "cityname",
            foreignField: "_id",
            as: "cityinfo"
        },

    },
    {
        $project: {
            name: 1,
            cityinfo: "$cityinfo.cityname"
        }
    },
    {
        $unwind:"$cityinfo"
    }
    ,
    {
        $group:{
            _id:"$cityinfo",
            names:{
                $push:"$name"
            }
        }
    }

])

console.log(result);

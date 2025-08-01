/*list all cities and count how many unique cars are used in each city */
import { personmodel } from "../models/person.model.js";
import connectdb from "../utils/dbconnect.js";

await connectdb();
let result = await personmodel.aggregate([

    {
        $lookup:{
            from:"cities",
            foreignField:"_id",
            localField:"cityname",
            as:"cityinfo"
        }
    },
    {
        $project:{
            name:1,
            cityinfo:{$arrayElemAt:["$cityinfo.cityname",0]},
            carsname:1
        }
    },{
        $unwind:"$carsname"
    },
    {
        $lookup:{
            from:"cars",
            foreignField:"_id",
            localField:"carsname",
            as:"car"
        }
        
    },
    {
        $project:{
            name:1,
            cityinfo:1,
            car:{$arrayElemAt:["$car.carname",0]}
        }
    },
    {
        $group:{
            _id:"$cityinfo",
            cars:{
                $addToSet:"$car"
            }
        }
    }
])
console.log(result);

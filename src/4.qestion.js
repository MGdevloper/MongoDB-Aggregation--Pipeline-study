import { personmodel } from "../models/person.model.js";
import connectdb from "../utils/dbconnect.js";

await connectdb()
console.log("connected....");


var result = await personmodel.aggregate([

    {
        $lookup: {
            from: "cities",
            localField: "cityname",
            foreignField: "_id",
            as: "cityinfo"
        }

    },
    {
        $unwind: "$cityinfo"
    },
    {
        $project: {
            name: "$name",
            carsname: "$carsname",
            cityinfo: "$cityinfo.cityname",


        }
    },
    {
        $unwind: "$carsname"
    },
    {
        $lookup: {
            from: "cars",
            localField: "carsname",
            foreignField: "_id",
            as: "newdata"
        }
    }, {
        $project: {
            name: "$name",
            carsname: "$carsname",
            cityinfo: "$cityinfo",
            newdata: "$newdata.carname"


        }
    },
    {
        $group: {
            _id: "$name",
            cityinfo: { $first: "$cityinfo" },


            carsname: {
                $push: "$newdata"
            }

        }
    },


])
console.dir(result, { depth: null });    

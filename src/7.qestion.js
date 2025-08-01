//find the most populer car and person who own it.

import { Await } from "react-router-dom";
import { personmodel } from "../models/person.model.js";
import connectdb from "../utils/dbconnect.js";

console.log("connecting");

await connectdb();
console.clear();
console.log("connected");
console.log("loding......");



let result = await personmodel.aggregate([

    {
        $lookup: {
            from: "cars",
            localField: "carsname",
            foreignField: "_id",
            as: "carInfo"
        }


    },

    {
        $unwind: "$carInfo"
    }
    ,
    {
        $project: {
            name: "$name",
            carinfo: "$carInfo.carname"
        }
    },
     {

        $group: {
            _id: "$carinfo",
            person: {
                $push: "$name"
            }
        }
    }
    ,
    {
        $project:{
            carname:"$_id",
            persons:"$person",
            total:{$size:"$person"}
        }
    },
    {

        $sort:{
            total:-1
        }
    }
    

]);
console.log("loded");
console.clear();
console.log("most populer car with owners");


let max = result[0].total;

result.forEach((item) => {

    if(item.total==max)
    {
        console.log(item);
        
    }
})
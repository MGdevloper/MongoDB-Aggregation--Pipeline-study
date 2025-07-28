import { personmodel } from "../models/person.model.js";
import connectdb from "../utils/dbconnect.js";

await connectdb()
let result=await personmodel.aggregate([


    {
        $lookup:{
            from:"cities",
            localField:"cityname",     //find from city collection cityname where person's citynamefild _id same as city collections fild _id 
            foreignField:"_id",
            as:"cityinfo"
        },
      
        
    },{
        $unwind:"$cityinfo"
    }
])

console.log(result);

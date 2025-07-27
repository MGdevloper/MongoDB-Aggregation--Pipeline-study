import mongoose from "mongoose";

const personschema = new mongoose.Schema({

    name:
    {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    }
    ,
    cityname: {
        type: mongoose.Types.ObjectId,
        ref: "city"
    }
    ,
    carsname: [
        {
            type:mongoose.Types.ObjectId,
            ref:"Car"

            
        }
    ]


}, {
    timestamps: true
})


export const personmodel = mongoose.model("person", personschema)


console.log(personmodel.schema.paths);


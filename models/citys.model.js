import mongoose from "mongoose";

const citysschema = new mongoose.Schema({

    cityname:
    {
        type: String,
        lowercase: true,
        trim: true,
        required: true

    }

}, {
    timestamps: true
})


export const citysmodel = mongoose.model("city", citysschema)


// console.log(personmodel.schema.paths);


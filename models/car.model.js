import mongoose from "mongoose";

const carschema = new mongoose.Schema({

    name:
    {
        type: String,
        lowercase: true,
        trim: true,
        required: true

    }

}, {
    timestamps: true
})


export const carmodel = mongoose.model("car", carschema)


// console.log(personmodel.schema.paths);


import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import { citysmodel } from "../models/citys.model.js";
import { carmodel } from "../models/car.model.js";
import { personmodel } from "../models/person.model.js";

configDotenv()
try{

    await mongoose.connect(process.env.DB_URI)
}
catch(err){
    console.log("err");
    
}
//citys
let delhi = await citysmodel.create({ name: "delhi" });
let mumbai = await citysmodel.create({ name: "mumbai" });
let bangalore = await citysmodel.create({ name: "bangalore" });
let chennai = await citysmodel.create({ name: "chennai" });
let pune = await citysmodel.create({ name: "pune" });
//cars
let bmw = await carmodel.create({ name: "bmw" });
let audi = await carmodel.create({ name: "audi" });
let hyundai = await carmodel.create({ name: "hyundai" });
let honda = await carmodel.create({ name: "honda" });
let tesla = await carmodel.create({ name: "tesla" });
let kia = await carmodel.create({ name: "kia" });

//person

let p1=await personmodel.create({
    name:"manav",
    cityname:mumbai._id,
    carsname:[bmw._id,hyundai._id]
})
let p11 = await personmodel.create({
  name: "aditya",
  cityname: mumbai._id,
  carsname: [honda._id]
});

let p12 = await personmodel.create({
  name: "pooja",
  cityname: pune._id,
  carsname: [kia._id, audi._id]
});

let p13 = await personmodel.create({
  name: "tarun",
  cityname: bangalore._id,
  carsname: [bmw._id, tesla._id]
});

let p14 = await personmodel.create({
  name: "isha",
  cityname: chennai._id,
  carsname: [hyundai._id]
});

let p15 = await personmodel.create({
  name: "rohit",
  cityname: delhi._id,
  carsname: [audi._id, bmw._id]
});

let p16 = await personmodel.create({
  name: "meera",
  cityname: mumbai._id,
  carsname: [tesla._id]
});

let p17 = await personmodel.create({
  name: "arjun",
  cityname: bangalore._id,
  carsname: [kia._id, honda._id]
});

let p18 = await personmodel.create({
  name: "naina",
  cityname: pune._id,
  carsname: [bmw._id, hyundai._id]
});

let p19 = await personmodel.create({
  name: "sachin",
  cityname: delhi._id,
  carsname: [tesla._id, audi._id]
});

let p20 = await personmodel.create({
  name: "tanya",
  cityname: chennai._id,
  carsname: [hyundai._id, honda._id]
});
console.log("records are saved");

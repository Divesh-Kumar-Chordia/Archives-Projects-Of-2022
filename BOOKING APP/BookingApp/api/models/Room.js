import mongoose from 'mongoose';
const RoomSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    roomNumbers:[{number:Number,unavailableDates:[{type:Date}]}],

},
{timestamps:true}
);
/*
example"
    [
        {number:101,unavailableDates:[{22.08.2022,23.08.2022}]}
        {number:101,unavailableDates:[]}
        {number:101,unavailableDates:[]}
    ]

*/ 
export default mongoose.model("Room",RoomSchema);
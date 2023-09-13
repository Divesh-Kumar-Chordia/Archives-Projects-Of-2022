import mongoose from 'mongoose';
const HotelSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    photo:{
        type:[String],
    },
    desc:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
    },
    rooms:{
        type:[String],
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    featured:{
        //used in react app for 
        //showing featured hotels
        type:Boolean,
        default:false
    },
    
    



});


export default mongoose.model("Hotel",HotelSchema);

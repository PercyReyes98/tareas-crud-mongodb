import { Schema, model } from "mongoose";

const taskSchema=new Schema({
    titulo: {
        type: String,
        required: true,
        unique: true,
        trim: true
        },
    descripcion: {
        type:String,
        required: true
        },
    pendiente:{
        type: Boolean,
        default: false
    } 
    },
    {
        timestamps: true,
        versionKey: false,
    })

export default model('Task', taskSchema)    
//requerimos alguns modulos de mongoose
import {Schema, model} from 'mongoose'

//creamos un schema para las notas
const noteSchema = new Schema({
    title: {
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true,//esto nos facilita el atributo createdAt y updatedAt
    versionKey:false
     
})


//exportamos el modelo que hemos creado
export default model('Note', noteSchema) // le pasamos un nombre y el esquema


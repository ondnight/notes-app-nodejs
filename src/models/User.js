// requerimos algunos modulos de mongoose
import {Schema,model} from 'mongoose'
// requerimos el modulo bcryptjs para encriptar la contraseña
import bcrypt from 'bcryptjs'

//creamos un esquema
const userSchema=new Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

userSchema.methods.encryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10) //generamos un salt
    return await bcrypt.hash(password,salt) //retornamos la contraseña cifrada
}

userSchema.methods.matchPassword = async function(password){ //usamos la funcion normal para acceder al this.password
    return await bcrypt.compare(password,this.password) // comparamos el password que introduzca el usuario con el que viene del Schema(this.password)
} // retornamos un true o un false

//exportamos el modelo
export default model('User',userSchema) // le pasamos un nombre al modelo y un esquema
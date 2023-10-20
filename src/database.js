//requerimos mongoose
import mongoose from 'mongoose'

//creamos una constante que será la dirección de conexión de mongodb
const MONGODB_URI = process.env.MONGODB_URI

//usamos el método connect, pasamos la constante y dos parámetros para que no dé error
mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(db=>console.log('Database Connected'))
.catch(err=>console.log(err))
import app from './server'

require('dotenv').config()
require('./database')


app.listen(process.env.PORT,()=>{
    console.log(`Servidor iniciado en el puerto ${process.env.PORT}`)
})


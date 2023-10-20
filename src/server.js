import  express  from 'express'
import path from 'path'
import indexRoutes from './routes/index.routes' //importamos las rutas del index
import {create} from 'express-handlebars'
import morgan from 'morgan' //nos da en consola los status code de las rutas



// Initializations
const app = express()

// Settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname + '/views')) //le decimos donde estan las vistas

app.engine('.hbs',create({
    defaultLayout: 'main', // le decimos el nombre del layout por defecto
    layoutsDir: path.join(app.get('views'), '/layouts'), //le indicamos donde está el directorio del layouts
    partialsDir: path.join(app.get('views'),'/partials'), // le indicamos donde está el directorio del partials
    extname: '.hbs' // le decimos la extension
}).engine
)
app.set('view engine','.hbs') //le decimos a express cual va a ser el motor de plantillas

// Middlewares
app.use(express.urlencoded({extended:false})) // cuando lleguen datos, conviertelos en json
app.use(morgan('dev'))

// Global Variables

// Routes
app.use(indexRoutes) // usamos las rutas del index

// Static files
app.use(express.static(path.join(__dirname + '/public')))

export default app


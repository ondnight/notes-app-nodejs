import {Router} from 'express' // importamos el modulo router
import {addNote,getNotes,editNote,updateNote,deleteNote, changeState} from '../controllers/note.controller'

const router = Router()

router.get('/', getNotes)

router.get('/about',(req,res)=>{
    res.render('about')
})

// Ruta agregar nota
router.post('/notes/add', addNote)

// Ruta obtener nota para editar
router.get('/notes/edit/:id', editNote)

// Ruta actualizar nota
router.post('/notes/edit/:id',updateNote)

// Ruta para borrar nota
router.get('/notes/delete/:id',deleteNote)

// Ruta para cambiar de estado una nota
router.get('/notes/change/:id',changeState)

export default router
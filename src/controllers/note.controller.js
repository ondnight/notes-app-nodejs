import Note from '../models/Note' //importamos el modelo Note

export const addNote = async (req,res) =>{
    const note =  Note(req.body) //llamamos al modelo Note y le agregamos las propiedades del req.body que llegan del formulario
    await note.save()
    res.redirect('/')
}

export const getNotes = async (req,res)=>{
    const notes = await Note.find().lean() // lean() es muy importante, porque el objeto que llega es de mongo, y hay que convertirlo a objeto de JS
    res.render('index',{notes:notes})
}

export const editNote = async (req,res)=>{
    const note = await Note.findById(req.params.id).lean()
    res.render('edit',{note:note})
}

export const updateNote = async (req,res)=>{
    const note = await Note.findByIdAndUpdate(req.params.id,req.body).lean()
    res.redirect('/')
}

export const deleteNote = async (req,res)=>{
    const note = await Note.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

export const changeState = async (req,res)=>{
    
    
    const note = await Note.findById(req.params.id)
    note.done = !note.done
    await note.save()
    res.redirect('/')
}



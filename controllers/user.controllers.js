const User = {
    get:(req,res)=>{
        res.status(200).send('Esto es un chanchito')
    },
    list:(req,res)=>{
        res.status(200).send('Hola chanchito')
    },
    create:(req,res)=>{
        console.log(req.params)
        res.status(201).send('Creando un chanchito')
    },
    update:(req, res)=>{
        console.log(req.params)
        res.status(204).send('Actualizando chanchito')
    },
    destroy:(req,res)=>{
        res.status(204).send('Eliminando un chanchito')
    }
}
module.exports = User
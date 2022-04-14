/**
 * Archivo  .env
 */
require("dotenv").config()
const express = require('express');
const cors = require("cors")
const app = express();

/**
 * Elementos de app
 */
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080



/**
 * 
 * Aqui se invocan las rutas
 */

 app.use("/api", require("./routes"))

 /* app.get('/',user.list)
 app.get('/:id',user.get)
 app.post('/',user.create)
 app.put('/:id',user.update)
 app.patch('/:id',user.update)
 app.delete('/:id',user.destroy) */
 
 app.get('*',(req, res)=>{
     res.status(404).send('Esta pagina no existe')
 })
 app.listen(PORT,()=>{
     console.log("listern port "+ PORT)
 })
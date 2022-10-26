import app from './app'
import './database.js'
import {PORT} from './config'

app.listen(process.env.PORT)
console.log('el servidor esta escuchando en el puerto: ',PORT)
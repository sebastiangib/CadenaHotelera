import{Api} from './Api.js'
import 'dotenv/config'

let servidor = new Api() // Creando un objeto de la clase Api

// Levantamos el servidor
servidor.levantarServidor()
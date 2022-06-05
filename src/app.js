import express from "express"; 
import taskRoutes from "./routes/tasks";//manejo de rutas
import cors from "cors"; //conectarse con otros servidores
import morgan from "morgan"; //para ver peticiones en consola

const app = express();

app.use(cors());//para que otros servidores se puedan conectar a este

app.use(morgan('dev'));//permite ver en consola la peticion (url)

app.use(express.json());//para poder leer los json que le llegan

app.use(taskRoutes); //para poder usar las rutas

export default app;



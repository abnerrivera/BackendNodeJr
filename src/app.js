import express from "express"; 
import taskRoutes from "./routes/tasks";//manejo de rutas
import cors from "cors"; //conectarse con otros servidores
import morgan from "morgan"; //para ver peticiones en consola

//documentation
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from "./swaggerOptions";

const spec = swaggerJSDoc(options);

const app = express();

app.use(cors());//para que otros servidores se puedan conectar a este

app.use(morgan('dev'));//permite ver en consola la peticion (url)

app.use(express.json());//para poder leer los json que le llegan

app.use(taskRoutes); //para poder usar las rutas

//documentation
app.use('/docs', swaggerUI.serve, swaggerUI.setup(spec));

export default app;



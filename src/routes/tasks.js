//EN ESTA CARPETA USAREMOS LAS RUTAS A LAS QUE TENDRA ACCESO EL API

import { Router } from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  getTask,
  getTaskCount,
  updateTask
} from "../controller/tasks";


const router = Router()
const API = '/tasks';

router.get('/tasks', getTasks) //TRAER TODAS LAS TAREAS

router.get('/tasks/:id', getTask) //VER TAREA EN ESPECIFICO

//TODO: AVERIGUAR POR QUE NO SIRVE SI ES /TASKS COMO EL RESTO, SOLO SIRVE SI CAMBIA
router.get('/task/count', getTaskCount) //TRAE CUANTAS TAREAS HAY

router.post('/tasks', createTask) //CREAR TAREAS

router.delete('/tasks/:id', deleteTask) //BORRAR TAREA ESPECIFICA

router.put('/tasks/:id', updateTask) //ACTUALIZA TAREA ESPECIFICA

export default router;
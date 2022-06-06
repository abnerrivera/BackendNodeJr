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
//categorias
/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks EndPoints
 */


/**
 * @swagger
 * /tasks:
 *  get:
 *   summary: GET all tasks
 *   tags: [Tasks]
 */
router.get('/tasks', getTasks) //TRAER TODAS LAS TAREAS


/**
 * @swagger
 * /tasks/:id:
 *  get:
 *   summary: GET task by ID
 *   tags: [Tasks]
 */
router.get('/tasks/:id', getTask) //VER TAREA EN ESPECIFICO


/**
 * @swagger
 * /task/count:
 *  get:
 *   summary: GET tasks create count
 *   tags: [Tasks]
 */
//TODO: AVERIGUAR POR QUE NO SIRVE SI ES /TASKS COMO EL RESTO, SOLO SIRVE SI CAMBIA
router.get('/task/count', getTaskCount) //TRAE CUANTAS TAREAS HAY


/**
 * @swagger
 * /tasks:
 *  post:
 *   summary: CREATE task
 *   tags: [Tasks]
 */
router.post('/tasks', createTask) //CREAR TAREAS


/**
 * @swagger
 * /tasks:
 *  delete:
 *   summary: DELETE task by ID
 *   tags: [Tasks]
 */
router.delete('/tasks/:id', deleteTask) //BORRAR TAREA ESPECIFICA


/**
 * @swagger
 * /tasks:
 *  put:
 *   summary: UPDATE task by ID
 *   tags: [Tasks]
 */
router.put('/tasks/:id', updateTask) //ACTUALIZA TAREA ESPECIFICA

export default router;
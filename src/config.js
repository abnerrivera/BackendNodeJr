//variables de entorno
import {config as dotenv} from 'dotenv';
//permite utilizar las varialbes de entorno de nuestra app
dotenv();

export const configDb = {
  host: process.env.DB_HOST || 'localhost', //traduce que si no esta la variable de entorno este valor sera tomado en su lugar
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'tasks',
}
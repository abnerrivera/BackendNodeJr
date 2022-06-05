import { configDb } from './config';
//CONEXION DATABASE
import mysql from 'mysql2/promise';

export const connect = async () => {
  return await mysql.createConnection(configDb);
}

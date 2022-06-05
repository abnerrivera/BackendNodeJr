//EN ESTA CARPETA SERA GUARDADO LO QUE SERA EJECUTADO AL INGRESAR EN ALGUNA API

//CONEXION
import { connect } from "../database";


export const getTasks = async (req, res) => {
  //primero ejecutamos la conexion
  const connection = await connect();
  //luego de conectarse hacemos una consulta
  //con [rows] lo que quiero decir es que me saque solo las filas de la respuesta y no todo el objeto
  const [data] = await connection.query('SELECT * FROM tasks'); //el .query es para hacer una consulta
  //retornar la consulta
  res.json(data);
}


export const getTask = async (req, res) => {
  //para ver el valor de lo que me envian 
  //console.log(req.params.id);
  const connection = await connect();//en la consulta el id = ? quiere decir que tomara el valor que le pasemos e neste caso en el array
  const [data] = await connection
  .query('SELECT * FROM tasks WHERE id = ?', // id = dato del parametro
  [req.params.id]);

  res.json(data[0]); //le digo que traiga el elemento 0 del arreglo para que traiga solo el objeto y no el array
}


export const getTaskCount = async (req, res) => {
  const connection = await connect();
  const [data] = await connection.query('SELECT COUNT(*) FROM tasks');
  res.json(data[0]['COUNT(*)']); //le digo que traiga el valor de la propiedad count
}



export const createTask = async (req, res) => {
  const connection = await connect();
  const [data] = await connection.query('INSERT INTO tasks(title, description) VALUES(?,?)',[
    req.body.title,
    req.body.description
    ]);
  res.json({
    id: data.insertId,
    ...req.body,
  })
  console.log(data)
}

export const deleteTask = async (req, res) => {
  const connection = await connect();
  await connection.query('DELETE FROM tasks WHERE id = ?', [req.params.id])
  res.send("sucess");
}

export const updateTask = async (req, res) => {
  const connection = await connect();
  const [data] = await connection.query('UPDATE tasks SET ? WHERE id = ?', [req.body,req.params.id])
  res.sendStatus(204)
  console.log(data)
}
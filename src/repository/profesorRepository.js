import pg from 'pg'
const { Pool } = pg

const client = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.BDPORT,
})

const getAll = async () => {
    
  try {
    await client.connect()
    const resp = await client.query('SELECT * from profesor');
    return resp.rows;
  } catch(err) {
    console.log(err)
  }
  
}

const insert = async (profesor) => {
  try {
    const [id, nombre, apellido, categoria, grado] = profesor

    await client.connect()

    const resp = await client.query(
      `INSERT INTO "Profesor" ("id", "nombre", "apellido", "categoria", "grado") 
      values ($1,$2,$3,$4,$5)`,[id, nombre, apellido, categoria, grado]);
    return resp;
  } catch(err) {
    console.log(err)
  }
}

const ProfesorRepository = { getAll, insert }

export default ProfesorRepository;
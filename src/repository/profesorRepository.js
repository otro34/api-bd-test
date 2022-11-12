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

const insert = () => {

}

const ProfesorRepository = { getAll, insert }

export default ProfesorRepository;
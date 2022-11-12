import pg from 'pg'
const { Client } = pg

const client = new Client({
  user: 'postgres',
  host: 'containers-us-west-120.railway.app',
  database: 'railway',
  password: 'U32DzR3EZSaJelgdIXpc',
  port: 7677,
})

const getAll = async () => {
    
  try {
    await client.connect()
    const resp = await client.query('SELECT * from profesor');
    return resp;
  } catch(err) {
    console.log(err)
  } finally {
    client.end()
  }
  
}

const insert = () => {

}

const ProfesorRepository = { getAll, insert }

export default ProfesorRepository;
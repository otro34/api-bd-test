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
    await client.connect()

    return client.query('SELECT * from profesor', (err,resp) => {
        console.log(err, resp.rows)
        client.end()
      return resp.rows
    })
}

const insert = () => {

}

const ProfesorRepository = { getAll, insert }

export default ProfesorRepository;
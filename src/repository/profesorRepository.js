import pg from 'pg'
const { Client } = pg

const client = new Client({
  user: 'postgres',
  host: 'containers-us-west-120.railway.app',
  database: 'railway',
  password: 'U32DzR3EZSaJelgdIXpc',
  port: 7677,
})

await client.connect()

const getAll = () => {
    client.query('SELECT NOW()', (err,resp) => {
        console.log(resp)
        client.end()
    })

    return null
}

const insert = () => {

}

const ProfesorRepository = { getAll, insert }

export default ProfesorRepository;
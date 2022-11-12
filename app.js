import express, { response } from 'express'
import bodyParser from 'body-parser'
import { CursoService, ProfesorService } 
         from './src/services/index.js';

var app = express();

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/profesores/getAll', (req,res)=> {
    console.log('PROFESORES GETALL')

    ProfesorService.getAll().then((response)=> {
        return res.status(200).json(response);
    })
})

app.post('/profesor', (req,res) => {
    ProfesorService.insert(req.body).then((response) => {
        return res.status(200).json('OK');
    });
    
})

const port = process.env.PORT || 3001

app.listen(port,()=>{
    console.log(`Servidor Iniciado. ${port}`)
})
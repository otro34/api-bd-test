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
    return res.json(ProfesorService.getAll());
})

app.post('/enrollment', (req,res,next)=> {
    console.log('received request')
    
    EnrollmentService.insert(req.body);
    return res.json();
})





app.listen(3001,()=>{
    console.log('Servidor Iniciado.')
})
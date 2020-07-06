const express = require("express")
const server = express();
const bodyParser = require('body-parser');
const { table } = require("console");

//Body Parser
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
//Rotas

server.post('/add', function(req, res){
    
    req.body.name
    res.send('Cadastrados' + <table class="table table-hover table-bordered"> 
    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Peso</th>
                        <th>Altura</th>
                        <th>Problemas de saúde</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
    </table>)
})

server.listen(8082, function(){
console.log("servidor rodando na url http://localhost:8082")
})



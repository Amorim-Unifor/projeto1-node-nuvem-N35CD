const express = require("express"); //importa o modulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao site de Felipe e Igor!</h1>");
})

//rota com parametro
app.get("/consulta/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})


//rota com parametro opcional
app.get("/alunos/{:nome}", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>Aluno " + nome + "</h1>");
    }else{
        res.send("<h1>Nome não informado!</h1>");
    }

})

//rota com parametro em query
app.get("/cadastro", function(req,res){
    //req --> dados enviados pelo cliente
    var cpf = req.query["cpf"];
    if (cpf){
        res.send("<h1>CPF " + cpf + " cadastrado com sucesso!</h1>");
    }else{
        res.send("<h1>CPF não informado!</h1>");
    }

})


app.listen(process.env.PORT ?? 4000,function(erro){  // cria a aplicacao na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})


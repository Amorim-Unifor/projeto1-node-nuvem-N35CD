const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express
const path = require('path')
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

//criando a rota inicial
app.get("/", function(req, res) {
    const filePath = path.join(__dirname, 'index.html')
    res.sendFile(filePath);
})

app.post('/resultado', (req, res) => {
    const meses = parseInt(req.body.meses);
    const salario = parseFloat(req.body.salario);
    const resultado = ((salario / 12) * meses) - 0.07;

    res.send(`<h2>O resultado de ${meses} trabalhados com salário bruto de R$${salario} = R$${resultado.toFixed(2)}</h2><br><a href="/">Voltar</a>`)
})

app.get('/salario/:valor', (req, res) => {
    const valor = req.params.valor;

    res.send(`<h1>O seu salario líquido é R$${valor}</h1>`)
})

app.get('/funcionario', (req, res) => {
    res.send("<h1>Seja bem vindo funcionario!</h1>")
})

console.log("PORT env: ", process.env.port);

app.listen(PORT, () => {
    console.log(`
                    Servidor rodando na porta $ { PORT }
                    `);
});
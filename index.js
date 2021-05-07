const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//estou dizendo para o Express usar o ejs como viem engine
app.set('view engine','ejs');
app.use(express.static('public')); //pastas aonde ficam os arquivos estaticos.

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/",(req, res) => {
    res.render("index");
});

app.get("/perguntar",(req,res)=>{
    res.render("perguntar");
})

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
res.send("Formulario recebido! titulo " + titulo + " " + "descricao" + descricao);
});

app.listen(8080,()=>{
    console.log("APP RODANDO!!!");
});
import http from "http";

const PORT = 3000; 
const rotas = {
    "/":"Rota Home!",
    "/livros": "Rota Livros!",
    "/autores": "Rota Autores!"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content.type":"text/plan"});
    res.end(rotas[req.url]);
});

server.listen(PORT, () =>{
    console.log("Servido escutando!");
});
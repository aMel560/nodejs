//creation d'un serveur http

const http = require("http"); // equivalent a import http from http
const server = http.createServer(function (request, response) {
  //syntaxe de base qui utilise l'instance http pour creer l'instance de serveur on lui a rajouter la fonction ayant request et response comme parametre
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<h1>Hello Node!!!!</h1>\n");
});
server.listen(3000, () => {
  console.log(`server started at port ${3000}`); //on a lier le serveur au port 3000 en utilisant la methode listen
});

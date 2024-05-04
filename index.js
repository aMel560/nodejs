//on importe le file system pour qu'il nous cree le fichier .txt
const fs = require("fs");
//on cree le fichier .txt en utilisant fs
const content = "Hello Node"; // variable content qui contient le contenu du fichier.txt
fs.writeFile("welcome.txt", content, () =>
  console.log("Le fichier a ete cree")
); // on utilise la methode writeFile pour creer un fichier avec le fs la methode qui prend comme argument le nom du fichier ,le contenu du fichier et qui retourne un message dans la console une fois que la commande est executee

//lire et console log le contenu de welcome.txt en utilisant le fs

fs.readFile("welcome.txt", "utf8", (err, content) => {
  if (err) {
    console.error(
      "Une erreur s'est produite lors de la lecture du fichier :",
      err
    );
    return;
  }
  console.log("Contenu du fichier :", content);
});
// ici nous specifions utf8 pour lire le fichier en tant que texte , on met une condition d'erreur pour que si jamais nous avons une erreur dans la lecture de notre code cela sera mentionne

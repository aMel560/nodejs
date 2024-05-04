const generatePassword = require("generate-password");

const passwordfeatures = {
  length: 8,
  numbers: true,
  symbols: true,
  uppercase: true,
}; //cet objet decrit comment va etre le mdp généré

// Fonction pour générer le mot de passe aléatoire
function generateRandomPassword() {
  const password = generatePassword.generate(passwordfeatures);
  console.log("Mot de passe généré :", password);
}

//on appelle la fonction
generateRandomPassword();

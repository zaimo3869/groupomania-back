Creer un dossier back 

Installer ce repo dans le dossier back

Une fois insatller via le terminal tapez la commande "npm install" pour installer les dependances nécessaire au fonctionnement du backend,

Les dépendances :
-----------------------------------------------------------
{
  "name": "back",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.0.1",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "express-rate-limit": "^6.3.0",
    "jsonwebtoken": "^8.5.1",
    "multer": "^1.4.4",
    "mysql": "^2.18.1"
  }
}
-----------------------------------------------------------

Assurer vous que rien n'est en cours sur votre port 3000 car le back se branchera dessus,

Ensuite tapez "nodemon server" qui lancera le serveur et affichera 'listening on port 3000'

Le back est en place


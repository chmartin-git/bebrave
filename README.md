# BEBRAVE
Site web de l'application BEBRAVE, ajouter une description ici ...
## INSTALLATION
Pour installer le projet sur votre ordinateur vous allez devoir ouvrir un invité de commande (powershell ou cmd) en utilisant la commande :

`cd /le/dossier/` pour linux

ou

`cd E:/le/dossier/` pour windows (changer la lettre selon le besoin)

Ensuite récupérer le dépôt en tapant:

`git clone https://github.com/chmartin-git/bebrave.git`

Une fois le dépôt téléchargé il faut vous rendre dans le dossier client en faisant :

`cd ./bebrave/client`

Il faut ensuite installer les dépendances en faisant:

`npm install` **IL FAUT INSTALLER NODEJS AVANT !**

Il faut ensuite installer les dépendances du serveur back-end en faisant:

`cd ../server`

puis

`npm install`

Enfin pour lancer le serveur client : 

`cd ../client/`

puis

`npm start`

/!\ **Cette commande vérrouille l'invité de commande pour quitter appuyer CTRL+C**

Pour lancer le serveur back-end il faut se rendre dans le dossier 'serveur' et lancer la commande

`npm start`

/!\ **Cette commande vérrouille l'invité de commande pour quitter appuyer CTRL+C**

### COMPILATION SASS

Le serveur web utilise le langage SASS/SCSS qui nécessite d'être compilé pour créer un fichier CSS. 
Pour cela le package node _gulp_ est installé, son fichier de configuration se trouve dans :

> bebrave/server/gulpfile.js

Ce package permet de compiler **tout** les fichiers **.sass** se trouvant dans :

> bebrave/client/assets/style/sass 

et les compile en fichier avec l'extension .min.css dans le dossier :

> bebrave/client/assets/style/css

Pour lancer la compilation il faut se rendre dans le dossier 'serveur' (`cd server`) et lancer la commande:

`npm run gc`

pour une compilation automatique (à chaque fois que vous modifiez **et** que vous enregistrez)
 il faut lancer la commander :
 
 `npm run gw` 
 
 /!\ **Cette commande vérrouille l'invité de commande pour quitter appuyer CTRL+C**

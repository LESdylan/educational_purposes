### Objectif

L'objetif du projet est de créer un jeu de puissance 4 connecté ou 2 joueurs peuvent se défier

-le premier utilisateur choisit un pseudo et obtient l'utl à partager pour inviter les autres joueurs
-le joueur 2 choisit aussi un pseudo et rejoint la partie
-les deux joueurs choisissent une partie
-le créateur de la partie lance la partie
-les jouers places des pions à tour de rôle dans une grille de 7\*6
-un joueur gagne si 4 pions sont alignés verticalement horizontalement ou en diagonal

## technologies

- node JS
  - Javascript(plus précisément typeScript), on a pas le choix d'utiliser javaScript côté frontEnd
  - javascript back end, on l'utilise pour partager et synchronisé un maximum de code
- typeScript, on se passe de pas mal de test car il test automatiquement les différentes briques de notre code
- React, il dispose du plus grand ecosystème de bibliothèque
- xState, représente notre système sur une série d'état différent
- solutiion en ligne :

  - http : très bien pour la communication dans un sens côté serveur
  - server-sent events : envoie les infos du serveur vers le client
  - [x] (choix judicieux) the WebSockets API : permet d'avoir une connexion avec l'utilisateur et télécharger des données et les échanger également
  - WebRTC API : très bien si l'on veut se passer d'un serveur central

- Websockets
  - librairies natives de webSockets
    - reconnecting-web-socket (https://www.npmjs.com/search?q=reconnecting-websocket)

frameWork: Fastify
https://www.npmjs.com/search?q=%40fastify%2Fwebsocket

## Etapes

- machine à état(tester autant que possible)
- interface
- jeu hors ligne
- mise en place du serveur \* membre premium
- jeu en ligne \* membre premium
- mise ne ligne (déploiement)

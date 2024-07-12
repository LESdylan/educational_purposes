const cards = [
  "https://picsum.photos/id/237/100/100",
  "https://picsum.photos/id/238/100/100",
  "https://picsum.photos/id/239/100/100",
  "https://picsum.photos/id/240/100/100",
  "https://picsum.photos/id/241/100/100",
  "https://picsum.photos/id/242/100/100",
  "https://picsum.photos/id/243/100/100",
  "https://picsum.photos/id/244/100/100",
];
const gameBoard = document.getElementById("game-board");
let selectedCards = [];

function createCard(cardUrl) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.value = cardUrl;

  const cardContent = document.createElement("img");
  cardContent.classList.add("card-content");
  cardContent.src = cardUrl;

  card.appendChild(cardContent);

  card.addEventListener("click", onCardClick);
  return card;
}

function duplicateArray(arraySimple) {
  let arrayDouble = [];
  arrayDouble.push(...arraySimple);
  arrayDouble.push(...arraySimple);

  return arrayDouble;
}

function shuffleArray(arrayToshuffle) {
  const arrayShuffled = arrayToshuffle.sort(() => 0.5 - Math.random());
  return arrayShuffled;
}

function onCardClick(e) {
  const card = e.target.parentElement;
  card.classList.add("flip");

  selectedCards.push(card);
  if (selectedCards.length == 2) {
    setTimeout(() => {
      if (selectedCards[0].dataset.value == selectedCards[1].dataset.value) {
        //on a trouvé une paire
        selectedCards[0].classList.add("matched");
        selectedCards[0].removeEventListener("click", onCardClick);
        selectedCards[1].classList.add("matched");
        selectedCards[1].removeEventListener("click", onCardClick);

        const allCardsNotMatched = document.querySelectorAll(
          ".card:not(.matched)"
        );
        console.log(allCardsNotMatched.length);
        if (allCardsNotMatched.length == 0) {
          //Le joueur a gagné
          alert("Bravo, vous avez gagné");
        }
      } else {
        //on s'est trompé
        selectedCards[0].classList.remove("flip");
        selectedCards[1].classList.remove("flip");
      }
      selectedCards = [];
    }, 1000);
  }
}

//mettre un chronomètre

function chrono() {
  let count = 200;
  const timer = setInterval(() => {
    if (count > -1) {
      console.log(count);
      count--;
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

let allCards = duplicateArray(cards);
//Mélanger le tableau
allCards = shuffleArray(allCards);
allCards.forEach((card) => {
  const cardHtml = createCard(card);
  gameBoard.appendChild(cardHtml);
});

chrono();
const chronoelement = document.createElement("div");
chronoelement.classList.add("clock");
gameBoard.appendChild(chronoelement);

//start over the game
const reStart = document.createElement("button");
reStart.classList.add("start-over");
reStart.textContent = "start Over";
gameBoard.appendChild(reStart);

//pour aller plus loin:
/**
 *Ajouter la possibilité de recommencer une partie sans rafraîchir la page : pour cela, il suffit d’ajouter un bouton permettant de régénérer le plateau et de remettre à 0 toutes vos variables de jeu.
 *Bloquer les clics pendant la seconde d’attente : pendant la seconde d’attente avant de valider une paire, ou de retourner les cartes, on peut encore cliquer sur les autres cartes, c’est un bug qui pourrait compromettre le bon déroulement de la partie.
 *Stocker les précédents scores en cookie : pour faire une moyenne des scores et établir un meilleur score personnel à battre, on pourrait stocker les scores en cookie pour pouvoir faire des statistiques dessus.
 * Mettre un chronomètre : lancer un chronomètre en JS au début de la partie, et afficher le temps à la fin de la partie pour donner un score à l’utilisateur.*/

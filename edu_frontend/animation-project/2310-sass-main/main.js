const numberOfStars = 200;

  // Sélection du conteneur galaxy
const galaxyContainer = document.getElementById('galaxy');

// Fonction pour générer un nombre aléatoire dans une plage
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Boucle pour créer et ajouter des étoiles de manière aléatoire
for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${getRandomNumber(0, 100)}%`;
    star.style.left = `${getRandomNumber(0, 100)}%`;
    galaxyContainer.appendChild(star);

    // Ajouter la classe "twinkle" de manière aléatoire
    if (Math.random() < 0.5) {
    star.classList.add('twinkle');
    }
}
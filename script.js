
    // Couleurs disponibles pour les cartes UNO
   // Couleurs disponibles pour les cartes UNO
const colors = ['red', 'blue', 'green', 'yellow'];

// Nombres disponibles pour les cartes UNO
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Tableau pour stocker les cartes
const unoCards = [];

// Générer les cartes UNO
for (let color of colors) {
    for (let number of numbers) {
        unoCards.push({ color, number });
    }
}

// Fonction pour mélanger le tableau de cartes de manière aléatoire
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Mélanger le tableau de cartes UNO
shuffleArray(unoCards);



    unoCards.forEach(card => {
    // Create a new div element
var cardDiv = document.createElement("div");
cardDiv.style.backgroundColor=card.color;

// Add the 'card' class to the div
cardDiv.className = "card";

// Create div elements for the title, circle, content, and footer
var titleDiv = document.createElement("div");
titleDiv.className = "card_title";
titleDiv.textContent = card.number;

var circleDiv = document.createElement("div");
circleDiv.className = "card_circle";

var contentDiv = document.createElement("div");
contentDiv.className = "card_content";
contentDiv.textContent = card.number;

var footerDiv = document.createElement("div");
footerDiv.className = "card_footer";
footerDiv.textContent = card.number;

// Append the title, circle, content, and footer divs to the card div
cardDiv.appendChild(titleDiv);
cardDiv.appendChild(circleDiv);
cardDiv.appendChild(contentDiv);
cardDiv.appendChild(footerDiv);

// Append the card div to the body or any other container element
document.body.appendChild(cardDiv);
    });

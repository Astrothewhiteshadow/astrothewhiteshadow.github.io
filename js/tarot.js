// Liste der Tarot-Karten und zugehöriger Bilddateien
const tarotDeck = [
    { name: 'The Fool', image: 'js/img/tarot/fool.jpg', description: '' },
    { name: 'The Magician', image: 'js/img/tarot/magician.jpg', description: '' },
    { name: 'The High Priestess', image: 'js/img/tarot/highpriestess.jpg', description: '' },
    { name: 'The Empress', image: 'js/img/tarot/empress.jpg', description: '' },
    { name: 'The Emperor', image: 'js/img/tarot/emperor.jpg', description: '' },
    { name: 'The Hierophant', image: 'js/img/tarot/hierophant.jpg', description: '' },
    { name: 'The Lovers', image: 'js/img/tarot/lovers.jpg', description: '' },
    { name: 'The Chariot', image: 'js/img/tarot/chariot.jpg', description: '' },
    { name: 'Justice', image: 'js/img/tarot/justice.jpg', description: '' },
    { name: 'The Hermit', image: 'js/img/tarot/hermit.jpg', description: '' },
    { name: 'Wheel of Fortune', image: 'js/img/tarot/wheeloffortune.jpg', description: '' },
    { name: 'Strength', image: 'js/img/tarot/strength.jpg', description: '' },
    { name: 'The Hanged Man', image: 'js/img/tarot/hangedman.jpg', description: '' },
    { name: 'Death', image: 'js/img/tarot/death.jpg', description: '' },
    { name: 'Temperance', image: 'js/img/tarot/temperance.jpg', description: '' },
    { name: 'The Devil', image: 'js/img/tarot/devil.jpg', description: '' },
    { name: 'The Tower', image: 'js/img/tarot/tower.jpg', description: '' },
    { name: 'The Star', image: 'js/img/tarot/star.jpg', description: '' },
    { name: 'The Moon', image: 'js/img/tarot/moon.jpg', description: '' },
    { name: 'The Sun', image: 'js/img/tarot/sun.jpg', description: '' },
    { name: 'Judgement', image: 'js/img/tarot/judgement.jpg', description: '' },
    { name: 'The World', image: 'js/img/tarot/world.jpg', description: '' },

    { name: 'Ace of Cups', image: 'js/img/tarot/acecups.jpg', description: '' },
    { name: 'Two of Cups', image: 'js/img/tarot/twocups.jpg', description: '' },
    { name: 'Three of Cups', image: 'js/img/tarot/threecups.jpg', description: '' },
    { name: 'Four of Cups', image: 'js/img/tarot/fourcups.jpg', description: '' },
    { name: 'Five of Cups', image: 'js/img/tarot/fivecups.jpg', description: '' },
    { name: 'Six of Cups', image: 'js/img/tarot/sixcups.jpg', description: '' },
    { name: 'Seven of Cups', image: 'js/img/tarot/sevencups.jpg', description: '' },
    { name: 'Eight of Cups', image: 'js/img/tarot/eightcups.jpg', description: '' },
    { name: 'Nine of Cups', image: 'js/img/tarot/ninecups.jpg', description: '' },
    { name: 'Ten of Cups', image: 'js/img/tarot/tencups.jpg', description: '' },
    { name: 'Page of Cups', image: 'js/img/tarot/pagecups.jpg', description: '' },
    { name: 'Knight of Cups', image: 'js/img/tarot/knightcups.jpg', description: '' },
    { name: 'Queen of Cups', image: 'js/img/tarot/queencups.jpg', description: '' },
    { name: 'King of Cups', image: 'js/img/tarot/kingcups.jpg', description: '' },

    { name: 'Ace of Pentacles', image: 'js/img/tarot/acepentacles.jpg', description: '' },
    { name: 'Two of Pentacles', image: 'js/img/tarot/twopentacles.jpg', description: '' },
    { name: 'Three of Pentacles', image: 'js/img/tarot/threepentacles.jpg', description: '' },
    { name: 'Four of Pentacles', image: 'js/img/tarot/fourpentacles.jpg', description: '' },
    { name: 'Five of Pentacles', image: 'js/img/tarot/fivepentacles.jpg', description: '' },
    { name: 'Six of Pentacles', image: 'js/img/tarot/sixpentacles.jpg', description: '' },
    { name: 'Seven of Pentacles', image: 'js/img/tarot/sevenpentacles.jpg', description: '' },
    { name: 'Eight of Pentacles', image: 'js/img/tarot/eightpentacles.jpg', description: '' },
    { name: 'Nine of Pentacles', image: 'js/img/tarot/ninepentacles.jpg', description: '' },
    { name: 'Ten of Pentacles', image: 'js/img/tarot/tenpentacles.jpg', description: '' },
    { name: 'Page of Pentacles', image: 'js/img/tarot/pagepentacles.jpg', description: '' },
    { name: 'Knight of Pentacles', image: 'js/img/tarot/knightpentacles.jpg', description: '' },
    { name: 'Queen of Pentacles', image: 'js/img/tarot/queenpentacles.jpg', description: '' },
    { name: 'King of Pentacles', image: 'js/img/tarot/kingpentacles.jpg', description: '' },

    { name: 'Ace of Swords', image: 'js/img/tarot/aceswords.jpg', description: '' },
    { name: 'Two of Swords', image: 'js/img/tarot/twoswords.jpg', description: '' },
    { name: 'Three of Swords', image: 'js/img/tarot/threeswords.jpg', description: '' },
    { name: 'Four of Swords', image: 'js/img/tarot/fourswords.jpg', description: '' },
    { name: 'Five of Swords', image: 'js/img/tarot/fiveswords.jpg', description: '' },
    { name: 'Six of Swords', image: 'js/img/tarot/sixswords.jpg', description: '' },
    { name: 'Seven of Swords', image: 'js/img/tarot/sevenswords.jpg', description: '' },
    { name: 'Eight of Swords', image: 'js/img/tarot/eightswords.jpg', description: '' },
    { name: 'Nine of Swords', image: 'js/img/tarot/nineswords.jpg', description: '' },
    { name: 'Ten of Swords', image: 'js/img/tarot/tenswords.jpg', description: '' },
    { name: 'Page of Swords', image: 'js/img/tarot/pageswords.jpg', description: '' },
    { name: 'Knight of Swords', image: 'js/img/tarot/knightswords.jpg', description: '' },
    { name: 'Queen of Swords', image: 'js/img/tarot/queenswords.jpg', description: '' },
    { name: 'King of Swords', image: 'js/img/tarot/kingswords.jpg', description: '' },

    { name: 'Ace of Wands', image: 'js/img/tarot/acewands.jpg', description: '' },
    { name: 'Two of Wands', image: 'js/img/tarot/twowands.jpg', description: '' },
    { name: 'Three of Wands', image: 'js/img/tarot/threewands.jpg', description: '' },
    { name: 'Four of Wands', image: 'js/img/tarot/fourwands.jpg', description: '' },
    { name: 'Five of Wands', image: 'js/img/tarot/fivewands.jpg', description: '' },
    { name: 'Six of Wands', image: 'js/img/tarot/sixwands.jpg', description: '' },
    { name: 'Seven of Wands', image: 'js/img/tarot/sevenwands.jpg', description: '' },
    { name: 'Eight of Wands', image: 'js/img/tarot/eightwands.jpg', description: '' },
    { name: 'Nine of Wands', image: 'js/img/tarot/ninewands.jpg', description: '' },
    { name: 'Ten of Wands', image: 'js/img/tarot/tenwands.jpg', description: '' },
    { name: 'Page of Wands', image: 'js/img/tarot/pagewands.jpg', description: '' },
    { name: 'Knight of Wands', image: 'js/img/tarot/knightwands.jpg', description: '' },
    { name: 'Queen of Wands', image: 'js/img/tarot/queenwands.jpg', description: '' },
    { name: 'King of Wands', image: 'js/img/tarot/kingwands.jpg', description: '' },


/*
    { name: 'Ace of', image: 'js/img/tarot/ace.jpg', description: '' },
    { name: 'Two of', image: 'js/img/tarot/two.jpg', description: '' },
    { name: 'Three of', image: 'js/img/tarot/three.jpg', description: '' },
    { name: 'Four of', image: 'js/img/tarot/four.jpg', description: '' },
    { name: 'Five of', image: 'js/img/tarot/five.jpg', description: '' },
    { name: 'Six of', image: 'js/img/tarot/six.jpg', description: '' },
    { name: 'Seven of', image: 'js/img/tarot/seven.jpg', description: '' },
    { name: 'Eight of', image: 'js/img/tarot/eight.jpg', description: '' },
    { name: 'Nine of', image: 'js/img/tarot/nine.jpg', description: '' },
    { name: 'Ten of', image: 'js/img/tarot/ten.jpg', description: '' },
    { name: 'Page of', image: 'js/img/tarot/page.jpg', description: '' },
    { name: 'Knight of', image: 'js/img/tarot/knight.jpg', description: '' },
    { name: 'Queen of', image: 'js/img/tarot/queen.jpg', description: '' },
    { name: 'King of', image: 'js/img/tarot/king.jpg', description: '' },
*/
];

// Funktion zum Mischen des Decks
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// Funktion zum Ziehen von Karten
function drawCards() {
    // Deck mischen
    const shuffledDeck = shuffleDeck([...tarotDeck]);

    // Die ersten drei Karten ziehen
    const card1 = shuffledDeck[0];
    const card2 = shuffledDeck[1];
    const card3 = shuffledDeck[2];

    // Bilder der Karten in die entsprechenden HTML-Elemente einfügen
    document.querySelector('#card1 img').src = card1.image;
    document.querySelector('#card1 img').alt = card1.name;
    document.getElementById('description1').innerText = card1.description;
    document.querySelector('#card2 img').src = card2.image;
    document.querySelector('#card2 img').alt = card2.name;
    document.getElementById('description2').innerText = card2.description;
    document.querySelector('#card3 img').src = card3.image;
    document.querySelector('#card3 img').alt = card3.name;
    document.getElementById('description3').innerText = card3.description;
}

// Liste der Tarot-Karten und zugehöriger Bilddateien
const tarotDeck = [
    { name: 'The Fool', image: 'img/tarot/fool.jpg' },
    { name: 'The Magician', image: 'img/tarot/magician.jpg' },
    { name: 'The High Priestess', image: 'img/tarot/highpriestess.jpg' },
    { name: 'The Empress', image: 'img/tarot/empress.jpg' },
    { name: 'The Emperor', image: 'img/tarot/emperor.jpg' },
    { name: 'The Hierophant', image: 'img/tarot/hierophant.jpg' },
    { name: 'The Lovers', image: 'img/tarot/lovers.jpg' },
    { name: 'The Chariot', image: 'img/tarot/chariot.jpg' },
    { name: 'Justice', image: 'img/tarot/justice.jpg' },
    { name: 'The Hermit', image: 'img/tarot/hermit.jpg' },
    { name: 'Wheel of Fortune', image: 'img/tarot/wheeloffortune.jpg' },
    { name: 'Strength', image: 'img/tarot/strength.jpg' },
    { name: 'The Hanged Man', image: 'img/tarot/hangedman.jpg' },
    { name: 'Death', image: 'img/tarot/death.jpg' },
    { name: 'Temperance', image: 'img/tarot/temperance.jpg' },
    { name: 'The Devil', image: 'img/tarot/devil.jpg' },
    { name: 'The Tower', image: 'img/tarot/tower.jpg' },
    { name: 'The Star', image: 'img/tarot/star.jpg' },
    { name: 'The Moon', image: 'img/tarot/moon.jpg' },
    { name: 'The Sun', image: 'img/tarot/sun.jpg' },
    { name: 'Judgement', image: 'img/tarot/judgement.jpg' },
    { name: 'The World', image: 'img/tarot/world.jpg' },

    { name: 'Ace of Cups', image: 'img/tarot/acecups.jpg' },
    { name: 'Two of Cups', image: 'img/tarot/twocups.jpg' },
    { name: 'Three of Cups', image: 'img/tarot/threecups.jpg' },
    { name: 'Four of Cups', image: 'img/tarot/fourcups.jpg' },
    { name: 'Five of Cups', image: 'img/tarot/fivecups.jpg' },
    { name: 'Six of Cups', image: 'img/tarot/sixcups.jpg' },
    { name: 'Seven of Cups', image: 'img/tarot/sevencups.jpg' },
    { name: 'Eight of Cups', image: 'img/tarot/eightcups.jpg' },
    { name: 'Nine of Cups', image: 'img/tarot/ninecups.jpg' },
    { name: 'Ten of Cups', image: 'img/tarot/tencups.jpg' },
    { name: 'Page of Cups', image: 'img/tarot/pagecups.jpg' },
    { name: 'Knight of Cups', image: 'img/tarot/knightcups.jpg' },
    { name: 'Queen of Cups', image: 'img/tarot/queencups.jpg' },
    { name: 'King of Cups', image: 'img/tarot/kingcups.jpg' },

    { name: 'Ace of Pentacles', image: 'img/tarot/acepentacles.jpg' },
    { name: 'Two of Pentacles', image: 'img/tarot/twopentacles.jpg' },
    { name: 'Three of Pentacles', image: 'img/tarot/threepentacles.jpg' },
    { name: 'Four of Pentacles', image: 'img/tarot/fourpentacles.jpg' },
    { name: 'Five of Pentacles', image: 'img/tarot/fivepentacles.jpg' },
    { name: 'Six of Pentacles', image: 'img/tarot/sixpentacles.jpg' },
    { name: 'Seven of Pentacles', image: 'img/tarot/sevenpentacles.jpg' },
    { name: 'Eight of Pentacles', image: 'img/tarot/eightpentacles.jpg' },
    { name: 'Nine of Pentacles', image: 'img/tarot/ninepentacles.jpg' },
    { name: 'Ten of Pentacles', image: 'img/tarot/tenpentacles.jpg' },
    { name: 'Page of Pentacles', image: 'img/tarot/pagepentacles.jpg' },
    { name: 'Knight of Pentacles', image: 'img/tarot/knightpentacles.jpg' },
    { name: 'Queen of Pentacles', image: 'img/tarot/queenpentacles.jpg' },
    { name: 'King of Pentacles', image: 'img/tarot/kingpentacles.jpg' },

    { name: 'Ace of Swords', image: 'img/tarot/aceswords.jpg' },
    { name: 'Two of Swords', image: 'img/tarot/twoswords.jpg' },
    { name: 'Three of Swords', image: 'img/tarot/threeswords.jpg' },
    { name: 'Four of Swords', image: 'img/tarot/fourswords.jpg' },
    { name: 'Five of Swords', image: 'img/tarot/fiveswords.jpg' },
    { name: 'Six of Swords', image: 'img/tarot/sixswords.jpg' },
    { name: 'Seven of Swords', image: 'img/tarot/sevenswords.jpg' },
    { name: 'Eight of Swords', image: 'img/tarot/eightswords.jpg' },
    { name: 'Nine of Swords', image: 'img/tarot/nineswords.jpg' },
    { name: 'Ten of Swords', image: 'img/tarot/tenswords.jpg' },
    { name: 'Page of Swords', image: 'img/tarot/pageswords.jpg' },
    { name: 'Knight of Swords', image: 'img/tarot/knightswords.jpg' },
    { name: 'Queen of Swords', image: 'img/tarot/queenswords.jpg' },
    { name: 'King of Swords', image: 'img/tarot/kingswords.jpg' },

    { name: 'Ace of Wands', image: 'img/tarot/acewands.jpg' },
    { name: 'Two of Wands', image: 'img/tarot/twowands.jpg' },
    { name: 'Three of Wands', image: 'img/tarot/threewands.jpg' },
    { name: 'Four of Wands', image: 'img/tarot/fourwands.jpg' },
    { name: 'Five of Wands', image: 'img/tarot/fivewands.jpg' },
    { name: 'Six of Wands', image: 'img/tarot/sixwands.jpg' },
    { name: 'Seven of Wands', image: 'img/tarot/sevenwands.jpg' },
    { name: 'Eight of Wands', image: 'img/tarot/eightwands.jpg' },
    { name: 'Nine of Wands', image: 'img/tarot/ninewands.jpg' },
    { name: 'Ten of Wands', image: 'img/tarot/tenwands.jpg' },
    { name: 'Page of Wands', image: 'img/tarot/pagewands.jpg' },
    { name: 'Knight of Wands', image: 'img/tarot/knightwands.jpg' },
    { name: 'Queen of Wands', image: 'img/tarot/queenwands.jpg' },
    { name: 'King of Wands', image: 'img/tarot/kingwands.jpg' },


/*
    { name: 'Ace of', image: 'img/tarot/ace.jpg' },
    { name: 'Two of', image: 'img/tarot/two.jpg' },
    { name: 'Three of', image: 'img/tarot/three.jpg' },
    { name: 'Four of', image: 'img/tarot/four.jpg' },
    { name: 'Five of', image: 'img/tarot/five.jpg' },
    { name: 'Six of', image: 'img/tarot/six.jpg' },
    { name: 'Seven of', image: 'img/tarot/seven.jpg' },
    { name: 'Eight of', image: 'img/tarot/eight.jpg' },
    { name: 'Nine of', image: 'img/tarot/nine.jpg' },
    { name: 'Ten of', image: 'img/tarot/ten.jpg' },
    { name: 'Page of', image: 'img/tarot/page.jpg' },
    { name: 'Knight of', image: 'img/tarot/knight.jpg' },
    { name: 'Queen of', image: 'img/tarot/queen.jpg' },
    { name: 'King of', image: 'img/tarot/king.jpg' },
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
    document.querySelector('#card2 img').src = card2.image;
    document.querySelector('#card2 img').alt = card2.name;
    document.querySelector('#card3 img').src = card3.image;
    document.querySelector('#card3 img').alt = card3.name;
}
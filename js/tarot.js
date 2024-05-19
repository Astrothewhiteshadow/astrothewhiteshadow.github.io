// Liste der Tarot-Karten und zugehöriger Bilddateien
const tarotDeck = [
    { name: 'The Fool', image: 'js/img/tarot/fool.jpg' },
    { name: 'The Magician', image: 'js/img/tarot/magician.jpg' },
    { name: 'The High Priestess', image: 'js/img/tarot/highpriestess.jpg' },
    { name: 'The Empress', image: 'js/img/tarot/empress.jpg' },
    { name: 'The Emperor', image: 'js/img/tarot/emperor.jpg' },
    { name: 'The Hierophant', image: 'js/img/tarot/hierophant.jpg' },
    { name: 'The Lovers', image: 'js/img/tarot/lovers.jpg' },
    { name: 'The Chariot', image: 'js/img/tarot/chariot.jpg' },
    { name: 'Justice', image: 'js/img/tarot/justice.jpg' },
    { name: 'The Hermit', image: 'js/img/tarot/hermit.jpg' },
    { name: 'Wheel of Fortune', image: 'js/img/tarot/wheeloffortune.jpg' },
    { name: 'Strength', image: 'js/img/tarot/strength.jpg' },
    { name: 'The Hanged Man', image: 'js/img/tarot/hangedman.jpg' },
    { name: 'Death', image: 'js/img/tarot/death.jpg' },
    { name: 'Temperance', image: 'js/img/tarot/temperance.jpg' },
    { name: 'The Devil', image: 'js/img/tarot/devil.jpg' },
    { name: 'The Tower', image: 'js/img/tarot/tower.jpg' },
    { name: 'The Star', image: 'js/img/tarot/star.jpg' },
    { name: 'The Moon', image: 'js/img/tarot/moon.jpg' },
    { name: 'The Sun', image: 'js/img/tarot/sun.jpg' },
    { name: 'Judgement', image: 'js/img/tarot/judgement.jpg' },
    { name: 'The World', image: 'js/img/tarot/world.jpg' },

    { name: 'Ace of Cups', image: 'js/img/tarot/acecups.jpg' },
    { name: 'Two of Cups', image: 'js/img/tarot/twocups.jpg' },
    { name: 'Three of Cups', image: 'js/img/tarot/threecups.jpg' },
    { name: 'Four of Cups', image: 'js/img/tarot/fourcups.jpg' },
    { name: 'Five of Cups', image: 'js/img/tarot/fivecups.jpg' },
    { name: 'Six of Cups', image: 'js/img/tarot/sixcups.jpg' },
    { name: 'Seven of Cups', image: 'js/img/tarot/sevencups.jpg' },
    { name: 'Eight of Cups', image: 'js/img/tarot/eightcups.jpg' },
    { name: 'Nine of Cups', image: 'js/img/tarot/ninecups.jpg' },
    { name: 'Ten of Cups', image: 'js/img/tarot/tencups.jpg' },
    { name: 'Page of Cups', image: 'js/img/tarot/pagecups.jpg' },
    { name: 'Knight of Cups', image: 'js/img/tarot/knightcups.jpg' },
    { name: 'Queen of Cups', image: 'js/img/tarot/queencups.jpg' },
    { name: 'King of Cups', image: 'js/img/tarot/kingcups.jpg' },

    { name: 'Ace of Pentacles', image: 'js/img/tarot/acepentacles.jpg' },
    { name: 'Two of Pentacles', image: 'js/img/tarot/twopentacles.jpg' },
    { name: 'Three of Pentacles', image: 'js/img/tarot/threepentacles.jpg' },
    { name: 'Four of Pentacles', image: 'js/img/tarot/fourpentacles.jpg' },
    { name: 'Five of Pentacles', image: 'js/img/tarot/fivepentacles.jpg' },
    { name: 'Six of Pentacles', image: 'js/img/tarot/sixpentacles.jpg' },
    { name: 'Seven of Pentacles', image: 'js/img/tarot/sevenpentacles.jpg' },
    { name: 'Eight of Pentacles', image: 'js/img/tarot/eightpentacles.jpg' },
    { name: 'Nine of Pentacles', image: 'js/img/tarot/ninepentacles.jpg' },
    { name: 'Ten of Pentacles', image: 'js/img/tarot/tenpentacles.jpg' },
    { name: 'Page of Pentacles', image: 'js/img/tarot/pagepentacles.jpg' },
    { name: 'Knight of Pentacles', image: 'js/img/tarot/knightpentacles.jpg' },
    { name: 'Queen of Pentacles', image: 'js/img/tarot/queenpentacles.jpg' },
    { name: 'King of Pentacles', image: 'js/img/tarot/kingpentacles.jpg' },

    { name: 'Ace of Swords', image: 'js/img/tarot/aceswords.jpg' },
    { name: 'Two of Swords', image: 'js/img/tarot/twoswords.jpg' },
    { name: 'Three of Swords', image: 'js/img/tarot/threeswords.jpg' },
    { name: 'Four of Swords', image: 'js/img/tarot/fourswords.jpg' },
    { name: 'Five of Swords', image: 'js/img/tarot/fiveswords.jpg' },
    { name: 'Six of Swords', image: 'js/img/tarot/sixswords.jpg' },
    { name: 'Seven of Swords', image: 'js/img/tarot/sevenswords.jpg' },
    { name: 'Eight of Swords', image: 'js/img/tarot/eightswords.jpg' },
    { name: 'Nine of Swords', image: 'js/img/tarot/nineswords.jpg' },
    { name: 'Ten of Swords', image: 'js/img/tarot/tenswords.jpg' },
    { name: 'Page of Swords', image: 'js/img/tarot/pageswords.jpg' },
    { name: 'Knight of Swords', image: 'js/img/tarot/knightswords.jpg' },
    { name: 'Queen of Swords', image: 'js/img/tarot/queenswords.jpg' },
    { name: 'King of Swords', image: 'js/img/tarot/kingswords.jpg' },

    { name: 'Ace of Wands', image: 'js/img/tarot/acewands.jpg' },
    { name: 'Two of Wands', image: 'js/img/tarot/twowands.jpg' },
    { name: 'Three of Wands', image: 'js/img/tarot/threewands.jpg' },
    { name: 'Four of Wands', image: 'js/img/tarot/fourwands.jpg' },
    { name: 'Five of Wands', image: 'js/img/tarot/fivewands.jpg' },
    { name: 'Six of Wands', image: 'js/img/tarot/sixwands.jpg' },
    { name: 'Seven of Wands', image: 'js/img/tarot/sevenwands.jpg' },
    { name: 'Eight of Wands', image: 'js/img/tarot/eightwands.jpg' },
    { name: 'Nine of Wands', image: 'js/img/tarot/ninewands.jpg' },
    { name: 'Ten of Wands', image: 'js/img/tarot/tenwands.jpg' },
    { name: 'Page of Wands', image: 'js/img/tarot/pagewands.jpg' },
    { name: 'Knight of Wands', image: 'js/img/tarot/knightwands.jpg' },
    { name: 'Queen of Wands', image: 'js/img/tarot/queenwands.jpg' },
    { name: 'King of Wands', image: 'js/img/tarot/kingwands.jpg' },


/*
    { name: 'Ace of', image: 'js/img/tarot/ace.jpg' },
    { name: 'Two of', image: 'js/img/tarot/two.jpg' },
    { name: 'Three of', image: 'js/img/tarot/three.jpg' },
    { name: 'Four of', image: 'js/img/tarot/four.jpg' },
    { name: 'Five of', image: 'js/img/tarot/five.jpg' },
    { name: 'Six of', image: 'js/img/tarot/six.jpg' },
    { name: 'Seven of', image: 'js/img/tarot/seven.jpg' },
    { name: 'Eight of', image: 'js/img/tarot/eight.jpg' },
    { name: 'Nine of', image: 'js/img/tarot/nine.jpg' },
    { name: 'Ten of', image: 'js/img/tarot/ten.jpg' },
    { name: 'Page of', image: 'js/img/tarot/page.jpg' },
    { name: 'Knight of', image: 'js/img/tarot/knight.jpg' },
    { name: 'Queen of', image: 'js/img/tarot/queen.jpg' },
    { name: 'King of', image: 'js/img/tarot/king.jpg' },
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

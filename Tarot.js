// Liste der Tarot-Karten und zugehöriger Bilddateien
const tarotDeck = [
    { name: 'Der Narr', image: 'images/der_narr.jpg' },
    { name: 'Der Magier', image: 'images/der_magier.jpg' },
    { name: 'Die Hohepriesterin', image: 'images/die_hohepriesterin.jpg' },
    { name: 'Die Herrscherin', image: 'images/die_herrscherin.jpg' },
    { name: 'Der Herrscher', image: 'images/der_herrscher.jpg' },
    { name: 'Der Hierophant', image: 'images/der_hierophant.jpg' },
    { name: 'Die Liebenden', image: 'images/die_liebenden.jpg' },
    { name: 'Der Wagen', image: 'images/der_wagen.jpg' },
    { name: 'Gerechtigkeit', image: 'images/gerechtigkeit.jpg' },
    { name: 'Der Eremit', image: 'images/der_eremit.jpg' },
    { name: 'Das Rad des Schicksals', image: 'images/das_rad_des_schicksals.jpg' },
    { name: 'Die Kraft', image: 'images/die_kraft.jpg' },
    { name: 'Der Gehängte', image: 'images/der_gehängte.jpg' },
    { name: 'Der Tod', image: 'images/der_tod.jpg' },
    { name: 'Die Mäßigkeit', image: 'images/die_maessigkeit.jpg' },
    { name: 'Der Teufel', image: 'images/der_teufel.jpg' },
    { name: 'Der Turm', image: 'images/der_turm.jpg' },
    { name: 'Der Stern', image: 'images/der_stern.jpg' },
    { name: 'Der Mond', image: 'images/der_mond.jpg' },
    { name: 'Die Sonne', image: 'images/die_sonne.jpg' },
    { name: 'Das Gericht', image: 'images/das_gericht.jpg' },
    { name: 'Die Welt', image: 'images/die_welt.jpg' }
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
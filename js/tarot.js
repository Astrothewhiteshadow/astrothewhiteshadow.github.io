// Liste der Tarot-Karten und zugehöriger Bilddateien
const tarotDeck = [
    { name: 'The Fool', image: 'js/img/tarot/fool.jpg', meanings: {
        past: "Beginnings that shaped your journey, innocence that led to new experiences.",
        present: "Embracing spontaneity and adventure, taking a leap of faith.",
        future: "New opportunities on the horizon, a fresh start awaits.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The Magician', image: 'js/img/tarot/magician.jpg', meanings: {
        past: "Utilizing your skills and talents, early manifestations of your desires",
        present: "Harnessing your personal power and resourcefulness, creating your reality",
        future: "Opportunities to manifest your goals, inspired action will lead to success.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The High Priestess', image: 'js/img/tarot/highpriestess.jpg', meanings: {
        past: "Moments of introspection and intuitive insights, uncovering hidden truths.",
        present: "Trusting your intuition and inner wisdom, embracing the unknown.",
        future: "Deepening your spiritual knowledge, hidden insights will come to light.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The Empress', image: 'js/img/tarot/empress.jpg', meanings: {
        past: "Nurturing relationships and creativity, experiences of abundance.",
        present: "Embracing your femininity and nurturing aspects, enjoying life's pleasures.",
        future: "Growth and abundance, potential for new projects or relationships.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The Emperor', image: 'js/img/tarot/emperor.jpg', meanings: {
        past: "Establishing structure and order, taking on leadership roles.",
        present: "Asserting authority and control, maintaining stability.",
        future: "Building a solid foundation for future success, leadership opportunities.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The Hierophant', image: 'js/img/tarot/hierophant.jpg', meanings: {
        past: "Adhering to traditions and beliefs, early guidance and education.",
        present: "Seeking spiritual wisdom and counsel, embracing conventional values.",
        future: "Opportunities for spiritual growth, potential for teaching or mentoring.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The Lovers', image: 'js/img/tarot/lovers.jpg', meanings: {
        past: "Significant relationships and choices that shaped your path.",
        present: "Harmonious partnerships and love, making value-based decisions.",
        future: "Deepening connections, important choices regarding relationships.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The Chariot', image: 'js/img/tarot/chariot.jpg', meanings: {
        past: "Overcoming challenges through determination, past victories.",
        present: "Harnessing willpower and control, moving forward with confidence.",
        future: "Success through focus and determination, potential for travel or progress.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Justice', image: 'js/img/tarot/justice.jpg', meanings: {
        past: "Experiences of fairness and truth, past decisions and their consequences.",
        present: "Seeking justice and balance, making fair decisions.",
        future: "Future outcomes will be just and fair, potential legal matters.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The Hermit', image: 'js/img/tarot/hermit.jpg', meanings: {
        past: "Periods of introspection and solitude, seeking inner guidance.",
        present: "Taking time for self-reflection and spiritual insight, withdrawal.",
        future: "Continued introspection, potential for enlightenment and wisdom.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Wheel of Fortune', image: 'js/img/tarot/wheeloffortune.jpg', meanings: {
        past: "Significant turning points and cycles, experiences of fate.",
        present: "Embracing change and cycles, recognizing the role of destiny.",
        future: "Positive shifts and opportunities, a new cycle beginning.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Strength', image: 'js/img/tarot/strength.jpg', meanings: {
        past: "Demonstrating courage and resilience, overcoming past obstacles.",
        present: "Balancing inner strength with compassion, mastering self-control.",
        future: "Facing future challenges with courage, strength will lead to success.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The Hanged Man', image: 'js/img/tarot/hangedman.jpg', meanings: {
        past: "Moments of surrender and letting go, gaining new perspectives.",
        present: "Embracing pause and contemplation, seeing things differently.",
        future: "Potential for transformation through surrender, new insights ahead.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Death', image: 'js/img/tarot/death.jpg', meanings: {
        past: "Endings and transformations, significant changes in your life.",
        present: "Embracing change and letting go, transformative processes.",
        future: "New beginnings after endings, profound transformation awaits.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Temperance', image: 'js/img/tarot/temperance.jpg', meanings: {
        past: "Periods of balance and moderation, learning patience.",
        present: "Seeking harmony and balance, practicing moderation.",
        future: "Continued balance and harmony, potential for healing and peace.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The Devil', image: 'js/img/tarot/devil.jpg', meanings: {
        past: "Facing temptations and attachments, past experiences of restriction.",
        present: "Recognizing and breaking free from unhealthy patterns, confronting fears.",
        future: "Opportunities to overcome limitations, potential for liberation.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The Tower', image: 'js/img/tarot/tower.jpg', meanings: {
        past: "Sudden upheavals and revelations, past disruptions.",
        present: "Embracing change and transformation, dealing with chaos.",
        future: "Potential for sudden changes and insights, rebuilding after upheaval.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The Star', image: 'js/img/tarot/star.jpg', meanings: {
        past: "Moments of hope and renewal, past inspirations.",
        present: "Embracing optimism and faith, healing and renewal.",
        future: "Continued hope and inspiration, potential for dreams to come true.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The Moon', image: 'js/img/tarot/moon.jpg', meanings: {
        past: "Facing fears and illusions, past experiences of uncertainty.",
        present: "Trusting intuition and dealing with subconscious issues, confronting fears.",
        future: "Uncovering hidden truths, potential for emotional clarity.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The Sun', image: 'js/img/tarot/sun.jpg', meanings: {
        past: "Periods of joy and success, positive past experiences.",
        present: "Embracing positivity and vitality, enjoying success.",
        future: "Continued success and happiness, potential for joy and fulfillment.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Judgement', image: 'js/img/tarot/judgement.jpg', meanings: {
        past: "Moments of self-reflection and judgement, past awakenings.",
        present: "Embracing rebirth and inner calling, evaluating your path.",
        future: "Opportunities for absolution and renewal, potential for transformative decisions.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'The World', image: 'js/img/tarot/world.jpg', meanings: {
        past: " Completing cycles and achieving goals, past accomplishments.",
        present: "Embracing integration and wholeness, celebrating success.",
        future: "Continued completion and fulfillment, potential for new journeys.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },

    { name: 'Ace of Cups', image: 'js/img/tarot/acecups.jpg', meanings: {
        past: "New emotional beginnings, past experiences of love and creativity.",
        present: "Embracing new relationships and emotional experiences, feeling fulfilled.",
        future: "Potential for new love and creative opportunities, emotional abundance.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Two of Cups', image: 'js/img/tarot/twocups.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Three of Cups', image: 'js/img/tarot/threecups.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Four of Cups', image: 'js/img/tarot/fourcups.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Five of Cups', image: 'js/img/tarot/fivecups.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Six of Cups', image: 'js/img/tarot/sixcups.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Seven of Cups', image: 'js/img/tarot/sevencups.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Eight of Cups', image: 'js/img/tarot/eightcups.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Nine of Cups', image: 'js/img/tarot/ninecups.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Ten of Cups', image: 'js/img/tarot/tencups.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Page of Cups', image: 'js/img/tarot/pagecups.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Knight of Cups', image: 'js/img/tarot/knightcups.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Queen of Cups', image: 'js/img/tarot/queencups.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'King of Cups', image: 'js/img/tarot/kingcups.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },

    { name: 'Ace of Pentacles', image: 'js/img/tarot/acepentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Two of Pentacles', image: 'js/img/tarot/twopentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Three of Pentacles', image: 'js/img/tarot/threepentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Four of Pentacles', image: 'js/img/tarot/fourpentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Five of Pentacles', image: 'js/img/tarot/fivepentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Six of Pentacles', image: 'js/img/tarot/sixpentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Seven of Pentacles', image: 'js/img/tarot/sevenpentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Eight of Pentacles', image: 'js/img/tarot/eightpentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Nine of Pentacles', image: 'js/img/tarot/ninepentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Ten of Pentacles', image: 'js/img/tarot/tenpentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Page of Pentacles', image: 'js/img/tarot/pagepentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Knight of Pentacles', image: 'js/img/tarot/knightpentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Queen of Pentacles', image: 'js/img/tarot/queenpentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'King of Pentacles', image: 'js/img/tarot/kingpentacles.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },

    { name: 'Ace of Swords', image: 'js/img/tarot/aceswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Two of Swords', image: 'js/img/tarot/twoswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Three of Swords', image: 'js/img/tarot/threeswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Four of Swords', image: 'js/img/tarot/fourswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Five of Swords', image: 'js/img/tarot/fiveswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Six of Swords', image: 'js/img/tarot/sixswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Seven of Swords', image: 'js/img/tarot/sevenswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Eight of Swords', image: 'js/img/tarot/eightswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Nine of Swords', image: 'js/img/tarot/nineswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Ten of Swords', image: 'js/img/tarot/tenswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Page of Swords', image: 'js/img/tarot/pageswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Knight of Swords', image: 'js/img/tarot/knightswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Queen of Swords', image: 'js/img/tarot/queenswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'King of Swords', image: 'js/img/tarot/kingswords.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },

    { name: 'Ace of Wands', image: 'js/img/tarot/acewands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Two of Wands', image: 'js/img/tarot/twowands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Three of Wands', image: 'js/img/tarot/threewands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Four of Wands', image: 'js/img/tarot/fourwands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Five of Wands', image: 'js/img/tarot/fivewands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Six of Wands', image: 'js/img/tarot/sixwands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Seven of Wands', image: 'js/img/tarot/sevenwands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Eight of Wands', image: 'js/img/tarot/eightwands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Nine of Wands', image: 'js/img/tarot/ninewands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Ten of Wands', image: 'js/img/tarot/tenwands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Page of Wands', image: 'js/img/tarot/pagewands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Knight of Wands', image: 'js/img/tarot/knightwands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Queen of Wands', image: 'js/img/tarot/queenwands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'King of Wands', image: 'js/img/tarot/kingwands.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },


/*
    { name: 'Ace of', image: 'js/img/tarot/ace.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Two of', image: 'js/img/tarot/two.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Three of', image: 'js/img/tarot/three.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Four of', image: 'js/img/tarot/four.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Five of', image: 'js/img/tarot/five.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Six of', image: 'js/img/tarot/six.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Seven of', image: 'js/img/tarot/seven.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Eight of', image: 'js/img/tarot/eight.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Nine of', image: 'js/img/tarot/nine.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Ten of', image: 'js/img/tarot/ten.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Page of', image: 'js/img/tarot/page.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Knight of', image: 'js/img/tarot/knight.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Queen of', image: 'js/img/tarot/queen.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'King of', image: 'js/img/tarot/king.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
*/
];


function drawCard() {
    const randomIndex = Math.floor(Math.random() * tarotDeck.length);
    const card = tarotDeck[randomIndex];
    const isReversed = Math.random() < 0.5;
    return { ...card, isReversed };
}

function updateCard(elementId, card, position) {
    const cardElement = document.getElementById(elementId);
    const imgElement = cardElement.querySelector("img");
    const descriptionElement = cardElement.querySelector("p");

    imgElement.src = card.image;
    imgElement.alt = card.name;

    if (card.isReversed) {
        cardElement.classList.add("reversed");
        descriptionElement.textContent = card.meanings.reversed[position];
    } else {
        cardElement.classList.remove("reversed");
        descriptionElement.textContent = card.meanings[position];
    }
}

function performReading() {
    const pastCard = drawCard();
    const presentCard = drawCard();
    const futureCard = drawCard();
    
    while (pastCard.name === presentCard.name || pastCard.name === futureCard.name || presentCard.name === futureCard.name) {
        performReading();
        return;
    }

    updateCard("past", pastCard, "past");
    updateCard("present", presentCard, "present");
    updateCard("future", futureCard, "future");
}

document.addEventListener("DOMContentLoaded", performReading);
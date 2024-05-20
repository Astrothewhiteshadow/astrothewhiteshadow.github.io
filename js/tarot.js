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
        past: "Forming significant partnerships, past emotional connections.",
        present: "Experiencing harmony and mutual attraction, deepening relationships.",
        future: "Strengthening partnerships, potential for lasting unions.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Three of Cups', image: 'js/img/tarot/threecups.jpg', meanings: {
        past: "Celebrations and friendships, joyful past experiences.",
        present: "Embracing community and collaboration, enjoying social connections.",
        future: "Continued celebrations and creative collaborations, joy ahead.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Four of Cups', image: 'js/img/tarot/fourcups.jpg', meanings: {
        past: "Moments of contemplation and reevaluation, past apathy.",
        present: "Reflecting on current emotions and opportunities, feeling introspective.",
        future: "Potential for new insights and emotional awakening, reevaluating options.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Five of Cups', image: 'js/img/tarot/fivecups.jpg', meanings: {
        past: "Experiences of regret and disappointment, past emotional losses.",
        present: "Dealing with current sorrow and pessimism, processing grief.",
        future: "Opportunities for healing and moving forward, learning from past regrets.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Six of Cups', image: 'js/img/tarot/sixcups.jpg', meanings: {
        past: "Revisiting childhood memories and nostalgia, past innocence.",
        present: "Embracing joy and innocence, reconnecting with past influences.",
        future: "Continued connection to the past, potential for joyful memories ahead.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Seven of Cups', image: 'js/img/tarot/sevencups.jpg', meanings: {
        past: "Facing many choices and illusions, past wishful thinking.",
        present: "Dealing with current opportunities and decisions, discerning reality from illusion.",
        future: "Potential for clarity and making informed choices, navigating options.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Eight of Cups', image: 'js/img/tarot/eightcups.jpg', meanings: {
        past: "Abandoning unfulfilling situations, past withdrawals.",
        present: "Embracing change and seeking deeper meaning, leaving behind what no longer serves.",
        future: "Opportunities for new paths and fulfillment, moving towards greater satisfaction.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Nine of Cups', image: 'js/img/tarot/ninecups.jpg', meanings: {
        past: "Moments of contentment and satisfaction, past emotional fulfillment.",
        present: "Enjoying current contentment and gratitude, wishes coming true.",
        future: "Continued emotional satisfaction, potential for achieving desires.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Ten of Cups', image: 'js/img/tarot/tencups.jpg', meanings: {
        past: "Experiencing harmonious relationships, past emotional alignment.",
        present: "Embracing current love and happiness, enjoying family and harmony.",
        future: "Continued joy and fulfillment, potential for lasting happiness.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Page of Cups', image: 'js/img/tarot/pagecups.jpg', meanings: {
        past: "Creative opportunities and curiosity, past emotional beginnings.",
        present: "Embracing current intuitive messages and possibilities, feeling inspired.",
        future: "Potential for new creative endeavors, continued emotional growth.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Knight of Cups', image: 'js/img/tarot/knightcups.jpg', meanings: {
        past: "Romantic and imaginative experiences, past emotional journeys.",
        present: "Embracing charm and inspiration, pursuing romantic or creative goals.",
        future: "Opportunities for romance and creativity, potential for passionate pursuits.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Queen of Cups', image: 'js/img/tarot/queencups.jpg', meanings: {
        past: "Demonstrating compassion and care, past emotional stability.",
        present: "Embracing intuition and nurturing aspects, feeling emotionally balanced.",
        future: "Continued emotional stability and care, potential for intuitive insights.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'King of Cups', image: 'js/img/tarot/kingcups.jpg', meanings: {
        past: "Providing emotional support and wisdom, past compassionate leadership.",
        present: "Balancing emotions and diplomacy, exercising emotional control.",
        future: "Opportunities for compassionate leadership, potential for emotional mastery.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },

    { name: 'Ace of Pentacles', image: 'js/img/tarot/acepentacles.jpg', meanings: {
        past: "New financial opportunities, past manifestations of abundance.",
        present: "Embracing current prosperity and career prospects, feeling secure.",
        future: "Potential for continued financial growth, new opportunities on the horizon.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Two of Pentacles', image: 'js/img/tarot/twopentacles.jpg', meanings: {
        past: "Balancing multiple priorities, past adaptability.",
        present: "Managing current responsibilities and time, finding balance.",
        future: "Continued ability to juggle tasks, potential for successful management.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Three of Pentacles', image: 'js/img/tarot/threepentacles.jpg', meanings: {
        past: "Collaborative projects and learning, past teamwork.",
        present: "Embracing current collaboration and skill development, working together.",
        future: "Opportunities for teamwork and mastery, potential for successful projects.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Four of Pentacles', image: 'js/img/tarot/fourpentacles.jpg', meanings: {
        past: "Saving and securing resources, past financial conservatism.",
        present: "Maintaining security and control, feeling stable.",
        future: "Continued financial stability, potential for building wealth.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Five of Pentacles', image: 'js/img/tarot/fivepentacles.jpg', meanings: {
        past: "Experiences of financial loss and isolation, past challenges.",
        present: "Dealing with current financial worries and scarcity, seeking support.",
        future: "Opportunities for overcoming financial difficulties, potential for recovery.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Six of Pentacles', image: 'js/img/tarot/sixpentacles.jpg', meanings: {
        past: "Acts of generosity and sharing, past charitable actions.",
        present: "Embracing giving and receiving, finding balance in generosity.",
        future: "Continued generosity and support, potential for financial harmony.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Seven of Pentacles', image: 'js/img/tarot/sevenpentacles.jpg', meanings: {
        past: "Long-term planning and perseverance, past investments.",
        present: "Evaluating current progress and efforts, practicing patience.",
        future: "Continued growth and sustainable results, potential for long-term success.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Eight of Pentacles', image: 'js/img/tarot/eightpentacles.jpg', meanings: {
        past: "Skill development and hard work, past mastery.",
        present: "Embracing current efforts and dedication, focusing on improvement.",
        future: "Continued skill development and mastery, potential for success through hard work.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Nine of Pentacles', image: 'js/img/tarot/ninepentacles.jpg', meanings: {
        past: "Experiences of self-sufficiency and luxury, past financial independence.",
        present: "Enjoying current abundance and independence, feeling secure.",
        future: "Continued financial independence and luxury, potential for lasting abundance.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Ten of Pentacles', image: 'js/img/tarot/tenpentacles.jpg', meanings: {
        past: "Building family legacy and wealth, past long-term success.",
        present: "Embracing current financial security and family harmony, feeling accomplished.",
        future: "Continued financial stability and legacy, potential for generational wealth.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Page of Pentacles', image: 'js/img/tarot/pagepentacles.jpg', meanings: {
        past: "New financial opportunities and skill development, past practical beginnings.",
        present: "Embracing current opportunities for growth, focusing on practical goals.",
        future: "Potential for continued skill development and financial success.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Knight of Pentacles', image: 'js/img/tarot/knightpentacles.jpg', meanings: {
        past: "Hard work and routine, past dedication to goals.",
        present: "Embracing productivity and responsibility, staying focused.",
        future: "Continued dedication and hard work, potential for achieving practical goals.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Queen of Pentacles', image: 'js/img/tarot/queenpentacles.jpg', meanings: {
        past: "Nurturing and providing financially, past practical support.",
        present: "Embracing current stability and care, balancing work and home.",
        future: "Continued financial stability and nurturing, potential for practical success.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'King of Pentacles', image: 'js/img/tarot/kingpentacles.jpg', meanings: {
        past: "Demonstrating business acumen and leadership, past financial success.",
        present: "Embracing current authority and abundance, leading with discipline.",
        future: "Continued financial success and security, potential for leadership opportunities.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },

    { name: 'Ace of Swords', image: 'js/img/tarot/aceswords.jpg', meanings: {
        past: "New ideas and mental clarity, past breakthroughs.",
        present: "Embracing current clarity and insight, cutting through confusion.",
        future: "Potential for new ideas and success, continued mental clarity.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Two of Swords', image: 'js/img/tarot/twoswords.jpg', meanings: {
        past: "Difficult decisions and impasses, past moments of weighing options.",
        present: "Dealing with current decisions and avoidance, seeking clarity.",
        future: "Opportunities for resolution and clarity, potential for informed decisions.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Three of Swords', image: 'js/img/tarot/threeswords.jpg', meanings: {
        past: "Experiences of heartbreak and sorrow, past emotional pain.",
        present: "Dealing with current grief and hurt, processing emotional pain.",
        future: "Opportunities for healing and moving forward, potential for emotional recovery.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Four of Swords', image: 'js/img/tarot/fourswords.jpg', meanings: {
        past: "Moments of rest and recuperation, past introspection.",
        present: "Embracing current rest and relaxation, taking time for contemplation.",
        future: "Continued need for rest and healing, potential for recovery and peace.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Five of Swords', image: 'js/img/tarot/fiveswords.jpg', meanings: {
        past: "Conflict and disagreements, past experiences of competition.",
        present: "Dealing with current conflicts and tensions, navigating disagreements.",
        future: "Opportunities for resolution and learning, potential for overcoming conflict.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Six of Swords', image: 'js/img/tarot/sixswords.jpg', meanings: {
        past: "Transition and moving on, past rites of passage.",
        present: "Embracing current change and transition, releasing baggage.",
        future: "Continued progress and moving forward, potential for new beginnings.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Seven of Swords', image: 'js/img/tarot/sevenswords.jpg', meanings: {
        past: "Experiences of deception and strategy, past cunning actions.",
        present: "Dealing with current strategic actions and deceit, acting wisely.",
        future: "Opportunities for strategic decisions, potential for overcoming deception.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Eight of Swords', image: 'js/img/tarot/eightswords.jpg', meanings: {
        past: "Self-imposed restrictions and negative thoughts, past feelings of imprisonment.",
        present: "Dealing with current limitations and victim mentality, seeking freedom.",
        future: "Opportunities for breaking free, potential for mental liberation.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Nine of Swords', image: 'js/img/tarot/nineswords.jpg', meanings: {
        past: "Experiences of anxiety and worry, past nightmares.",
        present: "Dealing with current fears and depression, seeking clarity.",
        future: "Opportunities for overcoming anxiety, potential for mental peace.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Ten of Swords', image: 'js/img/tarot/tenswords.jpg', meanings: {
        past: "Painful endings and deep wounds, past crises.",
        present: "Dealing with current betrayal and loss, processing pain.",
        future: "Opportunities for healing and recovery, potential for new beginnings.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Page of Swords', image: 'js/img/tarot/pageswords.jpg', meanings: {
        past: "New ideas and curiosity, past intellectual beginnings.",
        present: "Embracing current curiosity and communication, seeking knowledge.",
        future: "Potential for new ideas and growth, continued intellectual pursuits.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Knight of Swords', image: 'js/img/tarot/knightswords.jpg', meanings: {
        past: "Ambitious actions and driven pursuits, past rapid changes.",
        present: "Embracing current drive and ambition, pursuing goals with determination.",
        future: "Opportunities for success through action, potential for rapid progress.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Queen of Swords', image: 'js/img/tarot/queenswords.jpg', meanings: {
        past: "Independent judgement and clear boundaries, past direct communication.",
        present: "Embracing current clarity and unbiased judgement, setting boundaries.",
        future: "Continued mental clarity and independence, potential for effective communication.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'King of Swords', image: 'js/img/tarot/kingswords.jpg', meanings: {
        past: "Demonstrating authority and intellectual power, past truth-seeking.",
        present: "Embracing current clarity and authority, leading with truth.",
        future: "Opportunities for leadership and truth, potential for intellectual mastery.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },

    { name: 'Ace of Wands', image: 'js/img/tarot/acewands.jpg', meanings: {
        past: "Inspiration and new opportunities, past moments of growth.",
        present: "Embracing current potential and creativity, feeling inspired.",
        future: "Continued opportunities for growth and success, potential for new beginnings.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Two of Wands', image: 'js/img/tarot/twowands.jpg', meanings: {
        past: "Future planning and decisions, past discoveries.",
        present: "Embracing current progress and decisions, planning for the future.",
        future: "Opportunities for expansion and discovery, potential for new ventures.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Three of Wands', image: 'js/img/tarot/threewands.jpg', meanings: {
        past: "Progress and foresight, past experiences of expansion.",
        present: "Embracing current progress and opportunities, looking ahead.",
        future: "Continued expansion and success, potential for new opportunities.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Four of Wands', image: 'js/img/tarot/fourwands.jpg', meanings: {
        past: "Celebrations and harmony, past moments of joy.",
        present: "Embracing current celebrations and community, feeling at home.",
        future: "Continued joy and harmony, potential for future celebrations.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Five of Wands', image: 'js/img/tarot/fivewands.jpg', meanings: {
        past: "Conflict and competition, past disagreements.",
        present: "Dealing with current tensions and diversity, navigating conflict.",
        future: "Opportunities for resolution and cooperation, potential for overcoming challenges.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Six of Wands', image: 'js/img/tarot/sixwands.jpg', meanings: {
        past: "Success and public recognition, past achievements.",
        present: "Embracing current confidence and progress, enjoying success.",
        future: "Continued success and recognition, potential for future achievements.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Seven of Wands', image: 'js/img/tarot/sevenwands.jpg', meanings: {
        past: "Facing challenges and competition, past perseverance.",
        present: "Embracing current protection and perseverance, standing your ground.",
        future: "Opportunities for overcoming challenges, potential for continued success.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Eight of Wands', image: 'js/img/tarot/eightwands.jpg', meanings: {
        past: "Fast-paced change and movement, past rapid progress.",
        present: "Embracing current action and alignment, moving forward quickly.",
        future: "Continued progress and movement, potential for swift changes.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Nine of Wands', image: 'js/img/tarot/ninewands.jpg', meanings: {
        past: "Resilience and persistence, past tests of faith.",
        present: "Embracing current courage and boundaries, staying resilient.",
        future: "Opportunities for persistence and success, potential for overcoming obstacles.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Ten of Wands', image: 'js/img/tarot/tenwands.jpg', meanings: {
        past: "Burdens and responsibilities, past hard work.",
        present: "Dealing with current workload and completion, feeling the weight.",
        future: "Opportunities for relief and completion, potential for lighter responsibilities.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Page of Wands', image: 'js/img/tarot/pagewands.jpg', meanings: {
        past: "Inspiration and discovery, past creative beginnings.",
        present: "Embracing current ideas and possibilities, feeling inspired.",
        future: "Continued inspiration and creativity, potential for new adventures.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Knight of Wands', image: 'js/img/tarot/knightwands.jpg', meanings: {
        past: "Energy and passion, past adventurous pursuits.",
        present: "Embracing current drive and enthusiasm, pursuing goals energetically.",
        future: "Opportunities for adventurous pursuits, potential for passionate progress.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Queen of Wands', image: 'js/img/tarot/queenwands.jpg', meanings: {
        past: "Confidence and creativity, past moments of empowerment.",
        present: "Embracing current confidence and warmth, leading with inspiration.",
        future: "Continued empowerment and creativity, potential for influential leadership.",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'King of Wands', image: 'js/img/tarot/kingwands.jpg', meanings: {
        past: "Leadership and vision, past influential moments.",
        present: "Embracing current authority and vision, leading with confidence.",
        future: "Opportunities for visionary leadership, potential for impactful decisions.",
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